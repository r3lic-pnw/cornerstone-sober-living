import Image from "next/image";
import { Playfair } from "next/font/google";
import Button from "@/components/UI/Button";
import { ministry, telHref, applicationFormUrl } from "@/lib/ministry";

const playfair = Playfair({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <header
        className={`bg-surface-sunken p-8 w-full flex flex-col justify-center items-center ${playfair.className}`}
      >
        <div className="w-full py-4">
          <Image
            className="sm:w-64 h-auto mx-auto w-32"
            src="/csl_logo_concept.svg"
            alt=""
            width={791}
            height={884}
            priority
          />
        </div>
        <h1 className="flex flex-col items-center">
          <span className="text-4xl font-bold text-heading">CORNERSTONE</span>
          <span className="text-3xl font-semibold text-accent-ink">
            SOBER LIVING
          </span>
        </h1>
        <hr className="w-full max-w-3xl border-t border-accent-ink my-4" />
        <p className="text-2xl flex sm:flex-col sm:items-center md:flex-row md:gap-3 px-2 font-semibold">
          <span className="text-heading">FOUNDATION.</span>
          <span className="text-accent-ink">FAITH.</span>
          <span className="text-heading">FREEDOM.</span>
        </p>
      </header>

      {/* The first thing after the logo has to answer "is this for me?" and
          give him something to do. Everything below is elaboration. */}
      <section className="w-full">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <blockquote className="mt-10 bg-surface-gold border-l-4 border-accent px-6 py-5">
            <p className="text-lg italic text-heading">
              &ldquo;...built on the foundation of the apostles and prophets,
              Christ Jesus himself being the cornerstone.&rdquo;
            </p>
            <footer className="mt-2 text-sm text-muted-text not-italic">
              Ephesians 2:20, ESV
            </footer>
          </blockquote>
          <p className="text-xl mt-8">
            Cornerstone Sober Living offers Christian-centered housing for men
            rebuilding their lives after addiction and incarceration. Built on a
            foundation of faith, we help you find your way to freedom.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Button href={applicationFormUrl} target="_blank">
              Apply Now
            </Button>
            {telHref && (
              <Button href={telHref} variant="outline">
                Call {ministry.phone}
              </Button>
            )}
          </div>
        </div>
      </section>

      {/* notes.md §H "Who we house" — the section that saves everyone a phone
          call. Lead with the two things nobody else offers. */}
      <section className="w-full bg-surface-sunken">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold text-heading">
            Who we house
          </h2>
          <p className="mt-4">
            Cornerstone is for men who are serious about rebuilding their lives.
            <br />
            We accept men without regard to cast, color, creed, or criminal
            history.
          </p>
        </div>
      </section>

      {/* notes.md §H "What we ask of you". Stated before he applies, not
          after — H3: complaining about church is grounds for removal, and he
          deserves to know that before he gives up a bed somewhere else. */}
      <section className="w-full">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold text-heading">
            What we ask of you
          </h2>
          <p className="mt-6">
            We&rsquo;re a Christian ministry, and we&rsquo;d rather be straight
            with you now than surprise you later.
          </p>
          <ul className="mt-6 space-y-3 list-disc pl-6">
            <li>
              Behavior is expected to conform to Christian attitudes and
              principles.
            </li>
            <li>You do have to attend house church twice a week.</li>
            <li>
              We ask everyone who&rsquo;s able to stand during praise and
              worship.
            </li>
            <li>
              Books and materials from other religions are not allowed in the
              houses.
            </li>
          </ul>
        </div>
      </section>

      {/* notes.md §H / H6. Never "permanent" — the program is transitional and
          the resident agreement is written on that basis. */}
      {/* <section className="on-navy w-full bg-surface-navy text-on-navy">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold">
            There&rsquo;s no clock running
          </h2>
          <p className="mt-6 text-lg">
            Cornerstone isn&rsquo;t a 90-day program counting down your days.
          </p>
          <p className="mt-4 text-on-navy-muted">
            The idea is that you get established here, get on your feet, and
            eventually move on to your own place — but nobody is going to push
            you out the door on a schedule. As long as you&rsquo;re keeping the
            house rules and paying your fees, you can stay as long as you need
            to.
          </p>
        </div>
      </section> */}

      <section className="w-full">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold text-heading">
            How to apply
          </h2>
          <ol className="mt-6 space-y-4">
            {[
              "Fill out and submit the online application form.",
              `${ministry.housingCoordinator}, our housing coordinator, reads it, with the final say from Pastor Ed.`,
              "You hear back within about a week.",
            ].map((step, i) => (
              <li key={step} className="flex gap-4">
                <span
                  aria-hidden="true"
                  className="shrink-0 w-8 h-8 rounded-full bg-accent text-on-accent font-bold flex items-center justify-center"
                >
                  {i + 1}
                </span>
                <span>{step}</span>
              </li>
            ))}
          </ol>
          <p className="mt-4 text-muted-text">
            Beds open up as men move on, so don&rsquo;t assume we&rsquo;re full.
            Send it in.
          </p>
        </div>
      </section>

      <section className="w-full bg-surface-sunken">
        <div className="max-w-3xl mx-auto px-6 py-12 text-center">
          <h2 className="font-serif text-3xl font-bold text-heading">
            Ready when you are
          </h2>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Button href={applicationFormUrl} target="_blank">
              Apply Now
            </Button>
            {telHref && (
              <Button href={telHref} variant="outline">
                Call {ministry.phone}
              </Button>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
