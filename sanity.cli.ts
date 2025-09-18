import {defineCliConfig} from 'sanity/cli'
import { clientEnv } from './src/env/clientEnv';

export default defineCliConfig({
  api: {
    projectId: clientEnv.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: clientEnv.NEXT_PUBLIC_SANITY_DATASET
  },
  deployment: {
    appId: '472296'
  },
  autoUpdates: true,
})
