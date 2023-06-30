const mysql=require('mysql')
var connection = mysql.createConnection({
    host: "sql12.freesqldatabase.com",
    user: "sql12629704",
    server: 3306,
    password: "xrc15KTlLR",
    database:"sql12629704"
  });
  connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected")
  });
  function searchCredential(username, password,callback) {
    const query = 'SELECT * FROM users WHERE username = ? AND password = ?';
   
    connection.query(query, [username, password], (error, result) => {
      console.log(username+" "+password)
      if (error) {
        console.log("Error in search:", error);
        callback(err)
        return 
      }
      console.log(result)
     callback(null,result)
    });
  }
  function storeCredential(username, password,callback) {
    const query = 'INSERT INTO users values(?,?)';
   
    connection.query(query, [username, password], (error, result) => {
      console.log(username+" "+password)
      if (error) {
        console.log("Error in search:", error);
        callback(err)
        return 
      }
      console.log(result)
     callback(null,result)
    });
  }
  module.exports={
    searchCredential,
    storeCredential
  }