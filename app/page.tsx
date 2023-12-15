import { WordFinder } from '@/components/WordFinder';
import { useEffect, useState } from 'react';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col p-24">
      <div className="flex justify-center">
        <h1>English Words from Letter Combination</h1>
      </div>
      <WordFinder />
    </main>
  );
}
