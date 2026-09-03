import type { ComponentProps } from "react";
import { appointmentUrl } from "@/lib/site";

/** Tüm randevu CTA’ları aynı WhatsApp (veya yedek) adrese gider. */
export function AppointmentLink({
  className,
  children,
  ...props
}: ComponentProps<"a">) {
  return (
    <a
      {...props}
      href={appointmentUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}
