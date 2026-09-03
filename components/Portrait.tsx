import { existsSync } from "node:fs";
import { join } from "node:path";
import Image from "next/image";
import { BrandMark } from "@/components/BrandMark";
import { site } from "@/lib/site";

const portraitFile = "bugra-ozturk.jpg";

function portraitPath(): string | null {
  const absolute = join(process.cwd(), "public", portraitFile);
  return existsSync(absolute) ? `/${portraitFile}` : null;
}

/** Profesyonel portre alanı — `public/bugra-ozturk.jpg` eklenince otomatik görünür. */
export function Portrait({
  className = "h-[380px] sm:h-[440px]",
  priority = false,
}: {
  className?: string;
  priority?: boolean;
}) {
  const src = portraitPath();

  return (
    <div className={`relative overflow-hidden rounded-[2rem] border border-sand bg-cream ${className}`}>
      {src ? (
        <Image
          src={src}
          alt={`${site.name}, Aydın diyetisyen`}
          fill
          sizes="(max-width: 768px) 100vw, 480px"
          className="object-cover object-[center_32%]"
          priority={priority}
        />
      ) : (
        <div className="flex h-full min-h-[280px] flex-col items-center justify-center gap-4 px-6 text-center">
          <BrandMark className="h-24 w-24" />
          <div>
            <p className="font-serif text-2xl text-sage-dark">{site.name}</p>
            <p className="mt-1 text-sm text-muted">
              {site.city} / {site.district} · {site.profession}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
