"use strict";
// 变量名称和方法名区分大小写
// 标识符的第一个字符必须是一个字母、下划线（_）或是一个美元符号（$）
// 按照惯例，标识符一般使用小驼峰的形式，也就是第一个字母小写，剩下的每个单词首字母大写 如：firstSecond myCar doSomethingImportant

/*
严格模式 ECMA5引入了严格模式（strict mode）的概念。严格模式是为JavaScript定义了一种不同的解析和执行模型。
在严格模式下 MCMAScript3中的一些不确定的行为将得到处理，而且对某些不安全的操作也会抛出错误。
要在整个脚本中开启严格模式，可以在顶部添加如下代码
"use strict";
这行代码看起来像是字符串，而且也没有赋值给任何变量，但其实它是一个编译指示（pragma），用于告诉支持的JavaScript引擎切换到严格模式。
在函数内部的上方包含这条编译指示，也可以指定函数在严格模式下执行：
*/
function doSomething() {
    "use strict";
    // 函数体
}
// 支持严格模式的浏览器有 IE10+、Firefox 4+、Safari 5.1+、Opera 12+ 和 Chrome
// ** 语句结束推荐写分号 便于代码压缩和提高代码性能
// ** 不能定义名为eval或arguments的变量，否则会导致语法崩溃。

// 数据类型
// Undefined、Null、Boolean、Number、String、Object（本质上是由一组无序的键值对组成的）。
// 不支持任何创建自定义类型的机制，所有的值都是这6种之一
function notice01() {

    // 没有被初始化的变量也是undefined
    var msg;
    alert(typeof msg); // undefined
    alert(typeof age); // undefined

    var car = null;
    alert(typeof car); // object

    // undefined是由null派生的
    alert(null == undefined); // true
}