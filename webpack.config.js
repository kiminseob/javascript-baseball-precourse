const path = require('path');

module.exports = {
  entry: ['./src/index.js'],
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve(__dirname, 'src/'),
        ],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-private-methods',
              ['module-resolver', {
                'root': ['.'],
                'alias': {
                  '@game': ['./src/game'],
                  '@config': ['./src/config'],
                  '@error': ['./src/error'],
                  '@event': ['./src/event'],
                },
              }],
            ],
          },
        },
      },
    ],
  },
  devtool: 'source-map',
  mode: 'development',
};
