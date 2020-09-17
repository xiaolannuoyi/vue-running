@[toc]
# vue-running

> 在线运行 `.vue`文件，支持[element-ui](https://element.eleme.cn/#/zh-CN/component/installation)、[iview](https://www.iviewui.com/docs/introduce)。
>
> 参考[iview-run](https://run.iviewui.com/)


>用到了[iview split面板分割组件](https://www.iviewui.com/components/split)、[vue-codemirror](https://github.com/surmon-china/vue-codemirror)插件


## 实现方法

使用了vue的构造器`extend`与手动挂载`$mount`

* 将代码进行切割（html，js，css）
* extend 构造的实例通过` $mount` 渲染后，挂载到了组件唯一的一个节点上。（`new Function`,`extend`, ` $mount` ）
* 组件销毁时，手动销毁 extend 构造的实例及style（为便于销毁，添加随机 id 用于标识）。

## 代码功能

* 支持sublime快捷键 [快捷键详情](https://codemirror.net/demo/sublime.html)

* 支持代码提示

  

## 菜单功能

> 新增菜单功能，用于存储代码。

项目下的`src/components/codeList`下，存放自己的代码文件。会`自动生成对应的目录`，支持多层级目录。

```js
├── element
│   ├── select1.js
│   ├── table-form.js
│   └── test
│       ├── rr
│       │   └── jj.js
│       └── testone.js
├── iview
│   └── test.js
├── index.js   //配置 
└── template.js 
```

<img src="https://gitee.com/xiaolannuoyi/my_drawing_bed/raw/master/image/WeChatdd68b41612a4a1c76ac3d21b40d81182.png" alt="WeChatdd68b41612a4a1c76ac3d21b40d81182" style="zoom:50%;" />



**图标配置**

在`src/components/codeList/index.js`,可以添加图标

例子如下

```js
let iconList = {
  template: "ivu-icon ivu-icon-logo-vimeo",
  "element/": "el-icon-eleme",
  "iview/": "ivu-icon ivu-icon-logo-vimeo"
};
```

> Key：是路径。value：图标
>
> 为了使用两个ui组件的图标。
>
> 目录的图标使用的是`<i :class="iconList[item.name]" />`
>
> 所以iview的图标需要这样写`ivu-icon ivu-icon-*******`



## 留言板功能

* 基于[valine](https://valine.js.org/)添加留言板和访问量统计

* 并引入[不蒜子](http://busuanzi.ibruce.info/)统计

* 并添加邮件提醒功能


# 问题记录

* **1.** 路由参数重含有`/`

 想以文件的路径当路由参数（含有`/`,例如：a/b/c），但是路由解析不了。

所以，用了`encodeURIComponent`来解决。

* **2.** 解决嵌套使用codemirror时，点击才会显示的问题。

```js
created() {
  setTimeout(() => {
    this.$refs.mycodemirror.codemirror.refresh();
  }, 1);
}
```
* **3.** github pages 路由问题

  `https://xiaolannuoyi.github.io/vue-running/template`刷新后是404。

  修改路由模式为`hash`

> Github pages原生不支持单页面应用，没有为前端路由提供支持，并且为了安全，也不支持自定义后台配置。因此，我们没办法直接配置服务来fallback我们的应用。
>
> [参考链接](https://www.zhihu.com/question/64173754)



[github地址](https://github.com/xiaolannuoyi/vue-running)

[在线地址1](https://xiaolannuoyi.github.io/vue-running/)

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
