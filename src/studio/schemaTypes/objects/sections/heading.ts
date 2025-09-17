import { defineType, defineField } from 'sanity'
import textAlign from '../../fields/textAlign'
import level from '../../fields/level'
export default defineType({
  name: 'heading',
  title: 'Heading',
  type: 'object',
  fields: [
    defineField({
      name: 'text',
      title: 'Text',
      type: 'string',
      validation: Rule => Rule.required(),
    }),
    level,
    textAlign,
  ],
  preview: {
    prepare() {
      return {
        title: '🧩 Heading Section',
      };
    },
  },
})