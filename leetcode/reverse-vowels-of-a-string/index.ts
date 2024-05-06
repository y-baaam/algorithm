function reverseVowels(s: string): string {
  let vowels: Set<string> = new Set([
    "a",
    "e",
    "i",
    "o",
    "u",
    "A",
    "E",
    "I",
    "O",
    "U",
  ]);
  let char: string[] = s.split("");
  let left: number = 0;
  let right: number = s.length - 1;

  while (left < right) {
    while (left < right && !vowels.has(char[left])) {
      left++;
    }
    while (left < right && !vowels.has(char[right])) {
      right--;
    }

    if (left < right) {
      let temp = char[left];
      char[left] = char[right];
      char[right] = temp;
      left++;
      right--;
    }
  }
  return char.join("");
}
