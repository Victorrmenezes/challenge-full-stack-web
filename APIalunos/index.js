const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

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
        res.json(database.items);
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
        var novo = req.body;
        
        database.items.push(novo);
        
        res.statusCode(200);
    })

    app.delete('/cadastro/:ra',(req,res)=>{
        if(isNaN(req.params.ra)){
            res.statusCode(400);
        }else{
            var ra = parseInt(req.params.ra);
            var index = database.items.findIndex(v => v.ra== ra);

            if(index == -1){
                res.sendStatus(404);
            }else{
                database.items.splice(index,1);
                res.sendStatus(200);
            }
        }
    })
    app.put('/cadastro/:ra',(req,res)=>{
        if(isNaN(req.params.ra)){
            res.statusCode(400);
        }else{
            var ra = parseInt(req.params.ra);
            
            var aluno = database.items.find(v => v.ra== ra);
            
            
            if(aluno != undefined){
                
                editado= req.body;

                if(editado.name != undefined){
                    aluno.name=editado.name;
                }
                
                if(editado.email != undefined){
                    aluno.email=editado.email;
                }


                res.sendStatus(200);
            }else{
                res.sendStatus(404);
            }
        }
    })








app.listen(45678,()=>{
    console.log("API Running!");
})
