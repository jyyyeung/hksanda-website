import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default {
  title: '网页',
  name: 'page',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  orderings: [orderRankOrdering],
  fields: [
    { name: 'title', type: 'string' },
    orderRankField({ type: "page" }),
    { name: 'route', type: 'string', title: '網頁地址' },
    {
      name: 'components', type: 'array', of: [{
        type: 'reference', to: [
          { type: 'carousel' },
          { type: 'masonry' },
          { type: 'view' },
          { type: 'video-group' },
          { type: 'youtube' },
          { type: 'interview' },
          { type: 'rank' },
          { type: 'instructor' },
        ]
      },
      { type: 'carousel' },
      { type: 'masonry' },
      { type: 'view' },
      { type: 'video-group' },
      { type: 'youtube' },
      { type: 'interview' },
      { type: 'rank' },
      { type: 'instructor' },
      { type: 'alert' },
      ]
    },
    // { name: 'seoTitle', title: 'SEO title', type: 'string', group: 'seo' },
    // { name: 'seoKeywords', title: 'Keywords', type: 'string', group: 'seo' },
    // { name: 'seoSlug', title: 'Slug', type: 'slug', group: 'seo' },
    // { name: 'seoImage', title: 'Image', type: 'image', group: 'seo' },
    { name: 'keywords', title: '关键字', type: 'text', group: 'seo' },
  ],

}
