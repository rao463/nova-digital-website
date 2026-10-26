import { useState } from "react";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils.ts";

type ProjectImageProps = { src: string; alt: string; className?: string };

// Shows a neutral fallback if an image fails to load.
export default function ProjectImage({ src, alt, className }: ProjectImageProps) {
  const [failed, setFailed] = useState(false);
  if (failed) {
    return (
      <div className="grid size-full place-items-center bg-secondary text-muted-foreground">
        <ImageOff className="size-8" aria-label={alt} />
      </div>
    );
  }
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className={cn("size-full object-cover", className)}
    />
  );
}
