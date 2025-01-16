module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
  url: env('PUBLIC_URL', 'https://creative-bell-9a0f896ad5.strapiapp.com'),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', 'someSecretKey'),
    },
  },
  environment: env('NODE_ENV', 'development'),
});
