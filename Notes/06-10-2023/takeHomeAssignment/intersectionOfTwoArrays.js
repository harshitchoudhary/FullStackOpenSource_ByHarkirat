var intersection = function(nums1, nums2) {
    let obj1 = {}, obj2 = {}, res = [];
    for(let i = 0; i<nums1.length; i++){
        obj1[nums1[i]] = obj1[nums1[i]]+1 | 1;
    }
    for(let i = 0; i<nums2.length; i++){
        obj2[nums2[i]] = obj2[nums2[i]]+1 | 1;
    }
    for(let key in obj1){
        if(obj2[key]){
            res.push(key);
        }
    }
    return res;
};