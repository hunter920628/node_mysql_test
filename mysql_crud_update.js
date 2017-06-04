/**
 * Created by hunter on 2017/6/4.
 */

var mysql  = require('mysql');

var connection = mysql.createConnection({
    host     : '59.175.213.89',       //主机
    user     : 'sso',               //MySQL认证用户名
    password : 'clcc1229',        //MySQL认证用户密码
    port: '33067',                   //端口号
    database:'nodesample'
});

connection.connect();

var  userUpdateSql = 'UPDATE userinfo SET UserName = ?,UserPass = ? WHERE Id = ?';
var  userUpdateSql_Params = ['hunter', 'abcd', 1];
//增
connection.query(userUpdateSql,userUpdateSql_Params,function (err, result) {
    if(err){
        console.log('[UPDATE ERROR] - ',err.message);
        return;
    }

    console.log('--------------------------INSERT----------------------------');
    //console.log('INSERT ID:',result.insertId);
    console.log('UPDATE affectedRows :',result.affectedRows);
    console.log('-----------------------------------------------------------------\n\n');
});

connection.end();
