import {defineField, defineType} from 'sanity'

export const produkType = defineType({
  name: 'produk',
  title: 'Produk',
  type: 'document',
  fields: [
    defineField({
      name: 'nama',
      title: 'Nama Produk',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: { source: 'nama' },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'harga',
      title: 'Harga (contoh: Rp 375.000)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'hargaNum',
      title: 'Harga Angka (contoh: 375000)',
      type: 'number',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'kategori',
      title: 'Kategori',
      type: 'string',
      options: {
        list: [
          { title: 'Fondasi', value: 'nutrisi' },
          { title: 'Regenerasi', value: 'stamina' },
          { title: 'Perlindungan', value: 'amino' },
          { title: 'Performa', value: 'antioksidan' },
        ],
      },
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'deskripsiSingkat',
      title: 'Deskripsi Singkat (untuk kartu produk)',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'deskripsi',
      title: 'Deskripsi Lengkap (untuk halaman detail)',
      type: 'array',
      of: [{ type: 'text' }],
    }),
    defineField({
      name: 'gambar',
      title: 'URL Gambar (dari Cloudinary)',
      type: 'url',
      validation: Rule => Rule.required(),
    }),
    defineField({
      name: 'urlLP',
      title: 'URL Landing Page (Scalev)',
      type: 'string',
    }),
    defineField({
      name: 'urlCheckout',
      title: 'URL Checkout (Scalev)',
      type: 'string',
    }),
    defineField({
      name: 'aktif',
      title: 'Tampilkan Produk?',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'urutan',
      title: 'Urutan Tampil',
      type: 'number',
      initialValue: 0,
    }),
  ],
})