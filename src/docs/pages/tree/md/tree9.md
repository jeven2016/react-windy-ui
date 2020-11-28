--- 
order: 9
type: sample
zh_CN: 默认展开节点
en_US: Sample
editUrl: $BASE/docs/pages/tree/md/tree9.md
---

+++ zh_CN   
 对于<Code>defaultExpandedItems</Code>属性，其只控制初始显示，即第一次显示时使用，当后续在界面点击时可再次展开或折叠对应的子树。
     而<Code>expandedItems</Code>则有些特殊，一旦设置该属性后，控件内部无法自行展开或折叠。要想切换状态必须提供一个<Code>onExpand</Code>
     回调函数，并自行控制需要展开的<Code>TreeItem</Code>。  
        
     <Blockquote hasBackground>
     另外以下这些属性也有与expand相似的行为：      
     <ul>
        <li><Code>defaultSelectedItems</Code>、<Code>selectedItems</Code>、<Code>onSelect</Code></li>
        <li><Code>defaultCheckedItems</Code>、<Code>checkedItems</Code>、<Code>onCheck</Code></li>
    </ul> 
    </Blockquote>
    
    
+++ en_US   
Tree

+++ SampleCode
fileName: Tree9
