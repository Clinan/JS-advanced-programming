function extra(){
    // 额外补充

    // 判断数据类型的的方式 typeof Object.prototype.toString.call([]) instanceof
    typeof [] // object
    Object.prototype.toString.call([]) // [object, Array]
    new String('sss') instanceof String // true

}