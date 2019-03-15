function numFunction() {
    var octalNum1 = 070; //八进制56
    // var octalNum2 = 079; //无效的八进制数值--解析为79 **在这里编译器报错了
    var octalNum3 = 08; //无效的八进制数值--解析为8
    // 八进制字面量在严格模式下是无效的，会导致支持的JavaScript引擎抛出错误

    // 浮点数
    var floatNum1 = 1.1;
    var floatNum1 = 0.1;
    var floatNum1 = .1; // 有效 但不推荐
    /*
    **由于保存浮点数值需要的内存空间是保存整数值的两倍，因此ECMAScript会不失时机地将浮点数值转换为整数值。
    显然，如果小数点后面没有跟任何数字，那么这个数值就可以作为整数值来保存。
    同样地，如果浮点数值本身表示的就是一个整数（1.0），那么该值也会被转换为整数，如下面的例子所示：
    */
    var floatNum1 = 1.; // 小数点后面没有数字--解析为1
    var floatNum2 = 10.0; // 整数--解析为10

    // 对于极大或极小的值，可以用e表示法（即科学计数法）表示的浮点数值表示。
    // 默认情况下，ECMAScript 会自动将那些小数点后面带有6个0以上的浮点数值转换为以E表示法表示的数值。
    // 浮点数的最高精度是17位小数，但在计算时其精准度远远不如整数。
    var floatNum3 = 3.125E7; // 等于31250000
    var floatNum4 = 0.3E-4; // 表示0.00004  

    // **
    alert(0.1 + 0.2 == 0.3); // false 这个是使用基于IEEE754数值的浮点计算的通病

    // ECMAScript能够表示的最小数和最大数为Number.MIN_VALUE,Number.MAX_VALUE
    // 如果某次计算结果超出这个数值，将自动转换为特殊的Infinity(正无穷或是负无穷大)
    // 可以使用isFinite()函数判断是否在最大最小值之间。
    var result = Number.MAX_VALUE + Number.MAX_VALUE;
    alert(isFinite(result));

    // ** NaN 非数值（Not a Number)是一个特殊的数值，例如0除以0会返回NaN
    // 其次NaN与任何数值都不相等
    alert(NaN == NaN); // false;
    // isNaN函数可以判断一个任何类型的参数是否可以转换为数值
    alert(isNaN(NaN));      // true
    alert(isNaN(10));       // false
    alert(isNaN("10"));     // false
    alert(isNaN("blue"));   // true
    alert(isNaN(true));     // false

    // isNaN也适用于对象Object 首先会调用对象的valueOf()方法，然后确定该方法返回的值是否可以转换为数值。
    // 如果不能，则基于这个返回值再调用toString()方法，再测试返回值。

    // **数值转换
    // 有三个函数可以把非数值转换为数值：Number()、parseInt()、和parseFloat()。
    /*
        Number:
        null            => 0
        Boolean         => 0 / 1
        undefined       => NaN
        1.1             => 1.1
        Object          => valueOf toString 
        oxf             => 15
        "hello"         => NaN
        "00011"         => 11

        parseInt 
        null            => NaN
        Boolean         => NaN
        undefined       => NaN
        1.1             => 1
        Object          => valueOf toString 
        oxf             => 15
        "hello"         => NaN
        "hello23world21"=> 23
        "00011"         => 11
        
        parseFloat 只解析10进制
        '22.3.4'        => 22.3
    */
}