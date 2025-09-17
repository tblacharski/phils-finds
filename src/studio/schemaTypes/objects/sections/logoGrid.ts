import { defineType, defineField, defineArrayMember } from 'sanity'

export default defineType({
  name: 'logoGrid',
  title: 'Logo Grid',
  type: 'object',
  fields: [
    defineField({
      name: 'layout',
      title: 'Layout Type',
      type: 'string',
      options: {
        list: ['grid','slider'],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'grid',
    }),
     defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [defineArrayMember({ type: 'logo' })],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: '🏢 Logo Grid Section',
      };
    },
  },
})
