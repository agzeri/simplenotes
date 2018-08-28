/**
 * @filename loadCSS
 *
 * @description
 * Setup CSS with the project and automatic refresher.
 *
 *     [1] It means that files ending with `.css` should invoke the given
 *         loaders.
 *     [2] Injects the styling through a `style` element.
 *     [3] Goes through possible `@import` and `url` lookups within the
 *         matched files.
 *     [4] How many loaders before `css-loader` should be executed against
 *         the imports found.
 *     [5] Enable source maps for CSS.
 *     [6] `PostCSS` with `cssnext` functionality to write and process CSS 4.
 *     [7] The `PostCSS` configuration file.
 */
const loadCSS = ({ include, exclude } = {}) => ({
  module: {
    rules: [{
      test: /\.css$/,                                     /* [1] */
      include,
      exclude,
      use: [
        'style-loader',                                   /* [2] */
        {
          loader: 'css-loader',                           /* [3] */
          options: {
            importLoaders: 1,                             /* [4] */
            sourceMap: true,                              /* [5] */
          },
        },
        {
          loader: 'postcss-loader',                       /* [6] */
          options: {
            config: {
              path: `${ __dirname }/postcss.config.js`,   /* [7] */
            },
          },
        },
      ],
    }],
  },
});

export default loadCSS;
