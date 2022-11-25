const express=require("express");
const bodyParser=require("body-parser");
const app=express();
app.use(bodyParser.urlencoded({extended:false}));
app.set("view engine","ejs");
var note;
var list=[];
var work=[];
var other=[];
app.post("/add",(req,res)=>{
    note=req.body.notes;
    var a=req.body.todo;
    if(a=="Personal")
    list.push(note);
    else if(a=="Work"){
        work.push(note);
    }else{
        other.push(note);
    }  

    res.redirect("/");

})
app.post("/delete",(req,res)=>{
   
    var s=req.body.checkbox;
    for(i=0;i<list.length;i++){
        if(s==list[i]){
            list.splice(i,1);
            break;
        }
    }
        
    res.redirect("/");
})
app.post("/delete1",(req,res)=>{
    var s=req.body.checkbox;
    for(i=0;i<work.length;i++){
        if(s==work[i]){
            work.splice(i,1);
            break;
        }
    }
        
    
    res.redirect("/");
})
app.post("/delete2",(req,res)=>{
    var s=req.body.checkbox;
    for(i=0;i<other.length;i++){
        if(s==other[i]){
            other.splice(i,1);
            break;
        }
    }
        
    res.redirect("/");
})
app.get("/",(req,res)=>{
    let option={weekly :'long',year:'numeric',month:'long',day:'numeric'};
    let today=new Date();
    let day=today.toLocaleDateString("en-us",option);
    res.render("home",{name: list,name1:work,name2:other,day:day});
    
})
app.listen(3120);