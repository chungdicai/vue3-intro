const { defineConfig } = require('@vue/cli-service');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      new ESLintPlugin({
        context: 'src',
        extensions: ['.vue', '.js'],
        fix: true,
      }),
    ],
  },
});
