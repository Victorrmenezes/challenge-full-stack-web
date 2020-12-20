const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const connection = require("./database/database");
const List = require("./database/List");
const cors = require('cors');

connection
    .authenticate()
    .then(()=>{
    console.log("Conexão Feita!")
    })
    .catch((err)=>{
    console.log(err);
});

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var database ={
    items:[
        {
            name:"João Victor",
            ra:"04105055",
            email:"victorrmenezes@hotmail.com",
            cpf:'03205806360',
        },
        {
            name:"Milena",
            ra:"08303950",
            email:"mimiguimaraes@hotmail.com",
            cpf:'0345265457',
        },
        {
            name:"Carol",
            ra:"07105348",
            email:"Carol@hotmail.com",
            cpf:'49823019459',
        },
    ]
}

    app.get('/cadastro',(req,res)=>{
        res.statusCode=200;
        List.findAll({raw:true}).then(items=>{
            res.json(items);
        })
    })
    
    app.get('/cadastro/:ra',(req,res)=>{
        if(isNaN(req.params.ra)){
            res.sendStatus(400);
        }else{
            var ra = parseInt(req.params.ra);
            
            var aluno = database.items.find(v => v.ra== ra);

            res.json(aluno);

            res.sendStatus(200);
            
        }
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

            List.destroy({
                 where:{
                     ra:ra
                }
            })
            
            res.sendStatus(200);
        }
    })
    app.put('/cadastro/:ra',(req,res)=>{
        if(isNaN(req.params.ra)){
            res.statusCode(400);
        }else{
            var ra = req.params.ra;
            console.log(req.body);
            
            List.update({name:req.body.name,email:req.body.email},{
                where:{
                    ra:ra
                }
            }
            )
            res.sendStatus(200);
            
        }
    })








app.listen(45678,()=>{
    console.log("API Running!");
})
