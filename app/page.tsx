import { IconPlus } from "@tabler/icons-react";
import Link from "next/link";
import { examples } from "~/lib/examples";

export default function Page() {
  return (
    <main className="flex flex-col gap-4">
      <p>
        Group 16 words into 4 sets of 4 related words.
        Some words might fit more than one group — choose carefully!
        Tap words to select them, then submit your guess.
        Have fun and good luck!
      </p>
 
      <div className="flex flex-col gap-4 sm:flex-row">
        <Link
          href="/new"
          className="flex basis-1/2 flex-col items-center justify-center gap-2 rounded-md border border-stone-300 p-4 transition-colors hover:bg-stone-100"
        >
          <IconPlus className="h-8 w-8 sm:h-12 sm:w-12" />
          <span className="font-semibold">Create New Game</span>
        </Link>
        
        <div className="flex basis-1/2 flex-col gap-4">
          {examples.map((example, i) => (
            <Link
              href={`/play?options=${btoa(JSON.stringify(example))}`}
              className="rounded-md border border-stone-300 p-4 text-center transition-colors hover:bg-stone-100"
              key={i}
            >
              <span className="font-semibold">
                {example.title.toUpperCase()}
              </span>{" "}
              by {example.author.toUpperCase()}
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
