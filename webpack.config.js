const path = require('path');

module.exports = {
  entry: './dist/app.ts',
  output: {
    path: path.resolve(__dirname, 'webpack'),
    filename: 'bundle.js',
  },
};