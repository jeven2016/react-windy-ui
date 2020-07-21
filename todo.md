Bugs:
- 点击等事件回调函数名称需要统一，handler=> handleFunc...
- select 无法与tooltip结合使用
- [fixed] modal中使用select有时无法点击 -- fixed, 由于mask的z-index未设置，覆盖在上层  
- useEvent , the handler changed but no event listener registered again, sample: Loader1, active won't pop tooltip up.
             this is due to the handler updated, and it cannot be added into dependencies because remove/register events
             happen every time.
- popover在Tree7示例, 在moreElements中给Icon添加时，显示位置不正确。

Enhance:
- Modal.info()，对话框每次打开后会连带container一起删除，是否可以考虑引入key,每次show都是设置active属性。
- Progress 添加圆形类型
- Button , Input 缺乏全白色的类型，比如在Navbar 中嵌入，需要focus，激活后都时白色。 可以考虑inverted属性。
- 优化文档markdown的格式，使用新的markdown框架
- Navbar里面的Input背景色已经Icon的颜色跟primary不匹配
- Navbar10 sample， 无法在iframe中与Affix结合使用
- icons redesign



