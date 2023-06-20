export default {
  title: '通知',
  name: 'alert',
  type: 'document',
  fields: [
    {
      name: 'content', title: '通知內容', type: 'array',
      of: [{ type: 'block' }]
    }
  ],
  preview: {
    select: {
      content: 'content',
    },
    prepare({ content }: { content: String }): { title: String } {
      return {
        title: content.toString(),
      };
    },
  },
}
