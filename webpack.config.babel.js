import merge from 'webpack-merge';

import common from './config/webpack.common';
import development from './config/webpack.development';
import production from './config/webpack.production';

export default mode => {
  if (mode === 'production') {
    return merge(common, production, { mode });
  }

  return merge(common, development, { mode });
};
