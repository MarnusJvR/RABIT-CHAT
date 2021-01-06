const { override, addWebpackAlias } = require('customize-cra');
const path = require('path');
module.exports = override(
	addWebpackAlias({
		['@components']: path.resolve(__dirname, './src/components'),
		['@routes']: path.resolve(__dirname, './src/routes'),
		['@assets']: path.resolve(__dirname, './src/assets'),
		['@firebase-instance']: path.resolve(__dirname, './src/firebase.js'),
		['@helpers']: path.resolve(__dirname, './src/helpers'),
		['@store']: path.resolve(__dirname, './src/store.js'),
		['@modules']: path.resolve(__dirname, './src/modules')
	})
);
