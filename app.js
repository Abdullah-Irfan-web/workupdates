const express=require('express');
const app=express();

const nodemailer=require('nodemailer');
const bodyparser=require('body-parser');
const path=require('path');
const port=process.env.PORT || 8000;

app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');
app.use(express.static('public'));
app.use(bodyparser.urlencoded({extended:true}));

let transport=nodemailer.createTransport({
    service:'hotmail',
    auth:{
        user:'abdirfan7007@outlook.com',
        pass:'Abdirfan70'
    }
});



app.get('/',(req,res)=>{
    res.render('index');

})
app.post('/submit',(req,res)=>{
let images =req.body.images;
res.send(`hello ${images[0]}`);
  
})

app.listen(port,()=>{
    console.log("Started");

})