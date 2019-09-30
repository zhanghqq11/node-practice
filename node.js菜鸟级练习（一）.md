# node.js菜鸟级练习（一）

## node是什么

node.js是服务器端的开发语言，有些萌新就很疑惑，为什么js也可以做后端呢？

##### Node.js® is a JavaScript runtime built on [Chrome's V8 JavaScript engine](https://v8.dev/).

编程语言都有解释器，node.js就是一个很聪明的大佬，把JavaScript的解释器这个解释是c++实现的（v8）放到了服务器，并且包装一些服务器级别的操作api（例如文件的读写，网络服务器的构建，网络通信，http服务器，等处理。。。），从而使JavaScript这种脚本语言可以作为服务器端的语言来使用。

##### Node.js® uses an event driven,non-blocking I/O model that makes it lightweight and efficient

1. 事件驱动
2. 非阻塞I/O模型（异步）
3. 轻量和高校

##### Node.js® package ecosystem, npm is the larget ecosystem of open source liraries in the world

npm是最大的开源包生态系统，所以大部分js相关的包都在npm上，开发人员可以方便的下载使用。

## 代码模块

参考：JavaScript 标准参考教程（alpha）http://javascript.ruanyifeng.com/ 

fs模块：参考http://javascript.ruanyifeng.com/nodejs/fs.html#toc0

## 学习node的目标三部曲

优秀的前端-可以和后端有效沟通

敏捷全栈-快速开发全栈应用

架构师-践行工程化思想+ 看 用编自己