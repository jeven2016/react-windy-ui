--- 
order: 4
type: sample
zh_CN: 处理点击事件
en_US: Handle click event
editUrl: $BASE/docs/pages/dropdown/md/dp4.md
---

+++ zh_CN
 Dropdown有两种方式处理弹出菜单的点击事件。
    <ul>
    <li> 第一种方式也是最直接的方式，在各个Item上设置onClick属性，当点击对应的Item
    时触发。
    </li>
    <li> 第二种方式，首先需要在各个Item上设置一个id, 然后在Menu上提供一个onSelect方法，一旦点击了某个Item，将通过onSelect
    方法回调
    </li>
    <li>如果需要在点击Item不关闭弹出菜单时，可以使用第一种方式，在onClick方法中添加'e.stopPropagation()'去阻止事件冒泡。</li>
    </ul>
    <br/>

+++ en_US
Dp4

+++ SampleCode
fileName: Dp4
