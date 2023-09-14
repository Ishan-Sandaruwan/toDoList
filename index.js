import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

var todos = ["Clean My Room","Decluttering my study room"];

function getData() { 
    const days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    const months = ["January","February","March","April","May","Juny","July","August","September","Octomber","November","December"];
    let day = days[new Date().getDay()];
    let month = months[new Date().getMonth()];
    let date = new Date().getDate();
    let year = new Date().getFullYear();
    var data = {
        date:date,
        day:day,
        month:month,
        year:year,
        todos:todos,
    }
    return data;
}

app.get("/", (req, res) => {
    
    res.render("index.ejs",getData());

});

app.post("/submit",(req,res)=>{
    todos.push(req.body["todo"]);
    console.log("new todo added "+todos[todos.length-1]);
    res.render("index.ejs",getData());
});
  

app.listen(port,()=>{
    console.log("server is running on port "+port);
})