const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
app.get("",(req,res)=>{
    res.send("Hello World");
});
app.post("/add",(req,res)=>{

    const num1 = Number(req.body.num1);
    const num2  =  Number(req.body.num2);
    const sum1 = num1+num2;
    res.status(201);
    res.send({
        message: "the sum of given two numbers",
        sum: sum1
        });
});
app.post("/sub",(req,res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const diff = num1-num2;
    res.status(201);
    res.send({
        message: "the difference of given two numbers",
        difference: diff
    });
});
app.post("/multiply",(req,res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const mul = num1*num2;
    res.status(201);
    res.send({
        message: "The product of given numbers",
        result: mul
    });
});
app.post("/divide",(req,res)=>{
    const num1 = Number(req.body.num1);
    const num2 = Number(req.body.num2);
    const div = num1/num2;
    res.status(201);
    res.send({
        message: "The division of given numbers",
        result: div
    });
});
// your code goes here


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;