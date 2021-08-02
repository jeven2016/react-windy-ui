--- 
order: 2
type: sample
zh_CN: 上中下结构
en_US: Structure
editUrl: $BASE/pages/layout/md/layout2.md
---

+++ zh_CN
  这里示例如果构建一个上中下布局的页面，同时将中间内容区域分为左右两块。
  Layout结构如下：  
<Hcode inline>   
&lt;Layout&gt;
    &lt;Layout.Header/&gt;
    &lt;Layout.Split&gt;
        &lt;Layout.Slider/&gt;
        &lt;Layout&gt;
          &lt;Breadcrumb/&gt;
          &lt;Layout.Content/&gt;
        &lt;Layout&gt;
    &lt;/Layout.Split&gt;
    &lt;Layout.Footer/&gt;
&lt;/Layout&gt;
</Hcode>

+++ en_US
Layout2

+++ SampleCode
fileName: Layout2
