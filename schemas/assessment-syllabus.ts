import { orderRankField, orderRankOrdering } from "@sanity/orderable-document-list";

export default {
  name: 'assessment-syllabus',
  type: 'document',
  title: '考試動作',
  orderings: [orderRankOrdering],
  fields: [
    {
      name: 'level',
      type: 'string',
      title: '級別名稱'
    },
    orderRankField({ type: "assessment-syllabus" }),
    {
      name: 'syllabus',
      type: 'array',
      of: [{ type: 'string' }],
      title: '考核內容'
    }
  ]
}
