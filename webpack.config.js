'use strict';

let path = require('path');

module.exports = {
	mode: 'development',
	entry: './5.103_exportES6/src/js/script.js',
	output: {
		filename: 'bundle.js',
		path: __dirname + '/5.103_exportES6/js'
	},
	watch: true,

	devtool: "source-map",

	module: {}
};
