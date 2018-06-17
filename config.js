const configs = [
  {
    env: "default",
    headerIsEnabled: true,
    subHeaderIsEnabled: true
  },
  {
    env: "US",
    headerIsEnabled: true,
    subHeaderIsEnabled: false
  }
];

module.exports = env => configs.find(c => c.env === env) || configs[0];
