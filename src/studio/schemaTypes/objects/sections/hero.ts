// /schemas/objects/button.js
import { defineType, defineField, defineArrayMember } from 'sanity'
import alternativeText from '../../fields/alternativeText'
export default defineType({
  name: 'hero',
  title: 'Hero',
  type: 'object',
  fields: [
    defineField({
      name: 'layout',
      title: 'Layout Type',
      type: 'string',
      options: {
        list: [ 'layout1', 'layout2'],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'layout1',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      hidden: ({ parent }) => parent?.layout !== 'layout1' && parent?.layout !== 'layout2',
    }),
    defineField({
      name: 'subheading',
      title: 'Subheading',
      type: 'string',
      hidden: ({ parent }) => parent?.layout !== 'layout1',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
      hidden: ({ parent }) => parent?.layout !== 'layout1' && parent?.layout !== 'layout2',
    }),
    defineField({
        name: 'buttons',
        title: 'Buttons',
        type: 'array',
        of: [defineArrayMember({ type: 'button' })],
        validation: (Rule) => Rule.min(0).max(3).error('You must have between 0 and 3 buttons.'),
    }),
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        },
        fields:[alternativeText],
        hidden: ({ parent }) => parent?.layout !== 'layout2',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: '🎯 Hero Section',
      };
    },
  },
})
