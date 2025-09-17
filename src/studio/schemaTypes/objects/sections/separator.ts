import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'separator',
  title: 'Separator',
  type: 'object',
  fields: [
    defineField({
      name: 'style',
      title: 'Style',
      type: 'string',
      options: {
        list: [ 'Default', 'Wide Line', 'Dots'],
        layout: 'radio',
        direction: 'horizontal',
      },
      initialValue: 'Default',
    }),
    defineField({
      name: 'fullWidth',
      title: 'Full Width?',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'switch',
      },
    }),
    defineField({
      name: 'removeMargin',
      title: 'Remove Margin?',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'switch',
      },
    }),
  ],
  preview: {
    prepare() {
      return {
        title: '➖ Separator Section',
      };
    },
  },
})
