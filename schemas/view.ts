export default {
  title: '文字',
  name: 'view',
  type: 'document',
  fields: [
    {
      title: 'title',
      name: 'title',
      type: 'string',
    },
    {
      title: '內容',
      name: 'content',
      type: 'array',
      of: [{ type: 'block' }]
    },
  ],
  // preview: {
  //   select: {
  //     title: 'title', content: 'content'
  //   },
  //   prepare(selection) {
  //     const { title, content } = selection
  //     return {
  //       title: title,
  //       subtitle: content
  //     }
  //   }
  // }
}
