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
    host: 'smtp.gmail.com',
    port:587,
    secure:false,
    requireTLS:true,
    auth:{
        user:'abdirfanwork7007@gmail.com',
        pass:'abdirfan@70'
    }
});



app.get('/',(req,res)=>{
    res.render('index');

})
app.post('/submit',(req,res)=>{


  let images=req.body.images;
 let x=images.length;
   let mailoption={}
if(x==1){
    mailoption={
        from:"abdirfanwork7007@gmail.com",
        to:"Poojameetagoswami@gmail.com",
        subject:"Images",
        text:"Hello there whats up",
        attachments:[
                

         {   
   
   
   
            path:`\public/images/${images[0]}.jpeg`
         }
            
               
               
            
           
           
        ]
    }
}

else if(x==2){
     mailoption={
         from:"abdirfan7007@outlook.com",
         to:"Poojameetagoswami@gmail.com",
         subject:"Images",
         text:"Hello there whats up",
         attachments:[
                 
 
          {   
    
    
    
             path:`\public/images/${images[0]}.jpeg`
          },
          {   
    
    
    
            path:`\public/images/${images[1]}.jpeg`
         }
             
                
                
             
            
            
         ]
     }
 }
 else if(x==3){
     mailoption={
         from:"abdirfan7007@outlook.com",
         to:"Poojameetagoswami@gmail.com",
         subject:"Images",
         text:"Hello there whats up",
         attachments:[
                 
 
          {   
    
    
    
             path:`\public/images/${images[0]}.jpeg`
          },
          {   
    
    
    
            path:`\public/images/${images[1]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[2]}.jpeg`
         }
             
                
                
             
            
            
         ]
     }
 }
else if(x==4){
     mailoption={
         from:"abdirfan7007@outlook.com",
         to:"Poojameetagoswami@gmail.com",
         subject:"Images",
         text:"Hello there whats up",
         attachments:[
                 
 
          {   
    
    
    
             path:`\public/images/${images[0]}.jpeg`
          },
          {   
    
    
    
            path:`\public/images/${images[1]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[2]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[3]}.jpeg`
         }
             
                
                
             
            
            
         ]
     }
 }
 else if(x==5){
     mailoption={
         from:"abdirfan7007@outlook.com",
         to:"Poojameetagoswami@gmail.com",
         subject:"Images",
         text:"Hello there whats up",
         attachments:[
                 
 
          {   
    
    
    
             path:`\public/images/${images[0]}.jpeg`
          },
          {   
    
    
    
            path:`\public/images/${images[1]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[2]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[3]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[4]}.jpeg`
         }
             
                
                
             
            
            
         ]
     }
 }
 else if(x==6){
     mailoption={
         from:"abdirfan7007@outlook.com",
         to:"Poojameetagoswami@gmail.com",
         subject:"Images",
         text:"Hello there whats up",
         attachments:[
                 
 
          {   
    
    
    
             path:`\public/images/${images[0]}.jpeg`
          },
          {   
    
    
    
            path:`\public/images/${images[1]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[2]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[3]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[4]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[5]}.jpeg`
         }
             
                
                
             
            
            
         ]
     }
 }
 else if(x==7){
     mailoption={
         from:"abdirfan7007@outlook.com",
         to:"Poojameetagoswami@gmail.com",
         subject:"Images",
         text:"Hello there whats up",
         attachments:[
                 
 
          {   
    
    
    
             path:`\public/images/${images[0]}.jpeg`
          },
          {   
    
    
    
            path:`\public/images/${images[1]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[2]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[3]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[4]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[5]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[6]}.jpeg`
         },

             
                
                
             
            
            
         ]
     }
 }
 else if(x==8){
     mailoption={
         from:"abdirfan7007@outlook.com",
         to:"Poojameetagoswami@gmail.com",
         subject:"Images",
         text:"Hello there whats up",
         attachments:[
                 
 
          {   
    
    
    
             path:`\public/images/${images[0]}.jpeg`
          },
          {   
    
    
    
            path:`\public/images/${images[1]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[2]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[3]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[4]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[5]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[6]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[7]}.jpeg`
         }
             
                
                
             
            
            
         ]
     }
 }
 
          else if(x==9){
     mailoption={
         from:"abdirfan7007@outlook.com",
         to:"Poojameetagoswami@gmail.com",
         subject:"Images",
         text:"Hello there whats up",
         attachments:[
                 
 
          {   
    
    
    
             path:`\public/images/${images[0]}.jpeg`
          },
          {   
    
    
    
            path:`\public/images/${images[1]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[2]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[3]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[4]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[5]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[6]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[7]}.jpeg`
         },
         {   
    
    
    
            path:`\public/images/${images[8]}.jpeg`
         }
             
                
                
             
            
            
         ]
     }
 }
             
                
                
             
            
            
   transport.sendMail(mailoption,(err,info)=>{
        if(err){
            console.log(err);
        }
        else{
           console.log("mail sent"+info.response)
           res.redirect('/');
            
        }
    })


  
})

app.listen(port,()=>{
    console.log("Started");

})
