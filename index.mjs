import jwt from "jsonwebtoken"
import cookieParser from "cookie-parser"
import paypal from "paypal-rest-sdk"
import bodyParser from "body-parser"
import ejs from "ejs"
import nodemailer from 'nodemailer'
import express from "express"
import { fileURLToPath } from 'url';
import path from 'path';
import fetch from "node-fetch";
import mysql from 'mysql';
import fileUpload from 'express-fileupload'
import { title } from "process"




var app = express();
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: false });
const __dirname = path.dirname(fileURLToPath(import.meta.url));
app.use(express.static(path.join(__dirname ,'public')));
app.set("views", "./views");
app.use(fileUpload());




// paypal.configure({
//   mode: "live", //sandbox or live
//   client_id:"AaendWmNph5gmEPzyWtFiFUFYolmOH6JPRy--MydaQK0yYA15kX6Y1LFozIxI3-N9v0Ny_ATYK4Vaiq_",
//   client_secret:"ELHYHxQLWpeHkrvEnjf2BieiopgLcjsXjRy5YXRKS5LiyzGkuZDyzUs0NOSJbII0U964NKYw2nTM26VJ",
// }
paypal.configure({
  mode: "sandbox", //sandbox or live
  client_id:"AUHUiKxuQ3bT5zWgqh_PLziAzuhmgf6G_11qlAr5W-5rxCzz9OPvjUONDJ3pAbiXrCAGNvdzUPeUORxo",
  client_secret:"ELvo3-9YndNcxnap1x6oLUQdorIg_OT9RQVsd_pV3iop3rl1pSS4LMBD74spiZqcrJFMMfz1WMy5KuQX",
});



     



var databases = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'karimaswan22@',
database:"products"

});

databases.connect((err)=>{
if(err)
 throw err
 console.log("MySQL active . . .");

})



app.get('/ladminpanelweb', function(req, res){

  res.render("adminpanelweb.ejs",{})

})



app.get('/', function(req, res){
databases.query('SELECT * FROM ( SELECT * FROM productss ORDER BY id DESC LIMIT 10 )Var1 ORDER BY id ASC;' , function (error, results, fields) {
console.log(error);

var latestsvgs = ``;
    results.forEach(function(response){

      latestsvgs = latestsvgs +`<div class="item col-6 col-md-4 col-lg-3 col5 " style="
max-height: 500px;
">
                 <div class="bg-grid-item">
                     
                       
<div class="inner product-item json-loading" >
<div class="inner-top">
 <div class="">
   <div class="product-image image-swap">
     <a href="/product/`+response.id+`" class="product-grid-image animate-scale adaptive_height">
       


<div class="product-label" data-label-new-number="5">

<strong class="label new-label">
 New
</strong>
<br>





</div>
<picture data-index="0">
 
 

 

<img data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" data-image="" sizes="300px" srcset="`+response.image+`" class="images-one lazyautosizes ls-is-cached lazyloaded">
</picture>


     </a>
   </div>

   







   
   
     
   



 </div>

 
 <div class="product-bottom">

   

   
     

   

   <a class="" href="/product/`+response.id+`">
     
<span>
`+response.title.toString().substring(0,24)+`. . . 
</span>
<br><span class="spr-starrating spr-summary-starrating">
   <i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i>
 </span>

     
   </a>

   <div class="price-box">
     
       
       <div class="price-regular">
         


<span><span class="money"> $`+response.price+` </span></span>
       </div>
       
     
   </div>

   
     



   
   
   <div class="wrapper-button-card">
     
     <div class="action">
       


<stronge>


 
   
     <a class="btn" href="/product/`+response.id+`" title="">Quick View</a>
   
 


</stronge>

     </div>
     
     




   </div>

   
   
   

   

 </div>

 
 
</div>
</div>
                     
                 </div>
</div>`


    });


 res.render("index.ejs",{latestsvgs:latestsvgs})


});




});



app.get('/contact-us', function(req, res){
if(req.query.contact!=null){

  res.send("We Have Recieved Your Comment .Thank you")
}else{
  res.render("contactus.ejs")

}


});
   
app.get('/279262', function(req, res){


  databases.query('SELECT * FROM productss' , function (error, results, fields) {
    if (error) throw error;
    var lengthofrows = results.length
    res.render("adminpage.ejs",{lengthofrows:lengthofrows})
  });



});
  



// databases.query('CREATE TABLE productss(id int AUTO_INCREMENT,PRIMARY KEY (id) ,title VARCHAR(255),price VARCHAR(255)  ,image VARCHAR(255),tags MEDIUMTEXT  ,zip VARCHAR(255),description LONGTEXT ,category VARCHAR(255));' , function (error, results, fields) {
//   if (error) throw error;
//   console.log(results)
// });

//   databases.query('CREATE TABLE sales(id int AUTO_INCREMENT,PRIMARY KEY (id) ,idkey VARCHAR(255),transactionid VARCHAR(255),useremail VARCHAR(255),orderinfos LONGTEXT);' , function (error, results, fields) {
//   if (error) throw error;
//   console.log(results)
// });












//  databases.query('CREATE TABLE sales(id int AUTO_INCREMENT,PRIMARY KEY (id) ,idkey VARCHAR(255),transactionid VARCHAR(255),useremail VARCHAR(255),orderinfos LONGTEXT);' , function (error, results, fields) {
//   if (error) throw error;
//   console.log(results)
// });








var categories = [
  "Anime",
  "cartoon",
  "gaming",
  "movies",
  "social media",
  "sport",
  "special events",
  "more",

];
const range = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);




app.post("/createlisting2", async (req, res) => { 
 var  title = req.body.title
 var  price = req.body.price
 var  tags = req.body.tags
  var zip = req.body.zip
  var image = req.body.image
  var description = req.body.description
  var category = req.body.category

   

  var categorymain = categories[category];
var data = {
  title:title,
  price:price,
  tags:tags,
  zip:zip,
  image:image,
  description:description,
  category:categorymain

  };
    databases.query('INSERT INTO productss SET ?' , data,function (error, results, fields) {
      if (error) throw error;
      databases.query('SELECT * FROM productss	' , function (error, results, fields) {
        if (error) throw error;
      });
      
      res.json({"status":"good"})
    });

})



//make terms and policy pages =>10 min
//make contact us section use tawk.com => 10 min
//reviwes
//fix the buyer email send him his items 
app.get('/refund', function(req, res){
  res.render("refund.ejs");


})
app.get('/terms', function(req, res){
  res.render("terms.ejs");


})
app.get('/privacy-policy', function(req, res){
  res.render("privacy.ejs");
  

})
app.get('/shop', function(req, res){
var page = req.query.page;
if(page<=0)
return res.redirect("/shop?page=1");

if(page==null || page==undefined || page<=0){
  page = 1
};
var lastp = page*20;
var firstp = lastp-20;
  databases.query('SELECT * FROM productss WHERE id BETWEEN '+firstp+' AND '+lastp+'' , function (error, results, fields) {
    if (error) throw error;
     console.log(results)
     if(results.length==0){
        //just send hime to last result
       var bostthrough = parseFloat(page)-1
        res.redirect("/shop?page="+bostthrough);
     }else{
       
var htmlshop = ``;
results.forEach(function(response){

  htmlshop = htmlshop +`<div class="item col-6 col-md-4 col-lg-3 col5 " style="
max-height: 500px;
">
             <div class="bg-grid-item">
                 
                   
<div class="inner product-item json-loading" >
<div class="inner-top">
<div class="">
<div class="product-image image-swap">
 <a href="/product/`+response.id+`" class="product-grid-image animate-scale adaptive_height">
   


<div class="product-label" data-label-new-number="5">

<strong class="label new-label">
New
</strong>
<br>





</div>
<picture data-index="0">





<img data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" data-image="" sizes="300px" srcset="`+response.image+`" class="images-one lazyautosizes ls-is-cached lazyloaded">
</picture>


 </a>
</div>









</div>


<div class="product-bottom">




 



<a class="" href="/product/`+response.id+`">
 
<span>
`+response.title.toString().substring(0,24)+`. . . 
</span>
<br><span class="spr-starrating spr-summary-starrating">
<i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i>
</span>

 
</a>

<div class="price-box">
 
   
   <div class="price-regular">
     


<span><span class="money"> $`+response.price+` </span></span>
   </div>
   
 
</div>


 





<div class="wrapper-button-card">
 
 <div class="action">
   


<stronge>




 <a class="btn" href="/product/`+response.id+`" title="">Quick View</a>




</stronge>

 </div>
 
 




</div>







</div>



</div>
</div>
                 
             </div>
</div>`


});

var nextpageis = parseFloat(page)+1
var lastpageis = parseFloat(page)-1
      res.render("shop.ejs",{
htmlshop:htmlshop,
nextpage:nextpageis,
lastpage:lastpageis


      })


     }



     });


})



app.get('/search', function(req, res){
  var searchterm = req.query.q;
  if(searchterm==null || searchterm==undefined)
   return res.redirect("/shop")
  
  var worddb = 'SELECT * FROM productss where id like "%ded%"';
  searchterm.split(" ").forEach(function(keyword){


    worddb = worddb+" "+'OR  tags like "%'+keyword+'%"'

  });
 

  databases.query(worddb , function (error, results, fields) {
    if (error) throw error;
     console.log(results)
    //  res.json({results})
    if(results.length==0){
console.log("no results");
var htmlsearch= "";
var raport = `No Match For '`+searchterm+`'`
res.render("search.ejs",{htmlsearch:keysearchhtml,raport:raport})



    }else{

 
var keysearchhtml = ``;
    results.forEach(function(response){

keysearchhtml = keysearchhtml +`<div class="item col-6 col-md-4 col-lg-3 col5 " style="
max-height: 500px;
">
                 <div class="bg-grid-item">
                     
                       
<div class="inner product-item json-loading" >
<div class="inner-top">
 <div class="">
   <div class="product-image image-swap">
     <a href="/product/`+response.id+`" class="product-grid-image animate-scale adaptive_height">
       


<div class="product-label" data-label-new-number="5">

<strong class="label new-label">
 New
</strong>
<br>





</div>
<picture data-index="0">
 
 

 

<img data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" data-image="" sizes="300px" srcset="`+response.image+`" class="images-one lazyautosizes ls-is-cached lazyloaded">
</picture>


     </a>
   </div>

   







   
   
     
   



 </div>

 
 <div class="product-bottom">

   

   
     

   

   <a class="" href="/product/`+response.id+`">
     
<span>
`+response.title.toString().substring(0,24)+`. . . 
</span>
<br><span class="spr-starrating spr-summary-starrating">
   <i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i>
 </span>

     
   </a>

   <div class="price-box">
     
       
       <div class="price-regular">
         


<span><span class="money"> $`+response.price+` </span></span>
       </div>
       
     
   </div>

   
     



   
   
   <div class="wrapper-button-card">
     
     <div class="action">
       


<stronge>


 
   
     <a class="btn" href="/product/`+response.id+`" title="">Quick View</a>
   
 


</stronge>

     </div>
     
     




   </div>

   
   
   

   

 </div>

 
 
</div>
</div>
                     
                 </div>
</div>`


    });


    var raport = `Search Result For '`+req.query.q+`'`
   res.render("search.ejs",{htmlsearch:keysearchhtml,raport:raport})
  }
});

})
app.get('/product-free/:uid/:ok?', function(req, res){

  var ids = req.params.uid
  if(isNaN(ids))
   return res.render("error.ejs")



    databases.query('SELECT * FROM productss where id = "'+ids+'"' , function (error, results, fields) {
      if (error) throw error;
      if(results.length==0)
          return res.render("error.ejs",{})
      if(results[0].price==0){
      var title = results[0].title
      var touchtitle = title.split(' ');
      var title_mini = touchtitle[0]+" "+touchtitle[1]+" "+touchtitle[2]

      var imageurl = results[0].image
      var price = results[0].price
      var description = results[0].description
      var zip = results[0].zip
      var tags = results[0].tags
      var category = results[0].category;
     


     var  rangers = range(0, categories.length);
      rangers.forEach(function(num){
        if(categories[num]==category){

        

var queryhtml = ``;

databases.query('SELECT * FROM  productss where category="'+category+'" ORDER BY RAND() limit 5' , function (error, results, fields) {
  if (error) throw error;
  results.forEach(function(item){
var titlep = item.title.substring(0,62)+". . . ";
var pricep = item.price;
var imagep = item.image;
var idp = item.id;
var queryhtmlcreated = `
<div class="item col-6 col-md-4 col-lg-3 col5 " style="
     max-height: 500px;
     /* background-color: lightblue; */
 ">
                      <div class="bg-grid-item">
                          
                            
  <div class="inner product-item json-loading" data-product-id="product-6544741564467">
    <div class="inner-top">
      <div class="">
        <div class="product-image image-swap">
          <a href="/product/`+idp+`" class="product-grid-image animate-scale adaptive_height" >
            
  
  
    <div class="product-label" data-label-new-number="5">
    
      
        <strong class="label sale-label">
          Sale
        </strong>
        <br>
      
    

    
    
    
    <strong class="label new-label">
      New
    </strong>
    <br>
    
    
    
    
    
  </div>
<picture data-index="0">
      
      
  
      

<img data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" data-image="" sizes="300px" srcset="`+imagep+`" class="images-one lazyautosizes ls-is-cached lazyloaded">
    </picture>
    
  
          </a>
        </div>
  
        
    
  
  
  
  
  
  
        
        
          
        
  
  
  
      </div>
  
      
      <div class="product-bottom">
  
        
  
        
          
  
        
  
        <a class="" href="/product/`+idp+`">
          
  <span>
   `+titlep+`
  </span>
<br><span class="spr-starrating spr-summary-starrating">
        <i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i>
      </span>
  
          
        </a>
  
        <div class="price-box">
          
            
            <div class="price-regular">
              


<span><span class="money"> $`+pricep+` </span></span>
            </div>
            
          
        </div>
  
        
          
  
  
  
        
        
        <div class="wrapper-button-card">
          
          <div class="action">
            
  
  
  <stronge>
    
    
      
        
          <a class="btn" href="/product/`+idp+`" title="">Quick View</a>
        
      
    
    
  </stronge>
  
          </div>
          
          
  
   
  
  
        </div>
  
        
        
        
  
        
  
      </div>
  
      
      
    </div>
  </div>
                          
                      </div>
</div>
`
queryhtml = queryhtml+queryhtmlcreated
})


var category_id = num+1
console.log(category_id);
var zipo = zip.toString().split("id=")[1].split("&")[0]
console.log(zipo);
res.render("productfree.ejs",{
  title:title,
  zip:zipo,
  imageurl:imageurl,
  description:description,
 tags:tags,
 category:category,
 category_id:category_id,
 title_mini : title_mini,
id:ids,
comman:queryhtml,



})


});



     

        }
       })




      
     
  }else{
    res.redirect("/product/"+ids)
  }
  
    });

















})

// databases.query('SELECT * FROM ( SELECT * FROM productss ORDER BY id DESC LIMIT 2 )Var1 ORDER BY id ASC;' , function (error, results, fields) {
//   if (error) throw error;
//   console.log(results)
// });

var reviwes = [
  "Just what I was looking for. Used image for sublimation and it came out beautifully.",
  "Good, clear quality. Love how to the svgs were seperated by color. I've only used pngs so that was very nice!",
  "Good, clear quality.",
  "I've only used pngs so that was very nice!",
  "super cute and easy to edit",
  "It is exactly as I requested. Thank you!!",
  "Worked perfectly for my granddaughters birthday cake.",
  "did take we a minute to figure out how to use it all thought. :')",
 " SVG files were easy to access, cut perfectly and perfect for what I needed them for",
 "The SVG worked fine for my Silhouette! Thanks!",
  "Svg as described. Thank you",
  "Amazing file! it works wonders for personalized designs",
  "too a lot of work to get it to finally open up. this website owner is very good at communication and helpful!!",
  "The letters turned out amazing and they were just what I needed.",
  "This design is just what i was looking for. It worked perfectly.",
  "This is amazing I love it",
  
  
];
var days; 
var date = new Date();
var lastday1 = new Date(date.getTime() - ( 48 * 60 * 60 * 1000)).toString().substring(0,15)
var lastday2 = new Date(date.getTime() - ( 96 * 60 * 60 * 1000)).toString().substring(0,15)
var lastday3 = new Date(date.getTime() - ( 144 * 60 * 60 * 1000)).toString().substring(0,15)
var lastday4 = new Date(date.getTime() - ( 168 * 60 * 60 * 1000)).toString().substring(0,15)
var lastday5 = new Date(date.getTime() - ( 336 * 60 * 60 * 1000)).toString().substring(0,15)
var dayafter = [
  lastday1,
  lastday2,
  lastday3,
  lastday4,
  lastday5,
  lastday5,
]


app.get('/product/:uid/:ok?', function(req, res){
  var ids = req.params.uid;
  console.log(ids);
  if(isNaN(ids)) 
   return res.render("error.ejs",{})
   

  
    databases.query('SELECT * FROM productss where id = "'+ids+'"' , function (error, results, fields) {
      if (error) throw error;
      if(results.length==0)
          return res.render("error.ejs",{})
     if(results[0].price!=0){

   
     var  reviweshtml = ``
   var   n = [1,2,3,4,5];
         n.forEach(function(num){
           
          var rn = Math.floor((Math.random()*reviwes.length-1)+1);
          var vreview = reviwes[rn];
          console.log(vreview);
   
          reviweshtml = reviweshtml +`
      
          <div class="spr-review-header">
      <span class="spr-review-header-byline"><strong>Guest</strong> on <strong>`+dayafter[num]+`</strong>
      </span><br><dev class="spr-starratings spr-review-header-starratings" aria-label="5 of 5 stars" role="img">
      <i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i>
      <i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i>
      <i class="spr-icon spr-icon-star"></i></dev>
      <div class="spr-review-content">
      <p class="spr-review-content-body">`+vreview+`</p>
    </div>
      
      
    </div>
          
          `

         })
      var title = results[0].title
      var touchtitle = title.split(' ');
      var title_mini = touchtitle[0]+" "+touchtitle[1]+" "+touchtitle[2]

      var imageurl = results[0].image
      var price = results[0].price
      var description = results[0].description
      var tags = results[0].tags
      var category = results[0].category;
     


     var  rangers = range(0, categories.length);
      rangers.forEach(function(num){
        if(categories[num]==category){

        

var queryhtml = ``;

databases.query('SELECT * FROM  productss where category="'+category+'" ORDER BY RAND() limit 5' , function (error, results, fields) {
  if (error) throw error;
  results.forEach(function(item){
var titlep = item.title.substring(0,62)+". . . ";
var pricep = item.price;
var imagep = item.image;
var idp = item.id;
var queryhtmlcreated = `
<div class="item col-6 col-md-4 col-lg-3 col5 " style="
     max-height: 500px;
     /* background-color: lightblue; */
 ">
                      <div class="bg-grid-item">
                          
                            
  <div class="inner product-item json-loading" data-product-id="product-6544741564467">
    <div class="inner-top">
      <div class="">
        <div class="product-image image-swap">
          <a href="/product/`+idp+`" class="product-grid-image animate-scale adaptive_height" >
            
  
  
    <div class="product-label" data-label-new-number="5">
    
      
        <strong class="label sale-label">
          Sale
        </strong>
        <br>
      
    

    
    
    
    <strong class="label new-label">
      New
    </strong>
    <br>
    
    
    
    
    
  </div>
<picture data-index="0">
      
      
  
      

<img data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" data-image="" sizes="300px" srcset="`+imagep+`" class="images-one lazyautosizes ls-is-cached lazyloaded">
    </picture>
    
  
          </a>
        </div>
  
        
    
  
  
  
  
  
  
        
        
          
        
  
  
  
      </div>
  
      
      <div class="product-bottom">
  
        
  
        
          
  
        
  
        <a class="" href="/product/`+idp+`">
          
  <span>
   `+titlep+`
  </span>
<br><span class="spr-starrating spr-summary-starrating">
        <i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i>
      </span>
  
          
        </a>
  
        <div class="price-box">
          
            
            <div class="price-regular">
              


<span><span class="money"> $`+pricep+` </span></span>
            </div>
            
          
        </div>
  
        
          
  
  
  
        
        
        <div class="wrapper-button-card">
          
          <div class="action">
            
  
  
  <stronge>
    
    
      
        
          <a class="btn" href="/product/`+idp+`" title="">Quick View</a>
        
      
    
    
  </stronge>
  
          </div>
          
          
  
   
  
  
        </div>
  
        
        
        
  
        
  
      </div>
  
      
      
    </div>
  </div>
                          
                      </div>
</div>
`
queryhtml = queryhtml+queryhtmlcreated
})


var category_id = num+1
console.log(category_id);
res.render("product.ejs",{
  title:title,
  imageurl:imageurl,
  price : price,
 description:description,
 tags:tags,
 category:category,
 category_id:category_id,
 title_mini : title_mini,
id:ids,
comman:queryhtml,
reviwes:reviweshtml,


})


});



     

        }
       })




   }else{
    return res.redirect("/product-free/"+ids)

   }

  
    });
   
  });

  

//   paypal.capture.get("14C008171P840442S", function (error, capture) {
//     if (error) {
//         console.error(error);
//     } else {
//         console.log(capture);
//     }
// });
app.get('/category/:categoryid', function(req, res){
  var dataid = req.params.categoryid;
  if(isNaN(dataid)==true)
     return  res.render("error.ejs",{})

  var  categor =  categories[dataid-1]


  databases.query('SELECT * FROM  productss WHERE category= "'+categor+'"' , function (error, results, fields) {
if(results.length==0){
  var keysearchhtml = ``;
  raport = "No Result For This Category"
  res.render("search.ejs",{htmlsearch:keysearchhtml,raport:raport})

}else{


  var keysearchhtml = ``;
  results.forEach(function(response){

keysearchhtml = keysearchhtml +`<div class="item col-6 col-md-4 col-lg-3 col5 " style="
max-height: 500px;
">
               <div class="bg-grid-item">
                   
                     
<div class="inner product-item json-loading" >
<div class="inner-top">
<div class="">
 <div class="product-image image-swap">
   <a href="/product/`+response.id+`" class="product-grid-image animate-scale adaptive_height">
     


<div class="product-label" data-label-new-number="5">

<strong class="label new-label">
New
</strong>
<br>





</div>
<picture data-index="0">





<img data-widths="[180, 360, 540, 720, 900, 1080, 1296, 1512, 1728, 2048]" data-aspectratio="1.0" data-sizes="auto" data-image="" sizes="300px" srcset="`+response.image+`" class="images-one lazyautosizes ls-is-cached lazyloaded">
</picture>


   </a>
 </div>

 







 
 
   
 



</div>


<div class="product-bottom">

 

 
   

 

 <a class="" href="/product/`+response.id+`">
   
<span>
`+response.title.toString().substring(0,24)+`. . . 
</span>
<br><span class="spr-starrating spr-summary-starrating">
 <i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i><i class="spr-icon spr-icon-star"></i>
</span>

   
 </a>

 <div class="price-box">
   
     
     <div class="price-regular">
       


<span><span class="money"> $`+response.price+` </span></span>
     </div>
     
   
 </div>

 
   



 
 
 <div class="wrapper-button-card">
   
   <div class="action">
     


<stronge>



 
   <a class="btn" href="/product/`+response.id+`" title="">Quick View</a>
 



</stronge>

   </div>
   
   




 </div>

 
 
 

 

</div>



</div>
</div>
                   
               </div>
</div>`


  });


  var raport = `Search on category '`+categor+`'`
 res.render("search.ejs",{htmlsearch:keysearchhtml,raport:raport})










}





  })




})


  app.get('/checkout/:nonce', function(req, res){
    var data = req.params.nonce;
    var items = data.split("&")
    var dbword = 'SELECT * FROM  productss WHERE id= "'+data.split("&")[0]+'"'
    items.forEach(function(ido){
      dbword = dbword +'OR id = "'+ido+'"'
    
    
    
    });
    databases.query(dbword , function (error, results, fields) {
    // console.log(results);
    var origiprice = 0
    var cartmain = ``
    if(results.length==0){
res.json({})
    }else{


      results.forEach(function(respo){
        origiprice = parseFloat(origiprice)+parseFloat(respo.price)
        cartmain = cartmain + `<tr class="product">
        <td class="product__image">
          <div class="product-thumbnail ">
<div class="product-thumbnail__wrapper">
  <img alt="" class="product-thumbnail__image" src="`+respo.image+`">
</div>
  <span class="product-thumbnail__quantity" aria-hidden="true">1</span>
</div>

        </td>
        <th class="product__description" scope="row">
          <span class="product__description__name order-summary__emphasis">`+respo.title+`</span>
          <span class="product__description__variant order-summary__small-text">Type : Digital</span>

        </th>
        
        <td class="product__price">
          <span class="order-summary__emphasis skeleton-while-loading">$`+respo.price+`</span>
        </td>
      </tr>`
      
      
      });
      console.log(origiprice);

      var jscode = `
      <script src="https://www.paypal.com/sdk/js?client-id=AUHUiKxuQ3bT5zWgqh_PLziAzuhmgf6G_11qlAr5W-5rxCzz9OPvjUONDJ3pAbiXrCAGNvdzUPeUORxo&currency=USD"></script>
      <script>
      // Render the PayPal button into #paypal-button-container
      paypal.Buttons({
        style: {
       
              color:  'blue',
              shape:  'pill',
              label:  'pay',
              height: 50,
              width:700,
          },
          // Set up the transaction
          createOrder: function(data, actions) {
              return actions.order.create({
                  purchase_units: [{
                  
                      amount: {
                          value: '`+origiprice.toString().substring(0,4)+`',
                      }
                     
                   
                  }]
              });
          },
        
          // Finalize the transaction
          onApprove: function(data, actions) {
                 document.getElementById("loader-wrapper").style.display = "block";
              return actions.order.capture().then(function(orderData) {
                orders = "`+data.toString()+`";
                buyerEmail = document.getElementById("buyer-email").value
                  var transactionid = orderData.purchase_units[0].payments.captures[0];

                  fetch("/access", {
                    method: "POST",
                    headers: { "Content-type": "application/json" },
             
                    body: JSON.stringify({
                   orderData,
                   transactionid,
                   orders,
                   buyerEmail,
                    })
                   })
                    .then((res) => res.json())
                    .then((data) => {
                    if(data.status="good"){
                    location.href="/congra/"+orders+"/"+transactionid.id
                    }
                    })
                
  
                
              });
          }
  
  
      }).render('#paypal-button-container');
  </script>`

res.render("payment.ejs",{jscheckout:jscode,cartmain:cartmain,totalprice:origiprice.toString().substring(0,4)})

      





    }
   
    
    
    });
   
  
    
   });


  // databases.query('SELECT * FROM sales where transactionid like "%8CC874106P6397639%" ' , function (error, results, fields) {
  //     if (error) throw error;
  //      console.log(results)
  // });



app.post('/access', function(req, res){
var payment = req.body;
// console.log(payment.orderData);
var buyerEmail = req.body.buyerEmail;
var myorders =  req.body.orders




  databases.query('SELECT * FROM sales where transactionid like "%'+payment.transactionid.id+'%" ' , function (error, results, fields) {
     
    if(results.length!=0)
       return res.json({"status":"bad-user"})
 


if(payment.orderData==null || payment.orderData==undefined || payment.transactionid==null || payment.transactionid==undefined || myorders==null || myorders==undefined || myorders.length==0)
   return  res.json({"status":"bad_user"})
  paypal.capture.get(payment.transactionid.id, function (error, capture) {
    if (error) {
        console.error(error);
        res.json({"status":"bad_user"})
    } else {
     if(capture.state=="completed") {
       
     var totalprice = capture.amount.total;

  
     var items = myorders.split("&")
     var dbword = 'SELECT * FROM  productss WHERE id= "'+myorders.split("&")[0]+'"'
     items.forEach(function(ido){
       dbword = dbword +'OR id = "'+ido+'"'
     
     
     
     });
   var  orderdata =  JSON.stringify(payment.orderData)
   console.log(orderdata);
     databases.query(dbword , function (error, results, fields) {
  console.log(results);
     var origiprice = 0
     if(results.length==0){
      res.json({"status":"bad_user"})
     }else{
 
 
       results.forEach(function(respo){
         origiprice = parseFloat(origiprice)+parseFloat(respo.price)
         var data = {
          idkey:respo.id,
        transactionid:payment.transactionid.id,
        orderinfos:orderdata,
        useremail:buyerEmail,
  
   
       };
       databases.query('INSERT INTO sales SET ?' , data,function (error, results, fields) {
        console.log(error);



       })







       });
       console.log(origiprice);
       console.log(totalprice);
      if(origiprice.toString().substring(0,4)==totalprice){
      res.json({"status":"good"})
      

      //get node mailer and send him massage
      //
     
      
     function validateEmail(buyerEmail) 
     {
         var re = /\S+@\S+\.\S+/;
         return re.test(buyerEmail);
     }
     
     
     
if(validateEmail(buyerEmail)==true){
let transporter = nodemailer.createTransport({
  service:'hotmail',
  auth: {
  user: 'dropitsvgsup@hotmail.com',
  pass: 'YjYUYmzBbNY6Q'
  },
  
  });
  
  let mailOptions = {
  from: "dropitsvgsup@hotmail.com",
  to:buyerEmail ,
  subject: 'You have purchased from svgdrop.com',
  text: '', 



  html:`<html><head>

  </head><head>
  
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <style type="text/css">
  @media screen {
  @font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 400;
  src: local('Lato Regular'), local('Lato-Regular'), url(https://fonts.gstatic.com/s/lato/v11/qIIYRU-oROkIk8vfvxw6QvesZW2xOQ-xsNqO47m55DA.woff) format('woff');
  }
  
  @font-face {
  font-family: 'Lato';
  font-style: normal;
  font-weight: 700;
  src: local('Lato Bold'), local('Lato-Bold'), url(https://fonts.gstatic.com/s/lato/v11/qdgUG4U09HnJwhYI-uK18wLUuEpTyoUstqEm5AMlJo4.woff) format('woff');
  }
  
  @font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 400;
  src: local('Lato Italic'), local('Lato-Italic'), url(https://fonts.gstatic.com/s/lato/v11/RYyZNoeFgb0l7W3Vu1aSWOvvDin1pK8aKteLpeZ5c0A.woff) format('woff');
  }
  
  @font-face {
  font-family: 'Lato';
  font-style: italic;
  font-weight: 700;
  src: local('Lato Bold Italic'), local('Lato-BoldItalic'), url(https://fonts.gstatic.com/s/lato/v11/HkF_qI1x_noxlxhrhMQYELO3LdcAZYWl9Si6vvxL-qU.woff) format('woff');
  }
  }
  
  /* CLIENT-SPECIFIC STYLES */
  body,
  table,
  td,
  a {
  -webkit-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  }
  
  table,
  td {
  mso-table-lspace: 0pt;
  mso-table-rspace: 0pt;
  }
  
  img {
  -ms-interpolation-mode: bicubic;
  }
  
  /* RESET STYLES */
  img {
  border: 0;
  height: auto;
  line-height: 100%;
  outline: none;
  text-decoration: none;
  }
  
  table {
  border-collapse: collapse !important;
  }
  
  body {
  height: 100% !important;
  margin: 0 !important;
  padding: 0 !important;
  width: 100% !important;
  }
  
  /* iOS BLUE LINKS */
  a[x-apple-data-detectors] {
  color: inherit !important;
  text-decoration: none !important;
  font-size: inherit !important;
  font-family: inherit !important;
  font-weight: inherit !important;
  line-height: inherit !important;
  }
  
  /* MOBILE STYLES */
  @media screen and (max-width:600px) {
  h1 {
  font-size: 32px !important;
  line-height: 32px !important;
  }
  }
  
  /* ANDROID CENTER FIX */
  div[style*="margin: 16px 0;"] {
  margin: 0 !important;
  }
  </style>
  </head>
  
  <body style="background-color: #f4f4f4; margin: 0 !important; padding: 0 !important;">
  <!-- HIDDEN PREHEADER TEXT -->
  <div style="display: none; font-size: 1px; color: #fefefe; line-height: 1px; font-family: 'Lato', Helvetica, Arial, sans-serif; max-height: 0px; max-width: 0px; opacity: 0; overflow: hidden;"> We're thrilled to have you here! Get ready to dive into your new account. </div>
  <table border="0" cellpadding="0" cellspacing="0" width="100%">
  <!-- LOGO -->
  <tbody><tr>
  <td bgcolor="#304FFE" align="center">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
  <tbody><tr>
      <td align="center" valign="top" style="padding: 40px 10px 40px 10px;"> </td>
  </tr>
  </tbody></table>
  </td>
  </tr>
  <tr>
  <td bgcolor="#304FFE" align="center" style="padding: 0px 10px 0px 10px;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
  <tbody><tr>
      <td bgcolor="#ffffff" align="center" valign="top" style="padding: 40px 20px 20px 20px; border-radius: 4px 4px 0px 0px; color: #111111; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 48px; font-weight: 400; letter-spacing: 4px; line-height: 48px;">
          <h6 style="font-size: 15px; font-weight: 400; margin: 2;">Welcome !</h6> <img src="https://img.icons8.com/cute-clipart/64/000000/handshake.png">
      </td>
  </tr>
  </tbody></table>
  </td>
  </tr>
  <tr>
  <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
  <tbody><tr>
      <td bgcolor="#ffffff" align="left" style="padding: 20px 30px 40px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
          <p style="margin: 0;">Your order has been received, so if you'd like to access your downloads, please click on the button below.</p>
      </td>
  </tr>
  <tr>
      <td bgcolor="#ffffff" align="left">
          <table width="100%" border="0" cellspacing="0" cellpadding="0">
              <tbody><tr>
                  <td bgcolor="#ffffff" align="center" style="padding: 20px 30px 60px 30px;">
                      <table border="0" cellspacing="0" cellpadding="0">
                          <tbody><tr>
                              <td align="center" style="border-radius: 3px;" bgcolor="#FFA73B"><a href="https://dropitsvg.com/congra/w1/`+payment.transactionid.id+`" target="_blank" style="font-size: 20px; font-family: Helvetica, Arial, sans-serif; color: #ffffff; text-decoration: none; color: #ffffff; text-decoration: none; padding: 15px 25px; border-radius: 2px; border: 1px solid #FFA73B; display: inline-block;">View Downloads</a></td>
                          </tr>
                      </tbody></table>
                  </td>
              </tr>
          </tbody></table>
      </td>
  </tr> <!-- COPY -->
   
  
  <tr>
      <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 20px 30px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
          <p style="margin: 0;">If you have any questions, just reply to this email—we're always happy to help out.</p>
      </td>
  </tr>
  <tr>
      <td bgcolor="#ffffff" align="left" style="padding: 0px 30px 40px 30px; border-radius: 0px 0px 4px 4px; color: #666666; font-family: 'Lato', Helvetica, Arial, sans-serif; font-size: 18px; font-weight: 400; line-height: 25px;">
          <p style="margin: 0;">Cheers,<br>DropItSvg Team</p>
      </td>
  </tr>
  </tbody></table>
  </td>
  </tr>
  
  <tr>
  <td bgcolor="#f4f4f4" align="center" style="padding: 0px 10px 0px 10px;">
  <table border="0" cellpadding="0" cellspacing="0" width="100%" style="max-width: 600px;">
  </table>
  </td>
  </tr>
  </tbody></table>
  
  
  </body></html>`

  };


  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
    console.log(error);
    // res.json({message:"error"})
    console.log("error")
    }
    console.log(info)
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    console.log("message sent ")
    
    });  




     }





      }else{
        //delete transaction
        databases.query('DELETE FROM sales where transactionid="'+payment.transactionid.id+'"' , function (error, results, fields) {
          if (error) throw error;
          console.log(results)
        });
        res.json({"status":"bad_user"})
      }
    }



   
    })






      }else{
        res.json({})
      }
      console.log(capture);


      
    









    }
});

});

   })



app.get('/congra/:ids/:transactionid', function(req, res){
var transaction = req.params.transactionid;

databases.query('SELECT * FROM  sales WHERE transactionid= "'+transaction+'"' , function (error, results, fields) {

var dbword = 'SELECT * FROM  productss WHERE id= "'+results[0].idkey+'"'
results.forEach(function(ido){
  dbword = dbword +'OR id = "'+ido.idkey+'" '



});
databases.query(dbword, function (error, results, fields) {
  var drives = ``;
  results.forEach(function(imo){
  var driveid = imo.zip.replace("https://drive.google.com/file/d/","").replace("/edit").replace("/","")
    drives = drives+`
    <li class="cart-product-item">
          <div class="details">
  
            
  
            
  
            
            
            
          <div class="cart-thumb cart--title"><a>
              </a><a class="product-img">
                <img src="`+imo.image+`" alt="`+imo.title+`">
              </a> 
              <div class="cart--info">
                <a class="product-name" href="#" onclick='window.open("`+imo.zip+`")'>
                  
  <span>
  `+imo.title+`
  </span>
  
                </a>
                
                <div class="size">  
                  
                  
                  <small>Format : Zip</small>
                  <a href="JavaScript:void(0);" class="product-details__edit" >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" viewBox="0 0 48 48" width="144px" height="144px"><path d="M 10.5 6 C 7.468 6 5 8.468 5 11.5 L 5 36 C 5 39.309 7.691 42 11 42 L 22.605469 42 C 22.858469 41.042 23.225516 39.759 23.728516 38 L 11 38 C 9.897 38 9 37.103 9 36 L 9 16 L 39 16 L 39 22.521484 C 39.427 22.340484 39.8615 22.188422 40.3125 22.107422 C 40.7065 22.036422 41.102859 21.992953 41.505859 22.001953 C 42.015859 22.001953 42.515 22.067641 43 22.181641 L 43 11.5 C 43 8.468 40.532 6 37.5 6 L 10.5 6 z M 13.5 20 A 1.50015 1.50015 0 1 0 13.5 23 L 15.5 23 A 1.50015 1.50015 0 1 0 15.5 20 L 13.5 20 z M 21.5 20 C 20.672 20 20 20.671 20 21.5 C 20 22.329 20.672 23 21.5 23 L 34.5 23 C 35.328 23 36 22.329 36 21.5 C 36 20.671 35.328 20 34.5 20 L 21.5 20 z M 41.498047 24 C 41.224047 24.001 40.946969 24.025172 40.667969 24.076172 C 39.783969 24.235172 38.939563 24.696156 38.226562 25.410156 L 26.427734 37.208984 C 26.070734 37.565984 25.807969 38.011141 25.667969 38.494141 L 24.097656 43.974609 C 24.025656 44.164609 23.993 44.365406 24 44.566406 C 24.013 44.929406 24.155594 45.288406 24.433594 45.566406 C 24.710594 45.843406 25.067688 45.986 25.429688 46 C 25.630688 46.007 25.834391 45.975344 26.025391 45.902344 L 31.505859 44.332031 C 31.988859 44.192031 32.431062 43.930266 32.789062 43.572266 L 44.589844 31.773438 C 45.303844 31.060437 45.764828 30.216031 45.923828 29.332031 C 45.973828 29.053031 45.997047 28.775953 45.998047 28.501953 C 46.001047 27.307953 45.540687 26.179312 44.679688 25.320312 C 43.820687 24.460313 42.692047 23.998 41.498047 24 z M 13.5 26 A 1.50015 1.50015 0 1 0 13.5 29 L 15.5 29 A 1.50015 1.50015 0 1 0 15.5 26 L 13.5 26 z M 21.5 26 C 20.672 26 20 26.671 20 27.5 C 20 28.329 20.672 29 21.5 29 L 31.808594 29 L 34.779297 26.027344 C 34.688297 26.010344 34.596 26 34.5 26 L 21.5 26 z M 13.5 32 A 1.50015 1.50015 0 1 0 13.5 35 L 15.5 35 A 1.50015 1.50015 0 1 0 15.5 32 L 13.5 32 z M 21.5 32 C 20.672 32 20 32.671 20 33.5 C 20 34.329 20.672 35 21.5 35 L 25.808594 35 L 28.808594 32 L 21.5 32 z"></path></svg>
                  </a>
                  
                  
                </div>
  
                <div class="properties"></div>
                
                </div>
            </div><div class="cart--total h-mobile">
              <div>
      
        
    
        
          <a>
            <span class="icon-loader">
              
            </span>$`+imo.price+`</a>
          <input type="hidden" name="attributes[gift-wrapping]" value="yes">
        
      
    </div>
              
            </div><div class="cart--total h-mobile">
            <div style="
            height: 40px;
        "> <button class="transition duration-500 border-0 text-lg h-12 w-36 bg-red-500 hover:bg-red-700 text-white mt-2 px-3 rounded-md" style="
            background-color: #dc2626;
        "> <a style="color: antiquewhite;" href="https://drive.google.com/u/0/uc?id=`+driveid+`&export=download">Download</a> <i class="bx bx-down-arrow-alt animate-bounce text-xl"></i></button>
        </div>
              
            </div></div>
        </li>
    `
  
  });

  res.render("congra.ejs",{htmldownload:drives})

})



});





});








app.get('*', function(req, res){
  res.render("error.ejs",{})
 
 });


app.on("uncaughtException", function (err) {
  console.error(err.stack);
  console.log("Node NOT Exiting...");
});

console.log("listing to 8081");
app.listen(8081);


