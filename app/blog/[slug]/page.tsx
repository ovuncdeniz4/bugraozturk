import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { BlogCta } from "@/components/BlogCta";
import { FloatingActions } from "@/components/FloatingActions";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { blogPosts, getPost } from "@/lib/blog";
import { getSiteUrl, site } from "@/lib/site";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
      locale: "tr_TR",
    },
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const url = `${getSiteUrl()}/blog/${post.slug}`;
  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    inLanguage: "tr-TR",
    author: {
      "@type": "Person",
      name: site.shortName,
    },
    publisher: {
      "@type": "Person",
      name: site.name,
    },
    mainEntityOfPage: url,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }}
      />
      <Header />
      <main id="icerik" className="mx-auto w-full max-w-3xl flex-1 px-4 py-12 sm:px-6">
        <Link href="/blog" className="text-sm font-medium text-sage hover:text-sage-dark">
          Tüm yazılar
        </Link>
        <h1 className="mt-4 font-serif text-3xl text-sage-dark">{post.title}</h1>
        <p className="mt-2 text-sm text-muted">
          {site.name} · Aydın diyetisyen
        </p>
        <div className="mt-8 space-y-4 text-base leading-relaxed text-muted">
          {post.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 24)}>{paragraph}</p>
          ))}
        </div>
        <BlogCta />
      </main>
      <Footer />
      <FloatingActions />
    </>
  );
}
