module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === "production" ? "/vue-running" : "/",
  productionSourceMap: false, //关闭生产环境的sourceMap
  chainWebpack: config => {
    config.optimization.minimizer("terser").tap(args => {
      Object.assign(args[0].terserOptions.compress, {
        // 生产模式 console.log 去除
        pure_funcs: ["console.log"]
      });
      return args;
    });
  }
};
