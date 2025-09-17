import { defineType, defineField } from 'sanity'

import link from '../fields/link'

export default defineType({
  name: 'navItem',
  title: 'Navigation Item',
  type: 'object',
  fields: [
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
      subtitle: 'url',
    },
  },
})
