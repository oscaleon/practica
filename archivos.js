const fs =  require("fs");

fs.writeFile("archivo.txt","Ejeplo davilabs", function(err)
{
 if(!err)
 { 
     console.log("Arvicvo guardado");
 }
}
);

fs.readFile("archivo.txt","utf-8",(err,data)=>
 {
  if(!err)
    console.log("file:",data);

 }
)

