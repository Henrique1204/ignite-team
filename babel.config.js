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
						'@types_': './src/@types',
						'@helpers': './src/core/helpers',
						'@storage': './src/core/storage',
						'@images': './src/core/assets/images',
						'@screens': './src/screens',
						'@components': './src/components',
					},
				},
			],
		],
	};
};
