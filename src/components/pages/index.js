const files = require.context("@/components/pages", true, /\.vue$/);
//icon
const iconList = {
  home: "el-icon-s-home",
  "element/": "el-icon-eleme",
  "iview/": "ivu-icon ivu-icon-logo-vimeo"
};
//菜单
const menuList = [
  {
    path: "/home",
    name: "home",
    title: "home"
  }
];
//所有组件导入
const modules = {};

files.keys().forEach(filePath => {
  let key = filePath.substring(2, filePath.lastIndexOf("."));

  if (key !== "index" && key !== "sidebar") {
    // menuList
    if (key !== "messageBoard") {
      menulistHandle(key);
    }
    //modules
    let temName = filePath
      .substring(2, filePath.lastIndexOf("."))
      .replace("/", "-"); //组件名  element-input
    console.warn("temName", temName);
    let filemodule = files(filePath).default;
    modules[temName] = {
      ...filemodule
    };
  }
});
console.log("menuList", menuList);
console.log("modules", modules);
//路由处理->生成菜单
function menulistHandle(key) {
  let keyArr = key.split("/");

  let Pointer = menuList;

  for (let i = 0, len = keyArr.length; i < len; i++) {
    let lastPointer = Pointer;

    let curnode = keyArr[i];
    //menuList 是否存在
    for (let menu of Pointer) {
      if (menu.title == curnode) {
        Pointer = menu.children;
        break;
      }
    }

    if (lastPointer == Pointer) {
      let name =
        i === keyArr.length - 1 ? key : keyArr.slice(0, i + 1).join("/") + "/";

      let newNode = {
        name,
        title: curnode,
        children: []
      };
      if (i === keyArr.length - 1) {
        delete newNode.children;
      }

      Pointer.push(newNode);
      Pointer = newNode.children;
    }
  }
}
export { menuList, iconList, modules };
