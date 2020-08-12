function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = words[0];

  for (let index = 0; index < words.length; index += 1) {
    let wordLength = words[index].length;
    if (wordLength > longest.length) {
      longest = words[index];
    }
  }
  return longest
}
console.log(longestWord("Antônio foi"))