const express = require('express');
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');
const mysql = require('mysql');

const DB_NAME = "student_test_db_100";
const TABLE_NAME = "student_info";

app.use(bodyParser.json());
app.use(express.json());

const connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : ''
});

connection.connect((error) => {
  if(error){
    console.log("Error in connecting SQL Server", error);
    return;
  }

  console.log('Successfully connected the SQL Server')
});

app.post('/api/create/db', (request, response) => {
  connection.query(`CREATE DATABASE ${DB_NAME}`, (error, result) => {
    if(error){
      response.status(500).send({
        message : "Problem in creating new database",
        error
      });
      return;
    }

    response.status(200).send({
      message : "Created a new Database",
      result
    });
  })
})

app.get('/api/students', (request, response) =>{
 
});

app.post('/api/student/create', (request, response) => {

});


app.put('/api/student/update/:id', (request, response) => {

});

app.delete('/api/student/delete/:id', (request, response) => {

})


const port = process.env.port || 8080;

http.listen(port, () => {
  console.log("SERVER IS RUNNING ON PORT 8080");
})