import { defineType, defineArrayMember, defineField } from 'sanity'
import additionalClass from '../../fields/additionalClass'

export default defineType({
  name: 'cta',
  title: 'Call To Action',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
    }),
    defineField({
        name: 'buttons',
        title: 'Buttons',
        type: 'array',
        of: [defineArrayMember({ type: 'button' })],
        validation: (Rule) => Rule.min(0).max(3).error('You must have between 0 and 3 buttons.'),
    }),
    additionalClass,
  ],
  preview: {
    prepare() {
      return {
        title: '📢 Call To Action',
      };
    },
  },
})