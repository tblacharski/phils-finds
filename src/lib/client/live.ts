import { defineLive } from 'next-sanity';
import { client } from './client';
import { serverEnv } from '@/env/serverEnv';

export const { sanityFetch, SanityLive } = defineLive({
  client,
  serverToken: serverEnv.SANITY_API_READ_TOKEN,
  browserToken: serverEnv.SANITY_API_READ_TOKEN,
});
