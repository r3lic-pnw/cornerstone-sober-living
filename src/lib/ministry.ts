/**
 * Every real-world fact about the ministry that appears on more than one page.
 *
 * Anything still unconfirmed is marked TODO and cites the open question number
 * in notes.md. Swap the value here and it updates everywhere — do not inline
 * these into pages.
 */

/**
 * cornerstonesoberliving.org, secured by Jeff. Used for metadataBase, the
 * sitemap, and robots.txt. Nothing is deployed to it yet.
 */
export const siteUrl = "https://cornerstonesoberliving.org";

/**
 * The live Jotform application — now the primary way a man applies. Linked to
 * rather than embedded: an iframe would be heavy on the old phones and library
 * terminals this page is written for, and Jotform's own page is already
 * mobile-friendly. Paper remains the fallback for anyone who can't use it.
 */
export const applicationFormUrl = "https://form.jotform.com/262392776348167";

export const ministry = {
  name: "Cornerstone Sober Living",

  /**
   * The number on the current application packet. The site used to carry
   * 425-344-3231, which meant the two documents disagreed — a man holding the
   * paper form and looking at the site saw two numbers. Confirmed correct.
   */
  phone: "360-435-3973" as string | null,

  /**
   * Confirmed as the address to publish, in preference to the
   * hgrm7@outlook.com the older packet carries. The domain is secured but has
   * no mail on it; if that changes, this is the one line to swap.
   */
  email: "edrichardson19720@gmail.com",

  /** Pastor Ed's House — cleared for publication. */
  mailingAddress: {
    street: "26015 48th Ave NE",
    city: "Arlington",
    state: "WA",
    zip: "98223",
  },

  /** Area only, no per-house addresses, no house count — a count goes stale. */
  serviceArea: "Serving Snohomish County",

  /** Reads every application, with the final say from Pastor Ed. */
  housingCoordinator: "Jeff Morlan",

  /**
   * Verified against the IRS Tax Exempt Organization Search on 2026-08-26
   * (record saved at docs/reference/). On the Publication 78
   * list, deductibility code PC (public charity), favorable determination
   * letter dated 2022-09-13. Currently listed on Pub 78 is the meaningful
   * check: auto-revoked organizations are removed from it.
   */
  ein: "88-3957786",
  nonprofitStatusVerified: true,
} as const;

export const mailtoHref = `mailto:${ministry.email}?subject=${encodeURIComponent(
  "Housing application",
)}`;

export const telHref = ministry.phone
  ? `tel:${ministry.phone.replace(/[^\d+]/g, "")}`
  : null;

/** Program fees — exact, per the current confirmed rate. */
export const fees = {
  maintenanceFee: 250,
  rooms: [
    { type: "Shared room", rent: 600 },
    { type: "Private room", rent: 700 },
  ],
} as const;

/** first month + half of last month + one-time maintenance fee */
export function moveInTotal(rent: number) {
  return rent + rent / 2 + fees.maintenanceFee;
}

export const usd = (n: number) => `$${n.toLocaleString("en-US")}`;
