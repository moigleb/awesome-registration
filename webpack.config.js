const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        },{
          test: /\.(gif|jpe?g|png|ico)$/,
          loader: 'url-loader?limit=10000'
        },
          {
            test: /\.(otf|eot|svg|ttf|woff|woff2).*$/,
            loader: 'url-loader?limit=10000'
          }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback: true
    }
};