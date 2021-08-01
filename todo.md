Bugs:

- 点击等事件回调函数名称需要统一，handler=> handleFunc...
- select 无法与tooltip结合使用
- [fixed] modal中使用select有时无法点击 -- fixed, 由于mask的z-index未设置，覆盖在上层
- useEvent , the handler changed but no event listener registered again, sample: Loader1, active
  won't pop tooltip up. this is due to the handler updated, and it cannot be added into dependencies
  because remove/register events happen every time.
- popover在Tree7示例, 在moreElements中给Icon添加时，显示位置不正确。
- TabBar的move方法无法useCallback, 使用后会出现max 调用的问题， 考虑store迁移; Tabs的useEffect-> scroll也有这个问题
- Tabs6中当为left时，出现左侧蓝色条。
- popup监听click改成mouseUp后，select的不允许关闭的例子失效。需要衡量是否能很修改
- no icon for multi select 

Enhance:

- Modal.info()，对话框每次打开后会连带container一起删除，是否可以考虑引入key,每次show都是设置active属性。
- Progress 添加圆形类型
- Button , Input 缺乏全白色的类型，比如在Navbar 中嵌入，需要focus，激活后都时白色。 可以考虑inverted属性。
- 优化文档markdown的格式，使用新的markdown框架 -- done
- Navbar里面的Input背景色已经Icon的颜色跟primary不匹配
- Navbar10 sample， 无法在iframe中与Affix结合使用
- icons redesign
- remove useInternalActive  --Done
- replacing with scroll-into-view-if-needed
- replace onChange to onActiveChange for switching state, the onChange is used for native value
  changing
- Form rootItem下显示InputGroup，需要将整个border置为红色边框
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
- validate参数校验出错后不整个页面崩溃
- Typography支持文字折叠

Doc:
- Add new sample for Space's block attribute

Note:
- components 下的package需要修改为json后缀才可以发布版本，当前使用了阿里的源，发布时修改修改对应的.yarnrc和.npmrc去取消发布路径。


Other:
- 在md文件的title中设置onlyVisible属性，页面中将只显示当前样例。可以用于功能debug测试。

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
