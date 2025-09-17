import { defineType, defineArrayMember, defineField } from 'sanity'
import additionalClass from '../../fields/additionalClass'

export default defineType({
  name: 'featuresSteps',
  title: 'Features Steps',
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
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [defineArrayMember({ type: 'feature' })],
    }),
    additionalClass,
  ],
  preview: {
    prepare() {
      return {
        title: '📌 Features / Steps Section',
      };
    },
  },
})