import {defineField, defineType} from 'sanity'
import alternativeText from '../fields/alternativeText'
export default defineType({
    name: 'testimonial',
    title: 'Testimonial',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().error('Blog title is required'),
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
            name: 'authorName',
            title: 'Author Name',
            type: 'string',
        }),
        defineField({
            name: 'authorRole',
            title: 'Author Role',
            type: 'string',
        }),
        defineField({
            name: 'authorImage',
            title: 'Author Image',
            type: 'image',
            options: {
            hotspot: true,
            },
            fields:[alternativeText]
        }),
        defineField({
            name: 'quote',
            title: 'Quote',
            type: 'text',
        }),
    ],
    preview: {
        select: {
        title: 'title',
        },
        prepare(selection) {
            const {title} = selection
            return {
                title: title && title.trim() !== '' ? title : 'Testimonial Title',
            }
        },
    },
})