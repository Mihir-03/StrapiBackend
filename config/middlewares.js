module.exports = [
  {
    name: 'strapi::logger',
    config: {
      level: 'info',
    },
  },
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors',
    config: {
      enabled: true,
      origin: ['http://localhost:5173', 'http://localhost:3000'], // Add more domains if necessary
      headers: '*', // Allow all headers (for testing purposes)
      methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow necessary HTTP methods
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
]; 