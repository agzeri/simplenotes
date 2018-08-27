import merge from 'webpack-merge';

import parts from './webpack.parts';

const development = merge([
  parts.devServer({
    host: process.env.HOST,
    port: process.env.PORT,
  }),
]);

export default development;
