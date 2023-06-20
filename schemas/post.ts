import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default {
  title: '資訊',
  name: 'post',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    { name: 'title', type: 'string' },
    orderRankField({ type: "post" }),
    {
      name: 'content',
      title: '内容',
      type: 'blockContent'
    }
  ]
}
