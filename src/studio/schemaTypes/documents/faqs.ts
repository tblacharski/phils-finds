import {defineField, defineType} from 'sanity'
import content from '../objects/sections/content'
export default defineType({
    name: 'faqs',
    title: 'FAQs',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().error('FAQ title is required'),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'},
        }),
        content
    ],
    preview: {
        select: {
        title: 'title',
        author: 'author.name',
        },
        prepare(selection) {
            const {title, author} = selection
            return {
                title: title && title.trim() !== '' ? title : 'FAQ Title',
                subtitle: author ? `by ${author}` : '',
            }
        },
    },
})