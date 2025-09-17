import { defineType, defineField } from 'sanity'

import link from '../fields/link'
import alternativeText from '../fields/alternativeText'
export default defineType({
  name: 'socialLink',
  title: 'Social Link',
  type: 'object',
  fields: [
    defineField({
      name: 'icon',
      title: 'Icon',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields:[alternativeText]
    }),
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    link,
  ],
  preview: {
    select: {
      title: 'title',
      media: 'icon',
      subtitle: 'url',
    },
  },
})
