const files = require.context("@/components/codeList", true, /\.js$/);
let codeList = {}; //通过key取值
let menuList = [
  {
    path: "/",
    title: "home"
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
      menuList.push({ path: `/${filename}`, title: filename });
    }
  } else {
    //二级
    let filename = key.replace(/\.\/(\w*)\/(\w*)\.js$/, "$1-$2");
    codeList[filename] = files(key).default;
    console.log("==", RegExp.$1, RegExp.$2, map.has(RegExp.$1));
    if (!map.has(RegExp.$1)) {
      let index = menuList.length;
      map.set(RegExp.$1, index);
      menuList.push({
        title: RegExp.$1,
        children: [
          {
            path: `/${filename}`,
            title: filename
          }
        ]
      });
    } else {
      menuList[map.get(RegExp.$1)].children.push({
        path: `/${filename}`,
        title: filename
      });
    }
  }
});
console.log("codeList", codeList);
console.log("menuList", menuList);

export { codeList, menuList };
