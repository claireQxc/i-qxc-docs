# 准备

## 微前端产生背景
- 每个Team采用相同或者不同框架（React、Vue、Angular、原生开发等）开发的Web应用，因业务发展需求要**组合**成不同业务线的大型Web应用；
- 因为业务迭代Web项目体量逐渐变大成为一个monolith，需要解耦拆分成多个子应用，实现**独立开发、独立运行、独立部署**

## 横向比较后端微服务
- 后端微服务每个服务独立运行，控制各自的数据库，微服务之前的通信通过远程网络的方式；将一个大型服务中的**函数调用**变成了**远程调用**
- 微前端对于单页面应用是将原先的通过框架的路由分发到**应用的组件**变成了通过路由**先**找到对应的应用，**再**由应用分发到对应的组件上
- 共同点：独立开发、编译、部署，但是可以组合成一个较为大型的服务或者前端Web应用

## 微前端6种方式
1. 使用HTTP服务器的路由来重定向多个应用
2. 在不同的框架之上设计通讯、加载机制，诸如[Mooa](https://github.com/phodal/mooa)、[Single-SPA](https://single-spa.js.org)
3. 通过组合多个独立应用、组件来构建一个单体应用
4. iFrame
5. 纯Web Components构建，例如京东的[MicroApp](https://zeroing.jd.com/)
6. 结合Web Components构建

## 6种方式的利弊
### 使用HTTP服务器的路由来重定向多个应用
```
console.log('aaa');
```
##### 本文参考文献：
- [Single-SPA/microfrontends-concept](https://single-spa.js.org/docs/microfrontends-concept)
- [前端微服务化的六七中方式](https://mp.weixin.qq.com/s?__biz=MjM5Mjg4NDMwMA==&mid=2652975949&idx=1&sn=c36387188283dd4fae52257357541729&chksm=bd4ae06e8a3d6978e2645848217ae8324ae83a07a410441dda8b7d7e7b4a8374d5e6c88fb7a2&scene=21#wechat_redirect)