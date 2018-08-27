const parts = {
  /**
   * `webpack-dev-server` functionality customized through `devServer` field.
   *
   *     [1] Display only errors to reduce the amount of output.
   *
   *     Parse HOST and PORT from `env` to allow customization.
   *     [2] Defaults to `localhost`.
   *     [3] Defaults to `8080`.
   *
   *     [4] Open the page in browser.
   *     [5] Enabling error overlay.
   */
  devServer: ({ host, port } = {}) => ({
    devServer: {
      stats: 'errors-only', /* [1] */
      host,                 /* [2] */
      port,                 /* [3] */
      open: true,           /* [4] */
      overlay: true,        /* [5] */
    },
  }),
  loadCSS: ({ include, exclude } = {}) => ({
    module: {
      rules: [{
        test: /\.css$/,
        include,
        exclude,
        use: [
          'style-loader',
          'css-loader'
        ]
      }]
    }
  })
};

export default parts;
