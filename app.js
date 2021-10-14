const express = require("express");
const app = express();
const path = require('path');
app.use(express.json());


app.set('views', path.join(__dirname,'views'));
app.set('view engine', 'ejs');
app.use(express.static(path.join(__dirname,'public'))); //imagenes-css-js

app.get('/',(req,res)=>{
    res.render('index')
});
app.get('/carrito',(req,res)=>{
    res.render('./pages/carrito')
});

app.get("/welcome", (req,res) => {
    res.send(tagRedirect);
});


app.post("/mandardata", (req,res) => {
    let postt = req.body
    console.log(postt);
    res.send("hola!!!");
});


app.listen(5500, ()=>{
    console.log("Aplicacion corriendo en puerto 5500")
});