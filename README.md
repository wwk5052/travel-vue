# travel-vue

This is travel about vue

## 包管理

- `fastclick`:防止移动端点击事件 300ms 延时问题
- `border.css`:移动端的二倍屏问题
- `reset.css`: 针对不同浏览器，统一默认样式
- `stylus`:使用`stylus`进行样式开发
- `stylus-loader`
- `vue-awesome-swiper`:构建轮播图
- `better-scroll`:用于城市页面的滑动效果的第三方包
- `babel-polyfill`:用来检测手机的浏览器中是不是含有`promise`对象，防止手机白屏

## 组件之间的数据传递：

- `vuex`
- `bus`总线

## `ajax`的发送：

可以使用 vue 中自带的`proxy`来进行接口的配置
文件在`config`文件夹的`index.js`中进行配置

- 使用`keepalive`进行优化：页面每次重新渲染的时候,`mounted`都会重新执行,`ajax`都后重新发送,也就导致了数据的重复请求。使用这个标签的话，就可以将路由首次渲染页面缓存的数据放在浏览器的缓存中，不会重新的发送 ajax 请求。

## `Vue`项目打包上线

- `npm run build`:进行打包
- 在本地`wamp`中的 www 目录中将打包之后的 dist 文件进行替换
- 在`config`文件中的`index.js`中的`proxyTable`进行端口的配置
