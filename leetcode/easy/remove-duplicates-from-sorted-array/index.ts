function removeDuplicates(nums: number[]): number {
  let numsSet = new Set(nums); // 중복 제거
  let toArr = Array.from(numsSet); // 배열로 변환

  for (let i = 0; i < toArr.length; i++) {
    nums[i] = toArr[i];
  }

  return toArr.length;
}
