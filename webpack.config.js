const path = require('path');
const autoprefixer = require('autoprefixer');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = (env, { mode }) => {
  const htmlPlugin = new HtmlWebPackPlugin({
    template: './src/index.html',
    filename: './index.html',
  });

  return {
    // Configure loaders based on extension.
    module: {
      rules: [
        {
          exclude: /node_modules/,
          test: /\.(jsx?|tsx?)$/,
          use: {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: [['react-app', { flow: false, typescript: true }]],
            },
          },
        },
        {
          exclude: /node_modules/,
          test: /\.(sa|sc|c)ss$/,
          use: [
            'style-loader',
            'css-loader',
            {
              loader: 'postcss-loader',
              options: {
                postcssOptions: {
                  plugins: [autoprefixer()],
                },
              },
            },
            'resolve-url-loader',
            'sass-loader',
          ],
        },
      ],
    },

    // Use different filenames for production and development builds for clarity.
    output: {
      clean: mode === 'production',
      filename: mode === 'production'
        ? '[name].bundle.min.js'
        : '[name].js',
      path: path.join(__dirname, 'build'),
      publicPath: '/',
    },

    // Configure plugins.
    plugins: [htmlPlugin],

    // Hook up aliases.
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
      extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },

    // Cache the generated webpack modules and chunks to improve build speed.
    // @see https://webpack.js.org/configuration/cache/
    cache: {
      type: 'filesystem',
    },
  };
};
