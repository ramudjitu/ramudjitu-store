import ProdukClient from "./ProdukClient";
import { getProdukBySlug } from "@/sanity/queries";

export const revalidate = 60;

export default async function ProdukDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const sanityProduk = await getProdukBySlug(slug);
  return <ProdukClient slug={slug} sanityProduk={sanityProduk ?? null} />;
}