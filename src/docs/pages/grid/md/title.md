---   
  order: 100
  type: text
  zh_CN: 删格 Grid
  en_US: Grid
  editUrl: $BASE/docs/pages/grid/md/title.md
---      

+++  zh_CN
## 删格 Grid  [editUrl]   
Grid系统在响应式布局中占有不可或缺的地位，Windy-UI遵循了12列的定义，将页面均等分为12个区域用于布局。凭借flex-box强大的布局功能，
我们可以将页面元素有序地归类，并在不同宽度的窗口下展现不同的部分。如果需要划分更小的列，例如24列，则需要修改Wui的变量去重新生成一份新的样式文件(css)。
    
Grid主要有以下功能：  

- 使用Row和Col进行布局，row表示水平方向的整行，Col表示每个Row可以拆分的列  
- 支持某列固定宽度其他列均分剩余空间
- 支持响应式布局，在窗口不同宽度下更改列的宽度    
- 基于Flex 布局，列中的子元素可以指定水平对齐方式：居左、居中、居右等
- 支持列中的子元素顶部对齐、垂直居中、底部对齐的方式

对于屏幕宽度的划分，请参见API部分。

+++ en_US
## API [editUrl]     

