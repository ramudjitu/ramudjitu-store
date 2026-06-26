import { getProdukBySlug } from "@/sanity/queries";
import ProdukClient from "./ProdukClient";

export const revalidate = 60;

export default async function ProdukDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const produk = await getProdukBySlug(slug);
  return <ProdukClient slug={slug} produk={produk} />;
}
