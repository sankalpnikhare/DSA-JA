function maxArea(height){
    let left = 0;
    let right = height.length -1 ;
    let maxarea = 0 ;
    while(left<right){
        let area = Math.min(height[left] , height[right]) * (right - left);
        maxarea = Math.max(maxarea, area);

        if(height[left]< height[right]){
            left++ ; 
        }
        else{
            right--;
        }
    }
    return maxarea


}
const height = [1,8,6,2,5,4,8,3,7];
console.log(maxArea(height));
