module.exports = ({ env }) => ({
    "beckn-bpp-adapter": {
      enabled: true,
      resolve: "./src/plugins/plugins/beckn-bpp-adapter", // path to the plugin folder,
    },
    "beckn-mdm": {
      enabled: true,
      resolve: "./src/plugins/plugins/beckn-mdm", // path to the plugin folder,
    },
    "beckn-trade-bap": {
      enabled: true,
      resolve: "./src/plugins/plugins/beckn-trade-bap", // path to the plugin folder,
    },
    "beckn-trade-bpp": {
      enabled: true,
      resolve: "./src/plugins/plugins/beckn-trade-bpp", // path to the plugin folder,
    },
    "unified-beckn-energy": {
      enabled: true,
      resolve: "./src/plugins/plugins/unified-beckn-energy", // path to the plugin folder,
    },
    // "driver-app": {
    //   enabled: true,
    //   resolve: "./src/plugins/plugins/driver-app", // path to the plugin folder,
    // },
    // "industry-plugin": {
    //   enabled: true,
    //   resolve: "./src/plugins/plugins/industry-plugin", // path to the plugin folder,
    // },
    "users-permissions": {
      config: {
        jwt: {
          expiresIn: "24h",
        },
      },
    },
    // "unsolicited-request-plugin": {
    //   enabled: true,
    //   resolve: "./src/plugins/plugins/unsolicited-request-plugin",
    // },
    // 'policy-api': {
    //   enabled: true,
    //   resolve: './src/plugins/plugins/policy-api'
    // },
    // 'policy-violation': {
    //   enabled: true,
    //   resolve: './src/plugins/plugins/policy-violation'
    // },
    // "ptop-energy": {
    //   enabled: true,
    //   resolve: "./src/plugins/plugins/ptop-energy", // path to the plugin folder,
    // },
    'email': {
      config: {
        provider: 'sendgrid',
        providerOptions: {
          apiKey: env('SENDGRID_API_KEY'),
        },
        settings: {
          defaultFrom: env('SENDGRID_DEFAULT_FROM_EMAI'),
          defaultReplyTo: env('SENDGRID_REPLY_TO_EMAIL'),
        },
      },
    },
  });
  