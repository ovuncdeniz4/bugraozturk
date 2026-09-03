import Link from "next/link";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="mx-auto flex w-full max-w-xl flex-1 flex-col justify-center px-4 py-20 text-center">
        <h1 className="font-serif text-4xl text-sage-dark">Sayfa bulunamadı</h1>
        <p className="mt-3 text-muted">Aradığınız adres bu sitede yok.</p>
        <Link
          href="/"
          className="mt-8 inline-flex min-h-11 items-center justify-center text-sm font-semibold text-sage"
        >
          Ana sayfaya dön
        </Link>
      </main>
      <Footer />
    </>
  );
}
