---   
  order: 100
  type: text
  zh_CN: API
  en_US: API
  editUrl: $BASE/pages/datepicker/md/api.md
---

+++ zh_CN

## API [editUrl]

- <Code>DatePicker</Code>

| 属性         | 名称                     | 类型            | 默认值       | 描述                                                                                                                      |
| ------------ | ------------------------ | --------------- | ------------ | ------------------------------------------------------------------------------------------------------------------------- |
| ref          | 根节点 Dom 对象的引用    | function \| ref | -            | 当需要获取到根节点的 dom 对象时可设置此属性                                                                               |
| hasTitle     | 是否显示 Title           | boolean         | true         |                                                                                                                           |
| defaultValue | 默认的时间               | string          | -            |                                                                                                                           |
| value        | 时间                     | string          | -            |                                                                                                                           |
| placeholder  | 提示文字                 | string          | -            |                                                                                                                           |
| onChange     | 选定日期的回调           | function        | -            | <Code>function(timeString, timeDate, e)</Code>                                                                            |
| config       | 默认配置对象             | object          | 参见下面细节 |                                                                                                                           |
| locale       | 当前国际化资源对应的区域 | string          | zh_CN        | 默认提供了：<Code>zh_CN</Code>, <Code>en_US</Code>。可以参考下面的国际化内容去扩展                                        |
| popupType    | 弹出框类型               | string          | popup        | 值可以是: popup, modal                                                                                                    |
| type         | 当前日期类型             | string          | date         | 值可以是: <Code>year</Code>, <Code>month</Code>, <Code>date</Code>, <Code>dateTime</Code>                                 |
| icon         | 日历图标                 | react node      | IconCalendar |                                                                                                                           |
| format       | 日期格式                 | string          | 参见下面细节 | 默认格式 <Code>{year: 'YYYY',month: 'YYYY-MM',date: 'YYYY-MM-DD',dateTime: 'YYYY-MM-DD HH:mm:ss',time: 'HH:mm:ss'}</Code> |
| disabled     | 禁用日期选择             | boolean         | false        |                                                                                                                           |

<Blockquote>

对于 format 属性，默认配置如下：

<Hcode>
{
    year: 'YYYY',
    month: 'YYYY-MM',
    date: 'YYYY-MM-DD',
    dateTime: 'YYYY-MM-DD HH:mm:ss',
    time: 'HH:mm:ss'
}
</Hcode>  
如果需要覆盖其中某一项，可以提供一个format对象，如： <Code>&lt;DatePicker format=\{date\: 'DD\/MM\/YYYY'\}\/ ></Code>

</Blockquote>

<Blockquote>

对于日期选择器中的国际化资源，默认提供了中文和英文的资源，对应配置如下：

- 中文
  <Hcode>
  locale_zh_CN: {
  today: "今天",
  ok: "确定",
  days: ['一', '二', '三', '四', '五', '六', '日'],
  dayOfWeek: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
  month: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'],
  monthDetails: ['1 月', '2 月', '3 月', '4 月', '5 月', '6 月', '7 月', '8 月', '9 月', '10 月', '11 月', '12 月'],
  }
  </Hcode>

- 英文
  <Hcode>
  locale_en_US: {
  today: "Today",
  ok: "OK",
  days: ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'],
  dayOfWeek: ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'],
  month: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',],
  monthDetails: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December',],
  }
  </Hcode>

如果需要覆盖其中资源，可以提供一个 config 对象，如： <Code>&lt;DatePicker config=\{locale_zh_CN: {...} } locale='zh_CN'\/ ></Code>。

如果需要添加其他语言的资源，则可以提供一个 config 对象，比如这样的内容：
<Hcode>
locale_en_JM: {
today: ...,
ok: ...,
days: [...],
dayOfWeek: [...],
month: [...],
monthDetails: [...],
}
</Hcode>
提供给控件显示， <Code>&lt;DatePicker config=\{locale_en_JM: {...} } locale='en_JM'\/ ></Code>。

</Blockquote>

+++ en_US

## API [editUrl]
