/**
 * Webpack `development` configuration file.
 *
 *     `devServer`: Importing `webpack-dev-server` functionality.
 */
import merge from 'webpack-merge';

import devServer from './parts/devServer';
import loadCSS from './parts/loadCSS';

const development = merge([
  devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
  loadCSS(),
]);

export default development;
