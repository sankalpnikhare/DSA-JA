var findMedianSortedArrays = function(nums1, nums2) {
    let sorted_array = [...nums1 , ...nums2].sort((a,b)=> a-b)
   
    const len = sorted_array.length;
    
    if(len%2!== 0){
        return sorted_array[Math.floor(len/2)];
    }
    else{
        const mid = len/2 ;
        return (sorted_array[mid] + sorted_array[mid-1]) / 2 ;
    }
    


    
};

console.log(findMedianSortedArrays([1,3] , [2,4]));
