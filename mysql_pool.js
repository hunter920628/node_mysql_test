/**
 * Created by hunter on 2017/6/4.
 */

var mysql = require('mysql');

var pool  = mysql.createPool({
    host     : '59.175.213.89',       //主机
    user     : 'sso',               //MySQL认证用户名
    password : 'clcc1229',        //MySQL认证用户密码
    port: '33067',                   //端口号
    database:'nodesample'
});

pool.getConnection(function(err, connection) {

    connection.query( 'SELECT * FROM userinfo;', function(err, result) {
        console.log(result);
        connection.release();
    });
});
pool.getConnection(function(err, connection) {

    connection.query( 'SELECT * FROM userinfo;', function(err, result) {
        console.log(result);
        connection.release();
    });
});
