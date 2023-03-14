import { useEffect } from "react";

export const useMetaTags = (metaData) => {
  useEffect(() => {
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
      // remove dynamically added meta tags when component unmounts
      Object.entries(metaData).forEach(([name, content]) => {
        const selector = name.startsWith("og:")
          ? `meta[property="${name}"]`
          : `meta[name="${name}"]`;
        const tag = document.head.querySelector(selector);
        if (tag) {
          document.head.removeChild(tag);
        }
      });
    };
  }, [metaData]);
};

