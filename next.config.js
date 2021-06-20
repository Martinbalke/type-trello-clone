module.exports = {
	webpack(config, options) {
      config.module.rules.push({
      test: /\.(png|jpg|jpeg|gif)$/i,
      type: "asset/resource",
    });
		return config;
	},
};
