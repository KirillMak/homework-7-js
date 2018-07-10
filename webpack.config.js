const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        main: path.resolve(__dirname,'src','index.jsx'),
        //styles: path.resolve(__dirname,'src','style.css')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        //publicPath: '/'
    },
    module: {
        rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: [{
            loader: 'babel-loader'
          }]
        }, 

        {
            test: /\.css$/,
            exclude: /node_modules/,
            use: ExtractTextPlugin.extract({
                fallback: 'style-loader',
                use:['css-loader']
            })
            
        },

        
        /*{
          test: /\.scss$/,
          exclude: /node_modules/,
          use: [
            isDevelopment ? 'style-loader' : MiniCssExtractPlugin.loader,
            {
              loader: 'css-loader',
              options: {
                minimize: isProduction
              }
            },
            'sass-loader',
            'resolve-url-loader'
          ]
        },*/ 
        {
          test: /\.(gif|png|jpe?g|svg)$/i,
          use: [{
            loader: 'file-loader',
            options: {
              name: 'images/[name][hash].[ext]'
            }
          }, {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 70
              }
            }
          },
          ],
        }/*, {
          test: /\.(eot|svg|ttf|woff|woff2)$/,
          use: {
            loader: 'file-loader',
            options: {
              name: 'fonts/[name][hash].[ext]'
            }
          },
        }*/]
      },
    
    plugins :[
        new ExtractTextPlugin({filename: 'styles.css'}),
        new HtmlWebpackPlugin({
            template: './src/index.html'
          }),
        /*new webpack.ProvidePlugin({
          '$': 'jquery',
          'jQuery': 'jquery'
        })*/
    ] ,
    devServer: {
      historyApiFallback: true
    } 
}