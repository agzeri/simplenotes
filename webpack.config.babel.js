import template from 'html-webpack-plugin';

export default {
  /**
   * `webpack-dev-server` functionality customized through `devServer` field.
   *
   *     [1] Display only errors to reduce the amount of output.
   *
   *     Parse HOST and PORT from `env` to allow customization.
   *     [2] Defaults to `localhost`.
   *     [3] Defaults to `8080`.
   *     [4] Open the page in browser.
   */
  devServer: {
    stats: 'errors-only', /* [1] */
    host: process.env.HOST, /* [2] */
    port: process.env.PORT, /* [3] */
    open: true, /* [4] */
  },
  plugins: [
    new template({
      title: 'DueTo: The simplest way to keep tasks'
    }),
  ],
};
