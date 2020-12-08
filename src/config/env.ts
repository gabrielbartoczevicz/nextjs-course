const production = process.env.NODE_ENV === 'production';

const domain = production ? process.env.VERCEL_URL : 'http://localhost:3000';

export default {
  domain: production ? `https://${domain}` : domain,
}
