var webpack = require('webpack');

module.exports ={
  entry: [
'script!jquery/dist/jquery.min.js',
'script!foundation-sites/dist/foundation.min.js',
'script!bootstrap/dist/js/bootstrap.min.js',
'./app/app.jsx'
  ],
  externals:{
      jquery:'jQuery'
  },
  plugins:[
    new webpack.ProvidePlugin({
      '$':'jquery',
      'jQuery':'jquery'
    })
  ],
  output : {
    path: __dirname,
    filename:'./public/bundle.js'
  },
  resolve:{
    root:__dirname,
    alias:{
      Main: 'app/components/Main.jsx',
      Nav:'app/components/Nav.jsx',
      Weather:'app/components/Weather.jsx',
      About:'app/components/About.jsx',
      Examples:'app/components/Examples.jsx',
      Contact:'app/components/Contact.jsx',
      WeatherForm:'app/components/WeatherForm.jsx',
      WeatherMessage:'app/components/WeatherMessage.jsx',
      openWeatherMap:'app/api/openWeatherMap.jsx',
      Practice:'app/components/Practice.jsx',
      WeatherNav:'app/components/WeatherNav.jsx'

    },
    extensions: ['','.js','.jsx']
  },
  module:{
    loaders: [
      {
        loader: 'babel-loader',
        query:{
          presets:['react','es2015','stage-0']
        },
        test:/\.jsx?$/,
        exclude:/(node_modules|bower_components)/
      }
    ]
  },
  devtool:'cheap-module-eval-source-map'
};
