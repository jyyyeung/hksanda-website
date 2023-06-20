import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list"

export default {
  title: '課程內容',
  type: 'document',
  name: 'course-content',
  orderings: [orderRankOrdering],
  fields: [
    {
      name: 'name',
      type: 'string',
      title: '課程',
      validation: (Rule: { required: () => any }) => Rule.required(),
    },
    orderRankField({ type: "course-content" }),
    {
      name: 'content',
      type: 'array',
      title: '內容',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      name: 'name',
    },
    prepare({ name }: { name: String }): { title: String } {
      return {
        title: name
        // media: BiFile,
      }
    },
  },
}
