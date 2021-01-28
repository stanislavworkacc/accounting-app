const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: {
      category: './public/category/js/addPositionInCat.js',
      categoryEdit: './public/category-edit/js/app.js',
      positionOfCategory: './public/positionOfCategory/js/app.js',
      statistic: './public/statistic/app.js'
    },
    output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'public')
    }
  };