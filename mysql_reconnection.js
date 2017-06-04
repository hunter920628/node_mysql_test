/**
 * Created by hunter on 2017/6/4.
 */
var mysql = require('mysql');
var db_config = {
    host     : '59.175.213.89',       //主机
    user     : 'sso',               //MySQL认证用户名
    password : 'clcc1229',        //MySQL认证用户密码
    port: '33067',                   //端口号
    database:'nodesample'
};

var connection;
function handleDisconnect() {
    connection = mysql.createConnection(db_config);
    connection.connect(function(err) {
        if(err) {
            console.log("进行断线重连：" + new Date());
            setTimeout(handleDisconnect, 2000);   //2秒重连一次
            return;
        }
        console.log("连接成功");
    });
    connection.on('error', function(err) {
        console.log('db error', err);
        if(err.code === 'PROTOCOL_CONNECTION_LOST') {
            handleDisconnect();
        } else {
            throw err;
        }
    });
}
handleDisconnect();