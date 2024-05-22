function plusOne(digits: number[]): number[] {
  let temp = digits.join("");
  let num = BigInt(temp) + BigInt(1);

  let resultStr = num.toString();
  let results = resultStr.split("").map(Number);

  return results;
}
