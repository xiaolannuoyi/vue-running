const files = require.context("@/components/codeList", true, /\.js$/);
let codeList = {}; //通过key取值
let menuList = [
  {
    path: "/template",
    name: "template",
    title: "模版"
  }
]; //菜单
let map = new Map();
files.keys().forEach(key => {
  // console.warn(key); // ./index.js  ./Element/test.js
  if (key.indexOf("/") == key.lastIndexOf("/")) {
    //一级
    let filename = key.replace(/\.\/(\w*)\.js$/, "$1");

    if (filename !== "index") codeList[filename] = files(key).default;
    if (filename !== "index" && filename !== "template") {
      menuList.push({ path: `/${filename}`, name: filename, title: filename });
    }
  } else {
    //二级
    let filename = key.replace(/\.\/(\w*)\/(\w*)\.js$/, "$1-$2");
    codeList[filename] = files(key).default;

    if (!map.has(RegExp.$1)) {
      let index = menuList.length;
      map.set(RegExp.$1, index);
      menuList.push({
        title: RegExp.$1,
        name: RegExp.$1,
        children: []
      });
    }
    let obj = {
      path: `/${filename}`,
      name: filename,
      title: RegExp.$2
    };
    menuList[map.get(RegExp.$1)].children.push(obj);
  }
});
// console.log("codeList", codeList);
// console.log("menuList", menuList);

export { codeList, menuList };
