/**
 * Common configuration file.
 *
 *     `template`: Generate an index.html file and automatically create
 *                 a source link with JavaScript bundle.
 */
import merge from 'webpack-merge';
import template from 'html-webpack-plugin';

import parts from './webpack.parts';

const common = merge([
  {
    plugins: [
      new template({
        title: 'DueTo: The simplest way to keep tasks'
      }),
    ],
  },
  parts.loadCSS(),
]);

export default common;
