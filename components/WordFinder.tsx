'use client';

import { findWords } from '@/src/utilities/findWords';
import { useEffect, useState } from 'react';

export function WordFinder() {
  const [wordDictionary, setWordDictionary] = useState<string[]>([]);
  const [letters, setLetters] = useState<string>('');
  const [wordsThatExist, setWordsThatExist] = useState<string[]>([]);

  useEffect(() => {
    setWordsThatExist(findWords(letters, wordDictionary));
  }, [letters, wordDictionary]);

  return (
    <main className="flex min-h-screen flex-col p-24">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        Dictionary of English Words
      </label>
      <textarea
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="Comma-separated words, like: 'apple,banana,cherry'"
        onChange={(e) => setWordDictionary(e.target.value.split(','))}
      ></textarea>
      <div className="mt-8">
        <label
          htmlFor="small-input"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Letters
        </label>
        <input
          type="text"
          id="small-input"
          className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-xs focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="For example, 'oogd'"
          onChange={(e) => {
            setLetters(e.target.value);
          }}
        />
      </div>
      <ul className="mt-8">
        {wordsThatExist.map((word) => (
          <li key={word}>{word}</li>
        ))}
      </ul>
    </main>
  );
}
