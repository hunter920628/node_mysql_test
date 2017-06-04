/**
 * Created by hunter on 2017/6/4.
 */
var mysql  = require('mysql');  //调用MySQL模块

//创建一个connection
var connection = mysql.createConnection({
    host     : '59.175.213.89',       //主机
    user     : 'sso',               //MySQL认证用户名
    password : 'clcc1229',        //MySQL认证用户密码
    port: '33067',                   //端口号
});
//创建一个connection
connection.connect(function(err){
    if(err){
        console.log('[query] - :'+err);
        return;
    }
    console.log('[connection connect]  succeed!');
});
//执行SQL语句
connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
    if (err) {
        console.log('[query] - :'+err);
        return;
    }
    console.log('The solution is: ', rows[0].solution);
});
//关闭connection
connection.end(function(err){
    if(err){
        return;
    }
    console.log('[connection end] succeed!');
});
