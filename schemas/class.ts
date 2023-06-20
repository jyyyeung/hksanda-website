export default {
  name: 'class',
  type: 'document',
  title: '常規課程及地點',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: '名稱'
    },
    {
      name: 'type',
      type: 'string',
      title: '教授課程',
      description: '如：女子自衛術'
    },
    {
      name: 'classroom',
      type: 'string',
      title: '教室'
    },
    {
      name: 'time',
      type: 'string',
      title: '時間',
      description: '如：逢星期日 12:00-1:00pm'
    },
    {
      name: 'students',
      type: 'string',
      title: '對象'
    },
    {
      name: 'location',
      type: 'string',
      title: '地點'
    }
  ]
}
