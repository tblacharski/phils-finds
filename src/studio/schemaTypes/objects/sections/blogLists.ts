import { defineType, defineField } from 'sanity'

export default defineType({
  name: 'blogLists',
  title: 'Blog Lists',
  type: 'object',
  fields: [
    defineField({
      name: 'heading',
      title: 'Heading',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'text',
    }),
    defineField({
      name: 'numberOfBlogs',
      title: 'Number of Blogs to Show',
      type: 'number',
      validation: (Rule) => Rule.required().min(1).max(20),
      initialValue: 3,
    }),
    defineField({
      name: 'enablePagination',
      title: 'Enable Pagination?',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'switch',
      },
    }),
    defineField({
      name: 'displayButtons',
      title: 'Display Button?',
      type: 'boolean',
      initialValue: false,
      options: {
        layout: 'switch',
      },
      hidden: ({ parent }) => !parent?.enablePagination,
    }),
    defineField({
      name: 'buttonLabel',
      title: 'Button Label',
      type: 'string',
      hidden: ({ parent }) => !parent?.displayButtons,
    }),
    defineField({
      name: 'buttonLink',
      title: 'Button Link',
      type: 'url',
      validation: (Rule) =>
          Rule.uri({
          scheme: ['http', 'https', 'mailto', 'tel'],
      }),
      hidden: ({ parent }) => !parent?.displayButtons,
    })
  ],
  preview: {
    select: {
      title: 'heading',
    },
    prepare() {
      return {
        title: '📰 Blog List Section',
      };
    },
  },
})