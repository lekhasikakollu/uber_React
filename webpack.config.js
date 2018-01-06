module.exports = {
    entry: {
        app: __dirname + '/src/myproject.js',
    },
    devtool: 'inline-source-map',
    output: {
        path: __dirname + '/public/js',
        filename: 'bundle.js',
        publicPath: '/',
    },
    module: {
        rules: [{
            test: [/\.js$/, /\.jsx$/],
            exclude: [/node_modules/],
            use: [{
                loader: 'babel-loader',
                options: { presets: ['es2015', 'react'] },
            }]
        },
        {
          test: /\.css$/,
          exclude: [/node_modules/],
          loader:"style-loader!css-loader"
        }]
    },
    devServer: {
        contentBase: './public'
    }
}

