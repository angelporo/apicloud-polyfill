# apicloud-polyfill

## 简介

[apicloud-polyfill](https://github.com/apicloudcom/apicloud-polyfill),是 [APICloud](http://www.apicloud.com/) 为切实提高混合移动应用开发中,广大前端开发者的开发体验而推出的一个脚手架. 借助 **apicloud-polyfill** ,前端开发者,可以直接在 APICloud 项目中,使用最新的 es6,es7语法.

开源地址: [https://github.com/apicloudcom/apicloud-polyfill](https://github.com/apicloudcom/apicloud-polyfill)

APPLoader 下载: [http://docs.apicloud.com/Download/download#apploader](http://docs.apicloud.com/Download/download#apploader)

**注意**: [apicloud-cli](https://www.npmjs.com/package/apicloud-cli) **0.2.0** 以上版本及其衍生工具, 已全面支持 *apicloud-polyfill*,可直接在 命令行/终端 安装使用.

## 特性

* 直接使用最新的 **es6** , **es7** JS 语法,打破前端开发与原生开发次元壁
* 模块式前端开发,更友好的混合开发体验
* 自由安装 npmjs 上各类标准模块,海量功能,呼之即来
* 开放的 *webpack*, *bable* 配置,自由定制与集成其他业务工作流
* 与 [APICloud CLI](https://www.npmjs.com/package/apicloud-cli) 命令行工具无缝融合,混合开发更加智能高效

## 安装

```sh
npm i apicloud-polyfill --save
```

## 使用

JS类库方式: 

```js
import Polyfill from "apicloud-polyfill"
Polyfill({project:"./"})
```

或 使用 [apicloud cli](https://www.npmjs.com/package/apicloud-cli) :

```sh
apicloud polyfill --project ./
```

## 基础

### 1.请保证项目是一个有效的APICloud项目,即根目录必须存在 *config.xml* 文件;


### 2.项目 polyfill 化以后,请先在项目根目录执行以下命令,以初始化项目:

```sh
npm i
```

### 3.如果想体验 polyfill 自带的时钟示例,请先执行以下命令安装 momentjs 库:

```sh
# web开发中,一般使用--save-dev来保存依赖,仅供调试环境使用.
npm i moment --save-dev
```

#### 4.可以在 *config.xml* 中,将 *content* 字段修改为 *ClockShow.html*,来快速体验基于 es6 的时钟实例:

```
# 先在手机 *APPloader* 中与电脑建立连接,再执行下面的npm同步指令
npm run bundle_d_s

# 如果已安装 apicloud-cli,也可以直接使用 apicloud 调用指令
apicloud run bundle_d_s
```

### 5.polyfill 化以后,项目将自动支持一下 npm 指令:

指令 | 简介
---- | ---
sync | wifi 增量真机同步
bundle | 预编译 es6/es7 js文件
bundle_s | 预编译 es6/es7 js文件,然后进行wifi 增量真机同步
bundle_d | 以debug模式,预编译 es6/es7 js文件,此时会产生对应的 *.map.js 文件,便于在浏览器中调试
bundle\_d\_s | 以debug模式,预编译 es6/es7 js文件,然后进行wifi 增量真机同步

### 6.预编译的逻辑是: *src/components* 目录用于存放可复用模块,不直接预编译; *src/pages* 目录,用于存放直接用于某个window或frame的js入口文件,都会编译为同名的js文件;编译后的文件,存放于 *lib/* 目录下

### 7.混合开发,容易受到js页面缓存的干扰,可使用类似下面的加时间戳的策略来在html中动态插入js:

```html
<script>
var script = document.createElement('script')
script.src = "./lib/ClockShow.js?ver="+(Date.now() / 1000 | 0)
document.body.appendChild(script)
</script>
```

## 进阶

* [Get Started with Webpack](https://webpack.js.org/get-started/)
* [babeljs](https://babeljs.io/docs/setup/)
* [自定义真机同步时想要忽略的文件或目录](https://github.com/apicloudcom/apicloud-tools-core#自定义真机同步时想要忽略的文件或目录)

**警告:** 在您对 *webpack* , *babel* 和 *npm*  足够熟悉之前,请不要手动修改项目 polyfill 化后产生的 *webpack.config.js* , *package.json* 或 *.babelrc* 文件
