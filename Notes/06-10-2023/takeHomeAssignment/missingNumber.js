var missingNumber = function(nums) {
    let res = nums.sort((a,b) => a-b);
    let result = 0;
    for(let i = 0; i<res.length; i++){
        if(res[i] !== result) return result
        result++;
    }
    return result;
};