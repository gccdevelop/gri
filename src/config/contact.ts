/**
 * Contact configuration for GRI.
 *
 * No contact channels were supplied in the organisational profile, so every
 * value below is intentionally empty. Fill in the fields you have and the
 * Get Involved page, footer and calls to action will use them automatically.
 * Leave a field as `null` (or an empty array) to keep it hidden.
 *
 * Nothing on the site submits data anywhere. If an enquiry form is wanted
 * later, add the service details here and build the form against them.
 */
export type SocialLink = { label: string; href: string };

export const contact: {
  /** e.g. "hello@example.org" – enables mailto links on the Get Involved page */
  email: string | null;
  /** e.g. "+44 20 0000 0000" – enables a tel: link */
  phone: string | null;
  /** e.g. [{ label: "Instagram", href: "https://…" }] */
  social: SocialLink[];
  /** Reserved for a future enquiry-form service. Not used yet. */
  formEndpoint: string | null;
} = {
  email: null,
  phone: null,
  social: [],
  formEndpoint: null,
};

export function mailtoHref(subject: string): string | null {
  if (!contact.email) return null;
  return `mailto:${contact.email}?subject=${encodeURIComponent(subject)}`;
}
