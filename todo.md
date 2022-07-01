Bugs:

- 点击等事件回调函数名称需要统一，handler=> handleFunc...
- select 无法与 tooltip 结合使用
- useEvent , the handler changed but no event listener registered again, sample: Loader1, active
  won't pop tooltip up. this is due to the handler updated, and it cannot be added into dependencies
  because remove/register events happen every time.
- popover 在 Tree7 示例, 在 moreElements 中给 Icon 添加时，显示位置不正确。
- TabBar 的 move 方法无法 useCallback, 使用后会出现 max 调用的问题， 考虑 store 迁移; Tabs 的 useEffect-> scroll 也有这个问题
- Tabs6 中当为 left 时，出现左侧蓝色条。
- no icon for multi select

- 2021.12
- Form 下的 TextInput 没有动画效果，fixedLabel 设置不生效。在黑色皮肤下显示不佳
- 现有的 12 格在分辨率高于 1200 ～ 1920 区间，无法很好的控制大小，需要增加格子数，并支持 xxg 之类的参数
- 默认皮肤无法显示 TimePicker 内容区域
- Carousel 效果，添加这个支持： https://cartzilla.createx.studio/home-grocery-store.html

Enhance:

- Modal.info()，对话框每次打开后会连带 container 一起删除，是否 u 可以考虑引入 key,每次 show 都是设置 active 属性。
- Progress 添加圆形类型
- Button , Input 缺乏全白色的类型，比如在 Navbar 中嵌入，需要 focus，激活后都时白色。 可以考虑 inverted 属性。
- 优化文档 markdown 的格式，使用新的 markdown 框架 -- done
- Navbar 里面的 Input 背景色已经 Icon 的颜色跟 primary 不匹配
- Navbar10 sample， 无法在 iframe 中与 Affix 结合使用
- icons redesign
- remove useInternalActive --Done
- replacing with scroll-into-view-if-needed
- replace onChange to onActiveChange for switching state, the onChange is used for native value
  changing
- Form rootItem 下显示 InputGroup，需要将整个 border 置为红色边框
- using prismjs to highlight code lines
  https://github.com/PrismJS/prism-themes
- integrate with Algolia DocSearch
- toggle: support normal & small size
- verify the useEventCallback won't be recreated multiple times
- all components should reactor use EventCallback to bind the onXX events
- select list supports virtual list feature for big data set (virtual-list)
- change ok to success
- improve AlignItemsType and JustifyContentType
- 弹出菜单，重新定位，当超出可视窗口; 宽度调整到不超出窗口的长度
- validate 参数校验出错后不整个页面崩溃
- Typography 支持文字折叠
- PopConfirm 中的 restProps 被合并至了 style 中，比如设置 id 就没法成功(\*)
-

Doc:

- Add new sample for Space's block attribute

Note:

- components 下的 package 需要修改为 json 后缀才可以发布版本，当前使用了阿里的源，发布时修改修改对应的.yarnrc 和.npmrc 去取消发布路径。

Other:

- 在 md 文件的 title 中设置 onlyVisible 属性，页面中将只显示当前样例。可以用于功能 debug 测试。

- free pic: https://pixabay.com/photos/bay-beach-boat-exotic-idyllic-1867798/
  https://pixabay.com/photos/girl-teenager-dancing-outdoor-5391785/

* react-spring interpolate function

```shell
import {interpolate} from 'react-spring';

 transform: interpolate([
      nonNil(xyz) ? xyz.interpolate((x, y, z) => `translate3D(${x}, ${y},${z})`) : -1,
      nonNil(scale) ? scale.interpolate(scale => `scale(${scale})`) : -1
    ], (t, scale) => {
      const tf = `${t ? t : ""} ${scale ? scale : ""}`
      console.log(tf);
      return tf;
    })
```

** Dark theme **  
default theme:

- Datepicker: year selection
- navbar's buttons
- stepper text color
- layout

* lodash/debounce **[High]**
  https://zhuanlan.zhihu.com/p/88799841  
  https://blog.csdn.net/lovezhuer1/article/details/112681236
