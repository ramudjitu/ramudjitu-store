import { getLatestArtikel } from "@/sanity/queries";
import { getAllProduk } from "@/lib/wp";
import { urlForImage } from "@/sanity/image";
import HomeContent from "./HomeContent";

export const revalidate = 60;

function formatTanggal(dateString: string) {
  const bulan = ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Agu", "Sep", "Okt", "Nov", "Des"];
  const d = new Date(dateString);
  return `${d.getDate()} ${bulan[d.getMonth()]} ${d.getFullYear()}`;
}

export default async function Home() {
  const artikelRaw = await getLatestArtikel(3);
  const produkRaw = await getAllProduk();

  const blogPreviews = artikelRaw.map((a: any) => ({
    slug: a.slug,
    title: a.title,
    tag: a.tag,
    description: a.description,
    readTime: a.readTime,
    publishedAt: formatTanggal(a.publishedAt),
    imageUrl: a.mainImage ? urlForImage(a.mainImage).width(180).height(180).url() : undefined,
  }));

  return <HomeContent blogPreviews={blogPreviews} produkList={produkRaw} />;
}
