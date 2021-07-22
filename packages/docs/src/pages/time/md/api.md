---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/docs/pages/time/md/api.md
---      

+++  zh_CN
## API [editUrl]    

* <Code>TimePicker</Code>   

| 属性 | 名称 | 类型 | 默认值 | 描述 |
| --- | --- | --- | --- | --- |
| ref | 根节点Dom对象的引用 | function \| ref | - | 当需要获取到根节点的dom对象时可设置此属性 |
| time | 时间 | string | - |  |
| defaultTime | 默认的时间 | string  | - | 格式如： <Code>11：05：20</Code> |
| format | 时间格式 | string | 参见下面细节 | 默认格式 <Code>{time: 'HH:mm:ss'}</Code> |
| placeholder | 提示文字 | string  | -  |  |
| onChange | 选定时间的回调 | function | - | <Code>function(timeString, timeDate, e)</Code> |
| popupType | 弹出框类型 | string | popup | 值可以是: popup, modal |
| locale | 当前国际化资源对应的区域  | string | zh\_CN |  默认提供了：<Code>zh\_CN</Code>, <Code>en\_US</Code>。可以参考下面的国际化内容去扩展 |
| config | 默认配置对象  | object | 参见下面细节 |  |
| inline | 是否嵌入Body内容显示  | boolean | false |  |
| disabled | 禁用日期选择 | boolean | false |  |
| icon | 时间图标 | react node | IconTime |  |

<Blockquote>

对于format属性，默认配置如下：

<Hcode>
{
    time: 'HH:mm:ss'
}
</Hcode>  
如果需要覆盖其中某一项，可以提供一个format对象，如： <Code>&lt;DatePicker format=\{time\: 'HH\/mm\/ss'\}\/ ></Code>

</Blockquote>


<Blockquote>

对于日期选择器中的国际化资源，默认提供了中文和英文的资源，对应配置如下：

* 中文
<Hcode>
locale\_zh\_CN: {
    now: '此时',
    today: "今天",
    ok: "确定",
}
</Hcode>  

* 英文
<Hcode>
locale\_en\_US: {
    now: 'Now',
    today: "Today",
    ok: "OK",
}
</Hcode>

如果需要覆盖其中资源，可以提供一个config对象，如： <Code>&lt;DatePicker config=\{locale\_zh\_CN: {...} }  locale='zh_CN'\/ ></Code>。

如果需要添加其他语言的资源，则可以提供一个config对象，比如这样的内容：
<Hcode>
locale\_en\_JM: {
    now: ...,
    today: ...,
    ok: ...,
}
</Hcode>
提供给控件显示， <Code>&lt;DatePicker config=\{locale\_en\_JM: {...} }  locale='en_JM'\/ ></Code>。
</Blockquote>

+++ en_US
## API [editUrl]     

