import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure' 
import { visionTool } from '@sanity/vision'
import schemas from './sanity/schemas'

const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? process.env.SANITY_PROJECT_ID
const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET ?? process.env.SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error(
    'Missing Sanity environment variables. Set NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET (or SANITY_PROJECT_ID and SANITY_DATASET) in your .env.local file.'
  )
}

export default defineConfig({
  name: 'default',
  title: 'F&B Heroes GmbH',

  projectId,
  dataset,

  basePath: '/admin',

  plugins: [structureTool(), visionTool()],
  schema: {
    types: schemas, 
  },
})