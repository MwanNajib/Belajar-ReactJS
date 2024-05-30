const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        filename: 'bundle.[contenthash].js', // Gunakan [contenthash]
        path: path.resolve(__dirname, 'dist'), // Tambahkan lokasi output
        clean: true, // Bersihkan folder output pada setiap build
    },
    devtool: 'inline-source-map',
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.css$/, // Perbaiki dari tes ke test dan .js ke .css
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]___[hash:base64:5]', // Ubah localsConvention ke localIdentName
                            sourceMap: true,
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "public/index.html",
            favicon: "public/favicon.ico",
        }),
    ],
    devServer: {
        host: "localhost",
        port: 3000, // Gunakan angka untuk port
        historyApiFallback: true,
        open: true,
    },
};
