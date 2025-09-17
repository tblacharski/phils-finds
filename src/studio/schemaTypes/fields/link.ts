import { defineField } from 'sanity';

export default defineField({
    name: 'url',
    title: 'Link',
    type: 'url',
    validation: (Rule) =>
        Rule.uri({
        scheme: ['http', 'https', 'mailto', 'tel'],
    }).required(),
})