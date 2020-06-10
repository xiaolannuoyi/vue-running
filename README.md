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


[github地址](https://github.com/xiaolannuoyi/vue-running)

[在线地址1](https://xiaolannuoyi.github.io/vue-running/)

[在线地址2](http://vue-running.xlny.ltd/vue-running/)

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
