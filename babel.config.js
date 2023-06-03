module.exports = function (api) {
	api.cache(true);
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			[
				'module-resolver',
				{
					root: ['./src'],
					alias: {
						'@types': './src/@types',
						'@core': './src/core',
						'@utils': './src/core/utils',
						'@storage': './src/core/storage',
						'@images': './src/core/assets/images',
						'@routes': './src/routes',
						'@screens': './src/screens',
						'@components': './src/components',
					},
				},
			],
		],
	};
};
