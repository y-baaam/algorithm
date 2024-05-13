function missingNumber(nums: number[]): number | undefined {
  let numsSet: Set<number> = new Set(nums);
  for (let i = 0; i <= nums.length; i++) {
    if (!numsSet.has(i)) return i;
  }
}
