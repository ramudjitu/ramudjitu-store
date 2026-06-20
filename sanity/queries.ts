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