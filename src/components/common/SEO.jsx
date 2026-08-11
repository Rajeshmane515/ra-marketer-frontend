import { useEffect } from "react";

const SEO = ({ title, description }) => {
  useEffect(() => {
    // Title
    document.title = title;

    // Meta description
    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    // Canonical URL
    const canonicalUrl = window.location.origin + window.location.pathname;

    let canonical = document.querySelector('link[rel="canonical"]');

    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }

    canonical.setAttribute("href", canonicalUrl);

    // Open Graph - Title
    let ogTitle = document.querySelector('meta[property="og:title"]');

    if (!ogTitle) {
      ogTitle = document.createElement("meta");
      ogTitle.setAttribute("property", "og:title");
      document.head.appendChild(ogTitle);
    }

    ogTitle.setAttribute("content", title);

    // Open Graph - Description
    let ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );

    if (!ogDescription) {
      ogDescription = document.createElement("meta");
      ogDescription.setAttribute("property", "og:description");
      document.head.appendChild(ogDescription);
    }

    ogDescription.setAttribute("content", description);

    // Open Graph - URL
    let ogUrl = document.querySelector('meta[property="og:url"]');

    if (!ogUrl) {
      ogUrl = document.createElement("meta");
      ogUrl.setAttribute("property", "og:url");
      document.head.appendChild(ogUrl);
    }

    ogUrl.setAttribute("content", canonicalUrl);

    // Open Graph - Image
    let ogImage = document.querySelector('meta[property="og:image"]');

    if (!ogImage) {
      ogImage = document.createElement("meta");
      ogImage.setAttribute("property", "og:image");
      document.head.appendChild(ogImage);
    }

    ogImage.setAttribute("content", "https://ramarketer.com/social.png");

    // Twitter Card
    let twitterCard = document.querySelector('meta[name="twitter:card"]');

    if (!twitterCard) {
      twitterCard = document.createElement("meta");
      twitterCard.setAttribute("name", "twitter:card");
      document.head.appendChild(twitterCard);
    }

    twitterCard.setAttribute("content", "summary_large_image");

    // Twitter Title
    let twitterTitle = document.querySelector('meta[name="twitter:title"]');

    if (!twitterTitle) {
      twitterTitle = document.createElement("meta");
      twitterTitle.setAttribute("name", "twitter:title");
      document.head.appendChild(twitterTitle);
    }

    twitterTitle.setAttribute("content", title);

    // Twitter Description
    let twitterDescription = document.querySelector(
      'meta[name="twitter:description"]',
    );

    if (!twitterDescription) {
      twitterDescription = document.createElement("meta");
      twitterDescription.setAttribute("name", "twitter:description");
      document.head.appendChild(twitterDescription);
    }

    twitterDescription.setAttribute("content", description);

    // Twitter Image
    let twitterImage = document.querySelector('meta[name="twitter:image"]');

    if (!twitterImage) {
      twitterImage = document.createElement("meta");
      twitterImage.setAttribute("name", "twitter:image");
      document.head.appendChild(twitterImage);
    }

    twitterImage.setAttribute("content", "https://ramarketer.com/social.png");

    return () => {
      document.title =
        "B2B Lead Generation & Demand Generation Agency | RA Marketer";
    };
  }, [title, description]);

  return null;
};

export default SEO;
