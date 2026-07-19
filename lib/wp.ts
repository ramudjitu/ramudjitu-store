const WP_GRAPHQL_ENDPOINT = "https://cms.berkyu.com/graphql";

async function wpFetch(query: string, variables: Record<string, any> = {}) {
  const res = await fetch(WP_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "User-Agent": "RamuDjituStorefront/1.0 (+https://store.ramudjitu.workers.dev)",
    },
    body: JSON.stringify({ query, variables }),
    next: { revalidate: 60 },
  });

  if (!res.ok) throw new Error(`WP GraphQL error: ${res.status}`);

  const json = await res.json();
  if (json.errors) {
    console.error("WP GraphQL errors:", json.errors);
    throw new Error(json.errors[0]?.message || "WP GraphQL error");
  }
  return json.data;
}

function htmlToParagraphs(html: string): string[] {
  if (!html) return [];
  return html
    .split(/<\/p>/gi)
    .map((chunk) =>
      chunk
        .replace(/<[^>]+>/g, "")
        .replace(/&nbsp;/g, " ")
        .trim()
    )
    .filter((text) => text.length > 0);
}

function mapWpProduk(node: any) {
  if (!node) return null;
  const d = node.detailProduk || {};
  return {
    nama: node.title,
    brand: d.merek || "RamuDjitu",
    slug: node.slug,
    harga: d.harga ? `Rp${Number(d.harga).toLocaleString("id-ID")}` : "",
    hargaNum: d.harga || 0,
    kategori: d.katagori || "",
    deskripsiSingkat: "",
    deskripsi: htmlToParagraphs(node.content),
    bulletManfaat: (d.bulletManfaat || "")
      .split("\n")
      .map((s: string) => s.trim())
      .filter((s: string) => s.length > 0),
    gambar: node.featuredImage?.node?.sourceUrl || "",
    urlLP: d.linkLp || "#",
    urlCheckout: d.linkCheckout || "#",
  };
}

export async function getProdukBySlug(slug: string) {
  const data = await wpFetch(
    `query GetProdukBySlug($slug: ID!) {
      produk(id: $slug, idType: SLUG) {
        title
        slug
        content
        featuredImage { node { sourceUrl } }
        detailProduk { harga katagori bulletManfaat linkCheckout linkLp merek }
      }
    }`,
    { slug }
  );
  return mapWpProduk(data.produk);
}

export async function getAllProduk() {
  const data = await wpFetch(
    `query GetAllProduk {
      produks(first: 100) {
        nodes {
          title
          slug
          content
          featuredImage { node { sourceUrl } }
          detailProduk { harga katagori bulletManfaat linkCheckout linkLp merek }
        }
      }
    }`
  );
  return data.produks.nodes.map(mapWpProduk);
}

function hitungReadTime(html: string): string {
  const teks = (html || "").replace(/<[^>]+>/g, " ");
  const jumlahKata = teks.trim().split(/\s+/).filter(Boolean).length;
  const menit = Math.max(1, Math.round(jumlahKata / 200));
  return `${menit} menit`;
}

function mapWpArtikel(node: any) {
  if (!node) return null;
  return {
    title: node.title,
    slug: node.slug,
    tag: node.detailArtikel?.tag || "Edukasi",
    mainImage: node.featuredImage?.node?.sourceUrl || "",
    description: (node.excerpt || "")
    .replace(/<[^>]+>/g, "")
    .replace(/&nbsp;/g, " ")
    .replace(/&hellip;/g, "…")
    .replace(/&amp;/g, "&")
    .replace(/\[…\]|\[&hellip;\]/g, "")
    .trim(),
    readTime: hitungReadTime(node.content),
    publishedAt: node.date,
    content: node.content || "",
    related: [] as any[],
  };
}

export async function getAllArtikel() {
  const data = await wpFetch(
    `query GetAllArtikel {
      posts(first: 100) {
        nodes {
          title
          slug
          date
          excerpt
          content
          featuredImage { node { sourceUrl } }
          detailArtikel { tag }
        }
      }
    }`
  );
  return data.posts.nodes.map(mapWpArtikel);
}

export async function getLatestArtikel(limit: number = 3) {
  const semua = await getAllArtikel();
  return semua.slice(0, limit);
}

export async function getArtikelBySlug(slug: string) {
  const data = await wpFetch(
    `query GetArtikelBySlug($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        title
        slug
        date
        excerpt
        content
        featuredImage { node { sourceUrl } }
        detailArtikel { tag }
      }
    }`,
    { slug }
  );
  const artikel = mapWpArtikel(data.post);
  if (!artikel) return null;

  const semua = await getAllArtikel();
  const lainnya = semua.filter((a: any) => a.slug !== slug);
  const tagSama = lainnya.filter((a: any) => a.tag === artikel.tag);
  const sisanya = lainnya.filter((a: any) => a.tag !== artikel.tag);
  artikel.related = [...tagSama, ...sisanya].slice(0, 3);

  return artikel;
}