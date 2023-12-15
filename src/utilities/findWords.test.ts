import { describe, expect, test } from '@jest/globals';
import { findWords } from './findWords';

describe('findWords', () => {
  test('returns correctly for the default case', () => {
    const testLetters = 'oogd';
    const dictionary = ['good', 'god', 'dog', 'goo', 'do', 'go'];
    const result = dictionary.sort();
    console.log(result);
    expect(findWords(testLetters, dictionary)).toStrictEqual(result);
  });

  test('returns correctly when the default case has some useless words', () => {
    console.log();
    const testLetters = 'oogd';
    const dictionary = [
      'cherry',
      'good',
      'god',
      'banana',
      'dog',
      'goo',
      'do',
      'go',
      'apple',
    ];
    const result = ['do', 'dog', 'go', 'god', 'goo', 'good'];
    expect(findWords(testLetters, dictionary)).toStrictEqual(result);
  });

  test('returns correctly with one-letter word edge case', () => {
    console.log();
    const testLetters = 'oogda';
    const dictionary = [
      'cherry',
      'good',
      'god',
      'banana',
      'goad',
      'a',
      'dog',
      'goo',
      'do',
      'go',
      'apple',
    ];
    const result = ['a', 'do', 'dog', 'go', 'goad', 'god', 'goo', 'good'];
    expect(findWords(testLetters, dictionary)).toStrictEqual(result);
  });

  test('returns correctly when there are no matches', () => {
    console.log();
    const testLetters = 'oogda';
    const dictionary = ['cherry', 'banana', 'apple'];
    const result: string[] = [];
    expect(findWords(testLetters, dictionary)).toStrictEqual(result);
  });
});
