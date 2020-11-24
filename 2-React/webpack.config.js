const path = require('path');

module.exports = {
  // localização do arquivo principal javascript dentro da
  // pasta src
  entry: path.resolve(__dirname, 'src', 'index.js'),
  //arquivo de saida que o webpack vai gerar
	output: {
    path: path.resolve(__dirname, 'public'),
	filename: 'bundle.js' 
	},
  devServer: {
	  contentBase: path.resolve(__dirname, 'public'),
  },
	module: {
		rules: [
		  { 
	      test: /\.js$/, //string tem que terminar com .js
			  exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					}
			},
			{ 
	      test: /\.css$/, //string tem que terminar com .css
			  exclude: /node_modules/,
				use: [
					{ loader: 'style-loader' },
					{ loader: 'css-loader' },
					]
			},
			{ 
	      test: /.*\.(gif|png|jpe?g)$/i, //string tem que terminar com extensão de img
				use: {
					loader: 'file-loader',
				}
					
			}
		]
	},
};