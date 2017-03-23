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
    dest: dest + "/css",
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
  }
}
