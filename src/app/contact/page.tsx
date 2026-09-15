import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Button from "@/components/UI/Button";
import { mailtoHref, ministry, telHref } from "@/lib/ministry";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Call or write to Cornerstone Sober Living about housing, referrals, or how to help. Sober housing for men in Snohomish County, Washington.",
};

const address = ministry.mailingAddress;

export default function Contact() {
  return (
    <main>
      <section className="w-full">
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-10">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-heading">
            Contact Us
          </h1>
          <p className="mt-6 text-lg">
            If you have a question, call. You don&rsquo;t need to have decided
            anything, and you don&rsquo;t need to be the one applying.
          </p>
        </div>
      </section>

      {/* Phone first and biggest — someone in crisis at 11pm wants to call a
          person, not fill in a form. */}
      <section className="w-full bg-surface-sunken">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="flex items-center gap-2 font-serif text-3xl font-bold text-heading">
            <Phone className="w-7 h-7 shrink-0" aria-hidden="true" />
            Call us
          </h2>
          {telHref && (
            <p className="mt-6">
              <Button href={telHref}>Call {ministry.phone}</Button>
            </p>
          )}
          <p className="mt-4 text-muted-text">
            This is the same number on the application, so you&rsquo;re in the
            right place either way.
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <div className="grid gap-10 sm:grid-cols-2">
            <div>
              <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-heading">
                <Mail className="w-6 h-6 shrink-0" aria-hidden="true" />
                Email
              </h2>
              <p className="mt-3">
                <a
                  href={mailtoHref}
                  className="text-link underline underline-offset-4 break-all"
                >
                  {ministry.email}
                </a>
              </p>
              <p className="mt-2 text-muted-text">
                Completed applications can come here too.
              </p>
            </div>

            <div>
              <h2 className="flex items-center gap-2 font-serif text-2xl font-bold text-heading">
                <MapPin className="w-6 h-6 shrink-0" aria-hidden="true" />
                Mail
              </h2>
              <address className="mt-3 not-italic">
                {address.street}
                <br />
                {address.city}, {address.state} {address.zip}
              </address>
              <p className="mt-2 text-muted-text">
                This is our intake house, and it&rsquo;s on the bus line.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="on-navy w-full bg-surface-navy text-on-navy">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold">Where we are</h2>
          <p className="mt-6 text-lg">
            Our houses are in {ministry.serviceArea}.
          </p>
          {/* Service area only. No per-house addresses, and no house count,
              which would go stale. */}
          <p className="mt-4 text-on-navy-muted">
            We don&rsquo;t list the individual houses here. Which house you
            would go to is worked out once your application is accepted.
          </p>
        </div>
      </section>

      {/* Referral sources are roughly a third of who reads a site like this,
          and they are looking for a person, not a form. */}
      <section className="w-full">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold text-heading">
            For case managers and referral sources
          </h2>
          <p className="mt-6">
            If you&rsquo;re a probation officer, case manager, or discharge
            planner placing someone: {ministry.housingCoordinator} is our
            housing coordinator and handles referrals. Call the number above and
            ask for him.
          </p>
          <p className="mt-4">
            We accept men regardless of criminal record, including men on the
            registry at any level, and there&rsquo;s no required sobriety time
            before applying. There&rsquo;s no interview — the application is the
            whole process, and you&rsquo;ll hear back within about a week.
          </p>
          <p className="mt-6">
            <Button href="/application" variant="outline">
              See the application
            </Button>
          </p>
        </div>
      </section>

      {/* Costs nothing, might matter. Kept deliberately quiet — muted text at
          the foot of the page, not a banner. */}
      <section className="w-full bg-surface-sunken">
        <div className="max-w-3xl mx-auto px-6 py-10">
          <p className="text-muted-text">
            If you&rsquo;re in danger right now, or thinking about harming
            yourself, call or text{" "}
            <a
              href="tel:988"
              className="text-link font-semibold underline underline-offset-4"
            >
              988
            </a>{" "}
            for the Suicide &amp; Crisis Lifeline. Someone is there at any hour.
          </p>
        </div>
      </section>
    </main>
  );
}
