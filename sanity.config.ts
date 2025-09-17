'use client';

import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {assist} from '@sanity/assist'
import { schemaTypes } from './src/studio/schemaTypes'
import { clientEnv } from './src/env/clientEnv';
import { structure } from './src/studio/structure';

export default defineConfig({
  basePath: '/studio',
  name: 'default',
  title: 'Sanity Verse',

  projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET,

  plugins: [
    structureTool({structure}), 
    visionTool(),
    assist(),
  ],

  schema: {
    types: schemaTypes,
  },
})
