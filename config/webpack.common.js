import merge from 'webpack-merge';
import template from 'html-webpack-plugin';

const common = merge([{
  plugins: [
    new template({
      title: 'DueTo: The simplest way to keep tasks'
    }),
  ],
}]);

export default common;
