import {defineConfig, renderStudio} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import {media} from 'sanity-plugin-media'
import {copyPastePlugin} from '@superside-oss/sanity-plugin-copy-paste'
import {orderableDocumentListDeskItem} from '@sanity/orderable-document-list'
const config = defineConfig({
  name: 'default',
  title: 'hksanda',

  projectId: '3ttfpt22',
  dataset: 'production',

  plugins: [
    deskTool({
      structure: (S, context) => {
        return S.list()
          .title('Content')
          .items([
            // Minimum required configuration
            orderableDocumentListDeskItem({type: 'page', S, context, title: '网页'}),
            orderableDocumentListDeskItem({type: 'instructor', S, context, title: '教練'}),
            orderableDocumentListDeskItem({
              type: 'assessment-syllabus',
              S,
              context,
              title: '段位考核',
            }),
            orderableDocumentListDeskItem({type: 'rank', S, context, title: '段位'}),
            orderableDocumentListDeskItem({type: 'course-content', S, context, title: '課程內容'}),
            orderableDocumentListDeskItem({type: 'post', S, context, title: '最新资讯'}),
            // ... all other desk items
          ])
      },
    }),
    visionTool(),
    media(),
    copyPastePlugin(),
  ],

  schema: {
    types: schemaTypes,
  },
})

renderStudio(document.getElementById('sanity'), config)

export default config
