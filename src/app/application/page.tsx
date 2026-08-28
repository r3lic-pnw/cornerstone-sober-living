import type { Metadata } from "next";
import { Mail, MapPin, Phone } from "lucide-react";
import Button from "@/components/UI/Button";
import {
  fees,
  mailtoHref,
  ministry,
  moveInTotal,
  telHref,
  usd,
} from "@/lib/ministry";

export const metadata: Metadata = {
  title: "Apply | Cornerstone Sober Living",
  description:
    "Download the Cornerstone Sober Living housing application, see what it costs, and find out where to send it. No interview — the application is the whole process.",
};

const address = ministry.mailingAddress;

export default function Application() {
  return (
    <main>
      <section className="w-full">
        <div className="max-w-3xl mx-auto px-6 pt-12 pb-10">
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-heading">
            Housing Application
          </h1>
          <p className="mt-6 text-lg">
            Fill it out, send it back, and you&rsquo;ll hear from us within
            about a week. There&rsquo;s no interview — the application is the
            whole process.
          </p>
        </div>
      </section>

      {/* Cost. The voucher comes before the numbers on purpose — see
          notes.md H4. Most men reading this are released with nothing, and
          $1,150 reads as a closed door if it lands first. */}
      <section className="w-full bg-surface-sunken">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold text-heading">
            What it costs
          </h2>

          <div className="mt-6 bg-surface-gold border-l-4 border-accent px-6 py-5">
            <p className="text-lg font-semibold text-heading">
              Most men coming out of prison don&rsquo;t pay this up front.
            </p>
            <p className="mt-2">
              If you&rsquo;re being released, you may have a{" "}
              <strong>Housing Voucher</strong>. It comes from the Washington
              DOC{" "}
              <a
                href="https://doc.wa.gov/corrections/community-reentry/reentry-housing-assistance-program"
                className="text-accent-ink underline underline-offset-2 font-semibold"
              >
                Reentry Housing Assistance Program
              </a>
              , and it can cover your program fees. A lot of the men here came
              in on one.
            </p>
            {/* The ministry has no part in the voucher process — don't offer
                help here we can't actually give. notes.md A38. */}
            <p className="mt-3">
              DOC handles it from start to finish, usually as part of your
              release planning, so there&rsquo;s nothing you need to set up
              with us. If you have a question about yours, ask your counselor.
            </p>
          </div>

          <p className="mt-8">Here&rsquo;s what it costs otherwise.</p>

          <table className="mt-4 w-full text-left border-collapse">
            <caption className="sr-only">
              Monthly rent and total move-in cost by room type
            </caption>
            <thead>
              <tr className="border-b-2 border-border-strong">
                <th scope="col" className="py-3 pr-4 font-semibold">
                  Room
                </th>
                <th scope="col" className="py-3 pr-4 font-semibold">
                  Rent
                </th>
                <th scope="col" className="py-3 font-semibold">
                  To move in
                </th>
              </tr>
            </thead>
            <tbody>
              {fees.rooms.map((room) => (
                <tr key={room.type} className="border-b border-border">
                  <td className="py-3 pr-4">{room.type}</td>
                  <td className="py-3 pr-4">{usd(room.rent)} a month</td>
                  <td className="py-3 font-semibold text-heading">
                    {usd(moveInTotal(room.rent))}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <p className="mt-4 text-sm text-muted-text">
            Move-in is your first month&rsquo;s rent, half of your last
            month&rsquo;s rent, and a one-time {usd(fees.maintenanceFee)}{" "}
            maintenance fee, which isn&rsquo;t refundable. Rent can change,
            though we&rsquo;re given plenty of notice when it does.
          </p>

          <p className="mt-4">
            Make payments out to <strong>{ministry.payee}</strong>.
          </p>

          <p className="mt-4">
            If a voucher isn&rsquo;t an option for you, get in touch anyway.
            We&rsquo;ve worked with men funded through other organizations
            before.
          </p>
        </div>
      </section>

      <section className="w-full">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold text-heading">
            Get the application
          </h2>

          {/* TODO(jarrell): notes.md Q8 — drop the revised PDF at
              public/cornerstone-housing-application.pdf, then replace this
              block with:
                <Button href="/cornerstone-housing-application.pdf" download>
                  Download the Application (PDF, N pages)
                </Button>
              Then export its pages to public/application/page-N.webp for the
              preview — see docs/PLAN.md for why images and not an iframe. */}
          <div className="mt-6 border-2 border-dashed border-border-strong rounded-md px-6 py-8 text-center">
            <p className="font-semibold text-error">
              TODO: the revised PDF isn&rsquo;t in the repo yet (notes.md Q8).
            </p>
            <p className="mt-2 text-muted-text">
              Download button and page preview go here. Deliberately not
              wired to a placeholder file — a download that 404s is worse
              than one that isn&rsquo;t there yet.
            </p>
          </div>

          <p className="mt-6 text-muted-text">
            No printer? Send it back however you can — a clear photo of each
            page works.
          </p>

          {/* notes.md Q39/Q40. Most men who need this ministry are still
              inside and can't reach this page at all — the person reading it
              is his mother, his wife, or his counselor. Don't let this drift
              to the bottom of the page. */}
          <div className="mt-8 border-l-4 border-heading bg-surface px-6 py-5">
            <h3 className="text-lg font-semibold text-heading">
              Helping someone who&rsquo;s still inside?
            </h3>
            <p className="mt-2">Get in touch with any questions.</p>
          </div>
        </div>
      </section>

      <section className="on-navy w-full bg-surface-navy text-on-navy">
        <div className="max-w-3xl mx-auto px-6 py-12">
          <h2 className="font-serif text-3xl font-bold">Where to send it</h2>

          <div className="mt-8 grid gap-8 sm:grid-cols-2">
            <div>
              <h3 className="flex items-center gap-2 font-semibold text-on-navy-accent">
                <Mail className="w-5 h-5 shrink-0" aria-hidden="true" />
                Email
              </h3>
              {/* TODO(jarrell): notes.md G33 — swap for the Cornerstone
                  address once the domain is set up. */}
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
              /* TODO(pastor): notes.md Q23 — this is the biggest hole on the
                 site. A man who won't fill in a form will still call. */
              <p className="mt-3 bg-surface text-error font-semibold px-3 py-2 inline-block rounded">
                TODO: phone number (notes.md Q23)
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

          <p className="mt-8 text-muted-text">
            Beds open up as men move on, so don&rsquo;t assume we&rsquo;re
            full. Send it in.
          </p>
        </div>
      </section>
    </main>
  );
}
