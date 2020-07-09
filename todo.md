Bugs:
- 点击等事件回调函数名称需要统一，handler=> handleFunc...
- select 无法与tooltip结合使用
- modal中使用select有时无法点击 -- fixed, 由于mask的z-index未设置，覆盖在上层


Enhance:
- Modal.info，对话框每次打开后会连带container一起删除，是否可以考虑引入key,每次show都是设置active属性。

