// /schemas/objects/button.js
import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'faqsContent',
  title: 'FAQs',
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
        name: 'faqs',
        title: 'Faqs',
        type: 'array',
        of: [
            {
                type: 'reference',
                to: [{ type: 'faqs' }],
            },
        ]
    }),
    defineField({
        name: 'buttons',
        title: 'Buttons',
        type: 'array',
        of: [defineArrayMember({ type: 'button' })],
        validation: (Rule) => Rule.min(0).max(3).error('You must have between 0 and 3 buttons.'),
    }),
  ],
  preview: {
    prepare() {
      return {
        title: '❓ FAQ Section',
      };
    },
  },
})
