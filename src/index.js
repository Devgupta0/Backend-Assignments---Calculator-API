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
        const num1 = req.body.num1;
        const num2 = req.body.num2;
        if(typeof(num1) != "number" || typeof(num2) != "number"){
            res.send({
                status: 'error',
                message: "Invalid data types"
            });
        }else{
            const sum1 = num1+num2;
            if(diff >= 999999 || num1>=999999 || num2>=999999){
                res.send({
                    status: 'error',
                    message: "Overflow",
                });
            }else if(diff <= -999999 || num1 <= -999999 || num2 <= -999999){
                res.send({
                    status: 'error',
                    message: "Underflow"
                });
            }else{
                res.status(200).send({
                message: "the sum of given two numbers",
                sum: sum1
            });
        }
    }
});
        
app.post("/sub",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(typeof(num1) != "number" || typeof(num2) != "number"){
        res.send({
            status: 'error',
            message: "Invalid data types"
        });
    }else{
        const diff = num1-num2;
        if(diff >= 999999 || num1>=999999 || num2>=999999){
            res.send({
                status: 'error',
                message: "Overflow",
            });
        }else if(diff <= -999999 || num1 <= -999999 || num2 <= -999999){
            res.send({
                status: 'error',
                message: "Underflow"
            });
        }else{
            res.status(200).send({
                status: 'success',
                message: "the difference of given two number",
                difference: diff
            });
        }
    }
});
app.post("/multiply",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(typeof(num1) != "number" || typeof(num2) != "number"){
        res.send({
            status: 'error',
            message: "Invalid data types"
        });
    }else{
        const mul = num1*num2;
        if(mul >= 999999 || num1 >= 999999 || num2 >= 999999){
            res.send({
                status: 'error',
                message: "Overflow"
            });
        }else if(mul <= -999999 || num1 <= -999999 || num2 <= -999999){
            res.send({
                status: 'error',
                message: "Underflow"
            });
        }else{
            res.status(200).send({
                message: "The product of given numbers",
                result: mul
            });
        }
    }
});
app.post("/divide",(req,res)=>{
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    if(typeof(num1) != "number" || typeof(num2) != "number"){
        res.send({
            status: 'error',
            message: "Invalid data types"
        });
    }else{
        const div = num1/num2;
        if(div >= 999999 || num1 >= 999999 || num2 >= 999999){
            res.send({
                status: 'error',
                message: "Overflow"
            });
        }else if(div <= -999999 || num1 <= -999999 || num2 <= -999999){
            res.send({
                status: 'error',
                message: "Underflow"
            });
        }else{
            res.status(200).send({
                message: "The division of given numbers",
                result: div
            });
        }
    }
});
// your code goes here


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;