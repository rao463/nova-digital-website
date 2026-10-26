import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// Scrolls to the section in the URL hash (or the top) whenever the route changes.
export default function ScrollToHash() {
  const { pathname, hash, key } = useLocation();
  useEffect(() => {
    const id = hash.replace("#", "");
    const target = id && id !== "top" ? document.getElementById(id) : null;
    if (target) target.scrollIntoView();
    else window.scrollTo({ top: 0 });
  }, [pathname, hash, key]);
  return null;
}
