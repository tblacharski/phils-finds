// /schemas/objects/button.js
import { defineType } from 'sanity'
import textAlign from '../../fields/textAlign'
import additionalClass from '../../fields/additionalClass'
import link from '../../fields/link'
import label from '../../fields/label'
import buttonTypes from '../../fields/buttonTypes'

export default defineType({
  name: 'button',
  title: 'Button',
  type: 'object',
  fields: [
    label,
    link,
    textAlign,
    buttonTypes,
    additionalClass
  ],
  preview: {
    prepare() {
      return {
        title: '🔘 Single Button',
      };
    },
  },
})
