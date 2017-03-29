var src = "./src";
var dest = "./app";

module.exports = {
  base: {
    src: src,
    dest: dest
  },
  sass: {
    all: src + "/sass/**/*.scss",
    src: src + "/sass/*.scss",
    dest: dest + "/assets/css",
    settings: {}
  },
  js: {
    src: src + "/js/**/*",
    dest: dest + "/assets/js"
  },
  assets: {
    src: src + "/assets/**/*",
    dest: dest + "/assets"
  },
  clean: {
    src: dest
  },
  html: {
    src: src + "/html/**/*",
    dest: dest
  },
  deploy: {
    //https://github.com/electron-userland/electron-packager/blob/master/docs/api.md
    current:{
      settings: {
        dir: "./"
      }
    },
    all:{
      settings: {
        dir: "./",
        all: true,
        appCopyright: "moonrailgun",
        appVersion: require("../package.json").version,
        asar: true,
        out: "./dest/"
      }
    }
  }
}
