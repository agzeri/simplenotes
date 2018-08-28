import merge from 'webpack-merge';
import glob from 'glob';

import extractCSS from './parts/extractCSS';
import purifyCSS from './parts/purifyCSS';

const PATHS = {
  app: `${ __dirname }/src`,
};

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
  purifyCSS({
    paths: glob.sync(`${ PATHS.app }/**/**.js`, { nodir: true }),
  }),
]);

export default production;
