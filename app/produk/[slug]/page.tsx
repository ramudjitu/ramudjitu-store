import ProdukClient from "./ProdukClient";

export default async function ProdukDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProdukClient slug={slug} />;
}