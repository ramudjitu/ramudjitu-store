import {defineField, defineType} from 'sanity'

export const artikelType = defineType({
  name: 'artikel',
  title: 'Artikel Blog',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Judul Artikel',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug (URL)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tag',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          {title: 'Herbal', value: 'Herbal'},
          {title: 'Edukasi', value: 'Edukasi'},
          {title: 'Tips', value: 'Tips'},
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mainImage',
      title: 'Gambar Utama',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'description',
      title: 'Deskripsi Singkat (untuk preview & SEO)',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().max(200),
    }),
    defineField({
      name: 'readTime',
      title: 'Estimasi Waktu Baca',
      type: 'string',
      description: 'Contoh: 5 menit',
      initialValue: '5 menit',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Tanggal Publish',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Isi Artikel',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            {title: 'Normal', value: 'normal'},
            {title: 'Heading', value: 'h2'},
          ],
        },
        {
          type: 'image',
          options: {hotspot: true},
        },
      ],
    }),
    defineField({
      name: 'related',
      title: 'Artikel Terkait',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'artikel'}]}],
      validation: (Rule) => Rule.max(3),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'tag',
      media: 'mainImage',
    },
  },
})