const production = process.env.NODE_ENV === 'production';

export default {
  domain: production ? process.env.VERCEL_URL : process.env.APP_DOMAIN,
}
