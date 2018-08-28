import merge from 'webpack-merge';

import parts from './webpack.parts';

const production = merge([
  parts.extractCSS({
    use: 'css-loader',
  }),
]);

export default production;
