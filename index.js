function sandMail(){
    var params={
         name : document.getElementById("name").Value ,
         email : document.getElementById("email").Value ,
         message : document.getElementById("message").Value ,
    };

    const serviceID = "service_uu10wnj";
    const templateID="template_k0p95sf";
    email.js.sand(serviceID, templateID, params)
    .then(
       res=>{
           document.getElementById("name").Value="";
           document.getElementById("email").Value="";
           document.getElementById("message").Value="";
           console.log(res);
           alert("your email send successfully");
           console.log("hello");
      
       })
       .catch((err) => console.log(err));
} 

