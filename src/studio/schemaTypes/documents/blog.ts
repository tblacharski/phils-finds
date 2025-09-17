import {defineField, defineType} from 'sanity'
import bodyContent from '../objects/bodyContent'
import alternativeText from '../fields/alternativeText'
export default defineType({
    name: 'blog',
    title: 'Blog',
    type: 'document',
    groups: [
        {
        name: 'content',
        title: 'Content',
        },
        {
        name: 'seo',
        title: 'SEO',
        }
    ],
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
            name: 'featuredImage',
            title: 'Featured Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields:[alternativeText]
        }),
        defineField({
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
        }),
        defineField({
            name: 'categories',
            title: 'Categories',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'category' } }],
        }),
        defineField({
            name: 'tags',
            title: 'Tags',
            type: 'array',
            of: [{ type: 'reference', to: { type: 'tag' } }],
        }),
        defineField({
            name: 'author',
            title: 'Author',
            type: 'reference',
            to: {type: 'author'},
        }),
        defineField({
            name: 'excerpt',
            title: 'Excerpt',
            type: 'text',
        }),
        bodyContent,
        defineField({
            name: 'seo',
            title: 'SEO',
            type: 'seo',
        }),
    ],
    preview: {
        select: {
        title: 'title',
        author: 'author.name',
        media: 'postThumbnail',
        },
        prepare(selection) {
            const {title, author, media} = selection
            return {
                title: title && title.trim() !== '' ? title : 'Blog Title',
                subtitle: author ? `by ${author}` : '',
                media,
            }
        },
    },
})