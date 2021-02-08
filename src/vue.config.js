module.exports = {
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
            args[0].title = 'Restap';
            return args;
        })
  },
  css: {
    loaderOptions: {
      sass: {
        data: `@import "@/styles/_variables.scss";, @import "@/styles/_mixin.scss";`
      }
    }
  }
};