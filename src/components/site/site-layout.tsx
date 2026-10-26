import { Outlet } from "react-router-dom";
import Navbar from "./navbar.tsx";
import Footer from "./footer.tsx";
import ScrollToHash from "./scroll-to-hash.tsx";

export default function SiteLayout() {
  return (
    <div className="flex min-h-screen flex-col">
      <ScrollToHash />
      <a
        href="#main"
        className="sr-only z-[60] rounded-md bg-primary px-4 py-2 text-primary-foreground focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
