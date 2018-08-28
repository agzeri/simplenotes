import merge from 'webpack-merge';

import parts from './webpack.parts';

const production = merge([
  parts.extractCSS({
    use: ['css-loader', {
      loader: 'postcss-loader',
      options: {
        config: {
          path: `${ __dirname }/postcss.config.js`
        }
      }
    }],
  }),
]);

export default production;
