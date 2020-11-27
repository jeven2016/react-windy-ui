--- 
order: 3
type: sample
zh_CN: 将Slider与Content衔接在一起
en_US: Slider and content
editUrl: $BASE/docs/pages/layout/md/layout3.md
---

+++ zh_CN
  在中间内容区域分为左右两块后，可以作为一个整体显示，避免出现视觉上的隔阂。
  Layout结构如下：  
<Hcode inline>   
&lt;Layout&gt;
    &lt;Layout.Header/&gt;
    &lt;Layout&gt;
        &lt;Breadcrumb/&gt;
        &lt;Layout.Split&gt;
          &lt;Layout.Slider/&gt;
          &lt;Layout.Content/&gt;
        &lt;Layout.Split&gt;
    &lt;/Layout&gt;
    &lt;Layout.Footer/&gt;
&lt;/Layout&gt;
</Hcode>

+++ en_US
Layout3

+++ SampleCode
fileName: Layout3
