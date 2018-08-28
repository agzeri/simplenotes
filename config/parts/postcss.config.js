/**
 * @filename postcss.config.js
 *
 * @description
 * PostCSS configuration file, this in particular it’s using:
 *
 *    `plugins`:
 *        + import
 *        + transform-custom-properties
 *        + nesting
 *        + cssnext [Stage 2 by default]
 */
module.exports = {
  plugins: {
    'postcss-import': {},
    'postcss-nesting': {},
    'postcss-preset-env': {
      browsers: 'last 2 versions',
    },
  },
};
