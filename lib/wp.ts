const WP_GRAPHQL_ENDPOINT = "https://cms.berkyu.com/graphql";

async function wpFetch(query: string, variables: Record<string, any> = {}) {
  const res = await fetch(WP_GRAPHQL_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
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
    brand: "RamuDjitu",
    slug: node.slug,
    harga: d.harga ? `Rp${Number(d.harga).toLocaleString("id-ID")}` : "",
    hargaNum: d.harga || 0,
    kategori: d.katagori || "",
    deskripsiSingkat: "",
    deskripsi: htmlToParagraphs(node.content),
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
        detailProduk { harga katagori bulletManfaat linkCheckout linkLp }
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
          detailProduk { harga katagori bulletManfaat linkCheckout linkLp }
        }
      }
    }`
  );
  return data.produks.nodes.map(mapWpProduk);
}