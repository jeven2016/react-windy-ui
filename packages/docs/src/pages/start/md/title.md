---   
  order: 0
  type: text
  zh_CN: 快速开始
  en_US: Get Started
  editUrl: $BASE/pages/start/md/title.md
---

+++ zh_CN

## 快速开始 [editUrl]

<br/>

<Blockquote>
### 这个框架的由来

我们都需要一个框架，却往往又陷入讨厌和贬低这个框架的泥潭里。
为何不自己做一个呢？这样至少可以少一个让自己讨厌的理由，这便是我要做一套 UI 框架的初衷。
因为讨厌别的，所以自己做一个，也希望有机会被别的人所讨厌。到那个时候也算是一种成功吧。

最初这个框架取名为 Wui， 首字母 W 是英文单词轮子的首字母。意指这是一个轮子项目，虽然一开始只是抱着尽量去做的想法，
只是没有想到能坚持到现在。最初还是 2016 年启动，那个时候只想做一套基于 scss 的 web 皮肤框架，但越到后面
越是发现，走组件化的路子是不可避免的。于是借着 react 的东风，便从 2018 年启动了 react 组建化的工作。这么多年，
从最初一个人，坚持原型设计，再到参考和借鉴其他框架，着实费了不少精力和时间。但是当这个成果慢慢到收获的时候，一切
都那么充实。不多说了，继续努力，坚持下去，终有收获的那天的。

</Blockquote>

- **推荐使用 npm 或 yarn 安装**

用 npm 安装<Hcode>npm install react-windy-ui</Hcode>  
或者 yarn 安装<Hcode>yarn add react-windy-ui</Hcode>

- **可使用 create-react-app 创建工程**

<Hcode>
yarn create react-app my-app
# or
npx create-react-app my-app
</Hcode>

yarn 或 npm 安装

<Hcode>
yarn add react-windy-ui
yarn install
</Hcode>

修改 src/App.js，引入 react-windy-ui 组件。

<Hcode>
import React from 'react';
import { Button } from 'react-windy-ui';
import 'react-windy-ui/dist/wui.css'; #import the default theme file
const App = () => {
  return &lt;Button type="primary"&gt;Hello&lt;/Button&gt;
};
export default App;
</Hcode>

运行项目，页面上应该会出现一个蓝色按钮，接下来就可以开始开发你的应用吧。

其他相关的开发步骤你可以参考 create-react-app 官方文档。

+++ en_US

## Get Started [editUrl]
