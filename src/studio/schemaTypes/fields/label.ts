import { defineField } from 'sanity';

export default defineField({
    name: 'label',
    title: 'Label',
    type: 'string',
    validation: Rule => Rule.required()
})