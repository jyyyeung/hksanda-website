export default {
  title: '联络',
  name: 'contact',
  type: 'document',
  fields: [
    { name: 'field', title: '聯絡種類名稱', description: '例如：WhatsApp', type: 'string' },
    { name: 'to', title: '聯絡網頁地址', type: 'string' },
    { name: 'icon', type: 'string' },
    { name: 'content', type: 'string', title: '聯絡內容' },
  ]
}
