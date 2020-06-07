module.exports = {
  lintOnSave: false,
  runtimeCompiler: true,
  publicPath: process.env.NODE_ENV === "production" ? '/vue-running' : "/"
};
