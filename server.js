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
  age : 28,
  id : 1
},{
  firstName : "Karthic",
  lastName : "K",
  rollNo : 4550,
  age : 29,
  id : 2
},{
  firstName : "Aswin",
  lastName : "K",
  rollNo : 4012,
  age : 22,
  id : 3
}];

app.get('/api/students', (request, response) =>{
  response.status(200).send(studentList);
});

app.post('/api/student/create', (request, response) => {
  const newStudent = {
    firstName : request.body.firstName,
    lastName : request.body.lastName,
    rollNo : request.body.rollNo,
    age : request.body.age,
    id : studentList.length + 1
  };

  studentList.push(newStudent);

  const data = {
    message : "Student has been created successfully"
  }
  response.status(200).send(data);
});


app.put('/api/student/update/:id', (request, response) => {
  const id = request.params.id;
  const index = studentList.findIndex((value, index) => {
    return value.id == id;
  });

  const editStudent = {
    firstName : request.body.firstName,
    lastName : request.body.lastName,
    rollNo : request.body.rollNo,
    age : request.body.age,
    id : studentList[index].id
  };

  studentList[index] = editStudent;
  const data = {
    message : "Student has been Updated successfully"
  }
  response.status(200).send(data);
});

app.delete('/api/student/delete/:id', (request, response) => {
  const id = request.params.id;
  const index = studentList.findIndex((value, index) => {
    return value.id == id;
  });

  studentList.splice(index, 1);
  const data = {
    message : "Student has been Deleted successfully"
  }
  response.status(200).send(data);
})


const port = process.env.port || 8080;

http.listen(port, () => {
  console.log("SERVER IS RUNNING ON PORT 8080");
})