/**
 * Every real-world fact about the ministry that appears on more than one page.
 *
 * Anything still unconfirmed is marked TODO and cites the question number in
 * notes.md. Swap the value here and it updates everywhere — do not inline
 * these into pages.
 */

export const ministry = {
  name: "Cornerstone Sober Living",

  /** notes.md Q23 — still unanswered. The site badly needs this. */
  phone: null as string | null,

  /**
   * notes.md G33 — Ed owns a Cornerstone domain but it isn't set up yet.
   * This is the address that works today.
   */
  email: "hgrm7@outlook.com",

  /** The intake house. notes.md D34 — cleared for publication. */
  mailingAddress: {
    street: "18816 Smokey Point Blvd",
    city: "Arlington",
    state: "WA",
    zip: "98223",
  },

  /** notes.md Q16/Q17 — area only, no per-house addresses, no house count. */
  serviceArea: "Marysville and Arlington, in Snohomish County",

  /** notes.md Q6 */
  housingCoordinator: "Jeff Morlan",

  /**
   * notes.md Q41. Payments used to go to Holy Ghost Revival Ministries or
   * Holy Ghost Housing depending on the house, and the two names got confused.
   * Holy Ghost Housing was renamed to Cornerstone Sober Living to fix that, so
   * this is now the only payee — state it wherever money is mentioned.
   */
  payee: "Cornerstone Sober Living",

  /**
   * notes.md Q26 — verified against the IRS Tax Exempt Organization Search
   * on 2026-08-26 (record saved at docs/reference/). On the Publication 78
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

/** Program fees. notes.md Q2 — exact, per the current rate. */
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
