// tiny wrapper with default env vars

if (!process.env.NODE_ENV && process.argv.includes('--production')) {
  process.argv.NODE_ENV = 'production'
}

module.exports = {
  NODE_ENV: (process.env.NODE_ENV || "development"),
  PORT: (process.env.PORT || 3000)
};
