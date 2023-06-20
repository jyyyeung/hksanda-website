export default {
  name: 'video-group',
  title: '影片組',
  type: 'document',
  fields: [
    {
      name: 'videos',
      type: 'array',
      of: [{ type: 'youtube' }]
    }
  ]
}
