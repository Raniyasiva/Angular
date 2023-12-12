let mysql=require('mysql')
let connection = mysql.createConnection({
    host:'Localhost',
    user:'root',
    password:'root',
    database: 'country'
});

connection.connect(function(err){
    if(err){
        console.log("unable to connect" + err.message);
    }
    console.log("database connected successfully");
});
module.exports=connection;