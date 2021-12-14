const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/', (req, res) => {
  let num1 = Number(req.body.num1);
  let num2 = Number(req.body.num2);

  let result = num1 + num2;
  res.send(`The result of the calculation is ${result}`);
});

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname + '/bmiCalculator.html');
});

app.post('/bmicalculator', (req, res) => {
  let weight = Number(req.body.weight);
  let height = Number(req.body.height);

  let bmi = ((weight / height / height) * 703).toFixed(2);

  // Dividing as per the bmi conditions
  res.send(`<h2>Your BMI is ${bmi}</h2>`);
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
