// 연속배열의 곱 중에 가장 큰 값을 찾아보자
function maxProduct(nums: number[]): number {
  let result: number = Math.max(...nums); // 결과를 최초에 배열의 최대값으로 초기화

  // 최댓값 최솟값 초기화
  let currentMin = 1;
  let currentMax = 1;

  for (let num of nums) {
    let temp = currentMax * num; // currentMax를 임시 저장
    currentMax = Math.max(num, currentMax * num, currentMin * num); // 최댓값을 구함
    currentMin = Math.min(temp, num * currentMin, num); // 최소 음수와 현재의 음수가 곱해지면 최댓값이 될 수 있으니
    result = Math.max(result, currentMax);
  }
  return result;
}
