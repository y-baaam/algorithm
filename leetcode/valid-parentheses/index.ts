function isValid(s: string): boolean {
  let stack: string[] = [];
  let brackets: { [key: string]: string } = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  let i = 0;
  while (i < s.length) {
    let char = s[i]; // 현재 괄호
    if (char in brackets) {
      stack.push(char);
    } else {
      if (stack.length === 0 || brackets[stack.pop()!] !== char) {
        // .pop()! 은 null이나 undefined가 아니라는 단언 (타입 스크립트)
        return false;
      }
    }

    i++;
  }

  return stack.length === 0;
}
