// Index File of the API
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/database");
const List = require("./database/List");
const cors = require('cors');

// Establishing connection with database
connection
    .authenticate()
    .then(()=>{
    console.log("Conexão Feita!")
    })
    .catch((err)=>{
    console.log(err);
});

// Using CORS as an intermediary between Vue and the API 
app.use(cors());

//Using Body Parser
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());


//Routes of the API
    app.get('/cadastro',(req,res)=>{
        res.statusCode=200;
        List.findAll({raw:true}).then(items=>{
            res.json(items);
        })
    })
    

    app.post('/cadastro',(req,res)=>{
        List.create({
            name: req.body.name,
            email: req.body.email,
            ra:req.body.ra,
            cpf:req.body.cpf
        }).then(()=>{
            console.log("Dados cadastrados no banco.")
        })
        
        res.statusCode(200);
    })

    app.delete('/cadastro/:ra',(req,res)=>{
        if(isNaN(req.params.ra)){
            res.statusCode(400);
        }else{
            var ra = parseInt(req.params.ra);   

            List.destroy({where:{ra:ra}})
            
            res.sendStatus(200);
        }
    })
    app.put('/cadastro/:ra',(req,res)=>{
        if(isNaN(req.params.ra)){
            res.statusCode(400);
        }else{
            var ra = req.params.ra;
            console.log(req.body);
            
            List.update({ name:req.body.name , email:req.body.email },{where:{ra:ra}})

            res.sendStatus(200);
            
        }
    })







//API Running on this gate
app.listen(45678,()=>{
    console.log("API Running!");
})
