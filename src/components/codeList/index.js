const files = require.context("@/components/codeList", true, /\.js$/);
let codeList = {}; //通过key取值
//icon
let iconList = {
  template: "ivu-icon ivu-icon-logo-vimeo",
  "element/": "el-icon-eleme",
  "iview/": "ivu-icon ivu-icon-logo-vimeo"
};
//菜单
let menuList = [
  {
    path: "/template",
    name: "template",
    title: "模版"
  }
];
files.keys().forEach(filePath => {
  let len = filePath.length;
  let key = filePath.substr(2, len - 5);
  // codeList
  if (key !== "index") codeList[key] = files(filePath).default;
  // menuList
  if (key !== "index" && key !== "template") {
    menulistHandle(key);
  }
});
console.log("codeList", codeList);
console.log("menuList", menuList);

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
export { codeList, menuList, iconList };
