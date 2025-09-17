import { defineType, defineField } from 'sanity'
import textAlign from '../../fields/textAlign'
import additionalClass from '../../fields/additionalClass'

export default defineType({
  name: 'paragraph',
  title: 'Paragraph',
  type: 'object',
  fields: [
    defineField({
      name: 'paragraph',
      title: 'Paragraph',
      type: 'text',
    }),
    textAlign,
    additionalClass
  ],
  preview: {
    prepare() {
      return {
        title: '📝 Paragraph Section',
      };
    },
  },
})