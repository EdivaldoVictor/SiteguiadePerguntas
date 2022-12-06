const express = require("express");
const app = express();

//Estou dizendo ao express para usar o EJS como view engine
app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",(req,res ) =>{

    res.render("index",{
    });
});

app.get("/perguntar",(req,res) =>{
    res.render("perguntar")
});

app.post("/salvarpergunta", (req,res) =>{
    res.send("Formulário recebido!")
});

app.listen(8080,() =>{console.log("Listening on port 8080");});
