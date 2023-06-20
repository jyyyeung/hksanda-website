import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default {
  name: 'instructor',
  type: 'document',
  title: '教練',
  orderings: [orderRankOrdering],
  fields: [
    orderRankField({ type: "instructor" }),
    {
      name: 'name',
      type: 'string',
      title: '姓名'
    },
    {
      name: 'strengths',
      type: 'string',
      title: '擅長'
    },
    {
      name: 'certificates',
      type: 'array',
      of: [{ type: 'string' }],
      title: '證書'
    }, {
      name: 'experiences',
      type: 'array',
      of: [{ type: 'string' }],
      title: '經驗'
    }
  ]
}
