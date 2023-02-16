const { mergeConfig } = require('vite');

module.exports = {
  "stories": [
    "../src/pages/**/*.stories.mdx",
    "../src/stories/**/*.stories.tsx"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y"
  ],
  "framework": "@storybook/react",
  "core": {
    "builder": "@storybook/builder-vite"
  },
  "features": {
    "storyStoreV7": true
  },
  async viteFinal(config, { configType }) {
    if (configType === 'PRODUCTION') {
      config.base = '/05-design-system/'
    }

    // Merge custom configuration into the default config
    return mergeConfig(config, {
      // Use the same "resolve" configuration as your app
      resolve: (await import('../vite.config.mjs')).default.resolve,
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: ['@storybook/addons', '@storybook/theming'],
      },
    });
  },
}