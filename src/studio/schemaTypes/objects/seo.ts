// schemas/objects/seo.js
import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'seo',
  title: 'SEO',
  type: 'object', // <--- was 'document', change to 'object'
  fields: [
    defineField({
      name: 'metaTitle',
      title: 'Meta Title',
      type: 'string',
    }),
    defineField({
      name: 'metaDescription',
      title: 'Meta Description',
      type: 'text',
    }),
    defineField({
      name: 'keywords',
      title: 'Keywords',
      type: 'string',
    }),
    defineField({
      name: 'disallowIndexing',
      title: 'Disallow search indexing?',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'switch',
      },
    }),
  ],
})
