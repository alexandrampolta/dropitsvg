import mysql from 'mysql';

var databases = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'karimaswan22@A',
  database:"products"
  
  });
  
  databases.connect((err)=>{
  if(err)
   throw err
   console.log("MySQL active . . .");
  
  })


// databases.query('UPDATE productss SET image = "https://dropitsvg.com/images/dropitsvgpl/'+netimg+'" WHERE zip like "%'+zip+'%";' , function (error, results, fields) {
// console.log(error);
// console.log('ok');
// })
import fs from "fs"

databases.query('select * from productss where id >1784' , function (error, results, fields) {
console.log(error);
var a = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;

results.forEach(function(prod){
try{
var idd = prod.id
var netimg = prod.image
  if(idd>=2664){
  a = a+"\n"+`</urlset>`
 fs.writeFile("./public/sitemapp4.xml",a, 'utf8', err => {
 if (err) throw err;
console.log('File has been saved!');
});



  }else{
    var minit  = prod.title.toString().replace(/,/g,"").replace(/ /g,"-").replace(/:/g,"").replace(/!/g,"").replace(/--/g,"-").replace(/&/g,"-")
    a = a+"\n"+`<url>
   <loc>https://dropitsvg.com/product/`+idd+`/`+minit+`</loc>
   <changefreq>weekly</changefreq>
   <priority>1.0</priority>
   </url>`

databases.query('UPDATE productss SET image = "https://dropitsvg.com/images/dropitsvghl/'+netimg+'" where id ="'+idd+'"' , function (error, results, fields) {
console.log(error);
console.log(idd +"updated");
})

  }
    

}catch(err){

}





});
})



// var rangee = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);
// var num1 = 1363
// var num2 = 1782

// var sitemapp = 3

// var a = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;
// var allow = true
// setInterval(function(){
//   if(allow==true){
//   allow = false 
//  var  allnums = rangee(num1, num2);

//   allnums.forEach(function(productid){
//     databases.query('SELECT * FROM productss where id = "'+productid+'"' , function (error, results, fields) {
//       if (error) throw error;
//       if(results.length==0){

//       }else{

//         var minit  = results[0].title.toString().replace(/,/g,"").replace(/ /g,"-").replace(/:/g,"").replace(/!/g,"").replace(/--/g,"-").replace(/&/g,"-")
// var productidto = results[0].id

//         a = a+"\n"+`<url>
// <loc>https://dropitsvg.com/product/`+productidto+`/`+minit+`</loc>
// <changefreq>weekly</changefreq>
// <priority>1.0</priority>
// </url>`


     
//       }
        



// if(productid==num2){
//   // console.log(a)

 
//   a = a+"\n"+`</urlset>`
//  fs.writeFile("./public/sitemapp"+sitemapp+".xml",a, 'utf8', err => {
//         if (err) throw err;
//         console.log('File has been saved!');
//              });




// }
// });
// });
// }else{

// }
// },200)
