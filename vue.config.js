module.exports = {
  outputDir: "_bga/modules/js",
  productionSourceMap: false,
  chainWebpack: (config) => {
    //config.optimization.minimize(false);
  },
  css: {
    extract: false,
  },
  configureWebpack: {
    output: {
      filename: "[name].js",
      chunkFilename: "[name].js",
    },
  },
};
