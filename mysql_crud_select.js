/**
 * Created by hunter on 2017/6/4.
 */

var mysql = require('mysql');

var connection = mysql.createConnection({
        host     : '59.175.213.89',       //主机
        user     : 'sso',               //MySQL认证用户名
        password : 'clcc1229',        //MySQL认证用户密码
        port: '33067',                   //端口号
        database:'nodesample'
});

connection.connect();

var userGetSql = 'select * from userinfo';
connection.query(userGetSql, function (err, result) {
    if(err){
        console.log('[SELECT ERROR] -', err.message);
        return;
    }
    console.log('-------------------------');
    console.log(result);
});
connection.end();