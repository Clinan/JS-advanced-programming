// for-in 

// label
// label: statement
start: for (var i = 0; i < 7; i++) {
    alert(i);
}
// 执行label
start;

// with 将代码的作用域设置到一个特定的对象中。如
var qs = location.search.substring(1);
var hostName = location.hostname;
var url = location.href;
// 可以简写成
with (location) {
    var qs = search.substring(1);
    var hostName = hostname;
    var url = href;
}