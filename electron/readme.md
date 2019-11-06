## Electron 简介

[Electron](https://electronjs.org/) 是一个使用 JavaScript, HTML 和 CSS 等 Web 技术创建原生程序的框架。

[Electron](https://electronjs.org/) 基于 [Chromium](https://www.chromium.org/Home) 和 [Node.js](https://nodejs.org/zh-cn/), 让你可以使用 HTML, CSS 和 JavaScript 构建应用

![Electron 组成](https://camo.githubusercontent.com/8a41ca227b277a6ba60aa0beebb5aee1087e1064/687474703a2f2f6a6c6f72642e75732f657373656e7469616c2d656c656374726f6e2f696d67732f636f6d706f6e656e74732e706e67)
[图片来源](https://github.com/JChehe/blog/issues/5)

[Electron 维基百科](https://zh.wikipedia.org/wiki/Electron)

## Electron 创建

- 初始化项目

```sh
npm init
```

- 安装依赖

```sh
# 国内请使用 [cnpm](https://npm.taobao.org/)
npm install --save-dev electron
```

注意 ⚠️: 安装时间会很长

更换`electron`包下载地址淘宝的镜像
`npm config set ELECTRON_MIRROR https://npm.taobao.org/mirrors/electron/`

- 项目文件目录

```
├── package.json
├── main.js
└── index.html
```

- 配置`package.json`中 `main`和`scripts`

```json
{
  "name": "your-app",
  "version": "0.1.0",
  "main": "main.js",
  "scripts": {
    "start": "electron ."
  }
}
```

- 编辑`main.js`

```js
const { app, BrowserWindow } = require("electron");

function createWindow() {
  // 创建浏览器窗口
  let win = new BrowserWindow({
    width: 800, // 窗口的宽
    height: 600, // 窗口的高
    webPreferences: {
      // 网页功能的设置
      nodeIntegration: true // 是否集成Node，默认为false
    }
  });

  // 加载index.html文件， url 可以是远程地址 (例如 http://),也可以是 file:// 协议的本地HTML文件的路径.
  win.loadFile("index.html");
}

app.on("ready", createWindow);
```

- 运行项目

```sh
npm run start
```

## 时序图

本图以 electron/electron-quick-start 为例。

[![本图以 electron/electron-quick-start 为例。](https://pic4.zhimg.com/80/v2-6ea515482154d537ed67de4a0c07a0bf_hd.jpg)](https://zhuanlan.zhihu.com/p/34139993)

图来源https://zhuanlan.zhihu.com/p/34139993

## ELectron 模版

[awesome-electron](https://github.com/sindresorhus/awesome-electron#boilerplates)

[electron-api-demos](https://github.com/electron/electron-api-demos) 官方的一个桌面应用程序，通过交互和示例代码演示了 Electron API 的核心功能。

[apps](https://electronjs.org/apps) 官方列举出的引用，有些是开源的有些是私有的

## ELectron main processes(主进程)和 renderer processes(渲染进程)

[main processes(主进程)和 renderer processes(渲染进程)](https://electronjs.org/docs/tutorial/application-architecture#main-and-renderer-processes)

`Electron` 运行 `package.json` 的 `main` 脚本的进程被称为主进程。
一个`Electron`应用只有一个主进程，可以有多个渲染进程

![electron app](https://user-gold-cdn.xitu.io/2019/1/22/168740d8b653e48e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

[进程](https://zh.wikipedia.org/wiki/%E8%A1%8C%E7%A8%8B):（英语：process），是指计算机中已运行的程序。进程为曾经是分时系统的基本运作单位。在面向进程设计的系统（如早期的 UNIX，Linux 2.4 及更早的版本）中，进程是程序的基本执行实体；

[线程](https://zh.wikipedia.org/wiki/%E7%BA%BF%E7%A8%8B)（英语：thread）是操作系统能够进行运算调度的最小单位。大部分情况下，它被包含在进程之中，是进程中的实际运作单位。一条线程指的是进程中一个单一顺序的控制流，一个进程中可以并发多个线程，每条线程并行执行不同的任务。在 Unix System V 及 SunOS 中也被称为轻量进程（lightweight processes），但轻量进程更多指内核线程（kernel thread），而把用户线程（user thread）称为线程。

### Main Process 模块

- [app](https://electronjs.org/docs/api/app)
- [autoUpdater/自动更新](https://electronjs.org/docs/api/auto-updater)
- [BrowserView/创建和控制视图](https://electronjs.org/docs/api/browser-view)
- [BrowserWindow/创建和控制浏览器窗口](https://electronjs.org/docs/api/browser-window)
- [contentTracing/内容追踪](https://electronjs.org/docs/api/content-tracing)
- [dialog/对话框](https://electronjs.org/docs/api/dialog)
- [globalShortcut/系统快捷键](https://electronjs.org/docs/api/global-shortcut)
- [inAppPurchase](https://electronjs.org/docs/api/in-app-purchase)
- [ipcMain](https://electronjs.org/docs/api/ipc-main)
- [Menu/菜单](https://electronjs.org/docs/api/menu)
- [MenuItem/菜单项](https://electronjs.org/docs/api/menu-item)
- [net/网络](https://electronjs.org/docs/api/net)
- [netLog](https://electronjs.org/docs/api/net-log)
- [notification/通知](https://electronjs.org/docs/api/notification)
- [powerMonitor/电源监视器](https://electronjs.org/docs/api/power-monitor)
- [powerSaveBlocker/省电拦截器](https://electronjs.org/docs/api/power-save-blocker)
- [protocol/协议](https://electronjs.org/docs/api/protocol)
- [screen/屏幕](https://electronjs.org/docs/api/screen)
- [session/会话](https://electronjs.org/docs/api/session)
- [systemPreferences/系统首选项](https://electronjs.org/docs/api/system-preferences)
- [TouchBar/触控板](https://electronjs.org/docs/api/touch-bar)
- [Tray/系统托盘](https://electronjs.org/docs/api/tray)
- [webContents/网页内容](https://electronjs.org/docs/api/web-contents)

### Renderer Process 模块

- [desktopCapturer/桌面捕获器](https://fanyi.baidu.com/#en/zh/desktopCapturer)
- [ipcRenderer](https://electronjs.org/docs/api/ipc-renderer)
- [remote/远程](https://electronjs.org/docs/api/remote)
- [webFrame/网页框架](https://electronjs.org/docs/api/web-frame)

### 两种进程都可用的模块

- [clipboard/剪贴板](https://electronjs.org/docs/api/clipboard)
- [crashReporter/崩溃日志报告](https://electronjs.org/docs/api/crash-reporter)
- [nativeImage/本地图像](https://electronjs.org/docs/api/native-image)
- [shell](https://electronjs.org/docs/api/shell)

## [app](https://electronjs.org/docs/api/app)

## [BrowserWindow](https://electronjs.org/docs/api/browser-window)

## 通信

- ipcMain/ipcRenderer 模块

- [remote](https://electronjs.org/docs/api/remote) 模块进行 RPC 方式通信

- global(Node 全局变量共享数据)

- app

## [webview](https://electronjs.org/docs/api/webview-tag)

## [NeDB](https://github.com/louischatriot/nedb)

```
Embedded persistent or in memory database for Node.js, nw.js, Electron and browsers, 100% JavaScript, no binary dependency. API is a subset of MongoDB's and it's plenty fast.
```

用于 [node.js](https://nodejs.org/zh-cn/)、[nw.js](https://nwjs.io/)、[electron](https://electronjs.org/) 和浏览器的嵌入式持久或内存数据库，100%javascript，无二进制依赖性。api 是 [mongodb](https://www.mongodb.com) 的一个子集，速度非常快。

关于更多[NeDB](https://github.com/louischatriot/nedb)请去[github](https://github.com/louischatriot/nedb)上查看相关文档

### npm 包依赖说明

- npm 脚本说明

  - `npm install npm-package --save`

  - `npm install npm-package --save-dev`

- `package.json` 中属性说明

- `devDependencies`

- `dependencies`

## 打包

- [electron-builder](https://www.electron.build/)

- [electron-packager](https://github.com/electron/electron-packager)

## icon(logo)

## 总结

[Electron](https://electronjs.org/)

[electron 视频](https://www.bilibili.com/video/av35942981?p=7) 英文教程 内容比较全

[Electron js 入门教程 视频](https://www.bilibili.com/video/av19875969?from=search&seid=921703864447578740) 英文教程

[Electron 构建跨平台应用 Mac/Windows/Linux](https://juejin.im/post/5c46ab47e51d45522b4f55b1)

[[electron]终极奥义 五千字教程丢给你](https://juejin.im/post/5ba06b67f265da0ae343e89c)

[Node 嵌入式数据库——NeDB](http://www.alloyteam.com/2016/03/node-embedded-database-nedb/)

[Electron 开发者手册 腾讯云](https://cloud.tencent.com/developer/section/1115752)
