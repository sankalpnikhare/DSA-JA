
class Lexer {
  constructor(input) {
    this.input = input;
    this.pos = 0;
    this.current = input[0] || "";
  }
  advance() {
    this.pos++;
    this.current = this.input[this.pos] || "";
  }
  isAlpha(ch) { return /[A-Za-z_]/.test(ch); }
  isNum(ch) { return /[0-9]/.test(ch); }
  isAlnum(ch) { return /[A-Za-z0-9_]/.test(ch); }
  skipWhitespace() {
    while (this.current && /\s/.test(this.current)) this.advance();
  }
  nextToken() {
    this.skipWhitespace();
    const ch = this.current;
    if (!ch) return { type: 'EOF' };

    
    const singles = {
      '+':'PLUS','-':'MINUS','*':'STAR','/':'SLASH','(':'LPAREN',')':'RPAREN','=':'EQUAL',';':'SEMI',
    };
    if (singles[ch]) { this.advance(); return { type: singles[ch] }; }

    /
    if (this.isNum(ch)) {
      let num = '';
      while (this.isNum(this.current)) { num += this.current; this.advance(); }
      return { type: 'NUMBER', value: Number(num) };
    }

    
    if (this.isAlpha(ch)) {
      let id = '';
      while (this.isAlnum(this.current)) { id += this.current; this.advance(); }
      if (id === 'let') return { type: 'LET' };
      if (id === 'print') return { type: 'PRINT' };
      return { type: 'IDENT', value: id };
    }

    throw new Error(`Unexpected character: ${JSON.stringify(ch)} at ${this.pos}`);
  }
}


class Parser {
  constructor(lexer) {
    this.lexer = lexer;
    this.lookahead = lexer.nextToken();
  }
  eat(type) {
    if (this.lookahead.type === type) {
      const tok = this.lookahead;
      this.lookahead = this.lexer.nextToken();
      return tok;
    }
    throw new Error(`Expected ${type}, got ${this.lookahead.type}`);
  }
  program() {
    const stmts = [];
    while (this.lookahead.type !== 'EOF') {
      stmts.push(this.stmt());
    }
    return { kind: 'Program', body: stmts };
  }
  stmt() {
    if (this.lookahead.type === 'LET') {
      this.eat('LET');
      const id = this.eat('IDENT').value;
      this.eat('EQUAL');
      const value = this.expr();
      this.eat('SEMI');
      return { kind: 'Let', id, value };
    }
    if (this.lookahead.type === 'PRINT') {
      this.eat('PRINT');
      this.eat('LPAREN');
      const value = this.expr();
      this.eat('RPAREN');
      this.eat('SEMI');
      return { kind: 'Print', value };
    }
    
    const value = this.expr();
    this.eat('SEMI');
    return { kind: 'ExprStmt', value };
  }
  expr() {
    let node = this.term();
    while (this.lookahead.type === 'PLUS' || this.lookahead.type === 'MINUS') {
      const op = this.lookahead.type; this.eat(op);
      node = { kind: 'Bin', op, left: node, right: this.term() };
    }
    return node;
  }
  term() {
    let node = this.factor();
    while (this.lookahead.type === 'STAR' || this.lookahead.type === 'SLASH') {
      const op = this.lookahead.type; this.eat(op);
      node = { kind: 'Bin', op, left: node, right: this.factor() };
    }
    return node;
  }
  factor() {
    if (this.lookahead.type === 'NUMBER') {
      const n = this.eat('NUMBER').value;
      return { kind: 'Number', value: n };
    }
    if (this.lookahead.type === 'IDENT') {
      const name = this.eat('IDENT').value;
      return { kind: 'Var', name };
    }
    if (this.lookahead.type === 'LPAREN') {
      this.eat('LPAREN');
      const e = this.expr();
      this.eat('RPAREN');
      return e;
    }
    throw new Error(`Unexpected token in factor: ${this.lookahead.type}`);
  }
}


class Codegen {
  constructor() {
    this.bytecode = [];
  }
  emit(op, arg=null) { this.bytecode.push(arg==null? {op} : {op, arg}); }
  gen(node) {
    switch (node.kind) {
      case 'Program':
        node.body.forEach(stmt => this.gen(stmt));
        return this.bytecode;
      case 'Let':
        this.gen(node.value);
        this.emit('STORE', node.id);
        return;
      case 'Print':
        this.gen(node.value);
        this.emit('PRINT');
        return;
      case 'ExprStmt':
        this.gen(node.value); 
        this.emit('POP');
        return;
      case 'Number':
        this.emit('PUSH', node.value);
        return;
      case 'Var':
        this.emit('LOAD', node.name);
        return;
      case 'Bin':
        this.gen(node.left);
        this.gen(node.right);
        if (node.op === 'PLUS') this.emit('ADD');
        else if (node.op === 'MINUS') this.emit('SUB');
        else if (node.op === 'STAR') this.emit('MUL');
        else if (node.op === 'SLASH') this.emit('DIV');
        else throw new Error('Unknown binop ' + node.op);
        return;
      default:
        throw new Error('Unknown node kind ' + node.kind);
    }
  }
}


class VM {
  constructor(bytecode) {
    this.code = bytecode;
    this.ip = 0; 
    this.stack = [];
    this.globals = Object.create(null);
  }
  pop() { if (this.stack.length===0) throw new Error('Stack underflow'); return this.stack.pop(); }
  run() {
    while (this.ip < this.code.length) {
      const ins = this.code[this.ip++];
      switch (ins.op) {
        case 'PUSH': this.stack.push(ins.arg); break;
        case 'LOAD':
          if (!(ins.arg in this.globals)) throw new Error(`Undefined variable ${ins.arg}`);
          this.stack.push(this.globals[ins.arg]);
          break;
        case 'STORE': this.globals[ins.arg] = this.pop(); break;
        case 'ADD': { const b=this.pop(), a=this.pop(); this.stack.push(a+b); break; }
        case 'SUB': { const b=this.pop(), a=this.pop(); this.stack.push(a-b); break; }
        case 'MUL': { const b=this.pop(), a=this.pop(); this.stack.push(a*b); break; }
        case 'DIV': { const b=this.pop(), a=this.pop(); this.stack.push(a/b); break; }
        case 'PRINT': console.log(this.pop()); break;
        case 'POP': this.pop(); break;
        default: throw new Error('Bad opcode ' + ins.op);
      }
    }
  }
}


function compile(source) {
  const lexer = new Lexer(source);
  const parser = new Parser(lexer);
  const ast = parser.program();
  const cg = new Codegen();
  const bytecode = cg.gen(ast);
  return bytecode;
}

function run(source) {
  const bytecode = compile(source);
  const vm = new VM(bytecode);
  vm.run();
}


const program = `
  let x = 10;
  let y = (x + 2) * 3;
  print(y);
  print(x + y * 2);
`;


module.exports = { Lexer, Parser, Codegen, VM, compile, run };
