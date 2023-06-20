import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default {
  title: '散手段位',
  name: 'rank',
  type: 'document',
  orderings: [orderRankOrdering],
  fields: [
    {
      title: '段位',
      name: 'name',
      type: 'string'
    },
    orderRankField({ type: "rank" }),
    {
      name: 'awardees',
      title: '學員',
      type: 'array',
      of: [{ type: 'string' }]
    },
    {
      name: 'index',
      title: '排序',
      type: 'number'
    }
  ]
}
