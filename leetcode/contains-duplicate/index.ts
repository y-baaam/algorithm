function containsDuplicate(nums: number[]): boolean {
  let setNums = new Set(nums);
  return setNums.size === nums.length ? false : true;
}
