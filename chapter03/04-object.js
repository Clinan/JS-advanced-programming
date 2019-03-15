function objectFunction() {
    var o1 = new Object();
    var o2 = new Object; // 有效 但是不推荐省略括号

    // Object每个实例都具有下列属性和方法
    /*
        1.constructor: 构造函数
        2.hasOwnProperty(propertyName): 用于检查给定的属性在当前对象实例中（而不是在实例的原型中）是否存在。
            其中，作为参数的属性名（propertyName）必须以字符串形式指定，如：o.hasOwnProperty('name')
        3.isPropotypeOf(object): 用于检查传入的对象是否是传入对象的原型（第五章将讨论原型）
        4.propertyIsEnumerable(propertyName): 用于检查给定的属性是否能够使用for-in语句来枚举。
        5.toLocaleString(): 返回对象的字符串表示、该字符串与执行环境的地区对应。
        6.toString: 返回对象的字符串表示
        7.valueOf(): 返回对象的字符串、数值和布尔值表示。通常以toString()方法的返回值相同。
    */
}