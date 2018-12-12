var express = require('express');
var fs = require("fs");
var app = express();
var parser = require('body-parser');
var user = fs.readFileSync("../assets/user.json");
var userData = JSON.parse(user);

console.log('Running server');

app.use(parser.json());
app.route('/rest/api/post').post((req, res) => {
  console.log("Post Invoked");
  var newUser = req.body;
  let data = {
    "name": newUser.name,
    "id": newUser.id,
    "email": newUser.email,
    "mobile": newUser.mobile,
    "location": newUser.location
  }
  console.log(data);
  userData.push(data);
  fs.writeFileSync('../assets/user.json', JSON.stringify(userData));
});

app.route('/rest/api/update').post((req, res) => {
  console.log("Update Invoked");
  var newUser = req.body;
  let data = {
    "name": newUser.name,
    "id": newUser.id,
    "email": newUser.email,
    "mobile": newUser.mobile,
    "location": newUser.location
  }
  for (var j in userData)
    if (j == newUser.index) {
      userData[j] = data;
    }
  fs.writeFileSync('../assets/user.json', JSON.stringify(userData));

});

app.route('/rest/api/delete').post((req, res) => {
  console.log("Delete Invoked");
  var deleteUser = req.body;
  userData.splice(deleteUser.index, 1);
  fs.writeFileSync('../assets/user.json', JSON.stringify(userData));
});

app.listen(4210);