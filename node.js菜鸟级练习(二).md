# node.js菜鸟级练习（二）

## Node的基本核心对象的总结

### 运行时

类比学习运行时这个概念

- jre java 运行时
- c runtime
- .net common Language Runtime

### node.js的特性其实就是JavaScript的特性

- 非阻塞I/O https://nodejs.org/zh-cn/docs/guides/blocking-vs-non-blocking/
- 事件驱动  https://nodejs.org/zh-cn/docs/guides/event-loop-timers-and-nexttick/

## Node的常用模块

### 1.核心模块

核心模块不需要require也可以使用

1. global
2. buffer——用于处理二进制数据流（alloc，from，write，contact，toString）
3. module——模块操作（require，module.exports）
4. process

### 2.内置模块

- os——freemen
- fs
- path
- http
- event

参考http://javascript.ruanyifeng.com/nodejs/fs.html#toc0

## 流程控制

- promise then
- ES6 generater
- ES7 Async/Await
- callback 容易造成回调地狱

### callback

```javascript

```

###  Promise

```javascript
const promist = name => new Promise(resolve =>{
    setTimeout(() =>{
        resolve()
        log(name)
    },delay)
})
promise('Promise').then(() => promise('p2')).then(() => promise('p3'))
```

### Generator和yield和iterator ES6

```javascript
const generator = function* (name) {
    yield promise(name);
    yield promise(name);
}
const gnrter = generator('Generator')

gnrter.next().value.then(() =>{
    genrter.next()
})
```

### co库

```js

```

### Async和Await组合ES7

```javascript
(async() =>{
    await promise('asy/await')
    await promise('asy/await')
})()
```

123