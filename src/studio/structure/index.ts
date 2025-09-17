// src/structure/deskStructure.ts
import { StructureResolver } from 'sanity/structure';
import {
  DocumentIcon,
  PinIcon,
  FolderIcon,
  TagIcon,
  UsersIcon,
  CogIcon,
  FeedbackIcon,
  BlockquoteIcon
} from '@sanity/icons';

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Website Content')
    .items([

      S.listItem()
        .title('Pages')
        .icon(DocumentIcon)
        .schemaType('page')
        .child(S.documentTypeList('page').title('Pages')),

      S.listItem()
        .title('Blogs')
        .icon(PinIcon)
        .schemaType('blog')
        .child(S.documentTypeList('blog').title('Blogs')),

      S.listItem()
        .title('Categories')
        .icon(FolderIcon)
        .schemaType('category')
        .child(S.documentTypeList('category').title('Categories')),
      
      S.listItem()
        .title('Tags')
        .icon(TagIcon)
        .schemaType('tag')
        .child(S.documentTypeList('tag').title('Tags')),
          
      S.divider(),

      S.listItem()
        .title('Authors')
        .icon(UsersIcon)
        .schemaType('author')
        .child(S.documentTypeList('author').title('Authors')),

      S.divider(),

      S.listItem()
        .title('FAQs')
        .icon(FeedbackIcon)
        .schemaType('faqs')
        .child(S.documentTypeList('faqs').title('FAQs')),

      S.listItem()
        .title('Testimonials')
        .icon(BlockquoteIcon)
        .schemaType('testimonial')
        .child(S.documentTypeList('testimonial').title('Testimonials')),

      S.divider(),

      S.listItem()
        .title('Settings')
        .icon(CogIcon)
        .child(S.document().schemaType('settings').documentId('settings')),
    ]);
