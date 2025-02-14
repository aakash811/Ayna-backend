module.exports = ({ env }) => ({
  url: env("RENDER_EXTERNAL_URL"), // Render's dynamic URL
  proxy: true,
  app: {
    keys: env.array("APP_KEYS"),
  },
});
