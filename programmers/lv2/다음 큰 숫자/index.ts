// 자연수 n을 2진수로 변환하고 1의 갯수가 같은 다음 큰 숫자를 구해라

const binaryCount = (v: number) => v.toString(2).split("1").length - 1;

function solution(n: number): number {
  let nBinaryCount: number = binaryCount(n);
  let answer: number = n + 1;

  while (n < answer) {
    const oneBinaryCount = binaryCount(answer);
    if (oneBinaryCount === nBinaryCount) {
      break;
    }
    answer++;
  }

  return answer;
}
