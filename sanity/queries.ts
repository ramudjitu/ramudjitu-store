import { client } from './client'

export async function getAllArtikel() {
  return client.fetch(`
    *[_type == "artikel"] | order(publishedAt desc) {
      title,
      "slug": slug.current,
      tag,
      mainImage,
      description,
      readTime,
      publishedAt
    }
  `)
}

export async function getArtikelBySlug(slug: string) {
  return client.fetch(
    `
    *[_type == "artikel" && slug.current == $slug][0] {
      title,
      "slug": slug.current,
      tag,
      mainImage,
      description,
      readTime,
      publishedAt,
      content,
      related[]-> {
        title,
        "slug": slug.current,
        tag,
        mainImage
      }
    }
  `,
    { slug }
  )
}

export async function getAllProduk() {
  return client.fetch(`
    *[_type == "produk" && aktif == true] | order(urutan asc) {
      nama,
      "slug": slug.current,
      harga,
      hargaNum,
      kategori,
      deskripsiSingkat,
      deskripsi,
      gambar,
      urlLP,
      urlCheckout,
    }
  `)
}

export async function getProdukBySlug(slug: string) {
  return client.fetch(
    `*[_type == "produk" && slug.current == $slug][0] {
      nama,
      "slug": slug.current,
      harga,
      hargaNum,
      kategori,
      deskripsiSingkat,
      deskripsi,
      gambar,
      urlLP,
      urlCheckout,
    }`,
    { slug }
  )
}

export async function getProdukByKategori(kategori: string) {
  return client.fetch(
    `*[_type == "produk" && aktif == true && kategori == $kategori] | order(urutan asc) {
      nama,
      "slug": slug.current,
      harga,
      hargaNum,
      kategori,
      deskripsiSingkat,
      gambar,
      urlLP,
      urlCheckout,
    }`,
    { kategori }
  )
}

export async function getLatestArtikel(limit: number = 3) {
  return client.fetch(`
    *[_type == "artikel"] | order(publishedAt desc) [0...${limit}] {
      title,
      "slug": slug.current,
      tag,
      mainImage,
      description,
      readTime,
      publishedAt
    }
  `)
}