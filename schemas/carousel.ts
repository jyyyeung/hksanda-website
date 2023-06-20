export default {
  title: '旋转幻灯片',
  name: 'carousel',
  type: 'document',
  fields: [
    {
      title: '頁面',
      name: 'slides',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'image', type: 'image', title: '照片' },
          { name: 'title', type: 'string', title: '標題' },
          { name: 'paragraph', type: 'text', title: '內容' }
        ]
      }]
    }
  ]
}
