const { connect } = require('http2');
let mysql=require('mysql');

let connection=mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'root',
    database : 'table_registration'

});
connection.connect(function(err){
    if(err){
        console.log("unable to connect "+err.message);
    }
    console.log("database connected successfully");
});
module.exports=connection;
