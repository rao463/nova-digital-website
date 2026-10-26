import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button.tsx";

export default function NotFound() {
  const location = useLocation();

  useEffect(() => {
    document.title = "Page not found | Nova Digital";
  }, [location.pathname]);

  return (
    <div className="flex min-h-[70vh] items-center justify-center px-5">
      <div className="text-center space-y-6">
        <div className="space-y-2">
          <h1 className="font-serif text-7xl font-extrabold text-accent">404</h1>
          <h2 className="text-2xl font-semibold">Page Not Found</h2>
        </div>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          This page does not exist.
        </p>
        <div className="pt-4">
          <Button asChild>
            <Link to="/">Return to Home</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
