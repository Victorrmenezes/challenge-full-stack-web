const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

app.use(cors());

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

var database ={
    alunos:[
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
        res.json(database.alunos);
    })

    app.get('/cadastro/:ra',(req,res)=>{
        
    if(isNaN(req.params.ra)){
        res.send("Isso não é um o");
    }else{
        res.send("Isso é um numero");
    }
    
})

app.post('/cadastro',(req,res)=>{
    var novo = req.body;
    
    database.alunos.push(novo);
    
    res.statusCode(200);
})

app.delete('/cadastro/:ra',(req,res)=>{
    
if(isNaN(req.params.ra)){
    res.statusCode(400);
}else{
    var ra = parseInt(req.params.ra);
    var index = database.alunos.findIndex(v => v.ra== ra);

    if(index == -1){
        res.sendStatus(404);
    }else{
        database.alunos.splice(index,1);
        res.sendStatus(200);
    }
}


})








app.listen(45678,()=>{
    console.log("API RODANDO!");
})
