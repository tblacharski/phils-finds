import { defineType, defineArrayMember, defineField } from 'sanity'
import additionalClass from '../../fields/additionalClass'
import textAlign from '../../fields/textAlign'

export default defineType({
  name: 'buttons',
  title: 'Buttons',
  type: 'object',
  fields: [
    defineField({
      name: 'items',
      title: 'Buttons',
      type: 'array',
      of: [defineArrayMember({ type: 'button' })],
    }),
    textAlign,
    additionalClass,
  ],
  preview: {
    prepare() {
      return {
        title: '🔘 Button Group',
      };
    },
  },
})