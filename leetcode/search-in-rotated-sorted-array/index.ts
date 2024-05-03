function search(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // 왼쪽 부분이 정렬된 상태인지 확인
    if (nums[left] <= nums[mid]) {
      // 타겟이 왼쪽 정렬된 부분에 있는지 확인
      if (target >= nums[left] && target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    } else {
      // 오른쪽 부분이 정렬된 상태인지 확인
      if (target > nums[mid] && target <= nums[right]) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
  }

  return -1; // 타겟을 찾지 못했을 경우
}
