export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://nirogyatra.com/#website",
  "name": "NirogYatra",
  "alternateName": ["Nirog Yatra", "nirogyatra", "Nirog-Yatra"],
  "url": "https://nirogyatra.com",
  "description": "Your trusted partner for medical tourism in India. NirogYatra (Nirog Yatra) connects international patients with top hospitals for affordable medical treatments.",
  "potentialAction": {
    "@type": "SearchAction",
    "target": "https://nirogyatra.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string"
  }
};

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://nirogyatra.com/#organization",
  "name": "NirogYatra",
  "alternateName": ["Nirog Yatra", "nirogyatra", "Nirog-Yatra"],
  "url": "https://nirogyatra.com",
  "logo": {
    "@type": "ImageObject",
    "@id": "https://nirogyatra.com/#logo",
    "url": "https://nirogyatra.com/logo.png",
    "width": 112,
    "height": 112,
    "caption": "NirogYatra - Medical Tourism Facilitator"
  },
  "slogan": "Your Gateway to Quality Healthcare in India",
  "description": "NirogYatra (also known as Nirog Yatra) is a leading medical tourism facilitator connecting international patients with top healthcare providers in India.",
  "sameAs": [
    "https://facebook.com/nirogyatra",
    "https://twitter.com/nirogyatra",
    "https://linkedin.com/company/nirogyatra"
  ]
};