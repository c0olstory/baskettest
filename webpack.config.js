const path = require('path');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
   entry: './src/main.js',
   // mode: 'development',
   output: {
      path: path.resolve(__dirname, './js'),
      filename: 'main.js',
   },
   resolve: {
      alias: {
         vue: 'vue/dist/vue.js'
      },
   },
   module: {
      rules: [
         {
            test: /\.js$/,
            use: [
               { loader: 'babel-loader' },
            ],
         },
         {
            test: /\.vue$/,
            use: [
               { loader: 'vue-loader' },
            ],
         },
         {
            test: /\.css$/,
            use: [
               { loader: 'style-loader' },
               { 
                  loader: 'css-loader', 
                  options: {
                     modules: true,
                  },
               },
            ],
         }
      ],     
   },
   plugins: [
      new VueLoaderPlugin()
   ]
}

