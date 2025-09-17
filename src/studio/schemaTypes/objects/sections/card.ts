// /schemas/objects/button.js
import { defineType, defineField } from 'sanity'
import alternativeText from '../../fields/alternativeText'
import label from '../../fields/label'
import link from '../../fields/link'
export default defineType({
  name: 'card',
  title: 'Card',
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
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        },
        fields:[alternativeText],
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
    }),
    label,
    link
  ]
})
