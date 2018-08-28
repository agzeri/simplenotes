/**
 * @filename extractCSS
 *
 * @description
 * Production functionality to extract inline CSS and paste it into its
 * own file.
 *
 *     [1] Output extracted CSS to a file. It means to generate a separeted CSS
 *         using `mini-css-extract-plugin`.
 *     [2] The `[name]` placeholder uses the same name of the entry where the
 *         CSS is referred.
 *     [3] Rules to execute each plan from loaders.
 *     [4] Means that files ending with `.css` should invoke given loaders.
 *     [4] `test` matches against a JavaScript-style regular expression.
 *     [5] Loaders are transformations that are applied to source files, and
 *         return the new source.
 *     [6] Specific loader from `mini-css-extract-plugin` that marks the assets
 *         to be extracted.
 *     [7] A webpack section to run plugins after loaders where successfully
 *         implemented.
 */
import extract from 'mini-css-extract-plugin';

const extractCSS = ({ include, exclude, use = [] }) => {
  const plugin = new extract({  /* [1] */
    filename: '[name].css',     /* [2] */
  });

  return {
    module: {
      rules: [{                 /* [3] */
        test: /\.css$/,         /* [4] */
        include,
        exclude,
        use: [                  /* [5] */
          extract.loader        /* [6] */
        ].concat(use),
      }],
    },
    plugins: [plugin],          /* [7] */
  };
};

export default extractCSS;
