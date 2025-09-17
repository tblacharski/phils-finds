import { defineQuery } from 'next-sanity';
import { 
  siteLogoFragment,
  socialLinksFragment,
  headerNavFragment,
  footerNavFragment
 } from './fragments';

export const settingsQuery = defineQuery(`*[_type == "settings"][0]{
  siteTitle,
  siteDescription,
  ${siteLogoFragment},
  copyrightText,
  ${socialLinksFragment},
  ${headerNavFragment},
  ${footerNavFragment}
}`);

export const headerQuery = defineQuery(`*[_type == "settings"][0]{
  siteTitle,
  siteDescription,
  ${siteLogoFragment},
  ${socialLinksFragment},
  ${headerNavFragment},
}`);

export const siteTitleAndDescriptionQuery = defineQuery(`*[_type == "settings"][0]{
  siteTitle,
  siteDescription,
}`);

export const footerQuery = defineQuery(`*[_type == "settings"][0]{
  siteTitle,
  copyrightText,
  ${socialLinksFragment},
  ${footerNavFragment}
}`);


export const homePageQuery = defineQuery(`*[_type == "settings"][0]{
  homePage->{
    title,
    "slug": slug.current
  }
}`);

export const getPageBySlugQuery = (slug: string) => `*[_type == "page" && slug.current == "${slug}"][0]{
  _id,
  title,
  "slug": slug.current,
  featuredImage{
    alt,
    "url": asset->url
  },
  publishedAt,
  author->{
    name,
    "slug": slug.current,
    designation,
    image{
      alt,
      "url": asset->url
    },
    content,
    socialLinks[],
  },
  seo,
  bodyContent[]
}`;

export const getBlogBySlugQuery = (slug: string) => `*[_type == "blog" && slug.current == "${slug}"][0]{
  _id,
  title,
  "slug": slug.current,
  featuredImage{
    alt,
    "url": asset->url,
    "_ref": asset->_id
  },
  publishedAt,
  author->{
    name,
    "slug": slug.current,
    designation,
    image{
      alt,
      "url": asset->url,
      "_ref": asset->_id
    },
    content,
    socialLinks[],
  },
  categories[]->{
    _id,
    title,
    "slug": slug.current
  },
  tags[]->{
    _id,
    title,
    "slug": slug.current
  },
  seo,
  bodyContent[],
  excerpt
}`;

export const faqsQuery = defineQuery(`*[_type == "faqs" && _id in $ids]{
  _id,
  title,
  "slug": slug.current,
  content,
}`);

export const blogQuery = (
  perPage = 3,
  page = 1,
  search = "",
  categorySlug = "",
  tagSlug = "",
  authorSlug = ""
) =>
  defineQuery(`{
  "total": count(*[
    _type == "blog" &&
    (
      title match "${search}*" ||
      excerpt match "${search}*" ||
      author->name match "${search}*"
    ) &&
    (
      !defined("${categorySlug}") || "${categorySlug}" == "" || "${categorySlug}" in categories[]->slug.current
    ) &&
    (
      !defined("${tagSlug}") || "${tagSlug}" == "" || "${tagSlug}" in tags[]->slug.current
    ) &&
    (
      !defined("${authorSlug}") || "${authorSlug}" == "" || author->slug.current == "${authorSlug}"
    )
  ]),
  "blogs": *[
    _type == "blog" &&
    (
      title match "${search}*" ||
      excerpt match "${search}*" ||
      author->name match "${search}*"
    ) &&
    (
      !defined("${categorySlug}") || "${categorySlug}" == "" || "${categorySlug}" in categories[]->slug.current
    ) &&
    (
      !defined("${tagSlug}") || "${tagSlug}" == "" || "${tagSlug}" in tags[]->slug.current
    ) &&
    (
      !defined("${authorSlug}") || "${authorSlug}" == "" || author->slug.current == "${authorSlug}"
    )
  ] 
    | order(_createdAt desc) 
    [${(page - 1) * perPage}...${page * perPage}] {
      _id,
      title,
      "slug": slug.current,
      publishedAt,
      featuredImage{
        alt,
        "url": asset->url,
        "_ref": asset->_id
      },
      categories[]->{
        _id,
        title,
        "slug": slug.current
      },
      tags[]->{
        _id,
        title,
        "slug": slug.current
      },
      author->{
        _id,
        name,
        "slug": slug.current,
        image{
          alt,
          "url": asset->url,
          "_ref": asset->_id
        }
      },
      excerpt,
      bodyContent[]
    }
}`);

export const getCategoryBySlugQuery = (slug: string) => `*[_type == "category" && slug.current == "${slug}"][0]{
  _id,
  title,
  "slug": slug.current,
  description,
}`;

export const getTagBySlugQuery = (slug: string) => `*[_type == "tag" && slug.current == "${slug}"][0]{
  _id,
  title,
  "slug": slug.current,
  description,
}`;

export const getAuthorBySlugQuery = (slug: string) => `*[_type == "author" && slug.current == "${slug}"][0]{
  _id,
  name,
  "slug": slug.current,
  designation,
  image{
    alt,
    "url": asset->url,
    "_ref": asset->_id
  },
  content,
  socialLinks[] {
    title,
    url,
    icon {
      alt,
      "url": asset->url,
      "_ref": asset->_id
    }
  },
}`;