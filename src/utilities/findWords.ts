/**
 * Finds the possible words to spell out with given letters.
 *
 * @param {string} lettersString The string of letters to evaluate.
 * @param {string[]} WORDS The array of English words to check existence against.
 * @returns {string[]} The words within `WORDS` that can be spelled using the letters in `lettersString`.
 */
export function findWords(lettersString: string, WORDS: string[]): string[] {
  // Use set for built-in memoization
  const validEnglishWords = new Set<string>();
  const letters = lettersString.split('');

  exploreWord('', letters, WORDS, validEnglishWords);

  return Array.from(validEnglishWords).sort();
}

/**
 * Recursive helper function to try out spellings
 *
 * @param {string} fragment The word work-in-progress to iterate on and evaluate.
 * @param {string[]} remainingLetters The remaining letters to use to try and spell words that exist in English.
 * @param {string[]} WORDS The array of English words to check existence against.
 * @param {Set<string>} validEnglishWords The valid words we have built and verified existence for.
 */
function exploreWord(
  fragment: string,
  remainingLetters: string[],
  WORDS: string[],
  validEnglishWords: Set<string>
) {
  for (let i = 0; i < remainingLetters.length; i++) {
    const letterToTry = remainingLetters[i];
    const newFragment = fragment + letterToTry;
    if (WORDS.includes(newFragment)) validEnglishWords.add(newFragment);

    const newRemainingLetters = remainingLetters.toSpliced(i, 1);
    exploreWord(newFragment, newRemainingLetters, WORDS, validEnglishWords);
  }
}
