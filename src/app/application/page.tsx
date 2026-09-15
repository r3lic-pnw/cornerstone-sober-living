import type { Metadata } from "next";
// Commented out with the contact section below.
// import { Mail, MapPin, Phone } from "lucide-react";
import Button from "@/components/UI/Button";
import {
  applicationFormUrl,
  // Commented out with the two sections below.
  // mailtoHref,
  // ministry,
  // telHref,
} from "@/lib/ministry";

export const metadata: Metadata = {
  title: "Apply",
  description:
    "Apply for housing with Cornerstone Sober Living. No interview — the application is the whole process, and you'll hear back within about a week.",
};

// const address = ministry.mailingAddress;

export default function Application() {
  return (
    <main>
      <section className="w-full">
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-10">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-heading">
            Housing Application
          </h1>

          <p className="mt-6">
            The application is online now. It asks about your history, your
            release, and the house rules you&rsquo;d be agreeing to, so give
            yourself a little time and somewhere quiet to sit with it.
          </p>

          {/* Linked, not embedded. An iframe would be dead weight on the old
              phones and library terminals this page is written for, and it
              breaks the back button. Jotform's own page handles small screens
              fine on its own. */}
          <p className="mt-6">
            <Button href={applicationFormUrl} target="_blank">
              Start the application
            </Button>
          </p>

          <p className="mt-6 text-lg">
            Fill it out and you&rsquo;ll hear from us within about a week.
            There&rsquo;s no interview — the application is the whole process.
          </p>
        </div>
      </section>

      {/* No cost section on this page. The figures were removed deliberately —
          rent, the maintenance fee, and the move-in total are all handled by
          Jeff when a man is placed, and the site would rather say nothing than
          publish a number that has gone stale. `fees` and `moveInTotal` are
          still in ministry.ts if this comes back. */}

      <section className="w-full bg-surface-sunken">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="mt-8 border-l-4 border-heading bg-surface px-6 py-5">
            <h2 className="text-lg font-semibold text-heading">
              Helping someone who&rsquo;s still inside?
            </h2>
            <p className="mt-2">
              He can get a paper copy of the application from his counselor. He
              fills it out and signs it himself, but you can call us with any
              questions in the meantime.
            </p>
          </div>
        </div>
      </section>

      {/* COMMENTED OUT FOR NOW — restore this section and the one below it
          together, along with the imports at the top of the file. Inner JSX
          comments have been flattened to NOTE: lines so this block could wrap
          them; re-delimit them if you bring the section back.

      <section className="on-navy w-full bg-surface-navy text-on-navy">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold">
            Other ways to reach us
          </h2>

          NOTE: The online form submits itself, so this section is no longer
          the route for the application — it's for a paper copy coming back,
          and for anyone who'd rather talk to a person first.
          <p className="mt-6 text-on-navy-muted">
            If you filled out a paper copy, send it to either of these. A clear
            photo of each page works.
          </p>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-on-navy-accent">
                <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
                Email
              </h3>
              NOTE: Confirmed as the address the site should publish.
              <p className="mt-2">
                <a
                  href={mailtoHref}
                  className="underline underline-offset-4 break-all"
                >
                  {ministry.email}
                </a>
              </p>
            </div>

            <div>
              <h3 className="flex items-center gap-2 font-semibold text-on-navy-accent">
                <MapPin className="w-5 h-5 shrink-0" aria-hidden="true" />
                Mail
              </h3>
              <address className="mt-2 not-italic">
                {address.street}
                <br />
                {address.city}, {address.state} {address.zip}
              </address>
            </div>
          </div>

          <div className="mt-10 border-t border-border-on-navy pt-8">
            <h3 className="flex items-center gap-2 font-semibold text-on-navy-accent">
              <Phone className="w-5 h-5 shrink-0" aria-hidden="true" />
              Questions first?
            </h3>
            {telHref ? (
              <p className="mt-3">
                <Button href={telHref} variant="on-navy">
                  Call {ministry.phone}
                </Button>
              </p>
            ) : (
              NOTE: Guard only — the number is confirmed and set in
              ministry.ts. A man who won't fill in a form will still call, so
              if this is ever cleared, fail loudly rather than silently.
              <p className="mt-3 bg-surface text-error font-semibold px-3 py-2 inline-block rounded">
                TODO: phone number
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold text-heading">
            What happens next
          </h2>
          <ol className="mt-6 space-y-4">
            <li className="flex gap-4">
              <span
                aria-hidden="true"
                className="shrink-0 w-8 h-8 rounded-full bg-accent text-on-accent font-bold flex items-center justify-center"
              >
                1
              </span>
              <span>
                {ministry.housingCoordinator}, our housing coordinator, reads
                your application.
              </span>
            </li>
            <li className="flex gap-4">
              <span
                aria-hidden="true"
                className="shrink-0 w-8 h-8 rounded-full bg-accent text-on-accent font-bold flex items-center justify-center"
              >
                2
              </span>
              <span>Pastor Ed has the final say.</span>
            </li>
            <li className="flex gap-4">
              <span
                aria-hidden="true"
                className="shrink-0 w-8 h-8 rounded-full bg-accent text-on-accent font-bold flex items-center justify-center"
              >
                3
              </span>
              <span>
                You hear back within about a week. There&rsquo;s no interview.
              </span>
            </li>
          </ol>
        </div>
      </section>

      <p className="mt-8 text-muted-text">
        Beds open up as men move on, so don&rsquo;t assume we&rsquo;re full.
        Send it in.
      </p>
      */}
    </main>
  );
}
