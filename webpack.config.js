'use strict';

let path = require('path');

module.exports = {
	mode: 'development',
	entry: './5.110_Jquery/script.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/5.110_Jquery/dist'
	},
	watch: true,

	devtool: "source-map",

	module: {}
};
