export default ({ env }) => {
  const frontendUrl = env('FRONTEND_URL', 'https://red-dog-sheltor.vercel.app').replace(/\/$/, '');

  return [
    'strapi::logger',
    'strapi::errors',
    'strapi::security',
    {
      name: 'strapi::cors',
      config: {
        origin: [
          'http://localhost:5173',
          'http://localhost:5174',
          'http://localhost:3000',
          frontendUrl,
          'https://red-dog-sheltor.vercel.app',
        ],
        methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'HEAD', 'OPTIONS'],
        headers: ['Content-Type', 'Authorization', 'Origin', 'Accept'],
        keepHeaderOnError: true,
      },
    },
    'strapi::poweredBy',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
  ];
};
