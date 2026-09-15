import type { Metadata } from "next";
import Image from "next/image";
import pastorEd from "../../../public/pastor-ed.webp";
import Button from "@/components/UI/Button";
import { applicationFormUrl, ministry } from "@/lib/ministry";

export const metadata: Metadata = {
  title: "About",
  description:
    "Cornerstone Sober Living grew out of the Mack House, which has housed men coming out of prison in Snohomish County for more than twenty years.",
};

export default function About() {
  return (
    <main>
      <section className="w-full">
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-10">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-heading">
            About Cornerstone
          </h1>
          <p className="mt-6 text-lg">
            This work is older than the name on the door.
          </p>
        </div>
      </section>

      {/* notes.md §H. The Mack House gets exactly one mention, in the founding
          story, and the site draws no org chart.

          Ed has cleared telling his own story, so the line about him coming
          through one of these houses is in. It stays one sentence on its own —
          that is the whole confirmed fact, and it carries more weight
          unelaborated than it would padded out. Nothing further about his
          history goes on this page unless it comes from him directly. */}
      <section className="w-full bg-surface-sunken">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold text-heading">
            How Cornerstone started
          </h2>
          <p className="mt-6">Cornerstone grew out of the Mack House.</p>
          <p className="mt-4">
            More than twenty years ago, Pastors John and Jane Mack started
            opening homes across Snohomish County to men coming out of prison —
            men most places wouldn&rsquo;t take. They ran those houses on faith
            and not much else, and they kept at it for two decades.
          </p>
          <p className="mt-4">
            Pastor Ed Richardson came through one of those houses himself.
          </p>
          <p className="mt-4">
            After John passed away and Jane began stepping back, she handed him
            the work. He started Cornerstone Sober Living to carry it forward.
          </p>
        </div>
      </section>

      <section className="on-navy w-full bg-surface-navy text-on-navy">
        <div className="max-w-3xl mx-auto px-6 py-14 text-center">
          {/* ESV, confirmed. The familiar rendering is "chief cornerstone";
              the site standard is ESV throughout. */}
          <blockquote>
            <p className="font-serif text-2xl sm:text-3xl italic">
              &ldquo;The stone that the builders rejected has become the
              cornerstone.&rdquo;
            </p>
            <footer className="mt-4 text-on-navy-muted not-italic">
              Psalm 118:22, ESV
            </footer>
          </blockquote>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold text-heading">
            Who you&rsquo;ll deal with
          </h2>

          <figure className="mt-8">
            <Image
              src={pastorEd}
              alt="Pastor Ed Richardson preaching"
              className="w-full h-auto rounded-md"
              sizes="(min-width: 768px) 48rem, 100vw"
              placeholder="blur"
            />
            <figcaption className="mt-3 text-sm text-muted-text">
              Pastor Ed Richardson
            </figcaption>
          </figure>

          <p className="mt-6">
            <strong>Pastor Ed Richardson</strong> runs Cornerstone and has the
            final say on every application.
          </p>
          <p className="mt-4">
            <strong>{ministry.housingCoordinator}</strong> is our housing
            coordinator. He reads the applications, handles referrals from case
            managers and probation officers, and works out which house you go
            to. If you call with a question, he&rsquo;s usually the one
            you&rsquo;ll talk to.
          </p>
        </div>
      </section>

      <section className="w-full bg-surface-sunken">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold text-heading">
            What living here is like
          </h2>
          <p className="mt-6">
            You get a bed in a house with other men doing the same thing you
            are. You keep the house rules, you pay your fees, and you go to
            house church twice a week. Beyond that, you work, you go to your
            appointments, and you build something.
          </p>
          <p className="mt-4">
            We&rsquo;re a Christian ministry and we don&rsquo;t hide it, but you
            don&rsquo;t have to be a Christian to live here. The full house
            rules are in the application, so you can read every one of them
            before you commit to anything.
          </p>
          <p className="mt-8">
            <Button href={applicationFormUrl} target="_blank">
              Read the rules and apply
            </Button>
          </p>
        </div>
      </section>
    </main>
  );
}
