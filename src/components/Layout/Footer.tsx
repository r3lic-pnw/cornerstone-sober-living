import { ministry, mailtoHref, telHref } from "@/lib/ministry";

export default function Footer() {
  return (
    <footer className="on-navy bg-surface-navy text-on-navy-muted w-full shrink-0">
      <div className="max-w-3xl mx-auto px-6 py-12 space-y-8">
        <div>
          <p className="font-serif text-xl font-bold text-on-navy">
            {ministry.name}
          </p>
          <p className="mt-1">{ministry.serviceArea}</p>
        </div>

        <div className="space-y-2">
          {telHref ? (
            <p>
              <a
                href={telHref}
                className="text-on-navy-accent underline underline-offset-4 text-lg"
              >
                {ministry.phone}
              </a>
            </p>
          ) : (
            /* TODO(pastor): phone number — notes.md Q23. The site needs this. */
            <p className="text-error bg-surface font-semibold px-2 py-1 inline-block rounded">
              TODO: phone number (notes.md Q23)
            </p>
          )}
          <p>
            <a
              href={mailtoHref}
              className="text-on-navy-accent underline underline-offset-4"
            >
              {ministry.email}
            </a>
          </p>
        </div>

        {/* Verified against the IRS Tax Exempt Organization Search — see the
            note on nonprofitStatusVerified. Never render this from memory. */}
        {ministry.nonprofitStatusVerified && (
          <p className="text-sm">
            {ministry.name} is a registered 501(c)(3) non-profit. EIN{" "}
            {ministry.ein}.
          </p>
        )}

        <p className="text-sm border-t border-border-on-navy pt-6">
          Scripture quotations are from the ESV® Bible (The Holy Bible, English
          Standard Version®), copyright © 2001 by Crossway, a publishing
          ministry of Good News Publishers. Used by permission. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}
