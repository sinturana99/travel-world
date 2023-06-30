const express=require("express")
const port=process.env.PORT || 3000
const bodyParser=require("body-parser")
const app=express()
const database=require('./database')
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

app.use(express.static('frontend'))

app.get("/signin",(req,res)=>{
    res.sendFile(__dirname+"/frontend/signin.html")
})

app.post('/logged',(req,res)=>{
    const username=req.body.username
    const password=req.body.password
    database.searchCredential(username,password,(req,result)=>{
        if(result.length==0) res.sendStatus(212)
        else res.sendStatus(200)
    })
})
app.post('/signup',(req,res)=>{
    const username=req.body.username;
    const password=req.body.password;
    database.storeCredential(username,password,(req,result)=>{
            if(result.affectedRows>0) res.sendStatus(200);
            else res.sendStatus(212);
    });
});
app.get('/logout',(req,res)=>{
    res.redirect('login.html');
});
app.listen(port,()=>{
    console.log("server is listenning")
});