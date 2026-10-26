import { Link } from "react-router-dom";
import type { ReactNode } from "react";

type HashLinkProps = {
  hash: string;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

// Links to a section on the home page. Works from any page.
export default function HashLink({ hash, children, className, onClick }: HashLinkProps) {
  return (
    <Link to={{ pathname: "/", hash }} className={className} onClick={onClick}>
      {children}
    </Link>
  );
}
