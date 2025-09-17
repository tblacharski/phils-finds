// /schemas/objects/button.js
import { defineType, defineField } from 'sanity'
import additionalClass from '../../fields/additionalClass'
import alternativeText from '../../fields/alternativeText'
export default defineType({
  name: 'feature',
  title: 'Feature',
  type: 'object',
  fields: [
    defineField({
        name: 'heading',
        title: 'Heading',
        type: 'string',
    }),
    defineField({
        name: 'content',
        title: 'Content',
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
    additionalClass
  ]
})
