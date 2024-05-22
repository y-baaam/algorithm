function threeSum(nums: number[]): number[][] {
  const results: number[][] = [];

  // 배열을 오름차순으로 정렬
  nums.sort((a, b) => a - b);

  // i는 배열의 첫 번째 요소부터 세 번째 마지막 요소까지 반복
  for (let i = 0; i < nums.length - 2; i++) {
    // 중복된 숫자는 건너뜁니다.
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    // left와 right 포인터를 초기화합니다.
    let left = i + 1;
    let right = nums.length - 1;

    // left 포인터가 right 포인터보다 작을 때까지 반복합니다.
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];

      // 세 숫자의 합이 0인 경우
      if (sum === 0) {
        results.push([nums[i], nums[left], nums[right]]);

        // 중복된 숫자를 건너뛰기 위해 left 포인터를 이동합니다.
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;

        // left와 right 포인터를 이동합니다.
        left++;
        right--;
      } else if (sum < 0) {
        // 합이 0보다 작으면 left 포인터를 오른쪽으로 이동합니다.
        left++;
      } else {
        // 합이 0보다 크면 right 포인터를 왼쪽으로 이동합니다.
        right--;
      }
    }
  }

  // 결과 배열을 반환합니다.
  return results;
}
