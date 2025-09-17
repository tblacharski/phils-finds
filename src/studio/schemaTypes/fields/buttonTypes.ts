import { defineField } from 'sanity';

export default defineField({
  name: 'type',
  title: 'Button Type',
  type: 'string',
  options: {
    list: [
      { title: 'Primary', value: 'primary' },
      { title: 'Secondary', value: 'secondary' },
      { title: 'Rounded Primary', value: 'rounded-primary' },
      { title: 'Rounded Secondary', value: 'rounded-secondary' },
      { title: 'Link', value: 'link' },
      { title: 'Link With Arrow', value: 'link-with-arrow' },
    ],
    layout: 'dropdown',
  },
  initialValue: 'primary',
});
