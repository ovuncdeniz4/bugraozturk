import type { Metadata } from "next";
import Link from "next/link";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { blogPosts } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Beslenme Yazıları",
  description:
    "Aydın diyetisyen bakışıyla kilo verme, sürdürülebilir beslenme ve online danışmanlık üzerine kısa yazılar.",
  alternates: { canonical: "/blog" },
};

/** Blog listesi — yeni yazılar lib/blog.ts içine eklenir. */
export default function BlogPage() {
  return (
    <>
      <Header />
      <main id="icerik" className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <p className="text-sm font-medium tracking-wide text-sage uppercase">
          Yazılar
        </p>
        <h1 className="mt-2 font-serif text-3xl text-sage-dark">
          Beslenme notları
        </h1>
        <p className="mt-3 text-sm text-muted">
          Genel bilgilendirme amaçlıdır; kişiye özel plan yerine geçmez.
        </p>
        <ul className="mt-8 space-y-3">
          {blogPosts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block rounded-[1.25rem] border border-sand bg-cream p-5 hover:border-sage/30"
              >
                <h2 className="font-serif text-xl text-sage-dark">{post.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-muted">
                  {post.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
