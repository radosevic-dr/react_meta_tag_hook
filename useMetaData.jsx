import { useEffect } from "react";

export const useMetaData = (metaData) => {
  useEffect(() => {
    // remove existing meta tags
    const existingMetaTags = document.querySelectorAll("meta:not([charset]):not([name='viewport'])");
    existingMetaTags.forEach((tag) => tag.parentNode.removeChild(tag));

    // adding specific meta tags
    Object.entries(metaData).forEach(([name, content]) => {
      const tag = document.createElement("meta");

      if (name.startsWith("og:")) {
        tag.setAttribute("property", name);
      } else {
        tag.setAttribute("name", name);
      }

      tag.setAttribute("content", content);
      document.head.appendChild(tag);
    });

    return () => {
      // remove meta tags when component unmounts
      const existingMetaTags = document.querySelectorAll("meta");
      existingMetaTags.forEach((tag) => tag.parentNode.removeChild(tag));
    };
  }, [metaData]);
};
