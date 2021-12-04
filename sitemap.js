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

// databases.query('select * from productss where id >1784' , function (error, results, fields) {
// console.log(error);
// var a = `<?xml version="1.0" encoding="UTF-8"?>
// <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:news="http://www.google.com/schemas/sitemap-news/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1" xmlns:video="http://www.google.com/schemas/sitemap-video/1.1">`;

// results.forEach(function(prod){
// try{
// var idd = prod.id
// var netimg = prod.image
//   if(idd>=2664){
//   a = a+"\n"+`</urlset>`
//  fs.writeFile("./public/sitemapp4.xml",a, 'utf8', err => {
//  if (err) throw err;
// console.log('File has been saved!');
// });



//   }else{
//     var minit  = prod.title.toString().replace(/,/g,"").replace(/ /g,"-").replace(/:/g,"").replace(/!/g,"").replace(/--/g,"-").replace(/&/g,"-")
//     a = a+"\n"+`<url>
//    <loc>https://dropitsvg.com/product/`+idd+`/`+minit+`</loc>
//    <changefreq>weekly</changefreq>
//    <priority>1.0</priority>
//    </url>`

// databases.query('UPDATE productss SET image = "https://dropitsvg.com/images/dropitsvghl/'+netimg+'" where id ="'+idd+'"' , function (error, results, fields) {
// console.log(error);
// console.log(idd +"updated");
// })

//   }
    

// }catch(err){

// }





// });
// })



// var rangee = (min, max) => Array.from({ length: max - min + 1 }, (_, i) => min + i);

// databases.query('select * from productss' , function (error, results, fields) {
//  var a = "";
//   results.forEach(function(itemo){
//     if(id>=results.length){
//       console.log("popo")
//  fs.writeFile("./public/datawewant.xml",a, 'utf8', err => {
//  if (err) throw err;
// console.log('File has been saved!');
// });
//     }else{
//       console.log("working");
//       var title = itemo.title;
//       var imagename = itemo.image;
//       var id = itemo.id;

// }
// },200)
// databases.query('select * from productss where image like "%dropitsvgpl%" or image like "%dropitsvgcom%"' , function (error, results, fields) {
//  var a = "";
//   results.forEach(function(itemo){
  

   
//       var title = itemo.title;
//       var imagename = itemo.image;
//       var id = itemo.id;

//      a = a+"\n"+id+"  "+title+"   "+imagename;
// console.log("added")



//   });
//   setTimeout(function(){
//     fs.writeFile("./public/datawewant.txt",a, 'utf8', err => {
//       if (err) throw err;
//      console.log('File has been saved!');
//      });
    
//     },20000);
    




// });


var updatee = `https://drive.google.com/u/0/uc?id=1SK_Kmr65pIZOZKyP_8bszHPuDdnxoaXN&export=downloadabdelka1yF8Sbe20viIr5RIkgqzPTrXRZab_jEFC
https://drive.google.com/u/0/uc?id=1CmsHczQ7UrPcpQ0HWBb934jb7DPJZ3Iy&export=downloadabdelka1un0dS8Y543HyrXAOmyGURMn4kWXw7BHm
https://drive.google.com/u/0/uc?id=1ALDwSpqXxGn5qU5Xz-1mbU9nQrXz6_sL&export=downloadabdelka1HjGXdCD3O-BKvaDDoXVsqMYeukgVfiUY
https://drive.google.com/u/0/uc?id=1szY2PWxYtgGAYe-1c8vy6Dg8Sce-eeAM&export=downloadabdelka1e7p5gB5EzQ-q5c4w2110PxTLHFxuklGp
https://drive.google.com/u/0/uc?id=1VdotLnmHIVY1MfEebBNMyAKuGHmWlvRi&export=downloadabdelka18ZzZJ3_TZx2I2ChNKZ2wzyTtT3JqFgwY
https://drive.google.com/u/0/uc?id=1Di2_Oaj8q_xms5aLedcsPfXXKO5xCaor&export=downloadabdelka11jKb3BOJj0y2HrQRcAs2bYBE-UZ96Khr
https://drive.google.com/u/0/uc?id=111mWUxh7E7UeRrBoQvgswXWgWAfQfnpK&export=downloadabdelka1qakrr59jt9-Wj_eLmAMAn10O1LZvqzYl
https://drive.google.com/u/0/uc?id=1YyGFnMWELvmPUTbf2h5D8hJaPEk8M6rc&export=downloadabdelka1ptKPxbhS25_-67ccKbl8zAXZikYapEcv
https://drive.google.com/u/0/uc?id=1bPSDvYFtWpqK14cw9De4lZciKYhcj9Bd&export=downloadabdelka1nOyyqzRN5EfgdFAlxSl9ZJgHc4aJe8zt
https://drive.google.com/u/0/uc?id=1K8hkGC4rb9VMXUEfGzzBc3fde-iUVFI3&export=downloadabdelka1lZBCWjWVdKZemdFQLeob8iqN2XM-uEo9
https://drive.google.com/u/0/uc?id=1H04rrR2Lbf8jDrAWwCukGaQ9qdv86QtM&export=downloadabdelka1J6KbA5ZYaQBzb1i_x5SdEmgIweihbMzO
https://drive.google.com/u/0/uc?id=1ZvhvSMHJ_N3XCVK4e3yG-TA-Z7uSUL5b&export=downloadabdelka1i4sE7TXQTgEivAPzSfWupRzKLsaFJnK6
https://drive.google.com/u/0/uc?id=1haFzoKpzaf46nyZKO7VQP5w6NpKSLy7D&export=downloadabdelka1V7Jm9Le_jDWt6_qAbaN8_ft_eF_Vb8l6
https://drive.google.com/u/0/uc?id=1FfEQ9aESzm17K9dJUaQ4-slo0N46fkoP&export=downloadabdelka1b8lt-6k_sogXokbyqHJSgaeTOEeumnDY
https://drive.google.com/u/0/uc?id=1AsSpR-ishLNPksKVlQeEZs5YJkpk_Nau&export=downloadabdelka1fM-MidySrnEV1RosidXNxuKKba2vIGq2
https://drive.google.com/u/0/uc?id=1ug4_SG4vX6jZeJ5myEcSqCNgeyCR9ejX&export=downloadabdelka1QI4f_nNOiQQnC5CXEx60XKJHsRbM-tS_
https://drive.google.com/u/0/uc?id=1K9CgeSzij1T3DuPmuHxmF6255LUumYvx&export=downloadabdelka1-LVMN4MrjTNbYt7cl03LRXv6UZX_HpDg
https://drive.google.com/u/0/uc?id=1mOZYo_szNaYjtnOW3OkBIA-27rOzkzL9&export=downloadabdelka1QvYm-kmeRe8blkLIAaiHR867N3wN0QNH
https://drive.google.com/u/0/uc?id=1UBsVARfLvT_vZ-QGAMrg5SY6UMXQtjSM&export=downloadabdelka1SlnPtpn5VAVCWLfrETFRzWcox-XyYD2-
https://drive.google.com/u/0/uc?id=1DW4DN7an_j0c1-nuaZuxuasmZvIU6jvu&export=downloadabdelka1QtJuq6fxi-WVxx2R9-CTbGM4NBTfzgq3
https://drive.google.com/u/0/uc?id=19ySezXvFbiiLe2H2pX0Pf_naUW4dfEsI&export=downloadabdelka1H6dBfwFsN6O3DjNrntGOrpEFGdoTqQmJ
https://drive.google.com/u/0/uc?id=1yS3jlk50ig4FgBw1KKxVGyjj14PXkjuN&export=downloadabdelka1JNfTWezqtdbLM7qkhyuyJmfpaEdr8hpa
https://drive.google.com/u/0/uc?id=1BemNATUXPFCQ-7ggEiJA4hXEHdaM7DUE&export=downloadabdelka1XO0THgKG536kqwtnnrNCbtmK-btS1rOn
https://drive.google.com/u/0/uc?id=1XIz-VYzdBERWUoQcMa3EJQ8MMOs_L4Rk&export=downloadabdelka1jV1IUiXFrNwkiIkA6KFNCota1Nhtjxh6
https://drive.google.com/u/0/uc?id=10Rcd8-KaMLUs6d1EYxE6pEV2QZDN7Y-3&export=downloadabdelka1-xALDteyQUEJQ6f2By4o0JDUKhyWLxrO
https://drive.google.com/u/0/uc?id=1WX9-cSLpoK8QHJiwWfQn8ONeTRi1uSKa&export=downloadabdelka19AKxYl6wYicMgfZyDh6fh-lkeNSfjMXD
https://drive.google.com/u/0/uc?id=1rcvvKKC0OVVPtd3pw2ChovlD79pfNZ1k&export=downloadabdelka1RKSxIQD1ZSO98Pofm7iYTSwT09yf8LPD
https://drive.google.com/u/0/uc?id=1kdfcG2mkPk7aVCkSQR_Qh2joAjGDpCvu&export=downloadabdelka1g5HZJ_MlOgXHHdyzhZCsDZrho_U5DuNi
https://drive.google.com/u/0/uc?id=16OZSXZiv-u4f4jHbW2wUAm5CDEjUxZ7l&export=downloadabdelka1zLSVwH22PXQ0WCXDRuhV-3-8somyTomW
https://drive.google.com/u/0/uc?id=1q5KsARO4w081hJOolcPrThzXbn0Xx9CM&export=downloadabdelka1v2fjG4NkA8y5UqCUtpq7PtAjkmtX_UAw
https://drive.google.com/u/0/uc?id=1WDDzLMf3w87zqnZ1GCInO8cDO68PWWHm&export=downloadabdelka1PatiasrlueLStz0hSWURYQR066-p-tys
https://drive.google.com/u/0/uc?id=13HDIxsoFB6idB0ajFGjeab-y9Jzx2HKl&export=downloadabdelka1AWYfW-eSOEe4qNQ1ntqRCzRyRtrtYKVc
https://drive.google.com/u/0/uc?id=1IjGXO_0Inn4Kl9k2lPm1vh61C1SsJBmy&export=downloadabdelka1XrHyaSskWM2PpKPXRM57HRJQtfjUt_UB
https://drive.google.com/u/0/uc?id=1aVpNSaC9t8evmxBYNrCLEI2rq42a2SDH&export=downloadabdelka1846h6DaCxxKpbr-btEKgVPIZPs0XwubW
https://drive.google.com/u/0/uc?id=1jHaf5N8uV47sThTnVBtSrDzrhWTxzkRc&export=downloadabdelka1ZMHETiyLQPoiDCyPgpue3XYBJh_vahAT
https://drive.google.com/u/0/uc?id=1BswNojqqAP7s4lFEkENy1ufLIDkrAn49&export=downloadabdelka1CdHUZsqugicYAYkjD2hu8mJ0EhDK9MCV
https://drive.google.com/u/0/uc?id=1vDiyGmuyrpUwC4eg4NiT2KzJ5a4EAnMx&export=downloadabdelka12gx8sj0yRGFuc7_guM0-YiAjT5ISInJp
https://drive.google.com/u/0/uc?id=1E6iSqc3s4RGc2Yvuc5sciXQuBnu3NB4n&export=downloadabdelka1KOidrjNQOZyiakTpkjoOQX3FcudZFf6q
https://drive.google.com/u/0/uc?id=1nZvxMYFHRZbp33UIZi2HKr9D_MlUz_J1&export=downloadabdelka11Z-grebjUznbgyoxG_oJSXbVhiwYDwcZ
https://drive.google.com/u/0/uc?id=1k8HGdJQiDwjzc9Mo_hBG4ZuXs0oo05nt&export=downloadabdelka1c4-YlrrTH1dUdtg7idIo30_YdWKNTMZ4
https://drive.google.com/u/0/uc?id=1zm_gYCjH6jl1iM5fwLNokmYMa5FFd3mM&export=downloadabdelka1xanALKz7JvtNddMtXBv3p1PVmweeo0jG
https://drive.google.com/u/0/uc?id=1B0L3ta2LC4TWIm4M5b2zeANgXuDP6bEe&export=downloadabdelka1rc6JTDOP0yiJ6VlS0Nfyn7HowMyniwck
https://drive.google.com/u/0/uc?id=1l_C_m7Yg1my_F7F5kSQ1wO9j-CjouXju&export=downloadabdelka1T8gR6ol9CkDF_FF0qmyU_CGwcI5D3FPf
https://drive.google.com/u/0/uc?id=1HwKcgEkIPJsZwXsGb-uWpQZWEOZPaah_&export=downloadabdelka1W19r4QYHXYLqctSoQKJdej5jkoTL7RmN
https://drive.google.com/u/0/uc?id=1O-wrr05YCJmkdPmXGTT7naZTIXakO43O&export=downloadabdelka1ldoq36gcX2RNv1ELMp9S-6KBfvnz7ngR
https://drive.google.com/u/0/uc?id=1GaEiFKR3GanhScxXcAI4BTt76n_6sjX4&export=downloadabdelka121-Y4ObNGTjjtlAO3nFN5HLth4F_2QXQ
https://drive.google.com/u/0/uc?id=1ZLZK3C-bzdi-tavgggw0lVdAmudQHKXL&export=downloadabdelka1uUxl9dedxSSxCnuu0ZRGMWeU8eP_Sn7t
https://drive.google.com/u/0/uc?id=1wCTvF3ZHwn3GUBRwePVshABt7sbiRixn&export=downloadabdelka1o1Trv_mnyMvBpiis9CyirTeXh83HqbA1
https://drive.google.com/u/0/uc?id=1-BBBp0ekaj6BYQGv7QeqXchEGMG67DTM&export=downloadabdelka1S8ghqBgnoAoZfnvmikXx7WpEJukHJtSU
https://drive.google.com/u/0/uc?id=1CueXRIe8vDS7l79HtZJpqGiWUi4yyjEb&export=downloadabdelka1-IFW74mbQRT6RCjEcoc2h2eM1KHr8qYq
https://drive.google.com/u/0/uc?id=1h5w1uP7Rekqhd5fKqgWPx6VqEEl8kDe7&export=downloadabdelka1Ss5uWVKdPuDMO66MuvJQ2-59TMUiltRn
https://drive.google.com/u/0/uc?id=11RojL-EkxRDbteZUF5RvY2SFB2ij41eh&export=downloadabdelka18KeJxJoj5Yud8ruWLyrZigZP4NDlLSrd
https://drive.google.com/u/0/uc?id=1aW9SlZ5HEIdnnOVZHK7r1vYcbPePf3Da&export=downloadabdelka1tNGCK-nfWMSb7Vre9HVi2yYobJ1whyt6
https://drive.google.com/u/0/uc?id=1tBUmYJRy0dYe8LCN6JuNLnHsGhN-X-iX&export=downloadabdelka1FcILA9TQmLPAaLLKe-POU67vOJpsQVmi
https://drive.google.com/u/0/uc?id=1EhJv_Xz_IdDAFSNh4OuoEy8MP8U6-iTl&export=downloadabdelka1KxcL8BdWrSPwIFkZC9KCWNJAeKun7v8N
https://drive.google.com/u/0/uc?id=1YWuI9Qwckn0g9WJpvHlELw0LwBDdFIiD&export=downloadabdelka17RowFamESQYLO1VZPPTCWR1l61MIiDv-
https://drive.google.com/u/0/uc?id=1RyQkGpbnrxl10OWcVcThmq64HM7qL8Y0&export=downloadabdelka1UkXgVvBIOg0cNo2y4woEj3DvpdJgE9R3
https://drive.google.com/u/0/uc?id=1XSBdxtUYl8XhVCH9pmmhuKbhur_Wo_7E&export=downloadabdelka1DxdJsiAQ9vutH8lEwydAnS9Y800mRZo0
https://drive.google.com/u/0/uc?id=1Ou9uPDIfDhzbZEUwj_WCuZSE5reeKtnu&export=downloadabdelka14dKRwDTonke5hWZcceEMMegpImzZgzg5
https://drive.google.com/u/0/uc?id=1t4VKml7JSO01U6iFp7SF1dWzrdxvYF7b&export=downloadabdelka1wUr4ferh-qUPLokaEUbMtvEJOoTSGA8q
https://drive.google.com/u/0/uc?id=1YFO3A9mkB3DT0mn6aUXkq-pO-BlJIuO9&export=downloadabdelka1Q6HQvCnfLtOD6IU-N_RD7S5RkyFjgeSg
https://drive.google.com/u/0/uc?id=1Fd7lSqOT6y97Fo5_DDudc19HdotcNkWv&export=downloadabdelka1BzKCG1NXFo6xT8aQ8d2wPcadc9YaxDhx
https://drive.google.com/u/0/uc?id=1o3jxJZ2OdS2ZpmIIKEmPJYQrV9itLLf7&export=downloadabdelka1I14RLYNiNmuN6Htrb5DVSDRh6DT_KTT7
https://drive.google.com/u/0/uc?id=1p7BgN-pcb_poY4VJs8TVUOip072L3p72&export=downloadabdelka1ZytruOAu7v3gW3OkSL-J7GnW--_2-I0N
https://drive.google.com/u/0/uc?id=1UIrYPGQw9KUMZr-qSwi72od_PwNNpG2Q&export=downloadabdelka1DKgWoLw7242pYORqc5kvyNgFBmUcU_Qc
https://drive.google.com/u/0/uc?id=1VPkijkdMcuZHW6gdfhElE_GkpQhxdj2E&export=downloadabdelka1sunRG92qKW9y2tA9wx977CCkESCjsDI_
https://drive.google.com/u/0/uc?id=1mDfLbR9ykEHgPXoIOecqa4VsK3fvH4JN&export=downloadabdelka1o6N928VVm7ONhw6vwEKuTYjzDjCBBQOM
https://drive.google.com/u/0/uc?id=1qCBwcZpHC3KFxwlATDPqDhbMvhA9pRlA&export=downloadabdelka1ld5zV8wGCSIwFwNgra9P44_NfWJlz9rV
https://drive.google.com/u/0/uc?id=1S02RxItVmKeD1gfHJaC8VT-qd1u2DPky&export=downloadabdelka11NkQeBtmG91xh2TeR726UYwui3wGKnll
https://drive.google.com/u/0/uc?id=1hdIUD7Z2ApyA9vof3FLwcz2-Zp3KdAVz&export=downloadabdelka17YKDVjQCktrY-GnVW0wo2H27yixsYDhc
https://drive.google.com/u/0/uc?id=10BV5SnBfcA34M4QfhNEwicqUrJm_ornM&export=downloadabdelka1mLxcLD09bIPmaazbzceS-nojuNPUaXXZ
https://drive.google.com/u/0/uc?id=1-uR5w9gxrmArEuJkWWlgayQR02yDxm4Z&export=downloadabdelka1uzpUsLdL3J01G0It_s11Yg8ypeWrxvBo
https://drive.google.com/u/0/uc?id=1lJ7_WZk3AoORZXFaqDbqK_fJ0ZGNn7Uu&export=downloadabdelka1GsoVmxd7XqoU4tuGyBxLZnNuupM7eHIi
https://drive.google.com/u/0/uc?id=14cxRZlhFlWjG8K3pee6utpwuR0zgXzbf&export=downloadabdelka13W7kZ_SkSZAJ5qmKS1HAQcnUK8qro6Mv
https://drive.google.com/u/0/uc?id=1B6Ha1wB4aQO9mZowDMh0YCsxl1elu43m&export=downloadabdelka11walLknu-AYklbC8NM4SDzga5jBMSD3f
https://drive.google.com/u/0/uc?id=1WylzponJJkXnXtD0k8qnJ63VLdRKrL5-&export=downloadabdelka1kbIXbZ-3i2T8UQ_hPMTv8SW1AUQlteqw
https://drive.google.com/u/0/uc?id=11dDf06HAamGcjMRxAq5TetP_Z111W_Ig&export=downloadabdelka1TXEFLEmjAj9PHGz304ElBCj_o-W94wDD
https://drive.google.com/u/0/uc?id=1-aBjShXO8avRoGMiH-BjvtxVw1djTB9w&export=downloadabdelka1LtAABv1b5RmJK7jdcfqmoCmJXE7BeMn9
https://drive.google.com/u/0/uc?id=1J-KHfIj9ny86t6N6-9e_n4FVxc2ArDvn&export=downloadabdelka14zEwZsIsaagvGwjxI3_ZpDQANFHIzap2
https://drive.google.com/u/0/uc?id=1pAYi_OWGv6o0WcTFca4B5JXCJ6nRbLJM&export=downloadabdelka1qMiaVAkuTe6c-m94BdJpLYavrj1t1BbU
https://drive.google.com/u/0/uc?id=1N64wtXIqLeOC32AadP-8Ukz4-_7B9znR&export=downloadabdelka1r0nMu0qnKSkB-JnAr3S3-jl6ZdzGyz3D
https://drive.google.com/u/0/uc?id=1BaOo3-kL4CeHR4bMAWmJcWLyQY7HIXWb&export=downloadabdelka1dkLisMChWEVfCjCycD1RpoL0wGVxppo_
https://drive.google.com/u/0/uc?id=1t-jJAm4aP1eBE2YbzGtZ7D7sKXYHSUIj&export=downloadabdelka1dWX2k9wndpQ2-WPoBcoGsYium4rLH9Av
https://drive.google.com/u/0/uc?id=1vLvo2-Yo2KfKrWrx6IuXTSjQrSBhyyOH&export=downloadabdelka1ZB9Nch4drXONGMMyBTXnAdXG9B31Zu8N
https://drive.google.com/u/0/uc?id=1FhNnC8LMnKd5QkuYiXzwdB-5_j0UwQIe&export=downloadabdelka1aBpHWJbskBBsFlLXb9biIXrnLZ_fsIWH
https://drive.google.com/u/0/uc?id=1EA57rNa9j6AdfukSTD19K0yfYP9LrfJz&export=downloadabdelka1fuhnxHxNJppozzZS9ORlCguacam9ny8p
https://drive.google.com/u/0/uc?id=1Zovqyh9vSREEb847ghqaAghb56l-bGMC&export=downloadabdelka16XiIys0JcF_S_LkEgHIdJfNg5QqiBdFG
https://drive.google.com/u/0/uc?id=1oc5E1laFDEKvoMkGUJVVtQE2UvQ8ReiT&export=downloadabdelka1sQ96pGHLAElpSCS-NbjTlBxLct0oUUgR
https://drive.google.com/u/0/uc?id=15DZSK3t1p7LJhHMxRWZeGUXqXRJqler2&export=downloadabdelka1XLBZN06c54pL3k9wA_RXL9ZxXpKaxv2k
https://drive.google.com/u/0/uc?id=1ooQDPSS9c4AOd9Zk8ozFCgcEQPRNSJiT&export=downloadabdelka1-QuPhHHkqSiAdKhwOy1StzwrYUHoWwLo
https://drive.google.com/u/0/uc?id=1Kn8yvH6wviH7nx9hSW8nh4M4YVPMzeO-&export=downloadabdelka1Pk_cJJGj1CgKamzikltHdHqQr-RVCFHp
https://drive.google.com/u/0/uc?id=1tnZz507rY4A0XkOMSpGumzHHyvtwtg21&export=downloadabdelka15i5UPdsaw-LiFe6glsRgZ-rylsYRKGkl
https://drive.google.com/u/0/uc?id=1rgh-YulXveH1FhfgFChI173_vt_qSiof&export=downloadabdelka1F46qJoqLjkbpO6POyK4xEqe_2Gdt6hpr
https://drive.google.com/u/0/uc?id=1yfDHT5LzI_NWcylrX7YXjvluWrsvBngw&export=downloadabdelka1PfQyblFLQhEBIPoiOWz7iueT1-d9qSut
https://drive.google.com/u/0/uc?id=1i9ivCYC55BrbjVM-DHD2pOPvW412Jt_I&export=downloadabdelka1u3_sW2HkI35GK8-uCcAoa0ASHtdRb9mw
https://drive.google.com/u/0/uc?id=1Dlrkb3soAtBKriCPk7x4zsV9rY337Bp5&export=downloadabdelka1pa9cCxuTsrmGq4dywE40ZnrX2Nv-87A6
https://drive.google.com/u/0/uc?id=1mnKaPdXQaQRDIB-WIV55Wdn9i7_Hc5TS&export=downloadabdelka1aRPZq1ivifZfHftNkfCLrlqZtGA5UHoX
https://drive.google.com/u/0/uc?id=1-WJMgq2VFKkEusjNGY5c1fO6ewAoWz5W&export=downloadabdelka16X7yYAAiAc4KXPkBmP2VMPQxrCkn9bSm
https://drive.google.com/u/0/uc?id=1jPCS_i5dBwyAuVA1ZFHyZxTP_ExA6Ntj&export=downloadabdelka1SntQek-LkHol3ucPj6yVi2trhcnVRWa1
https://drive.google.com/u/0/uc?id=1ly6gCRF9dmIZVwYatnvaFUnIwDRfL1hu&export=downloadabdelka14FebdbvcmgnO5wOyaxjcTkMqT3NBaNiL
https://drive.google.com/u/0/uc?id=1Iz6nlF41BycYStuMghb1owyCBbBXZsHc&export=downloadabdelka1H_-wz_JJrmdJxYdINErUDXrnV9x1_dt3
https://drive.google.com/u/0/uc?id=13-WA_Qf7tfW_1CDbYkjYbGjdC2Uj9Puy&export=downloadabdelka1oDbfvPwVnGe_7lotbtesL1wmgN5KxzcE
https://drive.google.com/u/0/uc?id=1QEeBNvV3lwuPHHHO88RY6vx2y7ZymsXv&export=downloadabdelka1otrAA-bVU5Go8OJVHJdAad3qmrVO0KEA
https://drive.google.com/u/0/uc?id=1-Yv0mK-oH3XQlBL4TKC5kiYEEdrasrw4&export=downloadabdelka1EGH6pbi_Ii2NiWLbFr5FHiN5Gt-2jKaM
https://drive.google.com/u/0/uc?id=18vu5qPM4RkdxAnUMZmRT1J4P8A4wAe5E&export=downloadabdelka1i-7S3tuEt3toXbqxkrXVhYKf6lJyUYPa
https://drive.google.com/u/0/uc?id=103SAh0X6BntWRBTNF_U0jygsnWZ8X9N5&export=downloadabdelka1-b4MtAOOAidEuIwPMY-CSHTxbiFq21PO
https://drive.google.com/u/0/uc?id=1fkZdMJkqpTb0E6nTUcjS6jJPDeBc7tLx&export=downloadabdelka12dJBhNEny8ZvR-4_5DENxGHH4CbogP1_
https://drive.google.com/u/0/uc?id=1nO6BBKc1ff0bHzZ9XSWiPtuz0v8W8tBE&export=downloadabdelka1928FxSZjuNmfYInT7Dexe89Q7e7Rxrku
https://drive.google.com/u/0/uc?id=1OUaV8AjT-qNCwyBA8o1Ewc0r38PNZQHH&export=downloadabdelka17JehKyzmeItHhvrhFgjEHEKIuxk-rqfI
https://drive.google.com/u/0/uc?id=1VwkC-9lAVlk-zSVhFmlNkxgTTleW8fGS&export=downloadabdelka1iMtY_JpQuCf6LKC-a7qmJrp0FWeuuQ9y
https://drive.google.com/u/0/uc?id=19pYCgf2lZ8y33T1Rg78q6oZslH77LdSR&export=downloadabdelka1UtK3ALwC4syAMdomonq5a9kDvZmjqitk
https://drive.google.com/u/0/uc?id=1PYpvpBwVM1CSnkQLDzGRD_ToimV8K975&export=downloadabdelka1e-mUKpf0EXqn2utfd894mDaYbs7pJiLb
https://drive.google.com/u/0/uc?id=1zSGsAv9rh0wpVk1wmWaJjkuMKRL7rwCF&export=downloadabdelka1rhSSu8xaPnoNKuoRWDCt9e9Er2GadYrj
https://drive.google.com/u/0/uc?id=1HijxI6oocZ3se3Y1qdYz5biCJvCddJfu&export=downloadabdelka1C5K9v5yPfyBgynOghACk6r6tqORJesDK
https://drive.google.com/u/0/uc?id=1E7dDUnBTMYz0AzufZnSciCJmCa8IsBAT&export=downloadabdelka15cjk6cGZ8vxHuH9Wp4129W1ilFCrdjIS
https://drive.google.com/u/0/uc?id=16mSjFDHw6j-qiV3Ye4IYqFg90vuI7kJ-&export=downloadabdelka1eF7D6AYmuY-uujOKNdJm6CGLU0TEIIkH
https://drive.google.com/u/0/uc?id=1KZLfR7NUZedL2rHL112WkTBXwtcac9Am&export=downloadabdelka1SQFO74SwdjiGL9eZ8uIqJQujRL5x5luL
https://drive.google.com/u/0/uc?id=1QvDeLYcks6FiHrLR9fFmthJ1N09u4TU7&export=downloadabdelka1QhNG3KzdlaScl_dPgtRR91GLrUD8ffC3
https://drive.google.com/u/0/uc?id=18D7Um4mRhhHavSR4O-sxlErDbqtvGQuJ&export=downloadabdelka1v7DZmw43Csj9rKtXvhP551c1gYTYx7e1
https://drive.google.com/u/0/uc?id=12g2RQLDGj_9RYMbenfyxEdLwja0h4KPM&export=downloadabdelka1UqGADKo78uhJ4WPmidJcRkptMiQZMIfy
https://drive.google.com/u/0/uc?id=1rEiu8Em28ZPvpcQVUsDYz8ssr4brUUGY&export=downloadabdelka1nK8MTPrKcdlOfeeBOT7bPPxFoxdi4adQ
https://drive.google.com/u/0/uc?id=1GImb1ayoUgkNvJY7eNGPCdpduKxOYohR&export=downloadabdelka1xsUzYUBzVk5cqVfejeXgZjQGn1IWqvYc
https://drive.google.com/u/0/uc?id=1aN5ilTq2Ba0Vy8BIkhySkXIBFNGCijXz&export=downloadabdelka1e8PS2SSr5JR-zz0pDLjQn636z4V23uE9
https://drive.google.com/u/0/uc?id=1idLvkRCi_GWQtWNtvAZ0Luc7TxmLUdqU&export=downloadabdelka11VAwodc67YpkFSd74LOvlZx7o6y-WAh5
https://drive.google.com/u/0/uc?id=106veOfTkVEHe7-5xKaRdpI5fLtXLzgOO&export=downloadabdelka1ErcBywWdk8_3mv_PSwiAIU4-YbsSyI_s
https://drive.google.com/u/0/uc?id=1Zd5iDUmXxvxTwxvJBReRxc0Y_ZuWOsoK&export=downloadabdelka1a9STMdWOSVRD0ojNjswpNtDmP-re5zy5
https://drive.google.com/u/0/uc?id=1bGSXHxh3ZUY2fkgKqJXckEwh8Wq4Jk0C&export=downloadabdelka1XVXB6iCg7soGnHJeoxjR_ErLAEtgRaAW
https://drive.google.com/u/0/uc?id=1u2uO5E3abyzQpNm1ghxdtqwk4VlaxS8m&export=downloadabdelka1_L-htX5AzMZXz3V5gzkeOIdRecE5BgdR
https://drive.google.com/u/0/uc?id=1jujcS6KpmT9PPw1kWXrk3PKp9CCoaRE9&export=downloadabdelka1frbvwNG4tthxmaJ-phbpAVLq0coHCB1j
https://drive.google.com/u/0/uc?id=1lzYwLcmTLmpX7IUVBMG5OyWC8sjfbk2-&export=downloadabdelka1g3BzHPYP393MhAXoD3MLPKaOFZw18Kxy
https://drive.google.com/u/0/uc?id=1EgCa_b1JcsgRcFv2V8xgammUhwCQNkQE&export=downloadabdelka15QCWX9ydwxsK7WXVv8FO-jsj5sWzGMMz
https://drive.google.com/u/0/uc?id=1FhgsmaLy-9Gf-1_6EXVe7LXdcOqjpiNp&export=downloadabdelka1aNcttsshJ1iutUvWxJGkGdWbzhT1VvH6
https://drive.google.com/u/0/uc?id=1eeMfDoEQaZ7RfJ_vpX2seg0YD1uhyJWe&export=downloadabdelka1CiBs6mvHs4TpXdo08r96z-9huLsjpyKF
https://drive.google.com/u/0/uc?id=1gY3Y87lt1DKbGJ72wOXMoPSASTfxXcWz&export=downloadabdelka1PwMa0fBeV46L7ioua4gNT75rGTU5ZxwA
https://drive.google.com/u/0/uc?id=1-cVj0JcaqpXEM94Fi3nUKuenrzFNjpsG&export=downloadabdelka1b6dmTcb4EL4RSkxrgaz-YrA-_FGfuEGM
https://drive.google.com/u/0/uc?id=15Gw9HOLZwvnCvlg9Hbdf9UsZBJsh2SeY&export=downloadabdelka1wQjh8jG2m4IbGDKVcgwc1P_REzsdFa6c
https://drive.google.com/u/0/uc?id=1xd_NjRkOa8kAawWv1npqtgy_PAkPxSyV&export=downloadabdelka1YM3M7A7iLQ1sRjRqjy-7Vn7NKR1AljPH
https://drive.google.com/u/0/uc?id=1GKylW_Okt4GYXty1MdV6bihjrG1JqEQQ&export=downloadabdelka1CZeSHUFo0BA-aCVRbIfeXkYyZ4AzMlcW
https://drive.google.com/u/0/uc?id=1rJx30adMOLlQJ_5FYUcGd58CEt1MhD-Y&export=downloadabdelka1mEi8VEa9E8gp_Qb9nGpJtEDYhxwcS4_5
https://drive.google.com/u/0/uc?id=1MNE9oLKAu1Zs0lWeScAYBG1AewObYK8L&export=downloadabdelka1PWBZYKNS6BNOWdhcm4pS14FTSoyNI3qH
https://drive.google.com/u/0/uc?id=1544DcHNsEEG5ixEZTvkath-bmY2V79c-&export=downloadabdelka1eu3T_e_rmAL_W4C-jcxMRtW-ryOnJdEM
https://drive.google.com/u/0/uc?id=1ZmxRhOshC0-uk-BappjOw-3v5VF8Vmva&export=downloadabdelka1OQ_wp48F08-RMZ0oSUe0kcikSC4t3wSO
https://drive.google.com/u/0/uc?id=1cXlOc1WUCYwXkN2GYWU5FHRM2xSMB-_9&export=downloadabdelka1y-bOANKoeuukwIcLnoMuEQ6HP8osQNP4
https://drive.google.com/u/0/uc?id=1mbEpKQFn5G6GN8RDlM4o8JQ5ls6MprE3&export=downloadabdelka1-ixXWu-nIIS-lJgIOXojm9GBiRmokP2X
https://drive.google.com/u/0/uc?id=1GB5Mt3QrMZRir46VAxgYT5r7HZxZFC7p&export=downloadabdelka1_giykjmsiotGd9qAqTtD-aDVv6GhvPwO
https://drive.google.com/u/0/uc?id=1Dj9IlTEZ3J95tCnC77TaZkcg2zI3ftYm&export=downloadabdelka1ZcPN5rc5Tos34PVe55fQzqeyMhEha2XS
https://drive.google.com/u/0/uc?id=1NxsTxxhw5c8i_4u4zLQG7_C0U5LhJl6E&export=downloadabdelka1yybzkkMRPQANRZlLMHtJ5kah2VjKupmT
https://drive.google.com/u/0/uc?id=1qVaYMlvJNvB78BKZAMjn-lVqmGL5JJib&export=downloadabdelka1EB4RGvMF8T-hv9PN3HiJvvRSg9lJP-f3
https://drive.google.com/u/0/uc?id=1FrlozQi7I3PSuVrJlT3xoFplykCEgiPQ&export=downloadabdelka1CHdP3-kBgvBGw8SjhyLIuyfButkNe9Dv
https://drive.google.com/u/0/uc?id=1dQGUDqF5GPSizU-vCsZrdJBhy4-LfZpa&export=downloadabdelka11R7tXmekWequ7FhjeeGQa4RQnFn0hrQC
https://drive.google.com/u/0/uc?id=1Evonz-_xgYdhPLNTwBk6LWOMbStpdt0x&export=downloadabdelka1cXwdMJGzHT2GmJWBSKdumgtNRBt7yzhi
https://drive.google.com/u/0/uc?id=1humsyRvfpXOQZRl59c77bTz9t5wShDgv&export=downloadabdelka1PZaWZu6H5Tb3mncj2DZ7yBg8zaIV10-o
https://drive.google.com/u/0/uc?id=1xEAlYgFvEjTKoWjIX-mkqsJLF52pmzMh&export=downloadabdelka177dn3QWRGim4NoFlrytLGWFUyCWQ-aFT
https://drive.google.com/u/0/uc?id=1r4iIJ7d4Rz3yjCRfplrGxt8hzMdnVvNX&export=downloadabdelka1PdbpMKuqlUhamn8nyYK2LuIeCTymYrzq
https://drive.google.com/u/0/uc?id=1DZIrjFygcCzClP6tvYJysOfvWcGE6HRA&export=downloadabdelka17vNaDBC-19LLuNW3QublT2JrQDZO93ZJ
https://drive.google.com/u/0/uc?id=1KKuXwvMbEphQSe7eOX59cag0D7NntcD6&export=downloadabdelka1KXM6ZiIuqAMCZTKjGUkbgMRJT6JWkFio
https://drive.google.com/u/0/uc?id=1GGKGqEZoHhHDIoJ3hLgFkQgn4JZHdclV&export=downloadabdelka1k8XvDWUwP1SEQGbUCl8GiyPghvmpAqCQ
https://drive.google.com/u/0/uc?id=13n6aE7dhSeNP3-w_2BHOjAgwYG3ZXD5h&export=downloadabdelka1056dr6ggUyB1OOD3moTdSl446MX2Xj1t
https://drive.google.com/u/0/uc?id=1OLZTgeFOWUvpLziKDOZyYGMMgN1KHFH9&export=downloadabdelka1czYoLU0BiXqLEaz_Jhcr7ySdq0ko0ys8
https://drive.google.com/u/0/uc?id=1UOt6_5qTAhplEdAcCOnSmscDdu0o6AMj&export=downloadabdelka10fMWqE9nnTN_yadXtyIPUvwNzqkrGB6W
https://drive.google.com/u/0/uc?id=11M7nxLo34kGi4e6PcF0jUmXzujYyhcdf&export=downloadabdelka1FMhaHRzlZ56SmNi0EFJNuH8xMRR6fSNT
https://drive.google.com/u/0/uc?id=10EvlwnMrEeXdzFJ9KVsnw77DDM2tkoON&export=downloadabdelka1lW-hnr79sHNRBMYecPwnv9ewhiLNhP92
https://drive.google.com/u/0/uc?id=1M23wKL-KzEZOxT2yAUjM8YaD4l1Smo3F&export=downloadabdelka1T4wrJs99UciBgXgO9fNlo_J8ZBredAoo
https://drive.google.com/u/0/uc?id=1fMD5xwSqlmm0hpzMCqSx3u4YDUFzIu2x&export=downloadabdelka1V0ZoyRpTQVENjQvwjHHwr-wTo6QWa8uw
https://drive.google.com/u/0/uc?id=1io7INaO7u5xccATJcG1qy-mVP1q0r_sL&export=downloadabdelka1MeTbc6qnyroEQpruAclA_hc7tludsiAx
https://drive.google.com/u/0/uc?id=1WQVvvwzNi02geS6063IpD0bRT-iFVl8y&export=downloadabdelka14t6e2haBI482CqQg5s0MIAmad7xLkjq1
https://drive.google.com/u/0/uc?id=1k7pjlZ1doSUM29jfoeOS6AvZiSfL44nO&export=downloadabdelka1b92qO_Bdi1KRxm9NvEtGs5oB_rnxdVx8
https://drive.google.com/u/0/uc?id=1TfRYCuOznKWtfkMAHdT0snxcRg_O_LAt&export=downloadabdelka1TDYKyI1NWRFG5_zzBa78LfqXzUCKZqm9
https://drive.google.com/u/0/uc?id=1VMhTD-ZwWhW2y2oeWAR9A8V6AHmUu8T4&export=downloadabdelka1rapWAP_uo0cNb_3MOgVcVBJ2PJevIe_i
https://drive.google.com/u/0/uc?id=1Iz91ReX70kDuO0KqoSFselKQdkJvOJUb&export=downloadabdelka1wYBXmGa86LD6fem_osAdMdb3Ur46tAV2
https://drive.google.com/u/0/uc?id=1o89oj5JoHAs39x6Ad3yyUgesE7K9osKP&export=downloadabdelka1xJjr5MkqqM6tiEHH4_oWTcU_mq1seqMS
https://drive.google.com/u/0/uc?id=1_zgwXaqqSbMK7JB7Bj9ZXuCcP6_Z8Q-v&export=downloadabdelka1sY-uDHbrns2ZTvv7rsgUjJtSIK5upFdu
https://drive.google.com/u/0/uc?id=1V4fHd1CJVvt96A0LbqeuClchz0e-3EsM&export=downloadabdelka1hG5I7Aa4oZ69ryYy20bV5QXQ5Jc4adX5
https://drive.google.com/u/0/uc?id=1inFpfE-rn92yrDwpuTg-zV2gRIwtO1w4&export=downloadabdelka1GIVJdizEOfEDcrp004KaSkFJW4qc1hh_
https://drive.google.com/u/0/uc?id=1FON163awvaLioF8j-QJYYUL1XK_LRvr7&export=downloadabdelka1AZiFOyWCYSRjZ4GCrWpQlIcpjeGeLA3_
https://drive.google.com/u/0/uc?id=1E8jsV_JMwc-fu3YWucS6Sjg0jvVgTMOg&export=downloadabdelka1ODVggEnLw3Uevs07mH_CNt_4ck6TbB07
https://drive.google.com/u/0/uc?id=17sE6nYOKDdhC0sdELoTTBzISvCcwpEmm&export=downloadabdelka1qWdtf8uHTJGrlWnZntxMjRlWyhdbawfv
https://drive.google.com/u/0/uc?id=1BRzCnrdXYtovitpSLJri2faI7MRGM1JO&export=downloadabdelka1eFtzwESl_j-NtZgn_IdMMzZHVLj-WEiT
https://drive.google.com/u/0/uc?id=1G5E4ZXj9Us0fJEA3piGyBqjK1wUiubCY&export=downloadabdelka1hkeG2RrS5MCx6ZFAEAeVsUIy6a76o9lN
https://drive.google.com/u/0/uc?id=19yA5ruFupfhkjaGAV1dyFOpppWeg1M06&export=downloadabdelka1pjEPaaET4h_8ptZa5s_uAcfvdQAuMcow
https://drive.google.com/u/0/uc?id=1tCSGtZLve7itADnWR7feDox2lZtZSPsT&export=downloadabdelka1eQ7kflZxI5k145jJwqG0FepMT2Q8nTuo
https://drive.google.com/u/0/uc?id=1wrAxdKd1ARFkRsuhJz1QcH7pdPso1ice&export=downloadabdelka123knFAUWab4fVZU5Ujuzdb3ZIts3v7XX
https://drive.google.com/u/0/uc?id=1lygyKAFu_NO20ldLyZ00PLgIO_d--xXC&export=downloadabdelka11Iy_qJATu9MzGyKmx__dys6DFG0EGaOj
https://drive.google.com/u/0/uc?id=1NAm1Fd_shbmVX6x_cvMB3eCEERZTLLhY&export=downloadabdelka17wDj2gWohSuoRYXaLmmdsrRtyWmjm51b
https://drive.google.com/u/0/uc?id=1UkckLDJ4bFr1CJJK-JdcIZDh9VIYQfC5&export=downloadabdelka1KthcWggiS5FGGeSmZ2YSKZsV0Z1edG0L
https://drive.google.com/u/0/uc?id=1rwI6uHs8AfCz2EDl_X0aO3pXVuCQD9Mj&export=downloadabdelka1FjzrQKdzLTivYMZG4vsUTLTOJ4UgDzz2
https://drive.google.com/u/0/uc?id=1JsBkp75le5oumF2XcVRXVVbv49S2MggV&export=downloadabdelka1sxhCtp_tdGG__2iMkF1Pb7-BkX5Fv24t
https://drive.google.com/u/0/uc?id=1x-hj4wW7ZiZzrkSlBNAQYd3y3gPKqb7M&export=downloadabdelka1tcR0LAEyXWbF2Ml73gNLv57JNlEX_Azx
https://drive.google.com/u/0/uc?id=193QinJrH_-MYA-4CbRkwXmQLDpaXwb2q&export=downloadabdelka1kKrFq7ypkSqUmKeVBXPkPFj3Fn-JbH0r
https://drive.google.com/u/0/uc?id=1DCDV00jUz9G210u0YJpQf-Opos-I8X8n&export=downloadabdelka1byJdouasMUaXu_46HkGgvTgYsEh4asRD
https://drive.google.com/u/0/uc?id=1F2ene7ethajICk0Ac4JnrBx5kJiZYjs9&export=downloadabdelka1CQIUNtNMTXnYjR7k3DF2pQUIWhlDReTU
https://drive.google.com/u/0/uc?id=1GYvjLXH18x3rcHIgD3QOBV91h9w6rw2b&export=downloadabdelka1gc8_-t7m6OLRMQjXCvEqWhhQ3zce00vd
https://drive.google.com/u/0/uc?id=1q4gSb2drLaKNPiSjND1jEhbZ9FqLMaos&export=downloadabdelka1468OFAK6qGj-Fj2VtZUyEvWdrfSW7Dr6
https://drive.google.com/u/0/uc?id=11pGjyHL8VvXJv91UBq8YqtoUcXOyl7Si&export=downloadabdelka1Z0dFSqfotN0AjnAiFuxXhqb6GtXMb0_j
https://drive.google.com/u/0/uc?id=1ZZ7jlLdNTMI32KLhKfMWAbTc-Xr9-wOT&export=downloadabdelka1V9KARSfrDkwdpO2SccRWvCT7lLSY9hbw
https://drive.google.com/u/0/uc?id=1pwfHUGT8mBpb-JLSCzqxoTBASHeWr5ee&export=downloadabdelka1cCIiFV8OCvGXPAK8RUTv9dMVfTyIkHfC
https://drive.google.com/u/0/uc?id=1uKtrNOTjEV8qAt9xdT1wSAMgsSHFwX1L&export=downloadabdelka1andiDoFownpJkUhEGxaDpz1zRqZNeej8
https://drive.google.com/u/0/uc?id=19_wkSy4u3AgG3-74sIPivdXX9wIFsWbM&export=downloadabdelka10mD2mgTUdn00DQymLult5jAw4kno7At0
https://drive.google.com/u/0/uc?id=157lgcqcOAJVkrk2NizUuxsk8HU1VOS7m&export=downloadabdelka1MWUJBIgKOsSwFAaoVlIPFPGU1dsm9AxM
https://drive.google.com/u/0/uc?id=1Pi9EHglcXS4WGGvzbihqIhmYBUhItHnB&export=downloadabdelka1NTbozkiLjSj6OaNz4mjxwbUuE2f1nh2F
https://drive.google.com/u/0/uc?id=1cEl-1IR8DrgVGIXu5O5Xa_GwIXh1T52Y&export=downloadabdelka1f4ib-T8VJ7UhBTVE-SqnI97O70siHhCB
https://drive.google.com/u/0/uc?id=1xXUDBl60Hh57JWd94miYiMIQccSvkHvi&export=downloadabdelka171fRId90_pUUucHgaoYp4kqpYJYAQUAh
https://drive.google.com/u/0/uc?id=10vCxBKgQPB01KaIUAyezPdlGX8p6F2rn&export=downloadabdelka1fthCqWw0Xz4lfxsuCoP90-4w9hqHNyIE
https://drive.google.com/u/0/uc?id=1JxriiR4a8UL7c8FtAWva9LDaslOfg96w&export=downloadabdelka14MFSDLcbaYwA2rNa5A-JEflTtnLCH9Fp
https://drive.google.com/u/0/uc?id=1yfcvJJfkiQDgG-nLnp_5RBjfMieTo2HI&export=downloadabdelka14jTMoxs3Fms8L6aRUXw6u--IYVc3Ncb0
https://drive.google.com/u/0/uc?id=1X6-eW7NmBLiu3VI06Vg-AktBG-OW9RNY&export=downloadabdelka11HBmmx-UqdORZEmP29ktwPu634HyDJ1h
https://drive.google.com/u/0/uc?id=1t-awXngzi9snHy5593QLMEOB6By0_y1c&export=downloadabdelka1miW9EBh_-myk4GntOUoQT07xrzSt5UqC
https://drive.google.com/u/0/uc?id=1W3FDEpmo0e_BwBBYya2Kr31gAOu_7ggC&export=downloadabdelka1_dXhdGqhNq35WOBYxmjQ-JAr13VuyZY0
https://drive.google.com/u/0/uc?id=1HR9S1Zki8EBuE4hRD2CiSWJapid3gT2k&export=downloadabdelka1ZVuR9zdBtzn-HYUkI_fP7wAxfCauHJMr
https://drive.google.com/u/0/uc?id=1wxNQb8bRrI-G10nxq3SHEgM_c1XtK7BW&export=downloadabdelka1UHx0C4LqTZJ_q7rLj1vzNzWY6owg7glC
https://drive.google.com/u/0/uc?id=1sbsZa8Ga42kKxTGuxoGK4feu5T4N8-Ja&export=downloadabdelka1DIz_5zy1m3og9fLPDYIvhMImuBZgTLYE
https://drive.google.com/u/0/uc?id=107zKLCKKqZJtFUexKwz0obHTtECmuyip&export=downloadabdelka1ujLz7C5ZSzfb_Vi-0MNaBZjjMGBBR6ss
https://drive.google.com/u/0/uc?id=1JKFANNdYakexG6v1EbZdIamOs5gDX_bW&export=downloadabdelka188Cg14Qf2_wqK77tyRx--55eBy3XEK23
https://drive.google.com/u/0/uc?id=1EAkDEJKrQ4gJU4keJkw5VVIQ2YBjx-EN&export=downloadabdelka1o2WazGjlB_ut0-Yc-j64sJST8WwmYDaR
https://drive.google.com/u/0/uc?id=1jOyA_PJ7vNMxegIoohy6B_OFrHmyJj__&export=downloadabdelka1jebehMgXmaFznXYiucQYRh1FoZ7RqANP
https://drive.google.com/u/0/uc?id=1wV6UqbShCm-o7DNSoYdpWiT3cHL2WF0x&export=downloadabdelka1hLr0Vk4kCPhdelGgCazwzYz_n-7kzIwB
https://drive.google.com/u/0/uc?id=1Z2zC-vHtoyzCG_P83YPYQu1x0SqPucNz&export=downloadabdelka1-0kTKnDtn9uFi8Vb_JD9erUYhtlv6CbP
https://drive.google.com/u/0/uc?id=1s1f2JRuJ7GLQ4axw5MfzkQ8rkp7972Z2&export=downloadabdelka1-Zxq6UrwrWyvjhtEP1mI4Np2RE2UE7Dx
https://drive.google.com/u/0/uc?id=1vG-oXoBY_INkGfLd6L-zC3WUw76FcbaH&export=downloadabdelka1eH8ax05jyDmfChpq0L2cNHgyaF7tHNfQ
https://drive.google.com/u/0/uc?id=1t7sP25dvrlfRvOAeAmpcAkZMlJ17k2yV&export=downloadabdelka1VWC1a-5cyS5LAf2kjeyb46vwffGBK68n
https://drive.google.com/u/0/uc?id=1a0cq0XHMHMREC8yW5BgFyiB-i9Bz0d50&export=downloadabdelka1CNtUhWfP8e-7auC_AcZUdo0TV03MaPAY
https://drive.google.com/u/0/uc?id=1eQftp4sSgH33ZP7s1SIiuyVfOlB8QkZ0&export=downloadabdelka1gLCcqcUzfjh4GPgV2b6D8eQuVi0CxFvf
https://drive.google.com/u/0/uc?id=1HKtP9XogePUPuNpx3_zYCGJqVHqAww2e&export=downloadabdelka1wSPmkKYaQMKySFkwFId5h8sR3UDX4JHv
https://drive.google.com/u/0/uc?id=1NjvgiwnqUKhqVgJrTQDJhCqvIZT9QgGv&export=downloadabdelka17KDndwe-p4sjM4y6Mya6nxwunlEB_2Gy
https://drive.google.com/u/0/uc?id=1DHzRKxkmlZchEUOwpgj5h1f4JGAE1Q4M&export=downloadabdelka1u8rfFNn2J4llp4O0BIiWvOD7CnolIiNV
https://drive.google.com/u/0/uc?id=1smq8Gk1r6eNAXE8OKris5e9EVy4TQAXj&export=downloadabdelka1WElVmM6Q5GOaCVRNUdcAG07A9E5FtdCd
https://drive.google.com/u/0/uc?id=15wL4_wIlkFg-__lHYuxsEw2qdLKUzja-&export=downloadabdelka1lmeKBND-tl8BW2v6iWjqOceAhVQAPaVQ
https://drive.google.com/u/0/uc?id=1ccAwga0WiTbZq0Q9jOGERSTCjOlgpAqw&export=downloadabdelka1cEV3mbcFWMshUtZqJ94aNAbj_lHglgNn
https://drive.google.com/u/0/uc?id=12Mqdrw291XpiBFIjQQVPebnYHgBG-2fK&export=downloadabdelka1diK5Szq5s1gXL2JCPnC-prVpmHePJC9g
https://drive.google.com/u/0/uc?id=1msifjl1pJWyTV2fChwvgwx-l3awAfdLS&export=downloadabdelka1n9sOiWMOLZxGCNcAsjwBCqle467Kn2nV
https://drive.google.com/u/0/uc?id=1gFsoKFRWe2YslMOsa9yufV53qE97P3dk&export=downloadabdelka1byQJ4ldab32SEJvmUG8_kZ_d5lEe4uQh
https://drive.google.com/u/0/uc?id=1zLMDl_f5Ufb_DKwQhbHp3tMCibJACmb2&export=downloadabdelka1c51JmhMaVUexLAjWNHvNnotS_c1Ug3U_
https://drive.google.com/u/0/uc?id=1UyVKE-QMK_IVRJRXbQorT2LcqOxhcZ30&export=downloadabdelka1w3cCnuUJE8SmnehH4xIz3LJeMONSVn_e
https://drive.google.com/u/0/uc?id=1yBlgPAKI-o1fMSu_W9JanxnhYYYmzOSe&export=downloadabdelka1WlDDBwI42s8kKuYNbg6DBYalta-qYU9T
https://drive.google.com/u/0/uc?id=1MhsIs67RP4XmD9EawZclqyqLB-3QPvni&export=downloadabdelka16pqvU28LcXBBF5OCYDlUqrLV2ULROUjy
https://drive.google.com/u/0/uc?id=1dssrZQMsNOchXh4ZSoOyIreDxX8uhvlf&export=downloadabdelka1CfF3C58eAxbNysecgkDZNHrVVU_aqVb2
https://drive.google.com/u/0/uc?id=1Qr8VvC6IQRKaCvgUUGLfG76CVyXxS_6T&export=downloadabdelka1GsdZ0zsfJsMk7pAN8cpBbuJI4oJvquJX
https://drive.google.com/u/0/uc?id=1tpr3sEuIOZD9NcVDFtWoW6KlB6JRGBeq&export=downloadabdelka19H96UL-8aBw70RbVbCSNxZ5a_hNEFeno
https://drive.google.com/u/0/uc?id=1pG2kXwqMdgSbDBafcHCkI9bH0A1ck_rf&export=downloadabdelka120_UHrjyEawazMxU_EGsHTREbCPSdFFn
https://drive.google.com/u/0/uc?id=1fIOnfZCdXkOQOOErrZX32GBx3nBXniBr&export=downloadabdelka1GJN5no3MJAmsgowCNCjplQRGVe2Dq7Bt
https://drive.google.com/u/0/uc?id=1M9caYOrsnLR4SB8pKp5SIfnBxLAPNIyp&export=downloadabdelka1Tu3hZFpO0TS5zqelfY1UqLOcpbknz6YE
https://drive.google.com/u/0/uc?id=1ke35lvRxsc_pVnZ5kVshcQdSR3Mc4w1b&export=downloadabdelka1h7AAyEP29Puzw77slmjiZC1O3WgkZwnF
https://drive.google.com/u/0/uc?id=1G5A2yZaoUqPnstp9tK6j2uOMGe-7z6lM&export=downloadabdelka1R3BHtsQNZeWt5naJA5YDVnS7KHWpJfSB
https://drive.google.com/u/0/uc?id=1rXwBBbBsbY7aY2b3Bu7bOsaRNcma5zgc&export=downloadabdelka1tToGjwpuLvNWIAZnlCN2Kx7a58mAUQPR
https://drive.google.com/u/0/uc?id=1o72EEJJHgsLCZ36QW8FOtETZEy34gme1&export=downloadabdelka1lwNu4pPukYKyTENplzU88IXmp1NjPUYD
https://drive.google.com/u/0/uc?id=1J4OBADZRxUFHZCcxl0VBPzlxSvTlA4I5&export=downloadabdelka1uPyOWJNslAfJSrkodQbleAkT6-CpE8i4
https://drive.google.com/u/0/uc?id=1Ng5d0dj8XlUgwRKvg3E7EVw0zJus6Hsr&export=downloadabdelka1GvHPRqkGpp1-rXyQothKrOEgeqHq-zgy
https://drive.google.com/u/0/uc?id=16nwV_Rzk2vWcqsoNHUB_OsRfRN5XEJ-P&export=downloadabdelka1H2q2WP59wCefPJM9owO0Q0RrGRm-d8Ds
https://drive.google.com/u/0/uc?id=1uawUthJX9P3R80fQkW9Yb0siedPQxo6Z&export=downloadabdelka1ybhbSpYNL2gV2LOMQ9C-pT_MgeWrUjga
https://drive.google.com/u/0/uc?id=1x8HvqXZB_LmfUr6RZDdcSF69pheJ3o9w&export=downloadabdelka1L8-3qUGAg-rgoc60riEy9ztw096FeJ1v
https://drive.google.com/u/0/uc?id=19RVW6yBWe-iGYfJNWh_vNAUt8i01QoV5&export=downloadabdelka1TZvDawvrKdEbK7vFf5iRGh6ZijZFhZ60
https://drive.google.com/u/0/uc?id=1dOQx4B7SDa-0Jau91qHPTl7IRbf67sLY&export=downloadabdelka1wPS-b3NnZPAkNDjx1dtrNbmVB3B7Ci1r
https://drive.google.com/u/0/uc?id=18ekNvGDSp7BezNiTHn4PJg8YFUKE0TIk&export=downloadabdelka1TfLlXSrooaQzrM69XeyMIIqkPsZTrQOF
https://drive.google.com/u/0/uc?id=1cMavnrI4FUhMhNOBWeFHCV4rJGERYkBD&export=downloadabdelka1TGOhAJFy-25bWxAd4r7MiL3ToaqGCupx
https://drive.google.com/u/0/uc?id=1u1DS9rGawr5RpVYP6ouGfsKmLx0LZSj0&export=downloadabdelka1KHAc8dHhHpC4dXxe6hrvr0oFVtwvtSAc
https://drive.google.com/u/0/uc?id=1avSwzyagB9iz-Q58Tn0Pt3LhklJWlrv8&export=downloadabdelka1mUX7GFj05jY9V9vQ6hwS-QzoQfujSDjm
https://drive.google.com/u/0/uc?id=1MQVXe8oSWiFLHiA3mJmugJ5AV2lnSo8X&export=downloadabdelka1KDMZUWOPJbP-F-WdfCT74pF1d9VHf5JY
https://drive.google.com/u/0/uc?id=1gAubYNXR4VWjKNri48UbrrUxchgDym09&export=downloadabdelka1WjM_uZ-7vFeMnYbILufnLitK5H6_yk5n
https://drive.google.com/u/0/uc?id=1aasSfEAPMZHgfbFY7Kz-GSFpeRiKUjTp&export=downloadabdelka1iFvy6ikxR8xXXs9lWDJ2HEGzZv2q4NKy
https://drive.google.com/u/0/uc?id=1ZN7ObFMeRJisec1gRlqEtd2RMxyCMfG7&export=downloadabdelka1tOT7h8GFWyhAqX_LurOFtEtBT3iQ-0xY
https://drive.google.com/u/0/uc?id=1SjG-uq8cdvhrF6INKtEzSGKSSKzbVW7B&export=downloadabdelka1igUq-YGH4Ved8MfZvMhrspRTN4gOj6YH
https://drive.google.com/u/0/uc?id=1Zegu5TVwe90U3C5ljWaHZWk8lQMo9xYc&export=downloadabdelka1DG2AjpvOCLrrsF2ySpwjz5gs6E-1g45W
https://drive.google.com/u/0/uc?id=1VhWGIQ2h2tIVyBQgEZm8yYo4yBs3uPff&export=downloadabdelka1_sNQyAjtCnrODX42diOPw5CYlxKDo9X7
https://drive.google.com/u/0/uc?id=1OT5yPuL5ywdR_WXJhIRlUMPZT_Btvgiq&export=downloadabdelka1i9-2ewzfWf05s2nKzSuLiMEvh78rKPSl
https://drive.google.com/u/0/uc?id=1aPV-lMLY5t-jBLlKipFFGQ-JaAoFvv6N&export=downloadabdelka1kD6PKguy2Gs7OX0jgalmsG0R7LEVGxuw
https://drive.google.com/u/0/uc?id=1dI65KDMpyT1NchAL4l4VNd-AHBb3raoL&export=downloadabdelka1lVdVQXjgG_RcYogdXyXvyfOB8Dsog2j8
https://drive.google.com/u/0/uc?id=1IS4uExCxv5fq5rJwtkLpTAsNR8UbizB8&export=downloadabdelka1UdFMqaO6grCMrU8tfg4SLEcG4CK_8pWZ
https://drive.google.com/u/0/uc?id=1cXQO7lL0GoDc8be77zFC7caW2PCMO2Zs&export=downloadabdelka1Ud8IUdKZMPaMXLghU5fFi3Dkof2uNt2r
https://drive.google.com/u/0/uc?id=1pP-TNJ4FRdeDz5xWTVY1kmM5Xp7MkZiv&export=downloadabdelka1ZYWbnFL9hP8xkENr1KsevMGIBD9X7Hi9
https://drive.google.com/u/0/uc?id=1AMY-EhxszskDBonoGg3IbUjPoID8Daej&export=downloadabdelka1EHABgjISi6h4c4lVvCescHN1DQTI_Rvv
https://drive.google.com/u/0/uc?id=1u_kCyUTaZvZBaTuZBfrCt-JKK7DXIlgp&export=downloadabdelka11rArMLzp_fJvJspn3tf1x39_Py1NyMP_
https://drive.google.com/u/0/uc?id=19MQ0rooSI5j2f2ipeMZe8kimppdpxFbx&export=downloadabdelka1e27BSxQfsyOCKNKqhatkFf46-EhUYGBf
https://drive.google.com/u/0/uc?id=1DA7gCfuzfglotbE0dHf1YBGvtpSDap1C&export=downloadabdelka1tXdrnQj-w6PyrVu145-AjaVMesYUWAZA
https://drive.google.com/u/0/uc?id=1S0LZVANLcsWY7AWzq6cB9J1Uc-cG4tP1&export=downloadabdelka1oyN3PfAwOnJnjyj7qtlBsT9uDMKH504r
https://drive.google.com/u/0/uc?id=1MRodYwpkcfQHx8wXVDUThBt8z4zEgJRd&export=downloadabdelka1CfzSXTf_rs5fGAyABRvvXlJr0AVJknKR
https://drive.google.com/u/0/uc?id=1YZmHAWL2TndsYa75J-dgE_4kpVyENXA8&export=downloadabdelka1nAr2v8PB1FYgIaLNgDPSuoHOs2STLNsd
https://drive.google.com/u/0/uc?id=19UOZ6WEOiBupSzqe6xnjxeMpGxxQEBbE&export=downloadabdelka1ysvvQWQv5Do51fiZbAhMElOW5WZuXk7A
https://drive.google.com/u/0/uc?id=1aGi2YJXH4S8CJvjEhP4ezAnCATFG8d8D&export=downloadabdelka1RtXuVnSq-VhEJ77Yytj2fipbZk2X3KTR
https://drive.google.com/u/0/uc?id=1ZJqsmTf1NnEXfLKUZoI7HZLw631CvPAb&export=downloadabdelka1wWOgDngqR6DyC3wbUkMo4dxVKiTjOhUM
https://drive.google.com/u/0/uc?id=1P1Sm61SZ8emxgceZ-Q5lFJVuVqBYPqep&export=downloadabdelka1p7MOJbbI13_gYzgQiM269GQkPMTlEgHM
https://drive.google.com/u/0/uc?id=1IB4Vf8tOB6pZrIKJi3KW2pyXfcBYH9CG&export=downloadabdelka1j29ZXuu_062Yj65ZGpALgCL3WRgY2UKi
https://drive.google.com/u/0/uc?id=1ZxrdDwo_6bqlhmjn1CDW1Jj6ShUesSTY&export=downloadabdelka1OZjewxYbq_JeVvpWA0ECcF73_6VpwWzX
https://drive.google.com/u/0/uc?id=1cU8m2bHYAUQPftFDhkF_3dQJZZRko9n1&export=downloadabdelka1PAg7iDV06JRDzTWpLcloKW2gEFSs7uRe
https://drive.google.com/u/0/uc?id=1FpjrHslvBUKOIHEKw2lIQnuLSfdvniHX&export=downloadabdelka11yfSMiCJohiHsyLPj97XcqPJhSoD8g-1
https://drive.google.com/u/0/uc?id=1j7V4LPMb9UsvYsg-GMFbbrdt6deiaOpo&export=downloadabdelka1y2_GF7KpiOWptufmas2M0vcprYernAC5
https://drive.google.com/u/0/uc?id=1o7qXnZrTn-47sywC_1c8Jo11mE-Baw0Q&export=downloadabdelka1DgnCvtSI9TdNZGi755E4dkmUlvI7gLHc
https://drive.google.com/u/0/uc?id=1GfjNlfuSHMsN-BLbmfmvcjjaYYdC3Bzb&export=downloadabdelka1rYBbDveBiS2T-NHXQTfcempQmbBDPec8
https://drive.google.com/u/0/uc?id=1jhBrm7PR95bGvqMu7xsCK9fnOwWj7VbH&export=downloadabdelka1EjG8S4tmVSWQ5T536l06jc2mb9rsv2lV
https://drive.google.com/u/0/uc?id=1_wzfBB10zek66nElulR1Km3J9-P_E8yJ&export=downloadabdelka15yeMMQKLZFpUycTtucWz_wBFR7e8tNjp
https://drive.google.com/u/0/uc?id=1w2OSdEAO6hXOeUYhh_6DNi2qir1iQg8W&export=downloadabdelka1j4V2NVgNuBXZ6kmWNm8SXTjjLNPKt5Pb
https://drive.google.com/u/0/uc?id=1cWifncY7lB_h1Ro97V2ul0o8NrX--l4U&export=downloadabdelka1u-xBAIG4E4S9__Uj_hpRMZ7675X9Hqyc
https://drive.google.com/u/0/uc?id=17R58Yf4e3n6Fp1BfYWDd5UKExiHCzxVV&export=downloadabdelka1wZsG1X5HQvE4-oadmGLo1BoMy71B7IQ-
https://drive.google.com/u/0/uc?id=1A8lVZcZrVCyb6doS9XjOUyLopIobRDJO&export=downloadabdelka1bnTE7PiCKCokwm-_u1prwCItM5K4gv5v
https://drive.google.com/u/0/uc?id=18LCxAnwNF3GD84Azj07kJ04UzkrCGbsk&export=downloadabdelka1RuZQorrxPUa5XwUDfFWoVeUTLxpgW1Hd
https://drive.google.com/u/0/uc?id=1G-H_3PEolLuIXGNFtCW5E8UrbReNjq5H&export=downloadabdelka1G4Kv_wk4ZqSNgsWf6Fkk0mYKu-BJTRLY
https://drive.google.com/u/0/uc?id=1pbCH6c3u1gosKTXb9zeqBR6mzrsivoM-&export=downloadabdelka1L8gebGFUZ8t_yFpbujOKd0Q6g-f75Imp
https://drive.google.com/u/0/uc?id=12nwWmfyjoOvOK3br3emhXCRigNs0b1Nk&export=downloadabdelka1SCZr4zuku1KaOvQ71jm9w5RF1ofS272C
https://drive.google.com/u/0/uc?id=1twTWBTk2txE-_BjV_qd9FznD7EEGDs65&export=downloadabdelka1LdwQzRW43vU-d08N9PfWtm-zEYE4j5iH
https://drive.google.com/u/0/uc?id=1hZ5b1zOr_HHOnQ7QHrC0IHkW4IOyIL0v&export=downloadabdelka1U0sWUpP13JMsOiFlx1YTG_86lgkgbVIj
https://drive.google.com/u/0/uc?id=1f3-w39NgonOvA5dTr3kJYXaGVzu0VUsx&export=downloadabdelka1sDtyyFUxJYY9FvNVqK71JFTvDoLZqd7Z
https://drive.google.com/u/0/uc?id=1097tzqee8W3_QqyZ_qPU27eiscuTzK-4&export=downloadabdelka1l7UBYqgyjBBKgeE4Zn6GOlMnnL40mYa9
https://drive.google.com/u/0/uc?id=1gpaX7zvmq6HqYFX8eJ33xqLObM6IgEwH&export=downloadabdelka1JBpwp2Z_yU6PUSYZCBJgHZ0JzuFc1W-E
https://drive.google.com/u/0/uc?id=17FTq-v-MdKMwDnBqa2lnHXD67bn9Iaw8&export=downloadabdelka16OEaoAYf8PjSUdlsswWXrDV1E6c7svsX
https://drive.google.com/u/0/uc?id=1vNPgHoKGqGvf6Nu1RL9FaStdLRki_as5&export=downloadabdelka1aC9SAA1nY2pNJiHDKBq6OBKsNjXBBr-4
https://drive.google.com/u/0/uc?id=17B75YIIFbdn93liPi8HUVEO-AoWcJRxh&export=downloadabdelka1pACPbrjVxmhpE_fKlIqfiXU9KKSVDGez
https://drive.google.com/u/0/uc?id=1P7klsrRd6cSPEpqboyudtTCLkZq2A286&export=downloadabdelka1hfRgl-EOnljy6MCs_vzgwakIbyPclQ6a
https://drive.google.com/u/0/uc?id=1ZUwY1OKyw4BvcF3WlNJ_NEcnxSzqb0cG&export=downloadabdelka1bX3xzRfcd_Z0sxnDujFxuV4oNHxabD3e
https://drive.google.com/u/0/uc?id=1nd8U0F9Uf1Lh367Gi3kqca4RI3PTgIhK&export=downloadabdelka1i-GVbC9FMBYYru5oCgvLqSby_4sV0p8l
https://drive.google.com/u/0/uc?id=1fs_j-sdGoR9UtkKWIC8gfGrrHx7K93E0&export=downloadabdelka1_vU2akp8XjKI8WagxmJkcBtTHKe0ZODA
https://drive.google.com/u/0/uc?id=1Kxxse0ZaDCiPG4y1TRJMPdnMgkQcLgIi&export=downloadabdelka13aVyBsvVqWYwzSRIZqGXv7hLrnjX466n
https://drive.google.com/u/0/uc?id=1K2cL73xmluAuq2BKaxzqEqQPe-w6jsGI&export=downloadabdelka1eQYf_7jS3fUqc-EzLokXyYJr_pUJ8dk4
https://drive.google.com/u/0/uc?id=1VaDiGtCGjhh27qcMo7xblF-o2HXdA1Pz&export=downloadabdelka1psthEBrUYTgw31iE9w_yovAEtQ_ID9xv
https://drive.google.com/u/0/uc?id=1fOpW25F5KVpBSkQghuc-Cxiuf7OjUG0p&export=downloadabdelka1RyD7lHOYbDGelBzTNFXc2Uph7w2lEGFc
https://drive.google.com/u/0/uc?id=10oDTDl8GGQFv4eNbhkpVyX96Gh1V8jYb&export=downloadabdelka1j-Atk1Lle2Nv9Rvdb4sToa5WnFdMB3Nr
https://drive.google.com/u/0/uc?id=1zmOpjighHrR_i4_Qi9fT8vAWXChkdBbc&export=downloadabdelka1bWdJP5YclqsI3UmQ1s9DW1p1hMowmkh4
https://drive.google.com/u/0/uc?id=18C_sJavL9_dHLspDBcy0FWd5Xz9PVssN&export=downloadabdelka185kjHuQZMptVLowo8-rR3HVMDZxxatE4
https://drive.google.com/u/0/uc?id=14foH2D9iV7YUhx1lfMpXyp1xoMykLjDt&export=downloadabdelka1uP7-MmJsXln5IMjyubvSMT4ZBGnI60tj
https://drive.google.com/u/0/uc?id=1bUE1EMCoKGtCO-PLxGydI3PU70Iw-gvr&export=downloadabdelka1-GjZTofW7o279sYOVNdqHPpf81DhJ9U7
https://drive.google.com/u/0/uc?id=1Ke-K6MwlHtFHuiaEIp94ctkLedKX8S46&export=downloadabdelka1jUgSTDmTwzZRHxvm9mDu90Smbi7qwLL5
https://drive.google.com/u/0/uc?id=12X-QEdw_l_OWrLawhn2ghCdTq0e3nmcf&export=downloadabdelka1uGbZCxo48rFTkJYf0VBqDgT8iV4zK2tQ
https://drive.google.com/u/0/uc?id=1-1B-Xbv_Y_QmVScAQ6DDVXRTR9sOx1bZ&export=downloadabdelka1w6LXZ5W0sUdo4GVWaWrxK4N9JfxO2SlE
https://drive.google.com/u/0/uc?id=1R-Q2TJQRWyAPdrHcrd67KlxMJbpJEjso&export=downloadabdelka1fTkRpCJU1rcMgTmKHMfkjvgjB55NtO3y
https://drive.google.com/u/0/uc?id=1FTUYWfgANgZhelmhKzWDysBRDfuHf-vL&export=downloadabdelka1TvQRojf_U4koc_9P5imLbjRUkpXwRD6S
https://drive.google.com/u/0/uc?id=1XcUGdpRHMo23pNGxh9iFag5gAWjcQ83C&export=downloadabdelka19kUjNJtwSSN6avKiPT-RO0W1-l9zgNn5
https://drive.google.com/u/0/uc?id=1Oz9li-wolHtctiM91H2N4tHYebVIhOBF&export=downloadabdelka1glffLmZ_CtXWV_Q0roWXz0GIz8MyKqnz
https://drive.google.com/u/0/uc?id=1ACOIv9kckdGndz8go8WAhG92j3QukWs9&export=downloadabdelka1gaJhGirIzImk9dylOo_ZN7-nWgv1xgyN
https://drive.google.com/u/0/uc?id=1AaUPCw0XDI7zKAGWI6vZ-Aufl0MiLAD6&export=downloadabdelka1mmdLQyXzYkorCQOXGAvGOzo2o9HHDYdt
https://drive.google.com/u/0/uc?id=1ZM8R8IqtDd8sD3TYfsOPRJN1jqU4DaZ0&export=downloadabdelka1gIUfMDfH9o30uKfTnjK1uo8rgprvW9l3
https://drive.google.com/u/0/uc?id=1RduJWWmAgVTowvzEuW1UPQ9-GqJmqnah&export=downloadabdelka1sLDwBTM61d2P8WpTjScWa8K4eudtQS96
https://drive.google.com/u/0/uc?id=1hwaTJaShtTfoN0oQK8elPVlabrbgoOJN&export=downloadabdelka1o9VCe7jnqOyus69WMXL30HNSH7inKe7h
https://drive.google.com/u/0/uc?id=1XFrSBbpaleaR1fNNbW-GG7Is1lEL-pVM&export=downloadabdelka1TY21whOYTd-kOqkFwG-s6Xet6_Roplc3
https://drive.google.com/u/0/uc?id=1VVXNd2ZZLa1JPRzjtdkkNLVsqKYsb692&export=downloadabdelka1tYV6YHWnBlaaiLZBelQCmMm7anT7_oPg
https://drive.google.com/u/0/uc?id=1voC7G2A0xyjSY9r4CPqadQyQ0pCMFR6W&export=downloadabdelka1EGJ_V8OFOND1sQIaF4lTkjwUAt-j7M1G
https://drive.google.com/u/0/uc?id=1NZAxCBmMWoD4Q1ETwR2D7Cp5DUHtpAyM&export=downloadabdelka1X9UoZ14dO-K6y1VLjEZh9hkoGIo--f_W
https://drive.google.com/u/0/uc?id=1WioWjuq-mN3vWIx9JyQkxQ5XaN6eSEZj&export=downloadabdelka1aU3_D5seuw4H8m05zWqS3YmNb4O4IlZj
https://drive.google.com/u/0/uc?id=1PpjHu0z8o7Q6t76b3Ev35LEi_GUymkti&export=downloadabdelka148i9RZXD3qLw_Ii7oqHRZgObGmkWDU0Y
https://drive.google.com/u/0/uc?id=1Ema5xaqXTKKE3A_duuMS3_CH_KJH6YsR&export=downloadabdelka1XkWmHimubmSuuznw_4t-A7PE3RCSx1w6
https://drive.google.com/u/0/uc?id=17N_Pj3WEXffLGKJxTbAwU7Oa4EvznFgD&export=downloadabdelka1GYNOADyq-YsMT7uE5yxnXhCJdFnMzVEV
https://drive.google.com/u/0/uc?id=1RAtn3CxDrJDlRo622H7Y3SOfPvU_pq4s&export=downloadabdelka1JSTomvxhb6Tl-kIfsZ4_34yxnYfzOyJG
https://drive.google.com/u/0/uc?id=1LAXpmdc7qiOQs7BxuRZYYHPuXGZYop-s&export=downloadabdelka1WIQNoc62VgP6pyXxT6NAt1LvDbzRuj7X
https://drive.google.com/u/0/uc?id=1uxfB7FjGWdc0PzAPMbfYgVIih4SwTDNU&export=downloadabdelka1FUsH0X0kn6LLq94j23dSvTB0H5SdbTbM
https://drive.google.com/u/0/uc?id=1nuM8rDFuJwfMgqbABfoI05S-Ijf1wZ-i&export=downloadabdelka1caPBVV8MDcU5xoDz-4n6BUlUCUs3Mp6j
https://drive.google.com/u/0/uc?id=1qlash883rTf17QKSvTQajDuyBXsyVehR&export=downloadabdelka1kdHEHlyjPNQ9d9nE3K_f5jO7gKag81OC
https://drive.google.com/u/0/uc?id=1AhqG2sSeS4wLxWepK6537zns4dJokHpF&export=downloadabdelka13vC7-lLufO_ggTrWFmMLJq-h_dPV-eYN
https://drive.google.com/u/0/uc?id=18QgfX-MJDBgMK6_MWGTe9K1ZQPvILXn_&export=downloadabdelka1YtwCrPzVF3pih6sMQ8E9X6LD2Ksw399H
https://drive.google.com/u/0/uc?id=19_-X27Phx8QHNPlrLMs7OWMdHGnNjf4E&export=downloadabdelka1Kxxcj1DVwLvV6FdT4BTGC6MsEnsrwPoL
https://drive.google.com/u/0/uc?id=1hco_UFraWpxJfTbYtqBbNRu5o2KmYdsa&export=downloadabdelka1hcd__eFPd6Ile7eRjWaCOLobOd3Eq7EI
https://drive.google.com/u/0/uc?id=1qroLAVKZf-ikr2XJEAjV2akIyYhr-n49&export=downloadabdelka1Rr7ryKTKfO2Ah-hWBFCANSBGSKIVt4iQ
https://drive.google.com/u/0/uc?id=1VNhU7Ehs3YXqofa0W37E6n9FkQGScy7M&export=downloadabdelka1pwPQ6K0YqMMX8x67in1iSvjz89jSeiD-
https://drive.google.com/u/0/uc?id=1bbZZU1lL1EMdXwmS5h3BfgpJJddch1BK&export=downloadabdelka1dI194HSO2iFchjkLA5sJlpnby2A-KEhl
https://drive.google.com/u/0/uc?id=106JaoHOrEVQYQQdqeh47cfvTjeHRD1Qf&export=downloadabdelka1urxj6pV0fCcxwC3r-EWdGx_eUOaHY1I3
https://drive.google.com/u/0/uc?id=1fnDLsnx5W2W0afEs-mIpHvldSl21DgmU&export=downloadabdelka1VC4lI2cplIfNqU0V0TohQyTjGKKSPOEJ
https://drive.google.com/u/0/uc?id=1azIl3JLHEA3KBQF__LyZ9pZIdoecjk2G&export=downloadabdelka1IGE7-nULiYPctBRW8sDhvAKTiegTDi98
https://drive.google.com/u/0/uc?id=1Qd5mqvTOUBjUFVMP-VuTi1Fy1vz3nGF9&export=downloadabdelka1DgCt1WkllVoPcar5fidUqZ-oP468o5Vz
https://drive.google.com/u/0/uc?id=11zk7EA9uWM5KOSzMptPFxrxV9y30kGzT&export=downloadabdelka1GNW6pskdb8udPtZEIAzwXYPQDELchQhn
https://drive.google.com/u/0/uc?id=1ODJEgy4RvMTkYT_KEJuPfZa0MmvW4I48&export=downloadabdelka1N8WirdhStyu-pusE32fOua-yoG7HNPbP
https://drive.google.com/u/0/uc?id=10A8YdXodjeQcwkZAgJfvfZUrNbFLcmOW&export=downloadabdelka1H-Kd4lTxDVNvMAjFWcSYnkURwfVJsF4W
https://drive.google.com/u/0/uc?id=176XfzWWDTzTSDrtzjp-z6qQuLkj-ZmX4&export=downloadabdelka1ckxfWIudYzSaLJUzORGeLbUJaboVpN2x
https://drive.google.com/u/0/uc?id=1ZczngAoPNGjVE-jQEORLDP2THWU_eEcJ&export=downloadabdelka1xMzNW2FanE-qT-CUvx4F6XUFvw8uAVbR
https://drive.google.com/u/0/uc?id=1YReNHbg77ekB0RoGgbjtP_qYOBuTdAIc&export=downloadabdelka15PByE77lZYPZ2ukA5IlovOUHLpSQzEiR
https://drive.google.com/u/0/uc?id=1iOEUExaREj5zFoLIUPLmsyTziVHpe2X5&export=downloadabdelka1RqaDsruDOZhh5NHhPErG70YNs6Gmlq4N
https://drive.google.com/u/0/uc?id=1ca60fnG96gyv_BLuVmEPJMK0vSYMvdDQ&export=downloadabdelka15ZplN_JegBLSAZ8DSxr9NsMtK3aWSSuK
https://drive.google.com/u/0/uc?id=1NBTV3D4xzXslPtAM51w-qvcelD5SLya4&export=downloadabdelka1uA0g1_WAqeS5QyO3vlHv5f0_sevHVIWb
https://drive.google.com/u/0/uc?id=1Mbb4MC5Wl2rJP8BIaQVyDWHolEG9kjOF&export=downloadabdelka1uo-KZBTfBklhxXzgtu-9EGLSZhZtQ6Po
https://drive.google.com/u/0/uc?id=16S8C4WTmL-FgWDqOn24T95rJFkCCRhud&export=downloadabdelka1CYsI13hle1ZfcDwE1xkEfEk9FL1A6SEU
https://drive.google.com/u/0/uc?id=1rr3is-PaiISf9b6g0AcYJv0UkAkOJCDw&export=downloadabdelka1EaHLf6p6xVwa13JGve0-fLtumBbNhgnS
https://drive.google.com/u/0/uc?id=1PIzHGErIrf5XNWflSBqcMrQxRHgaG8RA&export=downloadabdelka11aN4V7B4fQZWxwxRhR69quZ9ZQkV8gxL
https://drive.google.com/u/0/uc?id=1GuSCtYgoUODcU90MLkxgbIQtu2SkxVxP&export=downloadabdelka1wN4oiJvfDVQAegE2ZJyLEYN0I7k0pFRj
https://drive.google.com/u/0/uc?id=1ebf5Mlsvje_tIwo49GGNQhgkCG2V5gmO&export=downloadabdelka1-hI3-SuBue7ibCM1aWMXxtWaDy22MhdW
https://drive.google.com/u/0/uc?id=1NRBMp0SOnDURtsVqfBM40xG2FphYV_IT&export=downloadabdelka16HlZbT3FAFV5IYej5DRaubuB4UcIsN4A
https://drive.google.com/u/0/uc?id=1GwLEDAhE3bCebj8-QyLXlcVfyheHlPGs&export=downloadabdelka1LaR7ESxCTnxa0pAOlf7Vuv6gYmAm_zca
https://drive.google.com/u/0/uc?id=1Fp2Y8A5Srw7e2wYXrKMeuOIFOOMY9t0x&export=downloadabdelka1Ne4cZamCa7IU-z97uSzDfI8upq8b4fd0
https://drive.google.com/u/0/uc?id=1aQveXEYhQJdgqnUr6-sk74tbWRATYISV&export=downloadabdelka1-9WUgFyt5Mai_SYGVXk22T3IsHmpSs_y
https://drive.google.com/u/0/uc?id=1ozfH2fjSAdDJuqHhSQUBUg2OR386Y1pb&export=downloadabdelka1B2rXL6Nomd0NAb5wjbeRBQd3XalLTxs4
https://drive.google.com/u/0/uc?id=1BZsQ9heSn8fXcPEfsNVbi31_DQxv1C82&export=downloadabdelka17Ozj6X655hpX5cQiwVXBI8DX8dElignn
https://drive.google.com/u/0/uc?id=1soYQRNHj0Ef0B1zSsmQdq0PtOAJF16OB&export=downloadabdelka1S0uBQkeMF6TNAuME0IFmrvLa32i1XxN4
https://drive.google.com/u/0/uc?id=1nA4Fa1Sd7EbqNkVgvd3xsyNbb63AgyRh&export=downloadabdelka1ibeJlpbbfPK7BIGHZPhvDJL5hKvSxDpw
https://drive.google.com/u/0/uc?id=1bCUIcSJtI8ktd3A_7DG5qJWeRyYcTuf6&export=downloadabdelka1QQsWOE1ZTHstz8wotvgwiNARTsnxC9zA
https://drive.google.com/u/0/uc?id=1XItjquRi9hC431_i9Uetiz1w2OYA1THc&export=downloadabdelka1-U-ka2Mc-YAFfOKhv934z66vl6jguGxN
https://drive.google.com/u/0/uc?id=1aKJznXUokdNJG_I38qPO_JZoNYb4vJFx&export=downloadabdelka1JPLp7wOSAZdw1hCE2RIqBd7rf2AjA_uX
https://drive.google.com/u/0/uc?id=1ikgGVKBKbDdEkCCymBdVZ3vOO0uXUdKI&export=downloadabdelka1AMBRPLiIFhCqOg0I1FcRQxT2RLBSl2b1
https://drive.google.com/u/0/uc?id=1XVEmsOba4n8uL70OGkU4ny5AwhShrEmy&export=downloadabdelka1wY1HL-g_pUkFCW-400FXOl0S3Jmlyd9R
https://drive.google.com/u/0/uc?id=1s_5-eYd-w4dO4jeHysAFVREmn9gER8Hq&export=downloadabdelka19wqFSgL0YyVSllRD4uzYg4jfoTl7vv8M
https://drive.google.com/u/0/uc?id=1wNPv8clv8a_JpoBzniUUCaDgKEKW92nB&export=downloadabdelka1oFIN3FwCBDpP1f6cRik-BlhFSzZSBli9
https://drive.google.com/u/0/uc?id=15atIt3mRKHv0ANadTM3EPE0ZvH8UN1RB&export=downloadabdelka1q-JpVOMI8r2t_HpGDh9BeO552QW-iK0D
https://drive.google.com/u/0/uc?id=1vbU9UCkBH132R8VDsI4cuePW40U4DC7J&export=downloadabdelka1cMeluzbDxoBJyUFkUNQ3xUxwzgY3A_g1
https://drive.google.com/u/0/uc?id=1eVM-ZdrCYSV-8xCj_zQQJGtdt3vX7lku&export=downloadabdelka1ulT5S6Ojmu-eFzkhCM1eUKOnxl9S3bfn
https://drive.google.com/u/0/uc?id=18feg1albYzQRChRqlO8FBkyTr1eJ8kqs&export=downloadabdelka1c9X6XNyuCMNJKqIEM-E9VS-2adOKu2B7
https://drive.google.com/u/0/uc?id=1fJDuy0ZKQTex3E-0teeKWHhSLjoDs_ou&export=downloadabdelka1zl0kb39v4VEoDgxXnmBPXKyvFbsNelix
https://drive.google.com/u/0/uc?id=1ryXyRAki0qNCCew9of-Tb8U_OFmxWR7z&export=downloadabdelka1z1Ox-FMGQE35n1ruyD37GNfNkNyr2xcR
https://drive.google.com/u/0/uc?id=1xhlMSaahbyb2woG21DWSZR1FJsZEsW0N&export=downloadabdelka15AQHflY1E04qom8YkBRUGSkIDTbOrjGW
https://drive.google.com/u/0/uc?id=1QsfZNclJxEaBqk5b2_elnCv6cYjPC9cK&export=downloadabdelka1-_l0XusGJtuOQdwgUQfiLqD41AFGZLJX
https://drive.google.com/u/0/uc?id=1HaKGATIHdhyPMpF1vusC8ngWGQ8l_rEb&export=downloadabdelka1rDbdDwddprs2LQhsyMTlwS3vXU_53H_t
https://drive.google.com/u/0/uc?id=1vYUtftEMQ9GEDcwT3w-O2sBD6ruGhfvd&export=downloadabdelka1fbrpOswObZQ5Bnv_3lhlIiPF0IKysi7E
https://drive.google.com/u/0/uc?id=1IFkhAPm-OkVVI9xw2n-bZOnguIChjJYp&export=downloadabdelka1jQ20bG_SRa4C8ESWF-yRp91XzFN_hiMa
https://drive.google.com/u/0/uc?id=1NtsfZN9vpsTklVHUUQkntgT8x7bW2Y7a&export=downloadabdelka1pYks4cAHZFPcb57gt2Fl97VZfiQBoCC0
https://drive.google.com/u/0/uc?id=1ctyo4KXtm7nVQTaM7gtQL05g7sg2JPUh&export=downloadabdelka1sCd3euFiTw1e3jiY8fibHuRTSxdEyDHL
https://drive.google.com/u/0/uc?id=1rtIZJY-NX3AWRFJ4X2N9LtQTxsm7nBJZ&export=downloadabdelka1NPH3s-F2e4RrSu3wIHWCkLFtLlUfV_gE
https://drive.google.com/u/0/uc?id=1b-sV1ZQMdGODN-xQid222OdABdTYH-y-&export=downloadabdelka1ixYb09k-CjT0vyuuRLas3YyQ75FbuVYX
https://drive.google.com/u/0/uc?id=1FtdYSodr8gufYdgjDMgf-zWJ-cdo3mNZ&export=downloadabdelka1QEJaYUtvsZLv4oVekxUq6bjP1NN0FeOc
https://drive.google.com/u/0/uc?id=1KWHuumnP8gvJ8IGX2GPCXTX5LjMvlr18&export=downloadabdelka1jKNL0dwpUumVE7ftYrWDP6MR9RMW2L5N
https://drive.google.com/u/0/uc?id=1WUW0g7HNpB7VjPMOPqbZPPouVoxGag6p&export=downloadabdelka1K81nf-1Yp5G2xN2Q5xJ-QiGksvhd660z
https://drive.google.com/u/0/uc?id=17RXbAv_effKQiGewBUszjIJGRq2gKwyC&export=downloadabdelka1xKaqMpe_Ewk4l-Sca0faE8UCB98Hywuu
https://drive.google.com/u/0/uc?id=1zWykXBoE0doViEU4-zBlLJHwXcRIiOXj&export=downloadabdelka1iMfuP3msHWleXAQyekRDBEKkM_R1J4XZ
https://drive.google.com/u/0/uc?id=1c1UlsFMLi4KL2KfGqQGCXtTYcwckSmjg&export=downloadabdelka1ioYb_J8i-r9MyWJdUoidIcF_3VAZLS_o
https://drive.google.com/u/0/uc?id=143lSjuTDSMAc8Zp9CBgN4gatc1zDhQKy&export=downloadabdelka1oe-e21edbWSJ65lF0knCxH8hcIkoUcvJ
https://drive.google.com/u/0/uc?id=1g8oSPCdZEP1RHyJBf7fnoRtdpk0UW3SE&export=downloadabdelka1OXit2LvMsY7K8A7S8kKrljZsSgK9Nesa
https://drive.google.com/u/0/uc?id=1_A9QANfa3TzWj5kwLoGnBcLp0VuDquPv&export=downloadabdelka13F_niaDJ7OXtvoHjyyyFBlpFVMNUxsRJ
https://drive.google.com/u/0/uc?id=197AhOMHoWsE5mTlFWLyKY8IP-SOvvFz4&export=downloadabdelka1ls7iJ5HubqW-ARukYX-3GL7f5sGxrXPV
https://drive.google.com/u/0/uc?id=1agryTwX6ArYPVIoLdE8VmlFhOADVSl48&export=downloadabdelka1HDtmZBXagIgj_2HFz5Qmk9KB7Sb15ikm
https://drive.google.com/u/0/uc?id=1ptMsmOxxXf701YgZPQUCZC0nilLhp1cF&export=downloadabdelka1j9xet2TZ906bc_fmwHVL__1jzzHGB6n8
https://drive.google.com/u/0/uc?id=1zTVS2JR5U-I1cArwp8i_QKhA9Y22Y-9D&export=downloadabdelka1ZVfLCULwhgNTaxXX4WfCMRs0EPoXIst_
https://drive.google.com/u/0/uc?id=19VgM2dhXK-eOTU0-ND_DHriYgQAAd9rV&export=downloadabdelka13050IEoqf7JQcRb_NqhfDm5onX-6kl2V
https://drive.google.com/u/0/uc?id=1lss8Qwr4f-dpfb8ZkN23nC3vVu0-q_RK&export=downloadabdelka1DqPlVzlSbWc--28rSqKnE1K36ZMR1lBn
https://drive.google.com/u/0/uc?id=1VbEjB7vJD5jou7A3ZmU7kOPEn4vZ1Brj&export=downloadabdelka1VAYqVzRzUXEfUH3mNJMX0jShVb5wRDSK
https://drive.google.com/u/0/uc?id=1Kp8KrW_sJ9goRHdv5yaQstmiIzOKO0DW&export=downloadabdelka1_hldi2f_6-TQn0gEFZbxEItpyod9CB42
https://drive.google.com/u/0/uc?id=11f7Q5NqkcpyNxKY-rkYsCO6SPNHUy3TW&export=downloadabdelka12INxXpy89-sd4Nx9LYzPB_QP67qdVWDW
https://drive.google.com/u/0/uc?id=1ltrQiaM1UWQuZPreCjdqQ1ZbrV9om5wi&export=downloadabdelka1gb6fCO3hJ3CdZMlLwD_Y6RF8Tl03HlPp
https://drive.google.com/u/0/uc?id=15-EyqY4Y7vRwrjPN0u_BioVb2JyG7YMe&export=downloadabdelka1zkiS3UPaBGGAwDGLtHl1hfeXip1D6Sjb
https://drive.google.com/u/0/uc?id=17baDnuMQmQsRXi3NOJgNG5gbWxOExcrv&export=downloadabdelka1c-QiidLcJfS91COTk9pnhrp1Xf9gyrLD
https://drive.google.com/u/0/uc?id=1_Js0xZW1_Lt2notte5EEykywn3T_o3DY&export=downloadabdelka13sXezXqOt3zpB3ixkD7NFRwjdfJg2hll
https://drive.google.com/u/0/uc?id=1zYxeADboTJ_8Q1YOk6QWMP94A7EZUqZo&export=downloadabdelka1E8D1rF5KJgNUhjUpM7nIy7XSyE624zgd
https://drive.google.com/u/0/uc?id=1FeUZFFuhS3t3H8HUkdNZRS78cf9bxkdT&export=downloadabdelka1QDjdooIGwXtNEtlkaeYccZbmfpU_E2uU
https://drive.google.com/u/0/uc?id=1W7IqRBzYcunZGItl2ApNhJPw99KNdgac&export=downloadabdelka1gczWCIjKlrIo8nLdwSJDWp_n0wvWZ6Dx
https://drive.google.com/u/0/uc?id=11AYzJ0csYfUmX8qJo0JWFZHQ0PPFJS7j&export=downloadabdelka1HPAuzCwYkCxdZJ1LIx-JqxZTMWo0TKso
https://drive.google.com/u/0/uc?id=1nmeRVQXg6snThlEfHYvYR10d9uAuRCbq&export=downloadabdelka1p22SOF8VwTd19ri1j63pbbRhBrOe-2tX
https://drive.google.com/u/0/uc?id=1vxrjyT60LH5BWHWk4rKtofazxRwIa-Aa&export=downloadabdelka17ZWWlFAVqkmqixqkphINUiVMwCqayhbq
https://drive.google.com/u/0/uc?id=1Oh_97vczUnqW3glluUHrYUwnjqDWo566&export=downloadabdelka1jx9lHx8TbirOpZ7ADbk23yRw9mqxJZ_H
https://drive.google.com/u/0/uc?id=1hxj308gFWv55EiH-1KTdOI4JC0HZkb-U&export=downloadabdelka1ZzgY1TAzwitxIbEsNjcaWx4PLynjhuZ8
https://drive.google.com/u/0/uc?id=1MvKa6NFtrujqinu4stTnHXZwD9iQB7np&export=downloadabdelka1XS3_p_IXH8kr-ZdMLeVGqXoerhUqWuj7
https://drive.google.com/u/0/uc?id=1Zp847Z4PoiZvOc9GE7zoGmLHSlw2L1Qq&export=downloadabdelka1lFmBd9qBDQ5druS3DkS8S24DSqpPTP8I
https://drive.google.com/u/0/uc?id=1VnY1gE5PhsmrlkrH-weIfvsY_bqOCkjm&export=downloadabdelka1BRrMM5BMTRg-knF-u7jzjycuDld6m9Va
https://drive.google.com/u/0/uc?id=1v3-vxu-YdSzAxYgTJh2SZpLvdl4oisqG&export=downloadabdelka1D_pms-9yV5BLfyRvm2yUi7_F7Yz7VWhS
https://drive.google.com/u/0/uc?id=1eWFkgqtsi48RzFrZK7wqDKjyJ9gVRfNs&export=downloadabdelka1HkSlfYnkPyqdGVRSBu0kT0oG0CNzr3nx
https://drive.google.com/u/0/uc?id=1A5FckrO3UCrirgo6qhMNMJiYail5wEy4&export=downloadabdelka1blMw7f6NBHz-oC-v81pQmSpffimJJXqT
https://drive.google.com/u/0/uc?id=1_iHnLklE8EhLQSVUGw9fMnHhY2HDV2_l&export=downloadabdelka1ZMzyE5USsvOy1aPxd2IdDySMIc7qBbun
https://drive.google.com/u/0/uc?id=1OaO2mXnbWo2qptEdfENAg4vyBi_Mdkct&export=downloadabdelka1nhWBcFz_yD4_TeL_MgzjShHSGprX5O0U
https://drive.google.com/u/0/uc?id=1pT-RSerCsy41KAOs4YZGopAsVRmV6r4n&export=downloadabdelka1n-ZKkQhcRyhQT5KSelEDsCSU6dc2p3Dh
https://drive.google.com/u/0/uc?id=1Crdem1hhZ1zSUrtFItNNo1_ArplZ2lAW&export=downloadabdelka1yDmCVV8xFO7ezp-TtrfgOnkbpQQJVUWs
https://drive.google.com/u/0/uc?id=1x8Y5H0A6s9U22K9LiPvA8LqCM1RPli3z&export=downloadabdelka1tCXVIDh34BBYCkEcH719e3ocrWWHH7YS
https://drive.google.com/u/0/uc?id=1eQs5eK2wPCMIY9oqsvSVQf1KwUxHmr1u&export=downloadabdelka14PHgBpBbSkDk_mcITX3232K3S_q4aZyG
https://drive.google.com/u/0/uc?id=1RYUvlscQALue1YHiRLfQQOrzrrkBEzQv&export=downloadabdelka1NPUBy1I98GslidT2Ydcduta0I1hd3YlU
https://drive.google.com/u/0/uc?id=1_FZeD_GzDgkaZEewt5jjMa3Dpl70LN3I&export=downloadabdelka1j2jVX-deLuKbXuktApjAP-066sXMp_i_
https://drive.google.com/u/0/uc?id=1gVrvhqmtKtOSqBxljtT6UegxqhI1Sqj4&export=downloadabdelka1h-uHZlM4MIaQUxL09iad8-bjKYA9IvL0
https://drive.google.com/u/0/uc?id=1qYVb9WEJVhoF_1wKF9XAu1S0zsGyFrMv&export=downloadabdelka1nQj_jx8Mz8CetZoV9weI5tc3ZbVo4Eov
https://drive.google.com/u/0/uc?id=1TEeSG_va3cam2k5T2rShsRobQTbQBNF3&export=downloadabdelka1G_EGBJOI2pQmB-M-cL38TfgofBQqeZGu
https://drive.google.com/u/0/uc?id=1GGYuBsFfNQJGSmalbY6JeFw7dxE2GUaz&export=downloadabdelka1_BsdrKYRU4NY0v9_GuY7PlB1dorBHj23
https://drive.google.com/u/0/uc?id=1GJas-eLwgi_g-7Ulq1NFFbFYth8njtN8&export=downloadabdelka1VDWeJvdxYDmTteOsY91jYjsPhMJWOCO_
https://drive.google.com/u/0/uc?id=1HqPSl9bJk77W9dQ-DP4P5yIlt-gB_5xN&export=downloadabdelka1crGlKtgGV-JLoILCSbPPjh09JPEixdof
https://drive.google.com/u/0/uc?id=1OVW3J_Z__t_TGg-p7tn288tg63S4YXB0&export=downloadabdelka1dVaNNNf_ddfcG6lS2CIzOJAjvoD9RPwH
https://drive.google.com/u/0/uc?id=13wdmrre5Mo13DNwzw8iz1xQH0lgR9KLg&export=downloadabdelka1YqNexjhUYFVpU_hpzMoseRg1OuunQ1Tu
https://drive.google.com/u/0/uc?id=1uZKfxdcEUnHGZHP5ONqx0xurdbshIWWj&export=downloadabdelka1walZB_hRif0q3j0VaZrGVjP54cXiJfYg
https://drive.google.com/u/0/uc?id=1txbrxnpVmTN7a03PUGa31uVHAvvqRdth&export=downloadabdelka1Me_yhhMucYsTFizTEuz9FIWzLd5rzoMx
https://drive.google.com/u/0/uc?id=1cHAES_EfvyhQi5FtN7tknFth2DAKmZCS&export=downloadabdelka13XKQwtgI84IvJpdKkMUXed_or4jPNY0P
https://drive.google.com/u/0/uc?id=1OL1c2ee2srrdVb5owTqzU3xURJw2ze-K&export=downloadabdelka1BkWeljc-YMSgNKH1AqJShg9zMjio1LdD
https://drive.google.com/u/0/uc?id=18ioHsP60GBulq2KNAQVlNMmdUDT0zGdI&export=downloadabdelka1zUdNl1Dv-M-UugHUp8u-zO19nivdImEx
https://drive.google.com/u/0/uc?id=1BPHrilKN6R0m6VLGXtlaHNu96Ow2NEUX&export=downloadabdelka1GmOkZCfB25ZD9eDFdio7k3IIT76jebxu
https://drive.google.com/u/0/uc?id=1CG4DPAwADU3iCvNXFSOrNRMfHy0q99bE&export=downloadabdelka1SSgiExO-2OVZgvnfbGaBOsRcGxWl9BF9
https://drive.google.com/u/0/uc?id=1UI5fZ-XmWBy9I6TlGO6t-7DT7eFusNu8&export=downloadabdelka14LV2pWi1jiYhFNmONqB4nzb-ka445UwF
https://drive.google.com/u/0/uc?id=1xIUBSH3P2IpHHZrgmSZCErtMium_dPIu&export=downloadabdelka1nWcdAu_VBKI4vD-8eW_dQYBUTDnJXcjb
https://drive.google.com/u/0/uc?id=1TtSOmX-Q5SOmQo5KsGG27vKAs7PC6JCI&export=downloadabdelka17Z_DFpYdz8bn0_tg0RrGLkdCZRxRusta
https://drive.google.com/u/0/uc?id=13JVsY_9ZCUQ_gNv6zGdPCenLkq-9cgt1&export=downloadabdelka1baEwfSfDeucpz5FIzga3hNSS1ukxMbKR
https://drive.google.com/u/0/uc?id=1zhap6p_7fDBGYQfxROSeFpX8w_HGbcaV&export=downloadabdelka1nMmOrsgh8g52A7TA4tZqZY9E-eX75KWU
https://drive.google.com/u/0/uc?id=1DZJsiXcTnINBE3mJtooorZF3qNv6yLrt&export=downloadabdelka15kcK0nzNgHu6Uw6pu2hJ4xzMBKeBrYo2
https://drive.google.com/u/0/uc?id=1ZC093lldMKi0RyoFhENaYi27A4yTN-f5&export=downloadabdelka1ne-S7uHnXrAt7ii4g4zh3RlcTYNZXYUt
https://drive.google.com/u/0/uc?id=1qTURVbXi3EObEzpn78hl4vuuW4_Gg4HA&export=downloadabdelka1NJMqLkiPYCtfvkMUgYIK73uACUP3yg40
https://drive.google.com/u/0/uc?id=1zCZZkLOX92lisNgLPE0tPw0uUk1mkTys&export=downloadabdelka1ZvWjnKWWq2fA4g0fdLfyBe7eOTjiyJip
https://drive.google.com/u/0/uc?id=1D3V42r8Be1ir8xPcd7z2R_k526Xhra-q&export=downloadabdelka1OZkrnJUT3Bg9cv2ukGG7UjLUmBBaiJf6
https://drive.google.com/u/0/uc?id=1sxbydQ8aouI0isW86pgB-lkndWzuYSRr&export=downloadabdelka1Sh6ai56pqMgDVtt9AER2BNzO2-FaTVHh
https://drive.google.com/u/0/uc?id=1UNK2T4J0F3Oa6dybeeb43E2SyWmzKQsJ&export=downloadabdelka1qTdJ2sugd96jE5oQREGx38e82eubd-1d
https://drive.google.com/u/0/uc?id=1fu8hJsTXYNJRuodeGFuOHOEPur6poakH&export=downloadabdelka1UDjW99KqD4ciMzmgGrkhnNheHJJDA8hs
https://drive.google.com/u/0/uc?id=16ydIskd9ibaqLvfEplyjn0auffvUpE3y&export=downloadabdelka1_W4MSwK9T5QNJhWtd-IiSfEyIpVjQW_x
https://drive.google.com/u/0/uc?id=18uSSQxLcy7Lv8PUFsSEU3EzSKlYr_2yh&export=downloadabdelka13nMxpN43_848kt2WUhk6LvV4Z8ObHmR6
https://drive.google.com/u/0/uc?id=1ZaUXXG5QvQsJeYlkCqCHwOvKR62unAtA&export=downloadabdelka1hjLXGWJfHezkn_SXuzETIVEtOVBgkLBV
https://drive.google.com/u/0/uc?id=17q7utq0KWLgRkeOP8c3OoMF8x5nghKaz&export=downloadabdelka1UqWX_ppwOIDkJALqZk7-iyC1zs8Ho82A
https://drive.google.com/u/0/uc?id=1Bx-kUha6QmSwkRcWnkbv8BoAjToi_UKN&export=downloadabdelka17eJeUVrmgQOjqs1HAQCRJEL9vy1_K0Fn
https://drive.google.com/u/0/uc?id=1uN0fwz7OLTrzgsG3J3DANdHZy_vhb6Ri&export=downloadabdelka1tZ2C-qulbDGKmfunv1f5LVjqiawsNV5C
https://drive.google.com/u/0/uc?id=1wNeZLfiMszPuYBPzuh_F_6QYBN3INFYq&export=downloadabdelka1_PSOp5kxcC5Ty21JcxF5w9e6LClA2wRK
https://drive.google.com/u/0/uc?id=1epSqmRVH2XhjSV11cdTYQP0WhI6YG3mA&export=downloadabdelka1sbTi9qQiPFVwv410bx95lssF3XSK3mg9
https://drive.google.com/u/0/uc?id=1XY_zC640kH_aB-BaGKQcBTkK4HQUdwbI&export=downloadabdelka1EGQ_Wvpx12qUiwaXL0t7mmM9BqTsHYGb
https://drive.google.com/u/0/uc?id=1g3VlOApMKlcY4NhHSCx9MmWTA9Ad6W9a&export=downloadabdelka1MPCq9tPzIZQx2JzNKgXJ1NoLk8B7yap7
https://drive.google.com/u/0/uc?id=1IpRqJ3KGbbZYaVQP3mxKyTuzOVkcxv2w&export=downloadabdelka1By70QtMU3GztJM-yKcGGredtL2kHSzUA
https://drive.google.com/u/0/uc?id=1ssj7jXCUHD1T5VOdmw9HlHKvbTDQc1_L&export=downloadabdelka1tM49rt10xOYl8jiOfxfAieiwszDAXfbL
https://drive.google.com/u/0/uc?id=1cBC_QveBP2oqVKdvRaOCvQQNUNMvrbXB&export=downloadabdelka1PPbC9IcpoDOszXm3yo79xyKN4Q1O0U2L
https://drive.google.com/u/0/uc?id=1VI-jkvvQdt0RRRPH_yQ0qYB-eDp110sv&export=downloadabdelka1kzd7XdXdK_ZoRGAZsS1S_wwMAejJh4GC
https://drive.google.com/u/0/uc?id=11adWcdbXoYIy6vNvOVD-V_6SfXdkiBYk&export=downloadabdelka1ggD7WxWimRgUOrrTt_1N8eWmQTVBSfbQ
https://drive.google.com/u/0/uc?id=1EqkdMLt4EFAPv2zkUIwP-IrATL1p4wco&export=downloadabdelka16o3ljFFiYr1JrhDcjSk7Yg3yN17hw80i
https://drive.google.com/u/0/uc?id=1CTj_vLp8ftHgMxFuLg6tIpoocMOmmlef&export=downloadabdelka1vK0iR_hxfnejOKUMkW_CiC7Ml4XBgkAr
https://drive.google.com/u/0/uc?id=12ioRUPMbhpZ9UiOyes2TvSXalE2YHmo7&export=downloadabdelka1Stt5n10oZaEjqDQHJENhYOwA4hIw2Exl
https://drive.google.com/u/0/uc?id=1oJV6K8Cflgs-ldFrlHpfZdHKnERWuIxA&export=downloadabdelka1cJ4vRQecMrUv3w5u2M0uBRE1mMfaSXPL
https://drive.google.com/u/0/uc?id=14vUQ7BnHxvxfEgkYZibae-sCye40lrAc&export=downloadabdelka1aPAJW2FJj7tRj84EQExdrgNxMlBaByDQ
https://drive.google.com/u/0/uc?id=17flkh5PsjA6PQPiuXZupk6XLAD0C8ZaF&export=downloadabdelka1srDgNXSDiDVvnZBXqI_bPIUfAWHUYm4G
https://drive.google.com/u/0/uc?id=1B5ipfxFFyZz_wJcUlyJmqlBPs0El0j5S&export=downloadabdelka13WEMJO2rb5qv2Iuk43bffvCOEqq6yMEm
https://drive.google.com/u/0/uc?id=1LR-RzdYt1eL8Dm2RBzYxQ-HMvaT9_o45&export=downloadabdelka1JoEyd_ZS8XBEpxCwHIcqnzwPpoNuJ1a6
https://drive.google.com/u/0/uc?id=1jcuNJMuFWlvqBnhBjLeg-IAvHDQ201lT&export=downloadabdelka1osPPFyulrUZ3L7b00L6slPPflG7Yt6ys
https://drive.google.com/u/0/uc?id=1USM6uGa5sJyc3gJRNc8saE5nVvMlPnt3&export=downloadabdelka1Tpa_BPMaMdqVzVrVItrbk6IgdxJYCXol
https://drive.google.com/u/0/uc?id=1dbJrZnmDcJ5-7M7mbnm5CTLomZpkv4ON&export=downloadabdelka1SAGNr4LBdtpAubj5aIe6_yy6h6Vdn2bd
https://drive.google.com/u/0/uc?id=1cgw3UUMeya0gEb6QdU1WJ1TrdsNh72Lp&export=downloadabdelka1l1EnOuSIjXeL4b_CCW3mBknoMtKqhYy8
https://drive.google.com/u/0/uc?id=1Yjs-yDMyPML80DUGN9wEumetr9D1Ud8q&export=downloadabdelka1C7XgKmQ5lq1SBgD8bkAPPE7rt6AQAhHW
https://drive.google.com/u/0/uc?id=1FdrP97PhYXNDg3AsGaGLqdXVUpSNucbW&export=downloadabdelka1rqCQiE4WVsnecZVadvdwcCT2xMK9u8wk
https://drive.google.com/u/0/uc?id=1TvjG73HXGQQVkaSM1AM5W8YQlWYAIluD&export=downloadabdelka1E9rbykxsrynfDyTSgFhnb_yQ6aKs7u7s
https://drive.google.com/u/0/uc?id=1IHsis7zt1gzhi4ufhsZGmE__HEPn6Sti&export=downloadabdelka1DFJiinP0FeU_ffsMNaeHUXfcOUlf49XG
https://drive.google.com/u/0/uc?id=1uKjhM46Q4D9hosEO7kMapZy9ATHRvegz&export=downloadabdelka1ObdMfZB2noDm9oboweefO5xx4-bQLLhX
https://drive.google.com/u/0/uc?id=1DpdJ6q7ILP15q18cuHJSQxx3_Zh5JTiT&export=downloadabdelka1oC-uvIbEQJz9oQYpijT52XR6-H5Ek5QY
https://drive.google.com/u/0/uc?id=1agkbiqAGSZJTBwvWTffwNwkuKl8I0TXB&export=downloadabdelka1Cvrqmos9HxpjUyZIeB6Ior_vbdfTIEMN
https://drive.google.com/u/0/uc?id=1zxzixdkietg7GZiWHetRJrov5ZF0wiAc&export=downloadabdelka1ovM3mlPTLPwV-fKJHzVTiaGzIAvnAliv
https://drive.google.com/u/0/uc?id=1Rv_g4Zr87giCoBx3xuj0bnqSewTNN2x_&export=downloadabdelka1dPcJL3CjZiZ8x0hsbUI_fB9fk59wrIOO
https://drive.google.com/u/0/uc?id=17a8JDVs_83gOvS1NFQPsKYYbP_kIWgrE&export=downloadabdelka18uDjSMyUdBEifl5iJxV5Dd04xgCvVoBF
https://drive.google.com/u/0/uc?id=1BULGVctN5Qbr3Mug4_GXhF83l8zIydEl&export=downloadabdelka1zqZY4xPmieX8iu2FBPEG3T6NfJ3aCjK0
https://drive.google.com/u/0/uc?id=1-3QTCXOchev22He67HLMOO8Y5qzodP6e&export=downloadabdelka1O3zzNa_cufY8VrTnRoF1sGKAmvMD2kzp
https://drive.google.com/u/0/uc?id=1DV0b-k4ppKHCSgdz8jSnIOxLL24FmkXH&export=downloadabdelka1EGAFEBx9nlpM_ozMGrN7r08imUlfgxCC
https://drive.google.com/u/0/uc?id=1Qspdp4xJtoEnJEVWK3TPyTzHOXMdbk7A&export=downloadabdelka1mp35kejv0htugTrsTaleFtZezQkb_Igj
https://drive.google.com/u/0/uc?id=1esrOTZY6n5vfXdO6N0i-yhJhQE-EPv4m&export=downloadabdelka1W862LtuO3TbqlFBvGPjnZzH2HdXNd-y0
https://drive.google.com/u/0/uc?id=1YbVDS8CLM1L3YrbBCRUTwzQYppGXlttH&export=downloadabdelka1dGXZR0j-iDC3AKGAKcvIiOVgxjEIt6y3
https://drive.google.com/u/0/uc?id=1AA2to_fRckkSDSUg20F7LSZRfUCz-KUp&export=downloadabdelka1Amd7Jd7tebdPL-zGsPE3c-sJt72SnaRN
https://drive.google.com/u/0/uc?id=1-uo9TCEDqLNBeW5z63koQ8hcJZK5eMfw&export=downloadabdelka1sCE8fAD0fhdTDaWts-m0ngmtXXERv_ak
https://drive.google.com/u/0/uc?id=1s-l3Eknyu1qOpZ44bzpDb2bbXf7zC9kw&export=downloadabdelka1QvaAqnwqCOpOWO3hxuryqzNzrGHVgQqa
https://drive.google.com/u/0/uc?id=1sT55Z4Ra1usmf8HioNy7OgoBY6XNLrhD&export=downloadabdelka1eS-SnqtlW4bD9bxb4OWhmk0U9dLEzXYi
https://drive.google.com/u/0/uc?id=1iQTLlA6YcvUw6P9e0tjNszCYvw85hxyj&export=downloadabdelka11HyG7SDPODs0le_3_C4GVfsVMjZ7qUrf
https://drive.google.com/u/0/uc?id=1otn6io7sfZLswKzMKoEy-mYr3ixDDBG_&export=downloadabdelka1Ij8agj_31wGFqHwV2fRftlXt061ud0TM
https://drive.google.com/u/0/uc?id=1Q9Oxr9sAzJKCR6zOG0ADsJV5lTqfHqFd&export=downloadabdelka1NS_9uxryNakYo3SzpJEB5NcLAssHue_E
https://drive.google.com/u/0/uc?id=188Gg2EYbSylVd1U8Sy1BNeZxlTCA9q9e&export=downloadabdelka1FPFPlcq5C-jmqcctp6qQ7bwQ_HlUSVTx
https://drive.google.com/u/0/uc?id=1_XRo3ENSgs1_s1sR9KjZBBEQ07rXVxQ6&export=downloadabdelka124TYFGn1J_5E2OiOdKTbEiC7hlaWtuU3
https://drive.google.com/u/0/uc?id=1f3Uhve5G_ZA-ykXxC5Ak-iyNh0EoDocs&export=downloadabdelka1CufwWEKWY_6AAzdvFzAqbYpPgOcUeBe_
https://drive.google.com/u/0/uc?id=1o6hPmQfNbdEOD8g3qmTygpwlklctQAK5&export=downloadabdelka13xphIO8Fu7X4SiG_WrMayDHCxzRxR6Oe
https://drive.google.com/u/0/uc?id=1Ql4m43SMonumxYc9mgbHHJ__SmaP34Kd&export=downloadabdelka15tufBYVAmESpxnLDXRvWyQN7qhDIsalh
https://drive.google.com/u/0/uc?id=1F7QnMErv2AoKX_p5CM6PsJ7iMms8WKmB&export=downloadabdelka1E6W-gkBBuASOhKwSkn4p-YteNVWGFCRS
https://drive.google.com/u/0/uc?id=14szxLOA1Tgt_Ib3OEqOpsXnvoWsovVgq&export=downloadabdelka1ERY2xnpQ2vQMS5xhRHrKhW3NEsbs_wA5
https://drive.google.com/u/0/uc?id=1yelsYeZWbU69np9wJBHzxlzwB1mT5Dss&export=downloadabdelka1eKMU3Dd43ZcIjSz6gUCEhTdvWrwP8MUc
https://drive.google.com/u/0/uc?id=1oji8AfTuhHcQOUbrAd48v2GTVR6ae8vg&export=downloadabdelka18r9tJsiIfKyKrRaYelZN5UM0CmrJ3Hd7
https://drive.google.com/u/0/uc?id=1ZSUbo5Sqy46vr6jenLfo4r5BDIpIkmrh&export=downloadabdelka1WYi1SXUwUNEJqGy6XuNLtmIaV4q0qll4
https://drive.google.com/u/0/uc?id=1mim-uxxbUrRwUZ8Nqaz18UJamfyeAlYv&export=downloadabdelka1tlJL329P3rgS3wZi6pBxNKTV2ORKiP2k
https://drive.google.com/u/0/uc?id=1uLq0n873bkuohI4y8pD6G8Pl8jeLX8xY&export=downloadabdelka1JB2VbjBBynTEWKrnoSyCwHjDNQawE3fB
https://drive.google.com/u/0/uc?id=1kiTQuPMLt9PxJpUU5UZe_uovU6xOqxBO&export=downloadabdelka1L-Zw4PHjvcoFzlp_Azb8kmpxMRPBY6A5
https://drive.google.com/u/0/uc?id=16Buq4GnAVAmjaQJPEp4VVeKuFs8Phvsy&export=downloadabdelka1cl9NAVFuyLoZLjYmMMcHPIpwhIY6DUTY
https://drive.google.com/u/0/uc?id=18XLJ0eaPGkwjZf1bYtBGnz_Yluh6uG3K&export=downloadabdelka17YYXFiHBl0fIWvPmsvBQrKYodQSWGU19
https://drive.google.com/u/0/uc?id=1kBIppQ-9wOEcd2cMdCSLYfJRk8aK6eFG&export=downloadabdelka1Kz1YLSUj2ip6AbMF85Nu7KFF33vprKj4
https://drive.google.com/u/0/uc?id=1Q1TQs758ttQWLyXBPM95i0-wWXfhFELE&export=downloadabdelka16DqNjX83TLMeb5T1ICawEkSX58wHANty
https://drive.google.com/u/0/uc?id=1EyXt6Aueh16hZDaV5AOtxScJ67gkiEhf&export=downloadabdelka1lQ7rz2M0BK4764znLsX5Z9iRMfWJ-Zk4
https://drive.google.com/u/0/uc?id=1mtbWXKeOHIaP1EZgRqunplBFe_J3jhGa&export=downloadabdelka1ANffGJ3I1QQTJV4O74S7SCTSCRRv6GHa
https://drive.google.com/u/0/uc?id=18ipbA4-xgxdsYq9elHJVEshoDfGZ67d8&export=downloadabdelka1XfjToUkgAk7kzdz-5NOlQ4o83wsY8pMO
https://drive.google.com/u/0/uc?id=1ljx_DBT0TCiUPOectQP2Hdvtn_vcs-do&export=downloadabdelka15Z0UNHTNP1CSpBbREYkX94LIN0nhq7lz
https://drive.google.com/u/0/uc?id=1E_9xUu94exWZ2avw5GpTpHmmn7purb_7&export=downloadabdelka1NuhY3tRHH3CYMm_MoqNCQucOiWmWUDOi
https://drive.google.com/u/0/uc?id=110vXa-fWbuTlnUiBPasGq8EzCdkai44C&export=downloadabdelka1Oy1zyQwskPcgS7PYq7V3zjyvJ56_bl0q
https://drive.google.com/u/0/uc?id=1Vglh8-JQDWT-3LEtSMIo4GWz7fcUiI8t&export=downloadabdelka186kuFVx4rKOJm6aM8ivp7mM2qhno7ffL
https://drive.google.com/u/0/uc?id=17WH8S0PqHLQz63IfS44wMCt41NomMWtT&export=downloadabdelka1o5W42cUAyaYWAOiNChgUcve5S6pIWL0Q
https://drive.google.com/u/0/uc?id=1lJBeK1DZTZ7ALcGmJWT7zOxZVlx1Gxm_&export=downloadabdelka1cxYEsMPPUGQb68DYZoxrb54pr5dZShC9
https://drive.google.com/u/0/uc?id=1GQ_A3SWXTT1iEK-9SYsI2JubxVhJGYxB&export=downloadabdelka1e-7gqrfiRKK4J3FgykKXXvCAQBGRkH62
https://drive.google.com/u/0/uc?id=1E6PaiwP0yxN5KIA1N10wTA3sZCG87riD&export=downloadabdelka10sn0lbqlW_C0z6B7CuppvkdYUFET-oBA
https://drive.google.com/u/0/uc?id=1nQ6HWyPMh9dE2iN6FkgJXQBgDbLDYO27&export=downloadabdelka1DLB9qMCnBoDYsHnadlPnnFuio_IUiLXa
https://drive.google.com/u/0/uc?id=11Vzk7V9dX9Q3N--69v8WoJ-DGZxTCoNq&export=downloadabdelka1dbpowJubZopXs2qE1iF1X4pvRaY9mR3i
https://drive.google.com/u/0/uc?id=19kmzjlWEuw6h2j3aQODx6SfTOt4qum-w&export=downloadabdelka1ZFJpTXoKk6Qe7C3SbKx-JsssUDtX9mbg
https://drive.google.com/u/0/uc?id=1RCRiRcDXsM6CMoMCvfZsY_Is1xhuOVZ4&export=downloadabdelka1nNo9vAhsusYHg9pT4EP_bbv-R5IYp7KJ
https://drive.google.com/u/0/uc?id=14Tl6V0m-syWFQbkPSs9Nv40rIRGJW5bB&export=downloadabdelka1QIO6J3LOnTKkfzxwoIYKrzewfa_z-O1K
https://drive.google.com/u/0/uc?id=18GB3Jb0IEi4InZzCWlV9uhURjuGcMK84&export=downloadabdelka1XPliXJL8xOKqddy3VgLgilffpWleOvSh
https://drive.google.com/u/0/uc?id=1THhvpPv8C5NdCrII0NgU-_-r_snPQnFV&export=downloadabdelka1xZ9rivPZa0uxh5Kwy8Zsb6XTvu5m2RMf
https://drive.google.com/u/0/uc?id=1szHpvnRSEpOJneJ6yg30VK5cxpJU1rs3&export=downloadabdelka1L_VwDrnnneVn1-wIIwwTNxMtdpFlsuOI
https://drive.google.com/u/0/uc?id=1X292n4SLj5h4k6QiC1OWn3mH64-4p3ss&export=downloadabdelka1NiOwQf2bT4G1zPL4pDewJZPzmIeLryG4
https://drive.google.com/u/0/uc?id=18JO76MktvCPttdMwMytYqIpR_Uvab12i&export=downloadabdelka158O7l155ICy6F5Hx_fV8ueq0KQYTJJfn
https://drive.google.com/u/0/uc?id=1Ic3VJIpif0W3w0xD4EmRfnJgeX55-dqS&export=downloadabdelka1WMJSa01car4fyOGSLShh8OHxqQ1VLeRH
https://drive.google.com/u/0/uc?id=1FDyZdEj315fMPPeLfB_mmbUp9qRgRaV6&export=downloadabdelka1oTJtDXhktsb3jGLIrBCWT1LkXnjU29De
https://drive.google.com/u/0/uc?id=1sQ-u5lMkwlnJYgNhM1J1KDBLgEL4XWs7&export=downloadabdelka17NedSWCeiYMGJKjoaBZqDZ9JTQQK-E7d
https://drive.google.com/u/0/uc?id=1S_gACAnhAjZdngCJuqc2rHKqbOhHwMnB&export=downloadabdelka1rC_Mv3vKbGFkaxuV5bpv8nl4H40AXdcn
https://drive.google.com/u/0/uc?id=1a8VKf6az42zgrn3zgtfXFDA-VtT8VBH_&export=downloadabdelka1RcO4EJPNASJqIwM3Lg9uf5Jt98tsJL5z
https://drive.google.com/u/0/uc?id=1BshKWZXiAVIrAJelc1jd6albvO6_ZUVY&export=downloadabdelka1cYTDBg6FRxZektt7tzf1pcZV_bq9Xlf2
https://drive.google.com/u/0/uc?id=1auWt_tHQkXIUFXydUS51KEcQRhRAheze&export=downloadabdelka1TjUfQuLJgd1wOIebfM7WzcXQ9NuWqoYY
https://drive.google.com/u/0/uc?id=1LbsYfHmwtW67JSFvijIDtoIsQu1ULkeQ&export=downloadabdelka1cQ2frwk2eZr_zO832SKwbqxhLqBboUKq
https://drive.google.com/u/0/uc?id=1iAa6ig4iOPMD8rfMp_q2AohW_dIiG3gn&export=downloadabdelka10doIhz4Z69_6RsH8mMFQHI0SPgYmiRqE
https://drive.google.com/u/0/uc?id=1Dp32tiHhsZg65AgHKqB-eVOWUx0-BPNV&export=downloadabdelka1Mi5P6fG8Tc43U4fHNfCKTRcdAfu77JRV
https://drive.google.com/u/0/uc?id=1gp26kWhRyc8sUb0JhDrEcsfz9E_21SoS&export=downloadabdelka1_JW06e0-SWk6EDWC-_fiMDs0wlE74RTQ
https://drive.google.com/u/0/uc?id=1fqn_9BBgHt3qTy8jjnDxRb0cXVx-Lil4&export=downloadabdelka1ni4QZPWk4ANKaL7n-YIFh4jVm6dOlc4v
https://drive.google.com/u/0/uc?id=1pRI88LepdLh_OzsUnX_iLMIcbiqZ4FEb&export=downloadabdelka1pU9FjN-atGGg_82_Nl2T3Gyd9aleX9rq
https://drive.google.com/u/0/uc?id=1avEG1a4JFqp9veHgOZknVN81uR8h9t79&export=downloadabdelka1DCfG2tOFE2i87nyfR6ko39WWfBUiQRYZ
https://drive.google.com/u/0/uc?id=1d5gZ_uJA5O4ngpuwHZXA-O6ryCybMFf0&export=downloadabdelka1Dd5ZlT3EyZ9s0zE3vJ5m5Va7z0kg6uUO
https://drive.google.com/u/0/uc?id=1Xt5jGxu_8kA2GmH91cmanWKvjq1aXxuu&export=downloadabdelka1EFQMPL6HxjmfcdjWm1SgY4bdPKPtnAIi
https://drive.google.com/u/0/uc?id=1lsq2oJ8jeY6NsFUasJYpGPMdDJnYIiGE&export=downloadabdelka1to5wyjBLTqT-zlwhmzIhvU7jJAj0hHgz
https://drive.google.com/u/0/uc?id=1z0rNa4TVPyg8xs4dQmgKZszcBSPS4UBz&export=downloadabdelka1rM30VrdIarolTq4JGLc97W6BLa12OMCe
https://drive.google.com/u/0/uc?id=1_o5_dtH7e5JkIoV5-pvBIotSAgZDKTcg&export=downloadabdelka1puCoBmy28SpTQfOUFFG4u_PoF4N1A1Ty
https://drive.google.com/u/0/uc?id=14scSVMfp7CpvmQO4zetnCcfjd1LnQU_v&export=downloadabdelka1X0INYwgj0SeQ12bLLofhc5oV4VZEnb8a
https://drive.google.com/u/0/uc?id=1Tsr5ZXk7KrgoIUxO82IjKuB3ZAqrKQWm&export=downloadabdelka1S0YSwszxOMAy1lQDNqZaHcnQYxoix21a
https://drive.google.com/u/0/uc?id=12w2eiXkHFXHoYo-WP7FC4KDPwfGOOId4&export=downloadabdelka1KYNZ0JB5X1C_-5dG3-MruOQocyWbYvqL
https://drive.google.com/u/0/uc?id=18xYOIV-pd0ES7PNgLD6rGx5-9qi2Vg7M&export=downloadabdelka1YJxsoitZZcBsYvqNAh40L3SKuRFVF4NY
https://drive.google.com/u/0/uc?id=1YQuzg5lqzElM3aqj-MKDx8x1x645C2-B&export=downloadabdelka1xrAP6Qkgh50F-to_xpgcN44PsQBC2aK_
https://drive.google.com/u/0/uc?id=1ZalUe98F_TbuT8kvbW66evT35eXNT2A9&export=downloadabdelka1Uv1dsik3XBjFZNbnrckMOIrVhyE9NyHj
https://drive.google.com/u/0/uc?id=1aJUMr3WYcC7j0Ng-RvHal64jVSQ9MPHk&export=downloadabdelka1aRSJnEPckfMlwjPIQSEanRPJ7WXXXW6W
https://drive.google.com/u/0/uc?id=1FHrmj9G_jkLJrVafqOn1j5mE2LX9gyB7&export=downloadabdelka1i-rG8K9hwEPIMnDiU19B9-xjdJtN2gES
https://drive.google.com/u/0/uc?id=15DOVnFFvZOzg1jzfl2jFTXBgU9FWlLb7&export=downloadabdelka1DA0mE-HoR8DUO8KARyMD0FaR2gnP7c5r
https://drive.google.com/u/0/uc?id=1TZxYnzmMFuWn3VLwuwf5XWA66sowXanf&export=downloadabdelka14O5rwwizL5DfAqJRt660PCd4E4LCEzT2
https://drive.google.com/u/0/uc?id=1VRp1C1Qgnhgczg5OCA9AKmlMsRySnKqO&export=downloadabdelka1v7FJM2G5pEVDWHoIuPfpZ_h0GOUHy196
https://drive.google.com/u/0/uc?id=1HkioW4iYV9cyj54V2wLwzEssr_KAi9mU&export=downloadabdelka190xSlj3TMv-4t5RXAfKm1OnPQ18XyOh6
https://drive.google.com/u/0/uc?id=1onQ2uxAdq5i9-n1ya66mh_v2o8MGJ4sE&export=downloadabdelka1LwbFWm6fNoUtg_H3oPkL0d7dTUAzSWqH
https://drive.google.com/u/0/uc?id=1cNKaNmI77m4CzK8YCLHzRXtW5WZMZwiA&export=downloadabdelka1B5Am4dtRzA3FxC5_UhPRitjqHk0JiBso
https://drive.google.com/u/0/uc?id=19KJ8QTeT2R-j-aX7NzjzHtQGXRvi2Ze6&export=downloadabdelka1laGJzXTyEp5gPUQDRJ3BK8hJPuWjmsdv
https://drive.google.com/u/0/uc?id=1WpvhcYHlJK89Aug3ghX6pzM3-8j1rXqL&export=downloadabdelka1iUOsDp02dBDXB_5FjGpVu7eGsOP0gA49
https://drive.google.com/u/0/uc?id=1XI1j-xAdec5VION-707dq7RdtmEt8ZAP&export=downloadabdelka1BnVCGkIrA1rjDibWC_q7rfjeiAQ-xtcZ
https://drive.google.com/u/0/uc?id=1-LxxcS-RNKW2_p_foEvpew58tW4qOlcX&export=downloadabdelka1kadWnYNeylWl-jsNGvqT2DxRtdm98XAo
https://drive.google.com/u/0/uc?id=1fxW2Ia4rOr_NWMz-HzA4SiJU8dyOU708&export=downloadabdelka1p7wErlKju8PEyYW-oLaIm3Plsg0-T-Yv
https://drive.google.com/u/0/uc?id=1DyV8umgYKtc5J-SmWAeoiRI4dqVZJCRA&export=downloadabdelka1glus3E-uZmx_V8YoSa5R2UHvDYvlmXso
https://drive.google.com/u/0/uc?id=1TjtxTf5pT748v_y0SN3c-quGthQx4-0b&export=downloadabdelka1LA38kFbGRvjI0zIlo8aU5p369vuzlvN4
https://drive.google.com/u/0/uc?id=1GDEX72O3NG_2iSD-HZyGjNeM7G7dN_-a&export=downloadabdelka1raD-bAEhCxAYo5UWs7T9VCYt4DgLtg8a
https://drive.google.com/u/0/uc?id=1uBTsXh-UJmpfreQUpiIz0sqGbPpehlpw&export=downloadabdelka1oFGIQFZZjPHV46uQTox43hVUyEEU7yNR
https://drive.google.com/u/0/uc?id=17tZZ-rvNLvNTZ-yE3ejgkutQsnpiXkhC&export=downloadabdelka1OAF6ynGCICVuIEHjwcDFv6VR9sEJwkcn
https://drive.google.com/u/0/uc?id=1FZZJOuMvJ6jWw1tWPLvadPJSlOM8zf-_&export=downloadabdelka12J4sjMdi3cI0vRZssh7XbzV8-z9sRWMR
https://drive.google.com/u/0/uc?id=1i1WSEu81sUY34S8DOlyE1Bol6mpyeeH_&export=downloadabdelka1nJDHdQWB_NExibP9R3gF0uanXVNkfnSr
https://drive.google.com/u/0/uc?id=1Axaw038PnCcHP3yDwy0LtzswJ0sOoBNW&export=downloadabdelka1cdpJG2Ls1XeQo3vI67AelYuMJRt3e2qp
https://drive.google.com/u/0/uc?id=1wu_gEZqAAlIdyFyt7skIrRsEWI-Eeiy1&export=downloadabdelka1VaGEJsG1xkh4ADesBRje2uyGqoHvPMDb
https://drive.google.com/u/0/uc?id=1or4lpY3ExlWuU_y-bYewFFOLZVe2q9Y8&export=downloadabdelka1yie63PvOlZa8ONtu9odnuoK5KLcm8c4G
https://drive.google.com/u/0/uc?id=14NVUh0KBox_s2_vGDiaheKSuLtx6D9vN&export=downloadabdelka1vnXHU20jzEqu6aFBf3FxjkYhL71YBF4X
https://drive.google.com/u/0/uc?id=1Y3OZQj10wi72-2oOzpxoJ5xYkg_ZPuTr&export=downloadabdelka1jLWbqVq6H2o4MYX0L89bImw1-IO7DymZ
https://drive.google.com/u/0/uc?id=1KhJkramSKJVNhAhvg0V32oRog1KZRz0Y&export=downloadabdelka1AXyo-nmZmJzzs8naWIwMdQgQ9aLrXAc6
https://drive.google.com/u/0/uc?id=12CQf3U6EdlKNnSC7iIOSyjkMbKAuQOK8&export=downloadabdelka1SVOfJ_cvG5Oofcr60wXaXD70SOoXtze9
https://drive.google.com/u/0/uc?id=1kJ6E2M2PrkzV_hRnk6igBHFfsEKNRjl5&export=downloadabdelka1_QSmkDAkUDfmqL3y5L_T0Ui-wNixM6hU
https://drive.google.com/u/0/uc?id=1QCoWId948CAu8IMw1lTbCDxrJeOg7-F2&export=downloadabdelka1P8IUlRRi0yLFK0M1rPkCD42iUP7O9E-E
https://drive.google.com/u/0/uc?id=1VolrkV-R6AnjtkUfZGOplAExWRevwAaO&export=downloadabdelka1q5CPW8uE7g4RHMGCEb62nAESUzzYK06r
https://drive.google.com/u/0/uc?id=1TUcl9DfSyJ1QRHKsmdurwMzSaRWCmaep&export=downloadabdelka1AvNF8w43i6PAE9Hdp4ftbLEw6OFFWVeR
https://drive.google.com/u/0/uc?id=1Zns5v6giDpn-j26RzACqounDeW-vwzF_&export=downloadabdelka1-USQirb1piCIuPzATLXNXzULl7Kz_MMT
https://drive.google.com/u/0/uc?id=1pweBB3Wj_hq-gTYOJnZAmgIb1XJG1FjI&export=downloadabdelka1hLqCoXCXp1cfX8nttVMBQOoag-gqx4o5
https://drive.google.com/u/0/uc?id=1zfpZM43ixYYrJEZu_ImRYwqQrhmn9uuG&export=downloadabdelka1-DMupF_JjfACxyJVSFdZptZKfZamr8y7
https://drive.google.com/u/0/uc?id=1KVrbB5IjrloE8iK-EorYM0VJaLoc33oY&export=downloadabdelka1WkxG92gAC4jghrpIPZQc2l7CD8LaFMEW
https://drive.google.com/u/0/uc?id=1USUjpXHSrw040MxN7N_sJpBYzTswyAgd&export=downloadabdelka1AdvxxLXrGjIY1i1IBqId59rDMDuDNq35
https://drive.google.com/u/0/uc?id=1VCt-3b8RZXOexsXYCrYMYWNZXVUN0x22&export=downloadabdelka1UnLJ4ODL_GkAJlpyIWN0GF9ecJV-tKQh
https://drive.google.com/u/0/uc?id=12Xph5TY-L4fvN-sVuCVPOBVOjpr2uiVM&export=downloadabdelka1pSNPAq_LrQ2AUgoJPJzd-qtJeetq9oTL
https://drive.google.com/u/0/uc?id=1btEf3E_SoqDEnTaN81uGBIVSda3hPFxL&export=downloadabdelka1BtY-u5-G2xvIPSgXG2-4fXhO6a-1wKKG
https://drive.google.com/u/0/uc?id=1VpstygQSnfhIMAadJe-7ddVu4D6AjKTn&export=downloadabdelka1Irnl5LoaV4rv0w1_-tgHwEZUYu6kkDg4
https://drive.google.com/u/0/uc?id=1oUcSaGKTsVUR5rUWIRRBWbxdtSPM0A-K&export=downloadabdelka1Et34w42pwXnfYPLCu2L_C5LxQS975Ubp
https://drive.google.com/u/0/uc?id=1BsL93MQw-1XywLE_twILDiBrY17z6dgr&export=downloadabdelka1nwJUQjxJ4BdLRA0y98JxLBQ9rIG6RBrD
https://drive.google.com/u/0/uc?id=1F8xVWPLuJogT25GLKpQnWr73isjLQGYG&export=downloadabdelka1Yc_SYG350N_QjJD4Mo4v22xfY6zZWK7G
https://drive.google.com/u/0/uc?id=1LkUVlwsKRSbbWBal7zmnOFT6LSIvjGfB&export=downloadabdelka1xIsl_6aSuSaLXkghOT7LqGm-ZdBqbOcM
https://drive.google.com/u/0/uc?id=13HpRExgpglVKJs8ulOm17kRSbdzKa7in&export=downloadabdelka1h7lnaJHcv-4QeRYewAnO810erJAUzvDL
https://drive.google.com/u/0/uc?id=1D88QwodnqgPwJqd3jp4H4CaII2MtA9G4&export=downloadabdelka1pAayDMsxZ3gvBofRzX9TF5iGYI-MttkD
https://drive.google.com/u/0/uc?id=1N5UCC5pxoGbELxX7pALQMzs2yJ_T953H&export=downloadabdelka1av192uefLnm8ExiSlaOZJVyJInBfQ9Mj
https://drive.google.com/u/0/uc?id=1eyAXTx8_yuuTjv8TNx6HNzsPwsIcP_Ij&export=downloadabdelka1cms9Qrh4UOYohmcad25Sae7FWOkGlUPM
https://drive.google.com/u/0/uc?id=1G9W6MfhnRpVvcEdFcvrwLMxCEYrY7b-X&export=downloadabdelka1Ebmz3OyXH4c5CHTa0ZtVMwTzPRFFOrWQ
https://drive.google.com/u/0/uc?id=11Y2TvVzVL4Un6TYa1hrKSZfNDACRsgKh&export=downloadabdelka10ioCGYj84cmuQv1ENsvNV_9kZIsizOyu
https://drive.google.com/u/0/uc?id=1jZcPe_ywhQVjCNygfQqzFtSzPHeqhllC&export=downloadabdelka1pEcCHAeUhdPfoRMco8RtKXEzHn2MgL7l
https://drive.google.com/u/0/uc?id=1fvF2Jiw43wcUnnSETmhldi4dXtXOp6I7&export=downloadabdelka1fMMT4gHvTf0j5om8aYte76Nhc6AGrDt3
https://drive.google.com/u/0/uc?id=1tzdQlJkiQ27LTnIf3ZlY9Qmp5UPL53xc&export=downloadabdelka1VLhuEj1tikm29mxlw8uUX0X-BdY8SyVG
https://drive.google.com/u/0/uc?id=1MO4m0eD_9T_y2LBPGPAvreNXYViJGm92&export=downloadabdelka1bVKFPU5szSu4Ct6tm_wni9GLtGORU1WD
https://drive.google.com/u/0/uc?id=1QKFlRrMmmLlqTCNIo85vpdssqEnjYWJL&export=downloadabdelka1lb5e-8MHzYEqpfctuC-vQS3IyrfGRZS6
https://drive.google.com/u/0/uc?id=1laxZSpjbjJaHTVMRT6jYYRq1drUifg4V&export=downloadabdelka15N53xnJ0UG9wYHBqulPzxUKsY_R4WYEN
https://drive.google.com/u/0/uc?id=1SXstT0J9oVfJ29IbrKne0jQmwuDAj8qL&export=downloadabdelka14CpgG5P9x0Z69dvMEVf_hkOZCol1nZlQ
https://drive.google.com/u/0/uc?id=1Mxmg2oAEfd4L9BSyjDQIfIWZWnN7SvjM&export=downloadabdelka1ZwqYnGk-U87Wzqlt31qwUAgoSH_kYzqV
https://drive.google.com/u/0/uc?id=1p_crUAb1e9_57bJ-RwCepuvrBa8O6b95&export=downloadabdelka1r1mBM9aPHpycV_OA2P3FIjXyz9nbtmo_
https://drive.google.com/u/0/uc?id=1q8EeqXC6Z6WHfGC1p5C8UV-2C1xi1Soj&export=downloadabdelka1gcRiymk10sw66zrgIn2dMhfWyWsiaiG9
https://drive.google.com/u/0/uc?id=1lL8ngQlUaXi5VmgoMmQlF2NWauJgXPAS&export=downloadabdelka1ofL8EK7NAnDkOmLSPx9kJAB1awZUq_cQ
https://drive.google.com/u/0/uc?id=17JLQFFHkjSZxhzfabkOZFJAgx1LFqgOc&export=downloadabdelka1UonT3QEgroMDEM4aTeAfIjb4jdFTcz01
https://drive.google.com/u/0/uc?id=1pvoLpmX3nq1i5kY9Rcslw5CC__4goAYc&export=downloadabdelka13QNlOJTpnXilx5mUv8Mu52wR4lX28Y2E
https://drive.google.com/u/0/uc?id=1yECWobmd9USs8dZDjjL04fzk-vy0vlgW&export=downloadabdelka1cvwI5KdcMvPGIdxGH5bwSV0N-cgpT-8v
https://drive.google.com/u/0/uc?id=1PFlNGZinPBlclZ8cvfI_c6Glvoy7YSR2&export=downloadabdelka1jI5EJNh_kgbNG5Z9BzZCaQ-1xPZuOeXp
https://drive.google.com/u/0/uc?id=11cit3QRukSAQ02wssvBIKwkzwQLwrKRr&export=downloadabdelka11G_pJ8ECxJWbfsL-GlWvz6M5n5HUEKR7
https://drive.google.com/u/0/uc?id=1giDfUxGYB1yvN72LwjxbXMlKXVZ5DO1M&export=downloadabdelka1quOSqx_KyrfWJR2pKUPEEuS-no_O2W1a
https://drive.google.com/u/0/uc?id=1T2xuRbL2FiYGhAqLYbLqlXVuRSmMIb6a&export=downloadabdelka18mLsSqbH4PJlDPBqO84qEhet3FNL0Nxs
https://drive.google.com/u/0/uc?id=182v_l5DML4bvYBcLCG30MUM9YzvHdkt5&export=downloadabdelka1zCxt7mAOcmFyktG5cXByBW60QfXPnGBl
https://drive.google.com/u/0/uc?id=1aoD7v3Z-BJG3cYSkfBhcunz1oC71r2FC&export=downloadabdelka1ZrWKH9mhKVyEl1BvWgARuhDAtb_e-eAi
https://drive.google.com/u/0/uc?id=1Bcoba7GOPwkpHuVLnZJcOvUfrDM-YnED&export=downloadabdelka1pVE8L5WQ9COkNF-u92I1ywggcUo4e0-5
https://drive.google.com/u/0/uc?id=1B11L6zC4EpOsuom42NSg54ubBOO8hJJd&export=downloadabdelka1i0CMjGmU71ewhJLGyLa2SHOsWbGdFKes
https://drive.google.com/u/0/uc?id=1gX1gRGD-BtSkPUm7GsqdLid_OF0CZfS_&export=downloadabdelka1EkEnYMPBW68vlmyiC1b2gNoVEO2pMCMM
https://drive.google.com/u/0/uc?id=1cRimX75Mn284_RGwl0rQfNG2GDwQof__&export=downloadabdelka1Re9eCrtU2YDJQEtyVKmRYUz7dYcss-j8
https://drive.google.com/u/0/uc?id=10hywL_rSCdR5tU8xEq7cYlbiIyeeh8DA&export=downloadabdelka1EyxgRB4ajVP1KzRCztZSU4FYPT_ZndfH
https://drive.google.com/u/0/uc?id=1frcNIg9Lr1EZeOAYo-teFvMwz1qj8vpa&export=downloadabdelka1J3le33hxt5t6cshqdNSZXxjh4taL9fbN
https://drive.google.com/u/0/uc?id=1u_QYDFenUSWdjijqt6oW5dgYmMG-wkRA&export=downloadabdelka1KkbGFv75ahEDJqRTez6P2haup1XLrglr
https://drive.google.com/u/0/uc?id=1ilyxANJX5C9FOv6L_lruT0kK_Ey-it7g&export=downloadabdelka1OB9dCTntcdeDuK5-oD58DrG6GresLsVV
https://drive.google.com/u/0/uc?id=1WNW59rZ3dKbYzkphGxwyjZ0FxKJvHefV&export=downloadabdelka1tfhHIbB1kT7KP2BRAIBFLd-PPrClMkse
https://drive.google.com/u/0/uc?id=1jgBR0cH-ZAtxzUv692SJ_tVrBcXF6fGN&export=downloadabdelka1RHUa3GziRlExvLBWSvRnsknSRc2xqpaq
https://drive.google.com/u/0/uc?id=146kQGIlsezPtqjSj37g2bcVdXxrVOBc9&export=downloadabdelka1IbJrqH4g2eU4HBIkvxoDQBXRnR2JOMtc
https://drive.google.com/u/0/uc?id=1qBBHdWTBzLre1xam1ZSBoQGpIi6xU7DD&export=downloadabdelka1vt5p5IdFbcDfibU-HYF1Hf6MUN8_tgP7
https://drive.google.com/u/0/uc?id=1OKaQ3VACOLfFrQBgaZ2cFVtxUojS9XqZ&export=downloadabdelka1dqafJ0B9U5rIpfuaaDX2iSIP0ZMmNgVR
https://drive.google.com/u/0/uc?id=1WmxslCjXGx8MP5K_qzVN3Hsnvqw7_jgm&export=downloadabdelka1ofEZ0jrKvc_qw0y9TD1fCrjSaNx0rqpR
https://drive.google.com/u/0/uc?id=1wB5xve_TydetwUGlPYxa5CV-4NMFCMRZ&export=downloadabdelka1HeuRoPQNozqXI1MsHD8oeTLMFjK7SMyq
https://drive.google.com/u/0/uc?id=1mPNohvnXbY8Irk4AfzFPIL5l9Bsd6KpY&export=downloadabdelka1QBh4vgs188aNFMmB7h3Zw8WkjseTSW-a
https://drive.google.com/u/0/uc?id=1Rsaclro3ZARqMEZ_M-9YY-tXGsuaVkYK&export=downloadabdelka1uv09Udqo05Zk_fBEaJUVDjNK6c_CzIJP
https://drive.google.com/u/0/uc?id=15Pnju-n71dZzMkMb5fFVihRcw35m798n&export=downloadabdelka1YpxCJgWgCbGu0_UFzsJQsjrrzpERxXlO
https://drive.google.com/u/0/uc?id=1x_lS3MKsCuWPCBO5TPqbmUf6lEwhUBfL&export=downloadabdelka1t_rSfYBGtb_7J1ie52gOML_sWl12YYZk
https://drive.google.com/u/0/uc?id=1GmnJZxR2CEcREz2JGcQa-Kq9U2wq5WNz&export=downloadabdelka1FVDc5925fcUK-gcURe1CzJ7jshV6Ej-b
https://drive.google.com/u/0/uc?id=1hfLAXx9-Q5O_juSC5qZ9UlhpWqFd1roH&export=downloadabdelka1MYK6NgmhF66nB3VLlID07RoLrDKN4Ym6
https://drive.google.com/u/0/uc?id=1SDzjfqoAkTZ1Kk05l-nxbqsa9BEO4s5m&export=downloadabdelka1BYspTAxf7Mw3dx1mf2288V1MvRsgCRX4
https://drive.google.com/u/0/uc?id=1qgxZga2tIT6C9EeTGIfepggGhjQAGOm5&export=downloadabdelka1fRJk9CZhkD8z31K3FDGrodU15xlJil16
https://drive.google.com/u/0/uc?id=1azibkBluqJmXtaQgccfA4CMICqinwSPp&export=downloadabdelka15z8-CXNRxvV3EKjfaIpSo1_uxHPPpP5N
https://drive.google.com/u/0/uc?id=1wzudiaHNOZghKXTpKj5QPh5Ov45W-bbz&export=downloadabdelka1kRGWb0YPaH2f2sEPtvJqyseOE4DL5yF7
https://drive.google.com/u/0/uc?id=1cPgjANneaE62i1Qfa9RQgNJK1_8kyErm&export=downloadabdelka1-DcbSH4qL6TJAvlUNfFLsN-q8m8LnA6j
https://drive.google.com/u/0/uc?id=17T1EZUsxMGGMuz77tnPxQceTdbJG6znE&export=downloadabdelka1X_Jck3yglzd4_a1oewe5XOoQmwWKDDr2
https://drive.google.com/u/0/uc?id=1L_myzjmof2LxTgQtu06ShWGj5ETKEx8I&export=downloadabdelka1IfTGxYTZocZRTXNVuHmmJiuvFhIp2lp1
https://drive.google.com/u/0/uc?id=1PIYIaSoIEvNsGVYlxOKfyCnTZGQ0-nQn&export=downloadabdelka1dU6visBOvE5aqcAikMeSRy25yz9RuP8G
https://drive.google.com/u/0/uc?id=1iarGr_xQwUJbAaS8Dot6NVS_2iUXTYmz&export=downloadabdelka1k4jetG4R_erLT7q5SGZrhIS4hrt8Mkys
https://drive.google.com/u/0/uc?id=1IAzbWtqElfnSAJzQ7Gh79IvSLkn8U1Dp&export=downloadabdelka1oVOTAe9d7KWdmyT3GRkH0OrgBxYFrwRu
https://drive.google.com/u/0/uc?id=1eAozHTdrtRb7xsJefWpwvK0KA0IaIgiC&export=downloadabdelka1bh0av23vWa0iX_HzedUWfGExrmXGd1Ou
https://drive.google.com/u/0/uc?id=1ejeRInjhZsmQwgfcuG5yotrKgaq8kXK1&export=downloadabdelka1RbnMnFOrb6ToMRNzeBEU_Qz3-xXGBoWi
https://drive.google.com/u/0/uc?id=1RvKWh5a1RrnNBhMKQT9dPVDxsZ6Z6y5t&export=downloadabdelka13goXMD-3P2wMa72Oto6ZxAo47COYSCvf
https://drive.google.com/u/0/uc?id=1TAydJbtfmUbTX7sld61ZA2U_D0Gj3NOe&export=downloadabdelka187rqZhkzxvjYIumCBNyeCbrKu0ABSu5Y
https://drive.google.com/u/0/uc?id=1j9Au-gWqOWQjWVAsfpUi-GDebIl3Wq70&export=downloadabdelka1uiGDq55Hj_6R6b23JvFMRGrDy1KBb4AW
https://drive.google.com/u/0/uc?id=1gPBCTsYNSc00qm7BchxpUHp7GjiG18k8&export=downloadabdelka1F-WcktLbzL8mlTnguNaiHLQhC-RHwhGc
https://drive.google.com/u/0/uc?id=1qxDFm4V0zu-42WHM3ONBe1bd6JUmLBDg&export=downloadabdelka1nqoyEHfVotTUXG2NEQDr0P0bTcZfl3zl
https://drive.google.com/u/0/uc?id=1ef1BnBdK_HyEW_MrgPMtA0pfAXuUvLq3&export=downloadabdelka1f2Sr5dQ7idqwGYVJqJmQNOq2u9ruIF4I
https://drive.google.com/u/0/uc?id=1pNu88eCzzuILsmVxXgXnh_OBT9znwb6B&export=downloadabdelka1z6wWs-oBEVhTX6u6vjmp1SE7cFG-TXFu
https://drive.google.com/u/0/uc?id=14cn1Ovj6H4ntEdg1q8nPHDTqqJ3rfalf&export=downloadabdelka1ZPw8KY6GvNxYXgiEJxJ93IFcfu07J2oK
https://drive.google.com/u/0/uc?id=1to3uIZmidpijWEVch-ROzjkp5kRP9SVE&export=downloadabdelka1uJXwey-5o1iqDjZn8A6F1Cbei0ttW4R5
https://drive.google.com/u/0/uc?id=1BlNhtqwLqo2M7ZvRitxaqJTsnoAXCq38&export=downloadabdelka1fv111ePITXItSBucQ7DBtBCfs230bDD7
https://drive.google.com/u/0/uc?id=1X4nI7q1za0oHdSAqOBXht8CshLdojBaz&export=downloadabdelka1XvalzPF8HBvRLCrNqjlR5KFkdrlY3CAm
https://drive.google.com/u/0/uc?id=1PWV6iIBauumE8DLrWX6edVvnoDlzBwKB&export=downloadabdelka1rVW4rH2ESuGXK8JqVB_o8o2pmc8W9duu
https://drive.google.com/u/0/uc?id=1TET6jgtp7DxpEXYpqsKoa41LTpKcc7SY&export=downloadabdelka1cu-euAmFi3Y6b1w6hmNFr7ovsUc1qysj
https://drive.google.com/u/0/uc?id=1vVy7eCiP4COZHJGkkY2skWHIrIzNNJEl&export=downloadabdelka1Z4VDT_nCcJKM1dJIDurU8A_Pd8XpOdoi
https://drive.google.com/u/0/uc?id=14xfS9NBnyreZmIitISLMCpp8rWxL7mfL&export=downloadabdelka1xNHnWxwTz2nvSCwzmjRDMW0vXRAquRsF
https://drive.google.com/u/0/uc?id=1k6ibXkQDVoKgx-D5X2F6qM-5c_UTUOmY&export=downloadabdelka11f6jZJ6w304oGeRKfgIF7tjSQuAj4v_c
https://drive.google.com/u/0/uc?id=1HwmjcBcwCov6tt6ahGuJWV7ivKxQcdgy&export=downloadabdelka1g7qEIlPtek2zr2FtOxQ4bAgdnEqFKpW7
https://drive.google.com/u/0/uc?id=1huaz9PkeSNPXWoIJsTQNc4P1NynpY81T&export=downloadabdelka1G4uH19gu40N_pUuvHFr8TN0p8aN5pLC0
https://drive.google.com/u/0/uc?id=1WYM26vBE5tPOD8XhljDbtt1nlgQFIRRW&export=downloadabdelka1d1uS6acND7A9KfsY0Q5p9QWneV8nju2o
https://drive.google.com/u/0/uc?id=13H3Fs0mUjceKu01uRWJkdsOGOEiOzwwI&export=downloadabdelka1Qpy_npPewi6v32wBSG6-77kukOqETueO
https://drive.google.com/u/0/uc?id=1e0aLjXUTmyn1Pc_Ww3-UGLzNGVevJm_Y&export=downloadabdelka1Df7s6Svhl7RuilcBalka88qa1nFcLaC6
https://drive.google.com/u/0/uc?id=11jNzxWmuXU0C1SvtATolV1qPgNBY-eKR&export=downloadabdelka1OLcKjb0jPrMu89ccW9fTsBTaPtK6O_c7
https://drive.google.com/u/0/uc?id=1zWBHq2g8utFiRyz0MmObm1-OyLZPwUpr&export=downloadabdelka1eK52fi7SaYwEw5CY9iKPbcjT6Sky4LUP
https://drive.google.com/u/0/uc?id=1iGa9qkSjOJeCDnTNd-cLwtDLG807zEpt&export=downloadabdelka1_T0pHUNPWC9HTbSeNQxIHB2qAPH6As4i
https://drive.google.com/u/0/uc?id=1g2ull684OgoQnmgrkmxHOagDMXN_a6DV&export=downloadabdelka1zNqyrJbGDYnHaQnwbbMEaejOliMVSy96
https://drive.google.com/u/0/uc?id=1cjRN7-oUcQXB2xgubdQVAkVPYCP0M_gc&export=downloadabdelka1Ux9oD2ur3IQSQCjFnBaIGtgLiBv-dtMl
https://drive.google.com/u/0/uc?id=1K2tSYdv9IZOYKojtYD2nvMZO_quB2ccj&export=downloadabdelka1c1ITrI1LFEipzLvho-9drp1Ap4sB-WC9
https://drive.google.com/u/0/uc?id=1IB2QpSQyy79zlClpKZEj4UEcNY4CeIGE&export=downloadabdelka1lid-9FBbbnYcm7ziSnIMobG7bPjBfCBN
https://drive.google.com/u/0/uc?id=1u3Adi33uHvoXfikOXBzW_AdK2LhqhM3l&export=downloadabdelka12OGZZxFNwEZkFRFMtpZ6ybjelByFl7-u
https://drive.google.com/u/0/uc?id=1ObR66KpX_AQ0l9N-xKrpCt8s_kuQVDNu&export=downloadabdelka1Td9b8o96x5RGHnBQ7nQAptWt69uDlbZS
https://drive.google.com/u/0/uc?id=1oodNmsyTMi_3T9NXaXuzWb5oznMaTJNZ&export=downloadabdelka1A5AyY9B45KlRMOqSvAqfszxKYpfbcM-Y
https://drive.google.com/u/0/uc?id=1L9K-664ClLTRoqaCUZxywHcG5im_Ryb2&export=downloadabdelka1-d9jsxrU0V2LIH6OFnO60nfwWKUQs822
https://drive.google.com/u/0/uc?id=1S7CglVMtWUdZEgZ-MXuBuIfWMyZN08-C&export=downloadabdelka1s-NuLRUTF2edrQkwux_cnzK90ZTAaFMR
https://drive.google.com/u/0/uc?id=1cy4VAdHSdd4-YA78I2TWGE4DMfSY8aDX&export=downloadabdelka1z9TFuoZkJYK3O_alr4PVXlQNWFxPz3_b
https://drive.google.com/u/0/uc?id=14WJ7aAgnj1YniRkF_9iQ3RP_ZGqvKb16&export=downloadabdelka1HYLQ-k9r_3U7C3GNFv0B12TyN0SgVowb
https://drive.google.com/u/0/uc?id=19m4zO0iod59FLtDJsgz0U558J_C8LQLF&export=downloadabdelka1o89IaewclrCXNfVOhFTDPmE9zwNJ1__e
https://drive.google.com/u/0/uc?id=1pNOGLialPVDFjl0OOEq_yqQqWM3rG_Dv&export=downloadabdelka1bi_kD_LM3fYiQmADnfnkMIr6Ox0OkfO7
https://drive.google.com/u/0/uc?id=1qKmeuzMKn4JZ3x4HQgpmVBh_WRP9TJve&export=downloadabdelka1y9TJEfPm2hLWFU9PbpTePe_6b-bUrewz
https://drive.google.com/u/0/uc?id=1KkAePuGTAW0KlofjyAo4nCR4hjjkX8IH&export=downloadabdelka1hj1UGROBdUbHY595cOIUfjov_7NYOxMu
https://drive.google.com/u/0/uc?id=1sBEEu6lQW6nk9OUhQf-T7zOnPDe014P6&export=downloadabdelka1mhUEQu2NwVKl-xOzfFfu-RTKfYKYO3dy
https://drive.google.com/u/0/uc?id=1y4OcEnqtk7ZpgEqpPFhbm2ope4kZyV6g&export=downloadabdelka1Ta415UZ7RIBgOJhtz3bARtZkm8EaX9D_
https://drive.google.com/u/0/uc?id=1F1C0JcPNZ0c0uwZhLI_cWQkVMIEOT08G&export=downloadabdelka1yEBL-GC8aIpjlJ_qVLGdC5LykI1KQfiI
https://drive.google.com/u/0/uc?id=1Fv2Ww7XRRIh-LKIBYRcSu-RYDTLSy2R5&export=downloadabdelka1L3qzgNc19kK0MCVsZuQY8IQzOHJ6iXzI
https://drive.google.com/u/0/uc?id=1WM72KEMPjoVqgd4MlG_77HDKar327Tnu&export=downloadabdelka1Klq6ju-WUxgz8jnOFil-c5_oDTg27tAB
https://drive.google.com/u/0/uc?id=1I_P3vcU2wC-A-INTvII2Objom7r-SK4t&export=downloadabdelka1Ge2ujTU31NCOxwAIbEPrS8E0oJwPvAXB
https://drive.google.com/u/0/uc?id=16yCveecTEoCk58jdq1Bq55kuJ-Hdp6q6&export=downloadabdelka16flNUA_yzBCvQ0M10UsdX-uhV-GbaEAZ
https://drive.google.com/u/0/uc?id=1pTn8cQuRwazk5JBeUUQYO8RRsDfczQ30&export=downloadabdelka1ARmkglyiHACQklZYJvm_ErSAMz9IxMaZ
https://drive.google.com/u/0/uc?id=10WjxZCeQshbiTFGrtoWnGf5ht5zVpBGl&export=downloadabdelka12dtKZSKabjb0N_3sRBNWjlWf41gBPaAD
https://drive.google.com/u/0/uc?id=1Np7E8f56oCaxAW0ytdmY4jLgTrGCToff&export=downloadabdelka1D501f_E7GahQ3Ca5ZzjVoT4cSJsMOagD
https://drive.google.com/u/0/uc?id=1MZWjyZRG98xQN80CNeOAZ8PWeAZ8Qmsi&export=downloadabdelka1yc3Gs6e1J51B7aEoYPRJPVLAlGorcev4
https://drive.google.com/u/0/uc?id=16vUM-ZL_fAH0A18cA7lhc5jXUJqKndIR&export=downloadabdelka1E8whdKR9Nya7YDridCGa4xIG-80QSOHH
https://drive.google.com/u/0/uc?id=1nnH9_taEymlXjokxOMkiG1_QRxNAuEYC&export=downloadabdelka1tCZT1behb_U4l3m_G5LHUtGSDoI3sjlv
https://drive.google.com/u/0/uc?id=1I6BAaWD9RltAJv3j5XJzXwTakP0lpi2_&export=downloadabdelka1BXVBajEbdOFBe8IbKtvZRBEcNKQrj0-j
https://drive.google.com/u/0/uc?id=1yHi-e16F5baYMCv1jEzuTmkpoirECZgW&export=downloadabdelka1BFqgcfUj4vVjB2rFF_pco-4qc_8xM4vp
https://drive.google.com/u/0/uc?id=1b6AwLfu9iLoKx_lcHtGxbGso8PKdwMyG&export=downloadabdelka1K0z6Gc-0c5kzC2u-Emp-Ne7dmxXwInYg
https://drive.google.com/u/0/uc?id=1VWaCegCs8Xagyx6XcZ_KRqoOADgfA71U&export=downloadabdelka1I-L8aqPKCq-RTyxGR2Gc3FvUCUtV3Urn
https://drive.google.com/u/0/uc?id=1JLW1VCZQJnAK42P2ODYZk_ehqyJDBaWN&export=downloadabdelka1DLyTL5mD7zH6ztUbMogeIiKrckZoOC5j
https://drive.google.com/u/0/uc?id=1labCzhfrdSI60LzNhHrTFOL7sRZ6YLQY&export=downloadabdelka1XveMIWh-HJc-6j9VF1KAaKnGQAmHjbwS
https://drive.google.com/u/0/uc?id=1FVZbwZuQLdX_TWhYFGz7OjDxqLgeFOWr&export=downloadabdelka1cOs-rp3ty0_ZahX5cKKQh8WZ7J3w94Lp
https://drive.google.com/u/0/uc?id=1Dsf0R8BL7POlv-ol741UTZDLlxx49jhJ&export=downloadabdelka1YiME3wOmzA04iwTsAcLqRly-u99nkPl9
https://drive.google.com/u/0/uc?id=1OfF9sWXG7ZdRZ5LbpYM1NHwPVED9AvY5&export=downloadabdelka1PjXIUxaXid0m4_rAdgsaoCHOCaNnjq6H
https://drive.google.com/u/0/uc?id=1URv_xY0acU9-Vx922bNIJSRD26jdO1qK&export=downloadabdelka1CKjAB9DwwHroZg4V0X98QpnlTomyPopC
https://drive.google.com/u/0/uc?id=1My_-eSLtHIBLmBPHcrk7FiZxBxztAC0B&export=downloadabdelka1h4fbpxf5IDLpopwkQ5o4k50NPvdNZjaR
https://drive.google.com/u/0/uc?id=1AJ2U5jUbr3k2IjA88KmIk4zhEUh3pw4P&export=downloadabdelka1ZWZxdOP10jC_RzdfFTkzvuTBrEVc36qe
https://drive.google.com/u/0/uc?id=1jdSPHa3bu6iandsELE0NPzs-QpIkBCjf&export=downloadabdelka1O96V959NWlVtdaYqZ4L2zwrWzQJXZOa1
https://drive.google.com/u/0/uc?id=1RMMmw2f4hT9qpBQ9f8lwAutzTn7IMFir&export=downloadabdelka1VuzJMXMbkiwb0n-uqR2lLjHoDFda-Sl8
https://drive.google.com/u/0/uc?id=1xJFBOe7TsiriGdkdCl-ZkVjLiI41dbeZ&export=downloadabdelka11PfcYb7hVtE6VUzgXpciNIrM2-NrFrjN
https://drive.google.com/u/0/uc?id=10F4Z6Bs3BdsV_XC7vZaZw-zzKRi8lo0e&export=downloadabdelka1QRbqbeJJHVJDZpvdugUni_rdzJvknNks
https://drive.google.com/u/0/uc?id=1f4ihOgG__Udg3yFmfCEXjfNLEbVtAG33&export=downloadabdelka1doOtgCpTSeCs87jJxZyDk-e49RbXB-ZD
https://drive.google.com/u/0/uc?id=1O_oePKOn_m95ij2Stnbu3z0ZcnnHx4hA&export=downloadabdelka1i33n3LbhS7CTLcBBdBO5zyGLlcz3P0ml
https://drive.google.com/u/0/uc?id=1N7V9Bqyhrd-LMTaTbL6cWNwPwtSkc1hu&export=downloadabdelka1jMagLUaoE2DaScb4Z42godKJF-WZY5tp
https://drive.google.com/u/0/uc?id=1CY0lRkfKlkZvWJkZHrmBXNH0evC4rsDX&export=downloadabdelka1ME860Oehps63PJvXovKLzUDU3jS_Wm8y
https://drive.google.com/u/0/uc?id=1KgF4N_rI4WuNKTwFw547-6TeNIWkzrTC&export=downloadabdelka1EagmS9soDdarFn-RsK6e61nfnW4DKci7
https://drive.google.com/u/0/uc?id=1mQtPdCS9d_EBXwwpapYSox-VKNHQl603&export=downloadabdelka1TCygAaxUOg6XkYMQiO0UUIfZCZ4-_NXg
https://drive.google.com/u/0/uc?id=1oVm6XWs1ijBCBb06VHqtfdTjXuie6VZD&export=downloadabdelka10Go9D0w7RR2Ymve1mjpNpV55SApNABva
https://drive.google.com/u/0/uc?id=1mFEemKVEwxFse6g1lQSFHPqHYg2i-yV0&export=downloadabdelka1HcR8S1nvBI2WeFpJE6uiQs5AxlA8uBYo
https://drive.google.com/u/0/uc?id=1gNDMxfjJHqtO3kacLuh3W32iKoZCESnf&export=downloadabdelka1Ub4_56-6NFl9ZUS6B7R1i18jCF91LzmA
https://drive.google.com/u/0/uc?id=1-3HH4n1ZY8SSISZUnwZBUFghI9GZ6nyb&export=downloadabdelka1CgMCWvGopOFKio1a0FjrIBpyaodk3SCh
https://drive.google.com/u/0/uc?id=1WnkRnmXJlSoh70365v6_F5ZyDS-tNpmP&export=downloadabdelka1e_4X9NUzH_rL8TYKz7JxNRC2MLk-ZvvD
https://drive.google.com/u/0/uc?id=16ZT3njECq3JBsKnfUGw7ZMF8vcjou9Xa&export=downloadabdelka1yp2glnJNpxjlG2OYgjkwvgHtvdAHK7AV
https://drive.google.com/u/0/uc?id=1p2qn0VBD4HBIFO0OwABuAr_WXgjN0vCO&export=downloadabdelka1bdqK8ukiKYGIY5voZ_0vGZISKhyEA-rV
https://drive.google.com/u/0/uc?id=1wdeBFMylLqFj6iT4z25pljWSxqcze4id&export=downloadabdelka1uY39nphAJDzteYF2zPhNL_EdG5P4_0F1
https://drive.google.com/u/0/uc?id=17NY9NBfWNNiSQ1TtMytiZpA7jx2_YMHS&export=downloadabdelka13UMWr2wKk2zWoOV5FoyOYm4pWayseOB1
https://drive.google.com/u/0/uc?id=1ch4cU7zQKrT6yYj4vVjtBzcFLIW6oofv&export=downloadabdelka1JENCLhi47S2maB-ZKyTxQ6ZDZ5Zr9eoF
https://drive.google.com/u/0/uc?id=1Fw8EHW5YSD5E5Z_JSNqBm4mrZ3F4zhG2&export=downloadabdelka1HGKOBfUvIR2m0Vl-0obkgagPDwcaE-d8
https://drive.google.com/u/0/uc?id=1twIbCgm1VoX9jI35CJ5ccd6n-Uou7etZ&export=downloadabdelka1d8oTVxMzFUPbTzj6qhia9eGbUrLEorwe
https://drive.google.com/u/0/uc?id=1kiOomsjjhUWFLR4CrsyXjDRlUSqcFVSW&export=downloadabdelka1nbhRC1AdCHDQ91P84JSt3lFzsGdghLqO
https://drive.google.com/u/0/uc?id=1KbeD359LmrBIL0OitaMg57CizGK0vxfC&export=downloadabdelka1EuSSaNm06P5WdZ-elR7mXxtdoLCZERUe
https://drive.google.com/u/0/uc?id=1zOv9Y_sPo-B342ObroNtBKF4BkeytlWp&export=downloadabdelka1zCO0C-q4cSgEf1yYdCtuYEWQvUz0La8p
https://drive.google.com/u/0/uc?id=1iZSmeLOjp-pBM0nuhoFgpqln6t0XmRLy&export=downloadabdelka1HCTznSqIgshH_xTDyvGvaUxhrQi9TeDd
https://drive.google.com/u/0/uc?id=1gV_qLa2LW1o-Zk2EqOstSXIXvH6DKOYK&export=downloadabdelka1sQct4zwD25F0rGD8fMkRYD-M0GUi7-hU
https://drive.google.com/u/0/uc?id=10JrYKZEEeih3nPm_2m-iN5YGv_SnRK9Y&export=downloadabdelka1xdaW7kJT96gu0YWma87n1J-sjyr60Il8
https://drive.google.com/u/0/uc?id=1Bt_u7dNWrsaVq3StDBD_0fDexsoWV3dL&export=downloadabdelka1-PGrqpcWMdScfnwPStnRGdUwOanhPkom
https://drive.google.com/u/0/uc?id=1Hauwr1QFEPbs3Wmsn_bVbD-1LI0Ikt3y&export=downloadabdelka1YbA3sMyGRIeMom85Zr3oPKMySn3MTiLV
https://drive.google.com/u/0/uc?id=1ReJTQZPZkWPx6MAutfEEAUANNifIUYc1&export=downloadabdelka1eAvQAwRlEyL_n4etzShZsK-slNDHndG2
https://drive.google.com/u/0/uc?id=1ZB6tCunR3Kl24Z2MYizklGF4Hbz-NXPI&export=downloadabdelka13xMwez5B9M1qHk5fF7XVAKjIHuLbgs4B
https://drive.google.com/u/0/uc?id=1q01hgnfjEL2B9D---yKaKQVCSAwjVS21&export=downloadabdelka14GwGmQjR2IKLAzAs_SQB5XqqPipc6C1G
https://drive.google.com/u/0/uc?id=1vMlc3P8J3pYGQXSDcdtV61rx_D2xDnUZ&export=downloadabdelka1jMEzfsW2aAzmaklxVOt_VqBjPFa20qwn
https://drive.google.com/u/0/uc?id=1_MTwErSiCwezeK7Vx0RrwoairB5jMcQY&export=downloadabdelka1dzd-mshy1m3Of5_mOf4cgoPEvzSpjr0Z
https://drive.google.com/u/0/uc?id=11YfwwvdjhECZM9FcD0TqsyfvTCmWH8DD&export=downloadabdelka1P6T2fHXHzIMAcLGr3z-QsE2X5VU-l09E
https://drive.google.com/u/0/uc?id=1PrjlvbKnCYT2hw7UNIENLJeajmKAvZhn&export=downloadabdelka13spUu6WqXy4vb3Tc4HxgVu5X48J5iM-c
https://drive.google.com/u/0/uc?id=14A-5CEiatKPnkGNDQZ6n0mlmcUXNTl6V&export=downloadabdelka1QOeavj-ewwwu-_HacAYaiGLRrx5UdYui
https://drive.google.com/u/0/uc?id=1OWWxZ9zqFpRpzrDl5yiUd4bnSKyPywTD&export=downloadabdelka1z-lxpBQlr3c97np1GiAGI8Catdf8v4ww
https://drive.google.com/u/0/uc?id=1KV34DCLFFyI9Ev_AnV0FKnjDdHOYKE1G&export=downloadabdelka1IyHVHQSghZqCkD4v1f6U1SMPLIPwti9w
https://drive.google.com/u/0/uc?id=1TFUDcIiB6WNnelzojw7mKSaynjo52JjM&export=downloadabdelka1WsMYlcyxtlEX00HfKToNKP4HJ9UFDMJ8
https://drive.google.com/u/0/uc?id=19Z1Y7cQrjqMrZA6R7b0GPlc3ZRZ-gTxS&export=downloadabdelka1FVDxN38WUVz6u4fFxXbg9xAhtctmz-qF
https://drive.google.com/u/0/uc?id=1ANatwpjnGdD_EIeMcd1UbRwdHErAs9a2&export=downloadabdelka13YL3rtrjkpyRphp-lDVxwfoKxgZnyGfs
https://drive.google.com/u/0/uc?id=1iWL45LQtIvzEGhfozWEG-NDZVL7C6u1Q&export=downloadabdelka1C0XQjm5rAzjN-oMBWgYEg03wMN9XqZwu
https://drive.google.com/u/0/uc?id=1JNqJLIwaGD63qElhVco-6cNa5FOhpr27&export=downloadabdelka1TIl6hnZtUXkTfAyWNPBiXV1eo1YcbH1a
https://drive.google.com/u/0/uc?id=1rc3C_uhLQVC5jS8ND_mt0s7ViO9I0SE1&export=downloadabdelka1bomnmLSSq3h6ar5O9C2vboKe2xuAh5Zp
https://drive.google.com/u/0/uc?id=1tliDUtt9EYmfYgjr7bTdaTMRnCu_atN7&export=downloadabdelka1wwJw9GQy1LOpqS-Jq6tZizUXvFTEJwj7
https://drive.google.com/u/0/uc?id=1e3aPJD1vWxAWEFXaswGZCqCZ6PkZvv9i&export=downloadabdelka1Vwg7G5Vt5BVPPe_N1oWV5UgcGBnmcFxg
https://drive.google.com/u/0/uc?id=1LzPBLj2IkNnvyrgz7TvT_f4TsvX8S99v&export=downloadabdelka1lmXoN9frZ3wN6MPGFmA8-yU7gwPCQRm-
https://drive.google.com/u/0/uc?id=1c9ITiJLrRp4dsILwD6ZdgRXKkQbGCDfg&export=downloadabdelka1Zr3lvGUn6BpKR6DeYJTEDVlE68pT3CXZ
https://drive.google.com/u/0/uc?id=1ccRFMPSUhwTYWsKzYrrk5BN_i7hfsa0D&export=downloadabdelka1cH_kO6V44Tlbw6cJIlFf0Bs-1nQKcOXq
https://drive.google.com/u/0/uc?id=1E9QH94qtmH8rpoRgPu_nY1rlnvEScR4K&export=downloadabdelka1ilH0bu-_JlBw5O39Vm_sTdVtFk2l-Wo0
https://drive.google.com/u/0/uc?id=13_KIXdtme1IEJVGvJZmNaYWj9hUeshqT&export=downloadabdelka14olbCVxmFTrpp-GmwKL1Tk_xrNT74MQk
https://drive.google.com/u/0/uc?id=1FiQWhOxovtK2NS2sxqt8qqbp2Hc0nqNA&export=downloadabdelka1wkl3cBdxwYnfxVVpUnXe4vUAHaTMZsL5
https://drive.google.com/u/0/uc?id=1X8GZIhk3bSBsuLLwNo84PrPaPa4q7mHo&export=downloadabdelka1eHAbQyuj-E2ZZPrkk42m0pgaBNm1I0Jr
https://drive.google.com/u/0/uc?id=1sZwnbz16dO7un9xVrv-OUvBagzDGNCp4&export=downloadabdelka1S03fLzmfTw7i1yaL4vpGB__TxmlQ4zX1
https://drive.google.com/u/0/uc?id=1uTisIvfa30gl1JsdPuUiYG660_24LZqZ&export=downloadabdelka1nK8nirvZaX9QF2lSpqyBwQ3RKJjZmwA_
https://drive.google.com/u/0/uc?id=1JVuJakZk1N77PgeDly48SZaLlHLjqsr1&export=downloadabdelka1d2sU29kpQE9hhkdsLj3PotCRgDGbQHT3
https://drive.google.com/u/0/uc?id=1ryzDqIhVW0s7WOD7jJz9LAVTgRXOPj1_&export=downloadabdelka1qNfizSUBvpk-uLE_sSpJ8z7fc7jJlZlB
https://drive.google.com/u/0/uc?id=1D6XKxeQXlLEbT6zTIWKlA-pMPrqCTMWZ&export=downloadabdelka1CzgzR_xYW5WKOiLi4c24LR0Uejlo5JjS
https://drive.google.com/u/0/uc?id=1eMf0jRr8RyU9r6oFVbXMT8TgAS6RgVKX&export=downloadabdelka1wDwuKBsG2nQY6AGiBHy6FzXyT_bhfmn1
https://drive.google.com/u/0/uc?id=1GpLwFrNBQ2R_-AjbW6AiQJjoeNpe3u26&export=downloadabdelka1v6n8G885I3ozUM4AJ7t5O3y4kVIwC8tS
https://drive.google.com/u/0/uc?id=1OlVRNn5E7Q3vDGsv8wITCJbEAemjeP3t&export=downloadabdelka19r9ASaGjzOFL40xqCWFztrWfUe5flh42
https://drive.google.com/u/0/uc?id=1kVw73Gdm_SwsQGyo3b5YOPCBhbdmbk4v&export=downloadabdelka1zJmiqLqTtFCTwIL1tsiEZyN3lCUvIo2O
https://drive.google.com/u/0/uc?id=132eq2tz1YuJUI6uSpS0KgGy8hnBeSJxK&export=downloadabdelka1rJBkKVRTAntfh9TMDTQoBXBgF0rvRspT
https://drive.google.com/u/0/uc?id=1nQZvgCmppsItN0n9c1M6I2n5TP3Yap2f&export=downloadabdelka1xnhLqV_XmTmFZGF24US-IGYX6tTZiA10
https://drive.google.com/u/0/uc?id=1fePhEGg5eyTHiDFzQ8iEpHeDRXLLh9sm&export=downloadabdelka1jqgGF55BDq4LuquqYA1O3-WtSXIPDyIJ
https://drive.google.com/u/0/uc?id=1HgtQA_nvVfhiSDjCIoDEm-gRLyWOqoRG&export=downloadabdelka10HFmKxylEAREEr9h1ThSmK0AQPQHLNWK
https://drive.google.com/u/0/uc?id=110zzF1Zq3_OI8lkLkttLfKZPZPJ7TjNX&export=downloadabdelka1lDFP-tHkORT37VvpmO8zYK5BpO1-HIbj
https://drive.google.com/u/0/uc?id=1Y-no7Wj_rbndlXxuGx9ECcBEd7P03AKv&export=downloadabdelka1mnPJ1fETtxnPx9dHOb7P_zSXAUwpeiEu
https://drive.google.com/u/0/uc?id=1N0CoqNEWEO4NCoF_11TXkvrAs5tuznPC&export=downloadabdelka15TJziCcp95pwaJh_qRp_BqX1pg1Hl9yY
https://drive.google.com/u/0/uc?id=19dyvPwu9jfh0yRDE830muDtAHfs_6IEr&export=downloadabdelka1lnAPMutJYM9ptl6VaXHqQhtCcTwnmh4k
https://drive.google.com/u/0/uc?id=1XPjFb3KO6qmoE7RwobugXjgaIDMBNofE&export=downloadabdelka1hMSXropc_58mYjvRdp7CMtjgAmH3--sB
https://drive.google.com/u/0/uc?id=1U8AvyJ-brQrdMKWn4ZkWLAhyb3xrJseN&export=downloadabdelka1ug282wCAPXx76MwzJEmhvgpUjFzZbbzA
https://drive.google.com/u/0/uc?id=1yNTVGgK7HHYEznxC7jJwcM4e2t-fSa8z&export=downloadabdelka1Ms2oxT38fIx60b4ai_z3FUlgO3tnlVcE
https://drive.google.com/u/0/uc?id=1qeLZaQsUu66YYV5hUlYsLP-NDGvM-JaW&export=downloadabdelka1gQvb19RIC6ySttDLLA4IIHfP4Yr9nlkA
https://drive.google.com/u/0/uc?id=1ea3-BR8vGgboWgXRohsVI3lO52LOJa1D&export=downloadabdelka10LUNGDQFJut12k-CWqjkyfbFZClABaK8
https://drive.google.com/u/0/uc?id=1zA8AZDZOClnBa3dC9iy4jG1lQKqdT3F4&export=downloadabdelka1Eei73tcKxxw-GfVeR1lQTAsNTxiQu9O_
https://drive.google.com/u/0/uc?id=17gszSopzqRtgKezybBP1Tbem_gPAKWEe&export=downloadabdelka1H8lHBaJbtDCl6HnxiBWntQkJbdwrxo2q
https://drive.google.com/u/0/uc?id=1rt4Xdqwd_eHmHAQHbR9gSVK0ZMkxblYf&export=downloadabdelka1lzpcRwiPxBT46thy0el6_9pJRLUecQ3S
https://drive.google.com/u/0/uc?id=1h3iUKFmjZzy71Mh68LBvKrf14IGeno8x&export=downloadabdelka1RZnLVftg-x13xaqKOqR3bVM8msPEzrug
https://drive.google.com/u/0/uc?id=1xpYNNR-s1UrEuJuQUKG5TdZ-Eyp5b4L-&export=downloadabdelka1lePEtULwdM8MS1hNRXkx4FyughF22ml2
https://drive.google.com/u/0/uc?id=10ZG0vflVJqtFp5oN7WNm3Nf9VMxW6op3&export=downloadabdelka1mtrcJHT7PETnmFjCK-M6NbE4rFXFr6u2
https://drive.google.com/u/0/uc?id=1-NrONDGaHbWhgLljOJwL2rqpbbONvisX&export=downloadabdelka1zJtY-XXsV2aX1vMWPNANw9Y_XuPmAzCV
https://drive.google.com/u/0/uc?id=10b7J5OozjIDMIDnyWspn64POix0h8ot4&export=downloadabdelka16fUYte1X0jFJtQBOE6FFgpKB4enJkRyL
https://drive.google.com/u/0/uc?id=1vpMkFjHYw8wxD-QKo-LhnrUqwe6444JO&export=downloadabdelka1U92ejPqJDmRQseOQeUpquQz0UT69urTz
https://drive.google.com/u/0/uc?id=1D4ehpDDPobt8WjO5Aw2gkx4Bad874ob5&export=downloadabdelka173P28ICAep-6gyZFv2Tz8aSoGkzUza4N
https://drive.google.com/u/0/uc?id=19IiIjsJppymB8sjevnGJTOM9_Zm8MDpi&export=downloadabdelka14KNZNtpm9ipnF5iJQDEBzLvc4VeIPQky
https://drive.google.com/u/0/uc?id=126hPR4W3AIMIOXvsgVb8yk1yzSXFXTmM&export=downloadabdelka1YtV83wWiFu8awrKexjDTqgXPm93edFpd
https://drive.google.com/u/0/uc?id=1yZ7OGEa-qQno02-lZcQylvWZU8eGFpA4&export=downloadabdelka12u5OBWvkkY2wV9LgOYUilwM9me7_cxb1
https://drive.google.com/u/0/uc?id=1pGRSDs6Pl8SXQMDkcnAtZbFWd1m4N8-n&export=downloadabdelka1v2JNljXL8TNPZ8ZWxCbe_RTz0lHltHEj
https://drive.google.com/u/0/uc?id=17qEjjrwJXNMZID_fgUZSCknONFo-DPZF&export=downloadabdelka1LLVbZDT2a1WJjcCgIrQgBDsE2Y3UIUfj
https://drive.google.com/u/0/uc?id=1sDaxhw4z1ta0kLH0rv5xlRAWWJkUMuSW&export=downloadabdelka1UQ4cDkD-cQfajD3Cu2di0bhxR75TZMjE
https://drive.google.com/u/0/uc?id=1Kg5DCmEyJX5FAEe76cDh6KrRpKa2__Ya&export=downloadabdelka1VW97izxuxx9Iej7Um1SKGYPmaAeEFr17
https://drive.google.com/u/0/uc?id=19iFyah3T42tj1hQ2gZGUV2g5Tq_pcz0j&export=downloadabdelka1kIdNUM7HAi5Rageq-hHKHq9MjJRy_pMr
https://drive.google.com/u/0/uc?id=1yxrbslmsCHVM3OMjD6n6emS8nMHjjvFB&export=downloadabdelka1XWwNDOiTlPueRK6l1vm8QY28QJ6IFQ5L
https://drive.google.com/u/0/uc?id=1nPyrwDC0q_T72wzuKNqnDwdkI4faL9LC&export=downloadabdelka1Cl9wnZAGWR2qD7FbStmPpzNu7M_rxgBX
https://drive.google.com/u/0/uc?id=16FM9E7ibBsCgpq7GODazpSUov7_tva2m&export=downloadabdelka1691pqeaqLIj1nwaKc1cM5VkW3r2f0zSh
https://drive.google.com/u/0/uc?id=1Q4L-OJRYdKPJ4g-qEUpva2q3-vXlUR6D&export=downloadabdelka1t7Zn5jn8cTgSm6xEbhgUcEai6FrQ-Gcx
https://drive.google.com/u/0/uc?id=1Gdj6V1NUWiSwrzh5fpUKsJbZI-kKNSGw&export=downloadabdelka10ZfO0PR67DgcCu7XqDzvMosLvmVPrQFy
https://drive.google.com/u/0/uc?id=1KkG8VMEjoAlxFvkrgBEqFhOr1KhO4yGB&export=downloadabdelka1sq3AGVmdBIG-cjbTo6vTcy9geFxoPrcg
https://drive.google.com/u/0/uc?id=1d3WEoSQlbtvN1KUVkLG5EkkH94xnQQke&export=downloadabdelka1hD4rJHwkb8Dzb8ZcWxUcSahtGApwNYcl`

updatee.split("\n").forEach(function(two){

var zipi = two.split("abdelka")[0]
var ff = two.split("abdelka")[1]
databases.query('UPDATE productss SET zip = "'+zipi+'" WHERE zip like "%'+ff+'%";' , function (error, results, fields) {
console.log(error);
console.log('ok');
})




})