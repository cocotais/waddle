

## 运行js

![Snipaste_2022-02-07_19-31-04](img\code\Snipaste_2022-02-07_19-31-04.png)

运行js代码。不需要加换行符。（感谢青PG5p提出意见！）

> 为什么不能插入字符串？
>
> 因为运行字符串的代码需要调用eval()函数，但这种方法有危险性，所以控件商城内不上架有eval()等调用有安全风险的函数的控件（安全第一）。若要将执行的参数改为动态的，请用变量等方法解决。请不要在运行js积木内调用eval()等有安全风险的函数。

## 使用严格模式

![Snipaste_2022-02-07_19-31-16](img\code\Snipaste_2022-02-07_19-31-16.png)

在js代码内使用严格模式。没啥用。

## 位运算

![Snipaste_2022-02-07_19-33-23](img\code\Snipaste_2022-02-07_19-33-23.png)

进行数字位运算。参考[JavaScript 位运算符 (w3school.com.cn)](https://www.w3school.com.cn/js/js_bitwise.asp)

## 比较

![Snipaste_2022-02-07_19-33-36](img\code\Snipaste_2022-02-07_19-33-36.png)

比较数据，但可以进行更多比较（比较类型和数据都相等等）。参考[JavaScript 比较 (w3school.com.cn)](https://www.w3school.com.cn/js/js_comparisons.asp)

## 获取时间

![Snipaste_2022-02-07_19-33-48](img\code\Snipaste_2022-02-07_19-33-48.png)

获取现在时间戳，年份，月份，日，小时，分钟，秒数，毫秒数，星期等。参考[JavaScript 日期获取方法 (w3school.com.cn)](https://www.w3school.com.cn/js/js_date_methods.asp)

## 弹出警告框

![Snipaste_2022-02-07_19-34-01](img\code\Snipaste_2022-02-07_19-34-01.png)

弹出一个警告框。和”文本“内的”输出“一样，相当于js的alert()。参考[JavaScript 弹出框 (w3school.com.cn)](https://www.w3school.com.cn/js/js_popup.asp)

## 弹出确认框

![Snipaste_2022-02-07_19-34-18](img\code\Snipaste_2022-02-07_19-34-18.png)

弹出一个确认框，有“确认”“取消”两个选择。返回布尔值，相当于js的confirm()。参考[JavaScript 弹出框 (w3school.com.cn)](https://www.w3school.com.cn/js/js_popup.asp)

## 弹出输入框

![Snipaste_2022-02-07_19-34-30](img\code\Snipaste_2022-02-07_19-34-30.png)

弹出一个输入框，并获取输入，返回字符串，相当于js的prompt()。参考[JavaScript 弹出框 (w3school.com.cn)](https://www.w3school.com.cn/js/js_popup.asp)

## 解析json字符串

![Snipaste_2022-02-07_19-34-54](img\code\Snipaste_2022-02-07_19-34-54.png)

将json字符串解析为对象。相当于js的JSON.parse()。返回对象，可用“获取对象 [] 的键 [] 的值”来获取值，也可以用“将对象 [] 转为字符串”再转为字符串。参考[JSON.parse() (w3school.com.cn)](https://www.w3school.com.cn/js/js_json_parse.asp)

## 将对象转为json字符串

![Snipaste_2022-02-07_19-35-04](img\code\Snipaste_2022-02-07_19-35-04.png)

将对象转为字符串。相当于js的JSON.stringify()。返回字符串。参考[JSON.stringify() (w3school.com.cn)](https://www.w3school.com.cn/js/js_json_stringify.asp)

## 获取对象相应键的值

![Snipaste_2022-02-07_19-35-14](img\code\Snipaste_2022-02-07_19-35-14.png)

获取对象相应键的值。参考[JSON 对象 (w3school.com.cn)](https://www.w3school.com.cn/js/js_json_objects.asp)的”访问对象值“

## 获取屏幕长宽

![Snipaste_2022-02-07_19-37-09](img\code\Snipaste_2022-02-07_19-37-09.png)

获取用户设备屏幕的长宽。参考[JavaScript Window Screen (w3school.com.cn)](https://www.w3school.com.cn/js/js_window_screen.asp)

## 获取屏幕可用长宽

![Snipaste_2022-02-07_19-37-16](img\code\Snipaste_2022-02-07_19-37-16.png)

获取用户设备屏幕的长宽，减去诸如窗口工具条之类的界面特征。参考[JavaScript Window Screen (w3school.com.cn)](https://www.w3school.com.cn/js/js_window_screen.asp)

## 获取屏幕色深

![Snipaste_2022-02-07_19-55-41](img\code\Snipaste_2022-02-07_19-55-41.png)

获取用户屏幕色深。没什么用。参考[JavaScript Window Screen (w3school.com.cn)](https://www.w3school.com.cn/js/js_window_screen.asp)

## 获取屏幕像素深度

![Snipaste_2022-02-07_19-57-11](img\code\Snipaste_2022-02-07_19-57-11.png)

获取用户屏幕像素深度。没什么用。参考[JavaScript Window Screen (w3school.com.cn)](https://www.w3school.com.cn/js/js_window_screen.asp)

## 是否有网络？

![Snipaste_2022-02-07_19-58-16](img\code\Snipaste_2022-02-07_19-58-16.png)

判断用户设备是否连接了网络。参考[JavaScript Window Navigator (w3school.com.cn)](https://www.w3school.com.cn/js/js_window_navigator.asp)

## 获取浏览器语言

![Snipaste_2022-02-07_20-00-43](img\code\Snipaste_2022-02-07_20-00-43.png)

获取用户浏览器的语言。参考[JavaScript Window Navigator (w3school.com.cn)](https://www.w3school.com.cn/js/js_window_navigator.asp)

## 获取操作系统

![Snipaste_2022-02-07_20-09-22](img\code\Snipaste_2022-02-07_20-09-22.png)

获取用户操作系统。参考[JavaScript Window Navigator (w3school.com.cn)](https://www.w3school.com.cn/js/js_window_navigator.asp)

## 获取数学常量

![Snipaste_2022-02-07_20-10-01](img\code\Snipaste_2022-02-07_20-10-01.png)

获取数学常数e、Π、根号2、根号0.5、ln(2)、ln(10)、log(2,e)，log(10,e)。参考[JavaScript 数学 (w3school.com.cn)](https://www.w3school.com.cn/js/js_math.asp)

## 清空控制台

![Snipaste_2022-02-07_20-12-19](img\code\Snipaste_2022-02-07_20-12-19.png)

清空控制台内的内容，并将光标移到第一行。参考[JavaScript Console 对象 | 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/javascript-console-object.html)

> 控制台不是Coco内的控制台。你可以按下F12打开开发者模式，切换到控制台看到它。

## 控制台计数

![Snipaste_2022-02-07_20-12-30](img\code\Snipaste_2022-02-07_20-12-30.png)

控制台计数。输出它被调用了多少次。参考[JavaScript Console 对象 | 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/javascript-console-object.html)

## 控制台报错

![Snipaste_2022-02-07_20-12-39](img\code\Snipaste_2022-02-07_20-12-39.png)

在控制台上报错。参考[JavaScript Console 对象 | 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/javascript-console-object.html)

## 控制台警告

![Snipaste_2022-02-07_20-12-46](img\code\Snipaste_2022-02-07_20-12-46.png)

在控制台上输出警告。参考[JavaScript Console 对象 | 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/javascript-console-object.html)

## 控制台输出

![Snipaste_2022-02-07_20-12-58](img\code\Snipaste_2022-02-07_20-12-58.png)

在控制台上输出内容。参考[JavaScript Console 对象 | 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/javascript-console-object.html)

## 控制台计时开始

![Snipaste_2022-02-07_20-13-03](img\code\Snipaste_2022-02-07_20-13-03.png)

开始计时。参考[JavaScript Console 对象 | 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/javascript-console-object.html)

## 控制台计时介绍

![Snipaste_2022-02-07_20-13-10](img\code\Snipaste_2022-02-07_20-13-10.png)

结束计时并在控制台输出时间。

参考[JavaScript Console 对象 | 菜鸟教程 (runoob.com)](https://www.runoob.com/w3cnote/javascript-console-object.html)