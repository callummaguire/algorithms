const lengthOfLongestSubstring = (s) => {  
    
    let hashmap = {};
    let maxLength = 0;
    let tempMax = 0
    for (let i = 0; i < s.length; i++) { 

        const char = s[i];

        if (hashmap[char] >= tempMax) {
          tempMax = (hashmap[char] || 0) + 1;
        }
        hashmap[char] = i;
     
      
        maxLength = Math.max(maxLength, i - tempMax + 1);
          console.log(hashmap, i - tempMax,i,tempMax, maxLength);
    }
    
    return maxLength
};

console.log(lengthOfLongestSubstring("ababcabcd"));