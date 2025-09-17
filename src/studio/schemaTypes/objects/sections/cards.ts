// /schemas/objects/button.js
import { defineType, defineField,defineArrayMember } from 'sanity'

export default defineType({
  name: 'cards',
  title: 'Cards',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
    }),
    defineField({
      name: 'cardsLists',
      title: 'Cards Lists',
      type: 'array',
      of: [defineArrayMember({ type: 'card' })],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: '📇 Cards Section',
      };
    },
  },
})
