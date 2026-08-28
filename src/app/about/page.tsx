import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Cornerstone Sober Living",
  description:
    "How Cornerstone Sober Living began, what life in the house looks like, and who walks alongside the men in the program.",
};

export default function About() {
  return (
    <main className="w-full max-w-3xl px-6 py-16 mx-auto">
      <h1 className="font-serif text-4xl font-bold text-heading">About Us</h1>
      {/* TODO(pastor): founding story, mission verse, program life, leadership.
          See notes.md section C. Do not invent any of this. */}
      <p className="mt-6 text-muted-text">
        TODO: When the ministry started and what led to it (notes.md Q11), the
        verse it&apos;s built on (Q12), what a typical week looks like (Q14),
        and who else is involved (Q15).
      </p>
    </main>
  );
}
