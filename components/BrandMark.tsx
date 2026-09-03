import Image from "next/image";
import { site } from "@/lib/site";

/** DNA-ağaç marka logosu. */
export function BrandMark({
  className = "h-10 w-10",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src="/logo.png"
      alt={site.name}
      width={80}
      height={80}
      className={className}
      priority={priority}
    />
  );
}
