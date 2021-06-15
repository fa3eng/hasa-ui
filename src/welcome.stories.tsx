import React from 'react'
import { storiesOf } from '@storybook/react'

const markdownText = `

## hasa UI, 一个即开即用的组件库 📦
<br />

一个即开即用的组件库, 基于 React 框架, 并且使用 Typescript 编写代码 

<br />

### 项目优点

<br />

* 🔥typescript with React Hooks
* ⛑️使用 react-testing-library 完成单元测试
* 📚使用 storybook 本地调试和生成文档页面
* 📚使用 react-doc-gen 自动生成文档
* 🌹样式（Sass）文件从零开始，搭建样式系统
* 🎉持续集成，易于维护使用

<br />

### 安装使用
<br />

~~~javascript
npm install hasa-ui --save
~~~

<br />

### 使用

<br />

~~~javascript
// 加载样式
import 'hasa-ui/dist/index.css'
// 引入组件
import { Button } from 'hasa-ui'
~~~
`
storiesOf('介绍页', module)
  .add('welcome', () => {
    return (
      <h2> </h2>
    )
  }, { info : { text: markdownText, source: false, }})