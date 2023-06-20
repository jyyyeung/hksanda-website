export default {
  title: '照片墙',
  name: 'masonry',
  type: 'document',
  fields: [
    { name: 'title', type: 'string', title: '名稱' },
    { name: 'description', type: 'string', title: '简介' },
    {
      name: 'images', type: 'array', of: [{
        type: 'object',
        fields: [{ type: 'image', name: 'image' }, {
          type: 'string', name: "alt", title: '简介'
        }]
      }]
    },
  ],
  preview: {
    select: {
      title: 'title',
      description: 'description'
    },
    prepare({ title, description }: { title: String, description: String }): { title: String } {
      return {
        title: title || description,
      };
    },
  },
}
