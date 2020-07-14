module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/prosa-kanban/" : "/",
  transpileDependencies: ["vuetify"]
};
