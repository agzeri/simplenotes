import merge from 'webpack-merge';

import extractCSS from './parts/extractCSS';

const production = merge([
  extractCSS({
    use: ['css-loader', {
      loader: 'postcss-loader',
      options: {
        config: {
          path: `${ __dirname }/parts/postcss.config.js`
        }
      }
    }],
  }),
]);

export default production;
