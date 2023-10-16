module.exports = {
  apps: [
    {
      name: "landing",
      script: "npm",
      args: "start",
      env_production: {
        NODE_ENV: "production",
      },
    },
  ],
};