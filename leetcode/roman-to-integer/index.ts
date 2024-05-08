function romanToInt(s: string): number {
  let romaNums = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let result = 0;
  let i = 0;

  while (i < s.length) {
    let curr = romaNums[s[i]];
    let next = romaNums[s[i + 1]];

    if (curr < next && next) {
      result += next - curr;
      i += 2;
    } else {
      result += curr;
      i += 1;
    }
  }

  return result;
}
