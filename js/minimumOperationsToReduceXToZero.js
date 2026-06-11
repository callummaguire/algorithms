const minOperations = (nums, x) => {
    const n = nums.length;
    const sum = nums.reduce((r, n) => r + n, 0);
    const target = sum - x;

    let current = 0;
    let ans = -1;
    
    for (let l = 0, r = 0; r < n; r++) {
        current += nums[r];
        
        while (current > target) {
            current -= nums[l];
            l++;
        }
        
        if (current === target) {
            ans = Math.max(ans, r - l + 1);
        }
    }

    return ans === -1 ? -1 : n - ans;
};