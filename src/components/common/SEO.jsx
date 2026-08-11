import { useEffect } from "react";

const SEO = ({ title, description }) => {
  useEffect(() => {
    document.title = title;

    let metaDescription = document.querySelector('meta[name="description"]');

    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }

    metaDescription.setAttribute("content", description);

    return () => {
      document.title =
        "B2B Lead Generation & Demand Generation Agency | RAMarketer";
    };
  }, [title, description]);

  return null;
};

export default SEO;
