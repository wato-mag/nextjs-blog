import { createClient } from "microcms-js-sdk";

export const client = createClient({
  serviceDomain: 'njfa',
  apiKey: process.env.API_KEY,
});
