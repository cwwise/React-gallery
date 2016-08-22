# Gallery By React
---

Build Status Dependency Status
使用ReactJS构架的图片画廊应用-为慕课网[《React实战》](http://www.imooc.com/view/507)课程对应的实战项目

demo展示地址: [Gallery By React](https://www.cwcoder.com/gallery/index.html)

## 项目结构
[create-react-app](https://github.com/facebookincubator/create-react-app)google出品的入门React的工具，简单实用，推荐入门学习使用。

使用 需要注意的是 如果进行打包 `npm run build` 需要设置 `package.json` 中 ` "homepage": ""`
才能很好的运行。


## To build the examples locally, run:
`npm install` 先安装依赖

`npm start` 运行即可查看效果


## 版本：
"react": "^15.2.1"  node: v6.0.0 npm: 3.10.5


## 遇到的问题

* 翻转实现一直存在问题，最后查看资料解决问题 需要添加 `z-index` 置于最上层。


## 参考
---
[慕课网老师github--gallery-by-react](https://github.com/materliu/gallery-by-react)