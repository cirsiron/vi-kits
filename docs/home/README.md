### 快速开始

#### 介绍
  vi-kits包括三部分：
  - 1. 通用的工具库
  - 2. vue相关工具（包括常见的自定义指令，mixin等）
  - 3. react相关 （包括封装的常见高阶组件等）

#### 安装
```bash
npm i -S vi-kits
```

#### 使用
方法一：
```js
import { $math } from 'vi-kits';
// 例如
$math(1).add(2);
```
方法二：按需引入
```js
// 注意：路径名称与sidebar的英文名称相同
import { $math } from 'vi-kits/math';
$math(1).add(2);
```
