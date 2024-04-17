function twoSum(nums: number[], target: number) {
  let numMap: Map<number, number> = new Map();

  for (let i = 0; i < nums.length; i++) {
    let sub: number = target - nums[i];
    if (numMap.has(sub)) {
      return [numMap.get(sub), i];
    }
    numMap.set(nums[i], i);
  }
}
