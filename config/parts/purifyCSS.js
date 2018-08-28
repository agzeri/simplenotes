/**
 * @filename purifyCSS
 *
 * @description
 * Clean unused CSS classes and remove them from final output.
 */
import purifyCSS from 'purifycss-webpack';

const purify = ({ paths }) => {
  const plugin = new purifyCSS({  /* [1] */
    paths
  });

  return {
    plugins: [plugin],            /* [2] */
  };
};

export default purify;
