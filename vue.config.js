module.exports = {
    productionSourceMap: false,
    css: {
        loaderOptions: {
            sass: {
                prependData: `@import "@/assets/scss/_vars";`
            }
        }
    }
};