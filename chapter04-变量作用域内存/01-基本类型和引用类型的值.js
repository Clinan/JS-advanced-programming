// undefined null number string boolean 五个基本类型，所有传值都不是引用传值

// Object 按引用传值，如
var obj1 = new Object();
var obj2 = obj1;
obj1.name = 'Nicholas';
alert(obj2.name);   // Nicholas

// 变量类型检测 typeof , 只能打印出 undefined boolean string number object function, 检测不出是否为数组
// instanceof 
