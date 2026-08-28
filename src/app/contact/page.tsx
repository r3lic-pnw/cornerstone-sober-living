import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Cornerstone Sober Living",
  description:
    "Get in touch with Cornerstone Sober Living about housing, referrals, or how to help.",
};

export default function Contact() {
  return (
    <main className="w-full max-w-3xl px-6 py-16 mx-auto">
      <h1 className="font-serif text-4xl font-bold text-heading">Contact Us</h1>
      {/* TODO(pastor): real phone number and monitored inbox before launch.
          See notes.md section F. Lead with a tappable tel: link, not a form. */}
      <p className="mt-6 text-muted-text">
        TODO: Phone number as a tappable <code>tel:</code> link, a monitored
        email address (notes.md Q23), the service area (Q16), and response-time
        expectations (Q24).
      </p>
    </main>
  );
}
