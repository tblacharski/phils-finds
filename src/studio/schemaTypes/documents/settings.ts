import {defineField, defineType} from 'sanity'
import { CogIcon } from '@sanity/icons';

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
    }),
    defineField({
      name: 'siteLogo',
      title: 'Site Logo',
      type: 'image',
    }),
    defineField({
      name: 'copyrightText',
      title: 'Copyright Text',
      type: 'string',
    }),
    defineField({
      name: 'homePage',
      title: 'Home Page',
      type: 'reference',
      to: [{ type: 'page' }],
      options: {
        disableNew: true,
      },
    }),
    defineField({
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{ type: 'socialLink' }],
    }),
    defineField({
        name: 'headerNavigation',
        title: 'Header Navigation',
        type: 'array',
        of: [{ type: 'navItem' }],
    }),
     defineField({
        name: 'footerNavigation',
        title: 'Footer Navigation',
        type: 'array',
        of: [{ type: 'navItem' }],
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
      media: 'siteLogo',
    },
    prepare(selection) {
      return {
        title: selection.title || 'Sanity Verse',
        media: selection.media,
      };
    },
  },
})