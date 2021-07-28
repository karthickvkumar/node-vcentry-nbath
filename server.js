const express = require('express');
const app = express();
const http = require('http').createServer(app);
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(express.json());

const studentList = [{
  firstName : "Yuvaraj",
  lastName : "A",
  rollNo : 4056,
  age : 28
},{
  firstName : "Karthic",
  lastName : "K",
  rollNo : 4550,
  age : 29
},{
  firstName : "Aswin",
  lastName : "K",
  rollNo : 4012,
  age : 22
}];

app.get('/api/students', (request, response) =>{
  response.status(200).send(studentList);
});

app.post('/api/student/create', (request, response) => {
  const newStudent = {
    firstName : request.body.firstName,
    lastName : request.body.lastName,
    rollNo : request.body.rollNo,
    age : request.body.age
  };

  studentList.push(newStudent);

  const data = {
    message : "Student has been created successfully"
  }
  response.status(200).send(data);
});

const port = process.env.port || 8080;

http.listen(port, () => {
  console.log("SERVER IS RUNNING ON PORT 8080");
})