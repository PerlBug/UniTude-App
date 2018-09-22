const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());

const db = [
  {
    name: 'Lucy',
    uni: 'UNSW',
    subjects: ['COMP1511', 'COMP2511']
  },
  {
    name: 'Andrew',
    uni: 'Usyd',
    subjects: ['GENDER101']
  },
  {
    name: 'Steven',
    uni: 'UNSW',
    subjects: ['COMP2511']
  }
]

app.get('/', function (req, res) {

});

app.listen(5000, function () {
    console.log('Dev app listening on port 5000!');
});

app.post('/tutor-list', (req,res) => {
  let filteredList = []
  for(i = 0 ; i < db.length; i++){
    if(db[i].uni === req.body.uni){
      filteredList.push(db[i]);
    }
  }
  res.json(filteredList);
});

app.post('/register-tutor', (req,res) => {
  let newTutor = {
    name: req.body.name,
    uni: req.body.uni,
    subjects: req.body.subjects
  }

  db.push(newTutor);
  res.json(newTutor);
});

/*

'/' --> this is working
'/tutor-list'--> POST --> responds with a json of tutors
'/register-tutor'



*/
