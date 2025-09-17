// /schemas/objects/button.js
import { defineType, defineField, defineArrayMember } from 'sanity'
import alternativeText from '../../fields/alternativeText'

export default defineType({
  name: 'mediaText',
  title: 'Media & Text',
  type: 'object',
  fields: [
    defineField({
      name: 'imagePosition',
      title: 'Image Position',
      type: 'string',
      options: {
        list: ['left', 'right'],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'left',
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'array',
      of: [defineArrayMember({ type: 'richText' })],
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
    }),
  ],
  preview: {
    prepare() {
      return {
        title: '🖼️ Media + Text Section',
      };
    },
  },
})
