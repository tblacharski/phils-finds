import { defineType, defineField } from 'sanity'
import additionalClass from '../../fields/additionalClass'

export default defineType({
  name: 'subscribe',
  title: 'Subscribe',
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
        name: 'buttonLabel',
        title: 'Button Label',
        type: 'string',
    }),
    additionalClass,
  ],
  preview: {
    prepare() {
      return {
        title: '📬 Subscribe Section',
      };
    },
  },
})