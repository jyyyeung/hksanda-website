export default {
  name: 'interview',
  type: 'document',
  title: '媒体及采访',
  fields: [
    { title: '公司', name: 'company', type: 'string' },
    { title: '标题', name: 'title', type: 'string' },
    {
      title: '照片', name: 'images', type: 'array', of: [
        {
          type: 'object',
          fields: [
            { type: 'image', name: 'image' },
            { type: 'string', name: 'alt' }
          ]
        }
      ]
    },
    { title: '报道网页', name: 'url', type: 'url' },
    { name: 'publishedDate', title: '出版日期', type: 'date' }

  ]
}
