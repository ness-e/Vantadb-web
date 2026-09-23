import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Why VantaDB · Local-First Hybrid Retrieval",
  description:
    "Por qué VantaDB: 1.2ms latencia in-process, crash-safe con WAL CRC32C, zero egress cloud, motor Rust memory-safe. Recuperación híbrida local-first sin servidor.",
  openGraph: {
    title: "Why VantaDB · Local-First Hybrid Retrieval",
    description:
      "Benefits de VantaDB: 1.2ms in-process, WAL CRC32C crash-safe, zero egress, Rust memory-safe.",
    url: "https://vantadb.vercel.app/why-vantadb",
    siteName: "VantaDB",
    type: "website",
  },
  alternates: {
    canonical: "https://vantadb.vercel.app/why-vantadb",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
