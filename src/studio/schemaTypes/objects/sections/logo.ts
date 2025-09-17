// /schemas/objects/button.js
import { defineType, defineField } from 'sanity'
import alternativeText from '../../fields/alternativeText'
export default defineType({
  name: 'logo',
  title: 'Logo',
  type: 'object',
  fields: [
    defineField({
        name: 'image',
        title: 'Image',
        type: 'image',
        options: {
            hotspot: true,
        },
        fields:[alternativeText],
    }),
  ]
})
