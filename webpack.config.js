const path = require('path');

module.exports = {
   entry: './src/shop.js',
   // mode: 'development',
   output: {
      path: path.resolve(__dirname, './js'),
      filename: 'shop.js',
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: [
               { loader: 'babel-loader' },
            ],
         },
         // {
         //    test: /\.css$/,
         //    use: [
         //       { loader: 'style-loader' },
         //       { loader: 'css-loader' },
         //    ],
         // }
      ],
      
   }
}

