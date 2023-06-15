function isPalindrome(str) {
    let res = str.toLowerCase().split('').join('');
    res = res.replace(/[^a-z0-9-]/g, '');
    let left = 0, right = res.length-1;
    while(left<right){
        if(res[left] !== res[right])
            return false;
        left++;
        right--;
    }
    return true;
  }
  module.exports = isPalindrome;