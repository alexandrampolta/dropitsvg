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




paypal.configure({
  mode: "live", //sandbox or live
  client_id:"AQnoyKMeHzzaNXMUTY2azfSa2nKJFn1i5niNhOQtGqeIr4ZpvGZh3riSicmFdpa0E5meeVvtqlvE8Sm8",
  client_secret:"EJY4ix34RapHmZrCH_FBxQxqz8VThEZG0GWboVOlm-L4KktUgvJqRmoNRgrcsiPM-w8mFYBgY8RdVDmC",
});
// paypal.configure({
//   mode: "sandbox", //sandbox or live
//   client_id:"AUHUiKxuQ3bT5zWgqh_PLziAzuhmgf6G_11qlAr5W-5rxCzz9OPvjUONDJ3pAbiXrCAGNvdzUPeUORxo",
//   client_secret:"ELvo3-9YndNcxnap1x6oLUQdorIg_OT9RQVsd_pV3iop3rl1pSS4LMBD74spiZqcrJFMMfz1WMy5KuQX",
// });



     



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

});
// var sheet = `https://i.ibb.co/CKKH6yY/1.jpg	Nurse-Monogram-Frame-1.jpeg
// https://i.ibb.co/GdJqKHx/2.jpg	Quote-I-Stab-People-For-A-Living-2.jpeg
// https://i.ibb.co/S7grGrQ/3.jpg	Polygon-Elephant-3.jpeg
// https://i.ibb.co/rGS9NvP/4.jpg	Quote-CMA-Power-4.jpeg
// https://i.ibb.co/G3MMxbw/5.jpg	Quote-CNA-Power-5.jpeg
// https://i.ibb.co/8cPyKSC/6.jpg	Quote-Doctor-Life-6.jpeg
// https://i.ibb.co/584FSpf/7.jpg	Quote-Doctor-Life-7.jpeg
// https://i.ibb.co/r7PfYvs/8.jpg	Quote-I-Cant-Stay-At-Home-Im-A-CMA-Certified-Medical-Assistant-8.jpeg
// https://i.ibb.co/VYq2CLv/9.jpg	Quote-I-Cant-Stay-At-Home-Im-A-CNA-Certified-Nursing-Assistant-9.jpeg
// https://i.ibb.co/ctWVkxJ/10.jpg	Quote-I-Cant-Stay-At-Home-Im-A-Healthcare-Worker-10.jpeg
// https://i.ibb.co/4dVWbp4/11.jpg	Quote-I-Cant-Stay-At-Home-Im-A-Nurse-11.jpeg
// https://i.ibb.co/GPxNz4T/12.jpg	Quote-I-Cant-Stay-At-Home-Im-A-PA-Physician-Assistant-12.jpeg
// https://i.ibb.co/RQTC1yB/13.jpg	Quote-I-Cant-Stay-At-Home-Im-A-Pharmacy-Technician-13.jpeg
// https://i.ibb.co/Bz3v8Vf/14.jpg	Quote-I-Cant-Stay-At-Home-Im-A-Physician-Assistant-14.jpeg
// https://i.ibb.co/XW8Hw2g/15.jpg	Quote-I-Cant-Stay-At-Home-Im-A-Respiratory-Therapist-15.jpeg
// https://i.ibb.co/VWLk3NV/16.jpg	Quote-I-Cant-Stay-At-Home-Im-A-Social-Worker-16.jpeg
// https://i.ibb.co/bmmGHzq/17.jpg	Quote-I-Cant-Stay-At-Home-Im-A-Xray-Technologist-17.jpeg
// https://i.ibb.co/JFpg2cP/18.jpg	Quote-I-love-A-Nurse-18.jpeg
// https://i.ibb.co/xsR6ZNG/19.jpg	Quote-Im-A-CMA-Whats-Your-Superpower-19.jpeg
// https://i.ibb.co/ZJxRV5v/20.jpg	Quote-Im-A-CNA-Whats-Your-Superpower-20.jpeg
// https://i.ibb.co/5jdZ2Hs/21.jpg	Quote-Im-A-Nurse-Whats-Your-Superpower-21.jpeg
// https://i.ibb.co/7gY8YHV/22.jpg	Quote-Im-A-Pharmacy-Technician-Whats-Your-Superpower-22.jpeg
// https://i.ibb.co/vsVVDW0/23.jpg	Quote-Im-A-Physician-Assistant-Whats-Your-Superpower-23.jpeg
// https://i.ibb.co/qsc08K5/24.jpg	Quote-Im-A-Respiratory-Therapist-Whats-Your-Superpower-24.jpeg
// https://i.ibb.co/vYFLGWT/25.jpg	Quote-Im-A-Social-Worker-Whats-Your-Superpower-25.jpeg
// https://i.ibb.co/0FCmqjZ/26.jpg	Quote-Im-A-Xray-Technician-Whats-Your-Superpower-26.jpeg
// https://i.ibb.co/jM5MNT9/27.jpg	Quote-Im-A-Xray-Technologist-Whats-Your-Superpower-27.jpeg
// https://i.ibb.co/M6V4vL2/28.jpg	Quote-Im-In-Love-With-A-Nurse-28.jpeg
// https://i.ibb.co/SX62YFS/29.jpg	Quote-Mom-Wife-CMA-29.jpeg
// https://i.ibb.co/ZJLCDNB/30.jpg	Quote-Mom-Wife-CNA-30.jpeg
// https://i.ibb.co/p3dWbK6/31.jpg	Quote-Mom-Wife-Nurse-31.jpeg
// https://i.ibb.co/S6zqSLC/32.jpg	Quote-Nurse-At-Heart-32.jpeg
// https://i.ibb.co/5WWQzF4/33.jpg	Quote-Nurse-Life-33.jpeg
// https://i.ibb.co/Bwf5Hkw/34.jpg	Quote-Nurses-Call-The-Shots-34.jpeg
// https://i.ibb.co/B2GjNLn/35.jpg	Quote-Out-Of-My-Way-Im-A-CNA-35.jpeg
// https://i.ibb.co/6nYYh0J/36.jpg	Quote-Out-Of-The-Way-Im-A-CMA-36.jpeg
// https://i.ibb.co/yqq4YbJ/37.jpg	Quote-Pharmacy-Technician-37.jpeg
// https://i.ibb.co/fxDtS9g/38.jpg	Quote-Physician-Assistant-38.jpeg
// https://i.ibb.co/jHKj7jw/39.jpg	Quote-Quarantine-Lets-Do-This-39.jpeg
// https://i.ibb.co/jGWQrt5/40.jpg	Quote-Respiratory-Therapist-40.jpeg
// https://i.ibb.co/sC9vm85/41.jpg	Quote-Social-Worker-41.jpeg
// https://i.ibb.co/swfXZZ9/42.jpg	Quote-Super-Bro-42.jpeg
// https://i.ibb.co/qCqFgcy/43.jpg	Quote-Super-Dad-43.jpeg
// https://i.ibb.co/8YKYcTw/44.jpg	Quote-Super-Doc-44.jpeg
// https://i.ibb.co/CJsv7QK/45.jpg	Quote-Super-Doctor-45.jpeg
// https://i.ibb.co/9s4L8QZ/46.jpg	Quote-Super-Mom-46.jpeg
// https://i.ibb.co/0K3jq9V/47.jpg	Quote-Super-Nurse-47.jpeg
// https://i.ibb.co/qpTmj1S/48.jpg	Quote-Super-Sis-48.jpeg
// https://i.ibb.co/t4kFnVs/49.jpg	Quote-Xray-Power-49.jpeg
// https://i.ibb.co/HKg6Lhm/50.jpg	Quote-Xray-Technician-50.jpeg
// https://i.ibb.co/XVMnzyC/51.jpg	Quote-Xray-Technologist-51.jpeg
// https://i.ibb.co/jgL8M7T/52.jpg	Valentines-Day-Quote-52.jpeg
// https://i.ibb.co/QXKxBjd/53.jpg	Heart-53.jpeg
// https://i.ibb.co/GHJbJfv/54.jpg	Home-is-where-Mom-is-Quote-54.jpeg
// https://i.ibb.co/2ghS8ZM/55.jpg	Medical-Cross-Love-Heart-Element-55.jpeg
// https://i.ibb.co/DwjXhm5/56.jpg	Toilet-Paper-56.jpeg
// https://i.ibb.co/ZBbfVTh/57.jpg	A-Very-Merry-Christmas-57.jpeg
// https://i.ibb.co/N9KCGMZ/58.jpg	All-American-Y’All-58.jpeg
// https://i.ibb.co/xJtX3m0/59.jpg	All-I-Want-For-Christmas-is-59.jpeg
// https://i.ibb.co/GcS1KTh/60.jpg	Arrow-Monogram-Frame-60.jpeg
// https://i.ibb.co/HHfvnXf/61.jpg	Art-Deco-Wedding-Party-Invitation-Template-61.jpeg
// https://i.ibb.co/DgJgtKw/62.jpg	Art-Nouveau-Wedding-Party-Invitation-Template-62.jpeg
// https://i.ibb.co/9vhmPH0/63.jpg	Baking-Spirits-Bright-63.jpeg
// https://i.ibb.co/z4MkHVR/64.jpg	Baking-The-World-Better-64.jpeg
// https://i.ibb.co/PDfGbcL/65.jpg	Banner-Ribbon-65.jpeg
// https://i.ibb.co/wgCCJSb/66.jpg	Banner-Ribbon-66.jpeg
// https://i.ibb.co/RHz4wxv/67.jpg	Banner-Ribbon-67.jpeg
// https://i.ibb.co/C68tDMz/68.jpg	Banner-Ribbon-68.jpeg
// https://i.ibb.co/zXkNk0W/69.jpg	Banner-Ribbon-69.jpeg
// https://i.ibb.co/Swqdt0y/70.jpg	Banner-Ribbon-70.jpeg
// https://i.ibb.co/BVrDCTP/71.jpg	Banner-Ribbon-71.jpeg
// https://i.ibb.co/kMgxVx8/72.jpg	Banner-Ribbon-72.jpeg
// https://i.ibb.co/RcZWx8h/73.jpg	Banner-Ribbon-73.jpeg
// https://i.ibb.co/rH61Wp4/74.jpg	Banner-Ribbon-74.jpeg
// https://i.ibb.co/Z1XKbKG/75.jpg	Banner-Ribbon-75.jpeg
// https://i.ibb.co/pZJD7YW/76.jpg	Banner-Ribbon-76.jpeg
// https://i.ibb.co/sJGgCkF/77.jpg	Banner-Ribbon-77.jpeg
// https://i.ibb.co/nCpcvpp/78.jpg	Banner-Ribbon-78.jpeg
// https://i.ibb.co/jr9hqx2/79.jpg	Banner-Ribbon-79.jpeg
// https://i.ibb.co/kKxdFxL/80.jpg	Banner-Ribbon-80.jpeg
// https://i.ibb.co/XshvVBT/81.jpg	Banner-Ribbon-81.jpeg
// https://i.ibb.co/cJ4c5Bf/82.jpg	Banner-Ribbon-82.jpeg
// https://i.ibb.co/09NLRYS/83.jpg	Banner-Ribbon-83.jpeg
// https://i.ibb.co/3ry8g1w/84.jpg	Banner-Ribbon-84.jpeg
// https://i.ibb.co/m9NbDwf/85.jpg	Banner-Ribbon-85.jpeg
// https://i.ibb.co/TBjLtxq/86.jpg	Banner-Ribbon-86.jpeg
// https://i.ibb.co/p1BznDg/87.jpg	Banner-Ribbon-87.jpeg
// https://i.ibb.co/qYQLkqv/88.jpg	Banner-Ribbon-88.jpeg
// https://i.ibb.co/jzPMGWQ/89.jpg	Banner-Ribbon-89.jpeg
// https://i.ibb.co/hKCvwQ5/90.jpg	Banner-Ribbon-90.jpeg
// https://i.ibb.co/JxGjrwJ/91.jpg	Banner-Ribbon-91.jpeg
// https://i.ibb.co/cTtXvXq/92.jpg	Banner-Ribbon-92.jpeg
// https://i.ibb.co/pQjx8fc/93.jpg	Banner-Ribbon-93.jpeg
// https://i.ibb.co/0fKrmsq/94.jpg	Banner-Ribbon-94.jpeg
// https://i.ibb.co/kq9hjmy/95.jpg	Banner-Ribbon-95.jpeg
// https://i.ibb.co/1TbgMd2/96.jpg	Banner-Ribbon-96.jpeg
// https://i.ibb.co/7p3tq67/97.jpg	Banner-Ribbon-97.jpeg
// https://i.ibb.co/j5pRw7S/98.jpg	Banner-Ribbon-98.jpeg
// https://i.ibb.co/F6q00vj/99.jpg	Banner-Ribbon-99.jpeg
// https://i.ibb.co/D4CrzxF/100.jpg	Banner-Ribbon-100.jpeg
// https://i.ibb.co/vDQfcTv/101.jpg	Banner-Ribbon-101.jpeg
// https://i.ibb.co/H462WbK/102.jpg	Banner-Ribbon-102.jpeg
// https://i.ibb.co/L1C4bsj/103.jpg	Banner-Ribbon-103.jpeg
// https://i.ibb.co/fvGNSBf/104.jpg	Banner-Ribbon-104.jpeg
// https://i.ibb.co/Rc9cGD2/105.jpg	Beach-Life-105.jpeg
// https://i.ibb.co/qkMJxCT/106.jpg	Because-I-Said-So-Momlife-106.jpeg
// https://i.ibb.co/R9wnF43/107.jpg	Bless-This-Hot-Mess-107.jpeg
// https://i.ibb.co/W2rxZBh/108.jpg	Blossom-Bloom-Grow-Love-108.jpeg
// https://i.ibb.co/2qG67Q6/109.jpg	Butterfly-109.jpeg
// https://i.ibb.co/28BR00z/110.jpg	Butterfly-Kisses-&-Dandelion-Wishes-110.jpeg
// https://i.ibb.co/R7s8wPp/111.jpg	Butterfly-Monogram-Frame-111.jpeg
// https://i.ibb.co/B3ST4fF/112.jpg	Butterfly-Monogram-Frame-112.jpeg
// https://i.ibb.co/vcRbR8g/113.jpg	Butterfly-Silhouette-113.jpeg
// https://i.ibb.co/wKyhmBv/114.jpg	Butterfly-Silhouette-114.jpeg
// https://i.ibb.co/WxZt3Xr/115.jpg	Butterfly-Silhouette-115.jpeg
// https://i.ibb.co/n83rM0F/116.jpg	Butterfly-Silhouette-116.jpeg
// https://i.ibb.co/yfVknFJ/117.jpg	Butterfly-Silhouette-117.jpeg
// https://i.ibb.co/dgYtRYp/118.jpg	Butterfly-Silhouette-118.jpeg
// https://i.ibb.co/gTBcpLy/119.jpg	Butterfly-Silhouette-119.jpeg
// https://i.ibb.co/P9TD0j8/120.jpg	Butterfly-Silhouette-120.jpeg
// https://i.ibb.co/C6c4Bky/121.jpg	Butterfly-Silhouette-121.jpeg
// https://i.ibb.co/9TkHsgN/122.jpg	Butterfly-Silhouette-122.jpeg
// https://i.ibb.co/ZfswXvT/123.jpg	Butterfly-Silhouette-123.jpeg
// https://i.ibb.co/KNjWrrw/124.jpg	Butterfly-Silhouette-124.jpeg
// https://i.ibb.co/7kCYTtZ/125.jpg	Butterfly-Silhouette-125.jpeg
// https://i.ibb.co/bXkFJdQ/126.jpg	Carrots-For-The-Reindeer-Cookies-For-Santa-126.jpeg
// https://i.ibb.co/HnP7YGv/127.jpg	Chaos-Coordinator-Mom-127.jpeg
// https://i.ibb.co/nk4w2S0/128.jpg	Chaos-Coordinator-Mum-128.jpeg
// https://i.ibb.co/XsXB077/129.jpg	Chaos-Creator-129.jpeg
// https://i.ibb.co/VwL4GTy/130.jpg	Cheers-To-The-New-Years-130.jpeg
// https://i.ibb.co/c6jkVP5/131.jpg	Choose-Happy-131.jpeg
// https://i.ibb.co/4Vz3JMV/132.jpg	Christmas-Calories-Dont-Count-132.jpeg
// https://i.ibb.co/4S46v60/133.jpg	Christmas-Cutie-133.jpeg
// https://i.ibb.co/2hpYYNX/134.jpg	Christmas-Elf-134.jpeg
// https://i.ibb.co/qsVxmpq/135.jpg	Christmas-Elf-Squad-135.jpeg
// https://i.ibb.co/0Gw6GvW/136.jpg	Christmas-Ho-Ho-Ho-136.jpeg
// https://i.ibb.co/PTrr2T7/137.jpg	Christmas-Holly-Jolly-137.jpeg
// https://i.ibb.co/2hgq3NM/138.jpg	Christmas-Im-Snow-Cute-138.jpeg
// https://i.ibb.co/StmcBNm/139.jpg	Christmas-Jingle-Bell-Rock-139.jpeg
// https://i.ibb.co/m9Zsp9z/140.jpg	Christmas-Jolly-Season-140.jpeg
// https://i.ibb.co/2kdyVnP/141.jpg	Christmas-Joy-141.jpeg
// https://i.ibb.co/NFTwGq8/142.jpg	Christmas-One-Cool-Snowman-142.jpeg
// https://i.ibb.co/bNxG4T5/143.jpg	Christmas-Pick-Up-Truck-Presents-143.jpeg
// https://i.ibb.co/c347Qs0/144.jpg	Christmas-Santas-Little-Helper-144.jpeg
// https://i.ibb.co/Zm3txdM/145.jpg	Christmas-Snowflake-Snowman-145.jpeg
// https://i.ibb.co/2FSbsSf/146.jpg	Christmas-Theres-Snow-Place-Like-Home-146.jpeg
// https://i.ibb.co/kJdTKBs/147.jpg	Christmas-To-Cute-For-The-Naughty-List-147.jpeg
// https://i.ibb.co/5vXCcDb/148.jpg	Christmas-Tree-148.jpeg
// https://i.ibb.co/hX7dC3j/149.jpg	Christmas-Tree-149.jpeg
// https://i.ibb.co/2sVJ7gM/150.jpg	Christmas-You-Make-My-Tinsel-Tangle-150.jpeg
// https://i.ibb.co/TRQkkfW/151.jpg	Circle-Wedding-Party-Invitation-Template-151.jpeg
// https://i.ibb.co/1TBL60q/152.jpg	Coffee-A-Hug-In-A-Mug-152.jpeg
// https://i.ibb.co/zxjyT0s/153.jpg	Coffee-Bigger-Is-Better-153.jpeg
// https://i.ibb.co/9rbCsYQ/154.jpg	Combine-Wine-&-Dinner-New-Word-Is-Winner-154.jpeg
// https://i.ibb.co/9pvLNtG/155.jpg	Create-Your-Own-Magic-155.jpeg
// https://i.ibb.co/cvLm1Wt/156.jpg	Cross-Hatch-Wedding-Party-Invitation-Template-156.jpeg
// https://i.ibb.co/pZntknz/157.jpg	Crown-Circle-Monogram-Frame-157.jpeg
// https://i.ibb.co/BcxGjcZ/158.jpg	Cupcake-158.jpeg
// https://i.ibb.co/mDf3tVN/159.jpg	Cupcake-159.jpeg
// https://i.ibb.co/T46mkjT/160.jpg	Cupcake-160.jpeg
// https://i.ibb.co/NTpd6Dx/161.jpg	Cupcake-161.jpeg
// https://i.ibb.co/jMZp533/162.jpg	Cupcake-Life-Is-Sweet-162.jpeg
// https://i.ibb.co/6yHTvZL/163.jpg	Cupcake-Queen-163.jpeg
// https://i.ibb.co/5M0rmX6/164.jpg	Cupcake-Sweet-164.jpeg
// https://i.ibb.co/1fcRL6z/165.jpg	Cupcakes-Quit-Hating-Start-Baking-165.jpeg
// https://i.ibb.co/KbzThMN/166.jpg	Dandelion-Wish-Love-Hearts-166.jpeg
// https://i.ibb.co/5Kt0z9q/167.jpg	Dashing-Through-The-Snow-167.jpeg
// https://i.ibb.co/RyRWJXk/168.jpg	Days-Until-Christmas-168.jpeg
// https://i.ibb.co/3pthzyh/169.jpg	Days-Until-Christmas-169.jpeg
// https://i.ibb.co/Yj05ssb/170.jpg	Dinosaur-Silhouette-170.jpeg
// https://i.ibb.co/3kskB5w/171.jpg	Dinosaur-Silhouette-171.jpeg
// https://i.ibb.co/p2Htfqk/172.jpg	Dinosaur-Silhouette-172.jpeg
// https://i.ibb.co/SPzyTL4/173.jpg	Dinosaur-Silhouette-173.jpeg
// https://i.ibb.co/xqSSnsh/174.jpg	Dinosaur-Silhouette-174.jpeg
// https://i.ibb.co/kx4Kv4s/175.jpg	Dinosaur-Silhouette-175.jpeg
// https://i.ibb.co/NCj83B5/176.jpg	Dinosaur-Silhouette-176.jpeg
// https://i.ibb.co/XSpQGZC/177.jpg	Dinosaur-Silhouette-177.jpeg
// https://i.ibb.co/pwyhg5J/178.jpg	Dinosaur-Silhouette-178.jpeg
// https://i.ibb.co/Kx6pddZ/179.jpg	Dinosaur-Silhouette-179.jpeg
// https://i.ibb.co/xLQzBvT/180.jpg	Dinosaur-Silhouette-180.jpeg
// https://i.ibb.co/3FPQXKY/181.jpg	Dinosaur-Silhouette-181.jpeg
// https://i.ibb.co/TgnqXjG/182.jpg	Dinosaur-Silhouette-182.jpeg
// https://i.ibb.co/JHx8V3k/183.jpg	Dinosaur-Silhouette-183.jpeg
// https://i.ibb.co/CJsm5xJ/184.jpg	Dot-Monogram-Frame-184.jpeg
// https://i.ibb.co/jkLdDnH/185.jpg	Dream-Big-Little-One-185.jpeg
// https://i.ibb.co/6JpC2j1/186.jpg	Dream-186.jpeg
// https://i.ibb.co/v4XJG8V/187.jpg	E=MC-Energy-Milk-Coffee-187.jpeg
// https://i.ibb.co/pbNjJ4M/188.jpg	Easter-Blessing-188.jpeg
// https://i.ibb.co/wBhgwtL/189.jpg	Easter-Bunny-Flowers-Silhouette-189.jpeg
// https://i.ibb.co/zsQvj2Z/190.jpg	Easter-Bunny-190.jpeg
// https://i.ibb.co/gdjHj7p/191.jpg	Easter-Bunny-Happy-Easter-Silhouette-191.jpeg
// https://i.ibb.co/TY8ZJ8c/192.jpg	Easter-Bunny-Rabbit-192.jpeg
// https://i.ibb.co/kH8tVdD/193.jpg	Easter-Bunny-Swirls-Silhouette-193.jpeg
// https://i.ibb.co/1znmYKb/194.jpg	Easter-Bunny-Vintage-Feather-Silhouette-194.jpeg
// https://i.ibb.co/qjpz41b/195.jpg	Easter-Spring-Bunny-Rabbit-Silhouette-195.jpeg
// https://i.ibb.co/g6ZghSZ/196.jpg	F-Bomb-Kind-Of-Mom-196.jpeg
// https://i.ibb.co/s5zvZJf/197.jpg	Fall-Blessings-197.jpeg
// https://i.ibb.co/qC8vXn2/198.jpg	Fall-Harvest-Pumpkin-198.jpeg
// https://i.ibb.co/cTk61p1/199.jpg	Fall-in-Love-–-199.jpeg
// https://i.ibb.co/WWxm7hJ/200.jpg	Fall-Leaves-Swirls-200.jpeg
// https://i.ibb.co/SPGMhzD/201.jpg	Feathers-Appear-When-Angels-Are-Near-201.jpeg
// https://i.ibb.co/Y3sX90x/202.jpg	Feeling-Lucky-Love-Heart-202.jpeg
// https://i.ibb.co/vQ2tdd0/203.jpg	Fire-Cracker-Truck-–-203.jpeg
// https://i.ibb.co/t3mpwMp/204.jpg	Fireworks-and-Freedom-–-204.jpeg
// https://i.ibb.co/zF8KBrK/205.jpg	Floral-Mandala-205.jpeg
// https://i.ibb.co/6b6cFRk/206.jpg	Floral-Mandala-206.jpeg
// https://i.ibb.co/j6jFqqB/207.jpg	Floral-Mandala-207.jpeg
// https://i.ibb.co/gWvZWcb/208.jpg	Floral-Monogram-Frame-208.jpeg
// https://i.ibb.co/r3yNXLR/209.jpg	Floral-Wedding-Party-Invitation-Template-209.jpeg
// https://i.ibb.co/r5F9g2G/210.jpg	Floral-Wedding-Party-Invitation-Template-210.jpeg
// https://i.ibb.co/X7JvrrD/211.jpg	Floral-Wreath-211.jpeg
// https://i.ibb.co/p0tWYVH/212.jpg	Flower-Petal-Monogram-Frame-212.jpeg
// https://i.ibb.co/XVx0k6Q/213.jpg	Flowers-Love-Heart-213.jpeg
// https://i.ibb.co/fYrcXc8/214.jpg	Forever-Flamingos-214.jpeg
// https://i.ibb.co/W6kPqgZ/215.jpg	Fork-It-Lets-Get-Takeout-215.jpeg
// https://i.ibb.co/jHhrPnJ/216.jpg	Free-SVG-Files-–-Heart-Mandala-216.jpeg
// https://i.ibb.co/2jT2B7H/217.jpg	Give-Thanks-217.jpeg
// https://i.ibb.co/CMq8krt/218.jpg	Good-Ideas-Start-With-Coffee-218.jpeg
// https://i.ibb.co/cLBMxms/219.jpg	Grateful-Thankful-Blessed-219.jpeg
// https://i.ibb.co/6t7jQz3/220.jpg	Green-Cupcake-220.jpeg
// https://i.ibb.co/RHwBzN0/221.jpg	Halloween-221.jpeg
// https://i.ibb.co/Jtx3dyY/222.jpg	Halloween-Frequent-Flyer-222.jpeg
// https://i.ibb.co/QbnYF9D/223.jpg	Halloween-Monogram-Frame-223.jpeg
// https://i.ibb.co/m8Xr91w/224.jpg	Halloween-October-st-224.jpeg
// https://i.ibb.co/mq53y1y/225.jpg	Halloween-October-st-225.jpeg
// https://i.ibb.co/Z2S470d/226.jpg	Halloween-Pumpkin-226.jpeg
// https://i.ibb.co/wr2JDTr/227.jpg	Halloween-Pumpkin-Spider-Boo-227.jpeg
// https://i.ibb.co/2jddHSR/228.jpg	Halloween-Spice-Girl-228.jpeg
// https://i.ibb.co/ngVnxQs/229.jpg	Halloween-Spooky-Graves-229.jpeg
// https://i.ibb.co/CvvMYfH/230.jpg	Halloween-Spooky-October-st-230.jpeg
// https://i.ibb.co/tLJk2Bf/231.jpg	Halloween-Spooky-Tree-Bats-Silhouette-231.jpeg
// https://i.ibb.co/HVZmRwS/232.jpg	Halloween-Spooky-Tree-Cat-Silhouette-232.jpeg
// https://i.ibb.co/0rbfprv/233.jpg	Halloween-Spooky-Tree-Silhouette-233.jpeg
// https://i.ibb.co/3vhDfyq/234.jpg	Halloween-The-Boo-Crew-234.jpeg
// https://i.ibb.co/n1bbzmK/235.jpg	Halloween-Tomb-Stones-Graves-235.jpeg
// https://i.ibb.co/qpX4HHB/236.jpg	Halloween-Trick-Or-Treat-236.jpeg
// https://i.ibb.co/VxLGYbQ/237.jpg	Halloween-Welcome-To-Our-Haunted-House-237.jpeg
// https://i.ibb.co/Cbm2KMb/238.jpg	Halloween-Witch-In-Training-238.jpeg
// https://i.ibb.co/tMY0yQT/239.jpg	Halloween-Witch-Vibes-Only-239.jpeg
// https://i.ibb.co/gJFq6hG/240.jpg	Halloween-Witch-Way-To-The-Candy-240.jpeg
// https://i.ibb.co/GdY990r/241.jpg	Halloween-Witch-Way-To-The-Wine-241.jpeg
// https://i.ibb.co/nQ4QhF1/242.jpg	Hand-Drawn-Swirl-Monogram-Frame-242.jpeg
// https://i.ibb.co/0DJhsLW/243.jpg	Happy-th-July-–-243.jpeg
// https://i.ibb.co/935dLpQ/244.jpg	Happy-Easter-Bunny-Rabbit-Carrot-Car-244.jpeg
// https://i.ibb.co/98hQFQF/245.jpg	Happy-Easter-245.jpeg
// https://i.ibb.co/5KcBfRq/246.jpg	Happy-Halloween-246.jpeg
// https://i.ibb.co/HD81FWD/247.jpg	Happy-Halloween-247.jpeg
// https://i.ibb.co/ctgyy4C/248.jpg	Happy-Halloween-248.jpeg
// https://i.ibb.co/cbCqBRN/249.jpg	Happy-Halloween-249.jpeg
// https://i.ibb.co/g6wcWP9/250.jpg	Happy-Halloween-Trick-Or-Treat-250.jpeg
// https://i.ibb.co/PmZNszK/251.jpg	Happy-Halloween-Witches-251.jpeg
// https://i.ibb.co/hCgmzVT/252.jpg	Happy-New-Year-252.jpeg
// https://i.ibb.co/F6j663s/253.jpg	Happy-St-Patricks-Day-253.jpeg
// https://i.ibb.co/sK8kTnC/254.jpg	Happy-St-Patricks-Day-Rainbow-254.jpeg
// https://i.ibb.co/JxvSvYQ/255.jpg	Happy-Thanksgiving-Pick-Up-Truck-Pumpkin-255.jpeg
// https://i.ibb.co/syhnT5G/256.jpg	Hello-Skull-256.jpeg
// https://i.ibb.co/B6zBnJS/257.jpg	Hello-Spring-257.jpeg
// https://i.ibb.co/wBpJNMg/258.jpg	Hocus-Pocus-258.jpeg
// https://i.ibb.co/gZWV01n/259.jpg	Holy-Crepe-259.jpeg
// https://i.ibb.co/nQ8s4St/260.jpg	Home-For-The-Holidays-260.jpeg
// https://i.ibb.co/QdHcmbS/261.jpg	Home-261.jpeg
// https://i.ibb.co/RpNYgcB/262.jpg	Hot-Mess-Express-262.jpeg
// https://i.ibb.co/RDV3WwL/263.jpg	I-Love-you-to-Pieces-263.jpeg
// https://i.ibb.co/LtK5cVw/264.jpg	I-Speak-Fluent-Teenager-264.jpeg
// https://i.ibb.co/1M1Wjf8/265.jpg	I-Speak-Fluent-Toddler-265.jpeg
// https://i.ibb.co/9ywNQJL/266.jpg	I-Survived-266.jpeg
// https://i.ibb.co/M1nQBKr/267.jpg	I-Use-The-Smoke-Alarm-As-My-Timer-267.jpeg
// https://i.ibb.co/1mc63B9/268.jpg	If-You-Want-Something-Youve-Never-Had-Do-Something-Youve-Never-Done-268.jpeg
// https://i.ibb.co/LZJg54r/269.jpg	Im-A-Crafter-Whats-Your-Super-Power-269.jpeg
// https://i.ibb.co/7jP2MZ9/270.jpg	Im-Not-A-Person-You-Can-Put-On-Speaker-270.jpeg
// https://i.ibb.co/z7jgQWZ/271.jpg	Im-Only-A-Morning-Person-On-Christmas-271.jpeg
// https://i.ibb.co/51fZJQY/272.jpg	Joy-Love-Peace-Believe-Christmas-272.jpeg
// https://i.ibb.co/HpX5Q88/273.jpg	Joy-Love-Peace-Believe-Christmas-273.jpeg
// https://i.ibb.co/nP9RCh6/274.jpg	Joy-To-The-World-274.jpeg
// https://i.ibb.co/SDgYfbw/275.jpg	Just-Beat-It-–-275.jpeg
// https://i.ibb.co/cLp4TjC/276.jpg	Just-Keep-Rollin-–-276.jpeg
// https://i.ibb.co/tzhHYxd/277.jpg	Kitchen-Banner-–-277.jpeg
// https://i.ibb.co/0qQDFGM/278.jpg	Kitchen-Utensils-Banner-–-278.jpeg
// https://i.ibb.co/MM0vpFZ/279.jpg	Knit-Its-Cheaper-Than-Therapy-279.jpeg
// https://i.ibb.co/CJjZjFy/280.jpg	Laurel-Wreath-280.jpeg
// https://i.ibb.co/bNxs5nX/281.jpg	Laurel-Wreath-281.jpeg
// https://i.ibb.co/8DDg6gK/282.jpg	Laurel-Wreath-282.jpeg
// https://i.ibb.co/WGzFY3B/283.jpg	Laurel-Wreath-283.jpeg
// https://i.ibb.co/BVL5JNK/284.jpg	Laurel-Wreath-284.jpeg
// https://i.ibb.co/QMgc7Cm/285.jpg	Laurel-Wreath-285.jpeg
// https://i.ibb.co/FH076JP/286.jpg	Laurel-Wreath-286.jpeg
// https://i.ibb.co/Y2TZDZW/287.jpg	Laurel-Wreath-287.jpeg
// https://i.ibb.co/J2V7FwX/288.jpg	Laurel-Wreath-288.jpeg
// https://i.ibb.co/5v5hzQZ/289.jpg	Laurel-Wreath-289.jpeg
// https://i.ibb.co/rG3NtFf/290.jpg	Laurel-Wreath-290.jpeg
// https://i.ibb.co/wcgr5Zn/291.jpg	Laurel-Wreath-291.jpeg
// https://i.ibb.co/JFTjrVp/292.jpg	Laurel-Wreath-Monogram-Frame-292.jpeg
// https://i.ibb.co/xsCtnYN/293.jpg	Lets-Get-Baked-293.jpeg
// https://i.ibb.co/RyBJSHv/294.jpg	Life-Is-Rainbows-And-Cupcakes-294.jpeg
// https://i.ibb.co/yWKpZjK/295.jpg	Life-Is-Short-Eat-The-Cupcake-295.jpeg
// https://i.ibb.co/84QHfQP/296.jpg	Life-Is-Short-Lick-The-Spoon-296.jpeg
// https://i.ibb.co/x2CKW8Y/297.jpg	Life-Is-Short-Take-A-Whisk-297.jpeg
// https://i.ibb.co/prjVNmb/298.jpg	Lilly-Mandala-298.jpeg
// https://i.ibb.co/hBYtFcg/299.jpg	Lilly-Mandala-299.jpeg
// https://i.ibb.co/GRDfHHZ/300.jpg	Losing-My-Mind-One-Kid-At-A-Time-300.jpeg
// https://i.ibb.co/LNBwnhp/301.jpg	Lotus-Frame-301.jpeg
// https://i.ibb.co/tqzCyN3/302.jpg	Love-Arrow-302.jpeg
// https://i.ibb.co/BZfxRbS/303.jpg	Love-303.jpeg
// https://i.ibb.co/qWmc0Kb/304.jpg	Love-304.jpeg
// https://i.ibb.co/K6dQTxb/305.jpg	Love-305.jpeg
// https://i.ibb.co/QcG4CwN/306.jpg	Love-Grows-Here-306.jpeg
// https://i.ibb.co/FhV7Qh6/307.jpg	Love-Heart-Free-SVG-Designs-307.jpeg
// https://i.ibb.co/sJz7hrF/308.jpg	Love-Heart-308.jpeg
// https://i.ibb.co/5c0JrGX/309.jpg	Love-Heart-Mandala-309.jpeg
// https://i.ibb.co/VJcV0wy/310.jpg	Love-Heart-Monogram-Frame-310.jpeg
// https://i.ibb.co/swnzttX/311.jpg	Love-Heart-Monogram-Frame-311.jpeg
// https://i.ibb.co/t8pVVyr/312.jpg	Love-Heart-Puzzle-Piece-312.jpeg
// https://i.ibb.co/89Frk7C/313.jpg	Love-Hearts-313.jpeg
// https://i.ibb.co/FXFmQP7/314.jpg	Love-is-All-You-Need-314.jpeg
// https://i.ibb.co/BCq5ntT/315.jpg	Love-is-Magic-315.jpeg
// https://i.ibb.co/PNxmddD/316.jpg	Love-is-Never-a-Straight-Arrow-316.jpeg
// https://i.ibb.co/HDxpm7p/317.jpg	Love-Monogram-Arrows-317.jpeg
// https://i.ibb.co/SRVDqZP/318.jpg	Love-T-Rex-318.jpeg
// https://i.ibb.co/PWcQpzC/319.jpg	Lucky-AF-319.jpeg
// https://i.ibb.co/FD8tRjN/320.jpg	Make-Craft-Not-War-320.jpeg
// https://i.ibb.co/qCr2vc2/321.jpg	Mama-Needs-Coffee-321.jpeg
// https://i.ibb.co/zrznC4s/322.jpg	Mandala-Floral-322.jpeg
// https://i.ibb.co/98yDn5P/323.jpg	Mandala-323.jpeg
// https://i.ibb.co/WFgnccX/324.jpg	Mandala-324.jpeg
// https://i.ibb.co/Ng0kTMg/325.jpg	Mandala-325.jpeg
// https://i.ibb.co/mycVdMd/326.jpg	Mandala-326.jpeg
// https://i.ibb.co/mNhjTcN/327.jpg	Mandala-327.jpeg
// https://i.ibb.co/K0ykg0T/328.jpg	Mandala-328.jpeg
// https://i.ibb.co/VgRzRbq/329.jpg	Mandala-329.jpeg
// https://i.ibb.co/1scmjb6/330.jpg	Mandala-Love-Hearts-330.jpeg
// https://i.ibb.co/0cW2bgX/331.jpg	Mandala-Wedding-Party-Invitation-Template-331.jpeg
// https://i.ibb.co/HgTy3X2/332.jpg	May-Contain-Alcohol-332.jpeg
// https://i.ibb.co/fS9cp5W/333.jpg	May-Contain-Caffeine-333.jpeg
// https://i.ibb.co/x6GRPKM/334.jpg	Mermom-334.jpeg
// https://i.ibb.co/26Cy9b1/335.jpg	Mermum-335.jpeg
// https://i.ibb.co/w7fsRBL/336.jpg	Merry-Christmas-Pick-Up-Truck-Tree-336.jpeg
// https://i.ibb.co/R3qymrM/337.jpg	Merry-Elfin-Christmas-337.jpeg
// https://i.ibb.co/kcR1gwf/338.jpg	Midnight-Is-Past-My-Bedtime-Kiss-Me-Now-338.jpeg
// https://i.ibb.co/7VmVXdv/339.jpg	Mom-Life-Free-SVG-Designs-339.jpeg
// https://i.ibb.co/yhXKyks/340.jpg	Mom-Love-Heart-Arrow-–-340.jpeg
// https://i.ibb.co/2MwRXtH/341.jpg	Mom-Of-Boys-341.jpeg
// https://i.ibb.co/7V0QZ3Y/342.jpg	Mom-Of-Girls-342.jpeg
// https://i.ibb.co/RvB86P4/343.jpg	Moms-Menu-343.jpeg
// https://i.ibb.co/X5L44C0/344.jpg	Monogram-Frame-344.jpeg
// https://i.ibb.co/HYc4CPv/345.jpg	Mosaic-Wedding-Party-Invitation-Template-345.jpeg
// https://i.ibb.co/9wRVkq6/346.jpg	My-Boss-Calls-Me-Dad-346.jpeg
// https://i.ibb.co/85N8wsf/347.jpg	My-Boss-Calls-Me-Mom-347.jpeg
// https://i.ibb.co/Hq6np8r/348.jpg	My-Boss-Calls-Me-Nan-348.jpeg
// https://i.ibb.co/g46nnWr/349.jpg	My-Boss-Calls-Me-Papa-349.jpeg
// https://i.ibb.co/25gdbYY/350.jpg	My-First-Halloween-350.jpeg
// https://i.ibb.co/dWPSmjT/351.jpg	My-First-Halloween-351.jpeg
// https://i.ibb.co/D9DjNzm/352.jpg	My-Kitchen-My-Rules-Rolling-Pin-–-352.jpeg
// https://i.ibb.co/XxS5pQM/353.jpg	My-Nickname-Is-Mom-353.jpeg
// https://i.ibb.co/CvzYS3c/354.jpg	My-Nickname-Is-Mum-354.jpeg
// https://i.ibb.co/fNBWmQ6/355.jpg	New-Year-355.jpeg
// https://i.ibb.co/y5PXZtk/356.jpg	New-Year-Wishes-Midnight-Kisses-356.jpeg
// https://i.ibb.co/zF8fMDN/357.jpg	New-Years-Bring-It-On-357.jpeg
// https://i.ibb.co/nfB3kKQ/358.jpg	New-Years-358.jpeg
// https://i.ibb.co/NFc6gJm/359.jpg	New-Years-Eve-359.jpeg
// https://i.ibb.co/vYbtM6N/360.jpg	North-Pole-Sign-360.jpeg
// https://i.ibb.co/GcKB2Bv/361.jpg	Oh-Christmas-Tree-361.jpeg
// https://i.ibb.co/KNJ3JS4/362.jpg	Oh-For-Fork-Sake-362.jpeg
// https://i.ibb.co/SnF22LD/363.jpg	Oil-Mom-–-363.jpeg
// https://i.ibb.co/C9vYwnL/364.jpg	Our-Love-Story-–-364.jpeg
// https://i.ibb.co/hmqmD0F/365.jpg	Owl-Always-Love-You-365.jpeg
// https://i.ibb.co/zVZyV3S/366.jpg	Pawfect-Love-366.jpeg
// https://i.ibb.co/HptDRhz/367.jpg	Pink-Cupcake-367.jpeg
// https://i.ibb.co/WPDKxVv/368.jpg	Purple-Cupcake-368.jpeg
// https://i.ibb.co/LvftLHX/369.jpg	Puzzle-Love-Heart-369.jpeg
// https://i.ibb.co/fkZ667P/370.jpg	Quote-All-I-Need-Is-Good-Friends-To-Share-Great-Adventures-370.jpeg
// https://i.ibb.co/dg9b7s8/371.jpg	Quote-Baking-Christmas-Cheer-371.jpeg
// https://i.ibb.co/wySvY5R/372.jpg	Quote-Baking-is-Love-made-Visible-372.jpeg
// https://i.ibb.co/CHtWPBV/373.jpg	Quote-Be-Brave-Kind-And-True-373.jpeg
// https://i.ibb.co/PCx46fj/374.jpg	Quote-Believe-It-Will-Happen-374.jpeg
// https://i.ibb.co/PZztNyy/375.jpg	Quote-Born-To-Craft-375.jpeg
// https://i.ibb.co/yNZvny4/376.jpg	Quote-Bring-On-Summer-376.jpeg
// https://i.ibb.co/VM5MNHD/377.jpg	Quote-Celebrate-Every-Single-Victory-377.jpeg
// https://i.ibb.co/LtV3qdy/378.jpg	Quote-Coffee-Then-Hustle-378.jpeg
// https://i.ibb.co/VTWkvqf/379.jpg	Quote-Cookies-Make-Everything-Better-So-Start-Baking-379.jpeg
// https://i.ibb.co/FxBtNB4/380.jpg	Quote-Craft-Its-Cheaper-Than-Therapy-380.jpeg
// https://i.ibb.co/xHc8wQS/381.jpg	Quote-Crafter-A-Person-Who-Hoards-Beautiful-Shiny-Objects-381.jpeg
// https://i.ibb.co/dWRVYq8/382.jpg	Quote-Easter-Blessings-382.jpeg
// https://i.ibb.co/p2tjQgN/383.jpg	Quote-Easter-Hip-Hop-383.jpeg
// https://i.ibb.co/3zxtTtr/384.jpg	Quote-Every-Inch-Of-You-Is-Perfect-384.jpeg
// https://i.ibb.co/cbMv6qg/385.jpg	Quote-Fail-Forward-385.jpeg
// https://i.ibb.co/rkVKKky/386.jpg	Quote-Faith-Can-Move-Mountains-386.jpeg
// https://i.ibb.co/dm6mbY3/387.jpg	Quote-Family-By-Choice-387.jpeg
// https://i.ibb.co/HDywmB5/388.jpg	Quote-Family-Is-Everything-388.jpeg
// https://i.ibb.co/7pcKGp2/389.jpg	Quote-Family-Makes-This-House-A-Home-389.jpeg
// https://i.ibb.co/J2DTbJh/390.jpg	Quote-Feel-The-Fear-Do-It-Anyway-390.jpeg
// https://i.ibb.co/NVGkRsf/391.jpg	Quote-Find-Joy-In-The-Journey-391.jpeg
// https://i.ibb.co/3R8BKrS/392.jpg	Quote-Find-Your-Inner-Peas-392.jpeg
// https://i.ibb.co/C5sHptF/393.jpg	Quote-Follow-Your-Heart-It-Knows-The-Way-393.jpeg
// https://i.ibb.co/grmzM22/394.jpg	Quote-Friends-Giving-394.jpeg
// https://i.ibb.co/nCWD0QM/395.jpg	Quote-Gather-Together-395.jpeg
// https://i.ibb.co/JHT0xdx/396.jpg	Quote-Gather-With-Grateful-Hearts-396.jpeg
// https://i.ibb.co/1JbM6mn/397.jpg	Quote-Gather-Yall-397.jpeg
// https://i.ibb.co/Xs7Pf40/398.jpg	Quote-Gobble-Til-You-Wobble-398.jpeg
// https://i.ibb.co/6ySVbk1/399.jpg	Quote-Grateful-For-Where-I-Am-SVG-Files-399.jpeg
// https://i.ibb.co/t3hDzzz/400.jpg	Quote-Halloween-All-Hallows-Eve-400.jpeg
// https://i.ibb.co/k8w4xh2/401.jpg	Quote-Halloween-Boo-Yall-401.jpeg
// https://i.ibb.co/NCDfkj8/402.jpg	Quote-Halloween-Trick-Or-Treat-402.jpeg
// https://i.ibb.co/G0zRfcq/403.jpg	Quote-Halloween-Trick-Or-Treat-403.jpeg
// https://i.ibb.co/D70Q8TH/404.jpg	Quote-Halloween-Witch-Please-404.jpeg
// https://i.ibb.co/fGHqqjc/405.jpg	Quote-Happy-405.jpeg
// https://i.ibb.co/tmNHBHp/406.jpg	Quote-Happy-Halloween-406.jpeg
// https://i.ibb.co/JnX5HYB/407.jpg	Quote-Happy-Halloween-Witches-407.jpeg
// https://i.ibb.co/vsLgJBH/408.jpg	Quote-Happy-New-Year-408.jpeg
// https://i.ibb.co/JQXjcbp/409.jpg	Quote-Happy-New-Years-Yall-409.jpeg
// https://i.ibb.co/Cmz8kSL/410.jpg	Quote-Have-A-Little-Faith-410.jpeg
// https://i.ibb.co/LvSZWSz/411.jpg	Quote-He-Believed-He-Could-So-He-Did-411.jpeg
// https://i.ibb.co/940ZvhY/412.jpg	Quote-Hello-Spring-412.jpeg
// https://i.ibb.co/5jjTXFL/413.jpg	Quote-Hello-Summer-413.jpeg
// https://i.ibb.co/5G3rBxS/414.jpg	Quote-Hello-Sunshine-414.jpeg
// https://i.ibb.co/1JY4cKT/415.jpg	Quote-Hey-Hey-Vacay-415.jpeg
// https://i.ibb.co/b3phRdx/416.jpg	Quote-Hold-Me-Tight-Kiss-Me-At-Midnight-416.jpeg
// https://i.ibb.co/984swKm/417.jpg	Quote-I-Can-I-WIll-Just-Watch-Me-417.jpeg
// https://i.ibb.co/5vw3rVz/418.jpg	Quote-I-Need-A-Quarantini-418.jpeg
// https://i.ibb.co/5B2vTbb/419.jpg	Quote-I-Run-On-Cupcakes-And-Coffee-419.jpeg
// https://i.ibb.co/2hr5Xff/420.jpg	Quote-I-Teach-Whats-Your-Superpower-420.jpeg
// https://i.ibb.co/cLtL5rn/421.jpg	Quote-I-Will-Build-My-Castle-From-The-Rocks-In-My-Path-421.jpeg
// https://i.ibb.co/GPqwhpm/422.jpg	Quote-If-You-Can-Dream-It-You-Can-Do-It-422.jpeg
// https://i.ibb.co/n76Cy9M/423.jpg	Quote-If-You-Cant-Find-The-Sunshine-Be-The-Sunshine-423.jpeg
// https://i.ibb.co/tBRDRFk/424.jpg	Quote-It-Doesnt-Get-Easier-You-Get-Stronger-424.jpeg
// https://i.ibb.co/Qn9N1Cn/425.jpg	Quote-Its-Not-About-Where-You-Go-Its-Who-You-Travel-With-425.jpeg
// https://i.ibb.co/H4wZwqx/426.jpg	Quote-Its-Ok-To-Be-A-Glowstick-426.jpeg
// https://i.ibb.co/fkHtkFs/427.jpg	Quote-Keep-Calm-And-Eat-Turkey-427.jpeg
// https://i.ibb.co/WV684rG/428.jpg	Quote-Keep-Moving-Forward-428.jpeg
// https://i.ibb.co/5vV0hGX/429.jpg	Quote-Kindness-Is-Contagious-429.jpeg
// https://i.ibb.co/yBjGvbv/430.jpg	Quote-Leftovers-Are-For-Quitters-430.jpeg
// https://i.ibb.co/YdY4ZY3/431.jpg	Quote-Lets-Gets-Stuffed-431.jpeg
// https://i.ibb.co/y5XMM4V/432.jpg	Quote-Love-432.jpeg
// https://i.ibb.co/6JMg0rY/433.jpg	Quote-Love-Is-The-Only-Way-433.jpeg
// https://i.ibb.co/C1ZG4wN/434.jpg	Quote-Love-Who-You-Are-434.jpeg
// https://i.ibb.co/BZLNL2t/435.jpg	Quote-Made-With-Love-435.jpeg
// https://i.ibb.co/qgGvMwh/436.jpg	Quote-Magic-Is-Everywhere-436.jpeg
// https://i.ibb.co/7bQ51hJ/437.jpg	Quote-Mama-Is-My-Hero-437.jpeg
// https://i.ibb.co/3BBp4Pr/438.jpg	Quote-Mama-Unicorn-Silhouette-438.jpeg
// https://i.ibb.co/LPZDZQJ/439.jpg	Quote-Merry-Christmas-and-a-Happy-New-Year-439.jpeg
// https://i.ibb.co/5GmSZbb/440.jpg	Quote-Mic-Drop-Boom-I-Did-It-440.jpeg
// https://i.ibb.co/gmPjyZ9/441.jpg	Quote-Mini-Unicorn-Silhouette-441.jpeg
// https://i.ibb.co/KWtSN9F/442.jpg	Quote-Miracles-Are-Everywhere-442.jpeg
// https://i.ibb.co/2Zx1DRF/443.jpg	Quote-Mom-Unicorn-Silhouette-443.jpeg
// https://i.ibb.co/0hHPynt/444.jpg	Quote-My-First-Thanksgiving-444.jpeg
// https://i.ibb.co/7WZBN7T/445.jpg	Quote-Never-Give-Up-445.jpeg
// https://i.ibb.co/B6fg65w/446.jpg	Quote-Never-Stop-Learning-446.jpeg
// https://i.ibb.co/4d9s8KG/447.jpg	Quote-Our-Family-Is-Made-With-Chaos-And-Love-447.jpeg
// https://i.ibb.co/VBcNMjz/448.jpg	Quote-Papa-Is-My-Hero-448.jpeg
// https://i.ibb.co/gRBjBvN/449.jpg	Quote-Quarantine-Queen-449.jpeg
// https://i.ibb.co/n65gp5X/450.jpg	Quote-Relationship-Status-Long-Distance-450.jpeg
// https://i.ibb.co/wMZk8Nf/451.jpg	Quote-Relationship-Status-Pizza-With-Extra-Garlic-451.jpeg
// https://i.ibb.co/qNFfhP0/452.jpg	Quote-Relationship-Status-Planning-The-Future-452.jpeg
// https://i.ibb.co/qxTFJCF/453.jpg	Quote-Relationship-Status-Sleeping-Diagonally-453.jpeg
// https://i.ibb.co/H7VmqFk/454.jpg	Quote-Santa-Please-Stop-Here-454.jpeg
// https://i.ibb.co/LpTBGVG/455.jpg	Quote-Sew-What-455.jpeg
// https://i.ibb.co/54bgd6D/456.jpg	Quote-Shamrock-Cutie-456.jpeg
// https://i.ibb.co/dGCQGTj/457.jpg	Quote-She-Believed-She-Could-So-She-Did-457.jpeg
// https://i.ibb.co/ZgN6YtF/458.jpg	Quote-Simply-Beautiful-458.jpeg
// https://i.ibb.co/WFYVH8H/459.jpg	Quote-Sorry-I-Cant-I-Have-To-Walk-My-Unicorn-459.jpeg
// https://i.ibb.co/3k8H7hm/460.jpg	Quote-Spring-Fling-460.jpeg
// https://i.ibb.co/ZKjjj0c/461.jpg	Quote-St-Patricks-%-Irish-461.jpeg
// https://i.ibb.co/YjrPstY/462.jpg	Quote-St-Patricks-Cutest-Clover-In-The-Patch-462.jpeg
// https://i.ibb.co/LvPFJSs/463.jpg	Quote-St-Patricks-Irish-Lass-With-Lots-Of-Sass-463.jpeg
// https://i.ibb.co/tYM5kVy/464.jpg	Quote-St-Patricks-Mr-Shenanigans-464.jpeg
// https://i.ibb.co/QQ9L7ZY/465.jpg	Quote-St-Patricks-Wee-Lassie-465.jpeg
// https://i.ibb.co/bPFvNmd/466.jpg	Quote-Stars-Cant-Shine-Without-Darkness-466.jpeg
// https://i.ibb.co/JrnVQxV/467.jpg	Quote-Success-Is-The-Best-Revenge-467.jpeg
// https://i.ibb.co/sCxzQy6/468.jpg	Quote-Teach-Love-Bake-468.jpeg
// https://i.ibb.co/Bgc8z7n/469.jpg	Quote-Teacher-Inspirational-Individual-469.jpeg
// https://i.ibb.co/TR4c9Th/470.jpg	Quote-Teaching-Is-A-Work-Of-Heart-470.jpeg
// https://i.ibb.co/12nM4St/471.jpg	Quote-Thanksgiving-471.jpeg
// https://i.ibb.co/pynhhbP/472.jpg	Quote-The-Best-Is-Yet-To-Come-472.jpeg
// https://i.ibb.co/Hgw48t0/473.jpg	Quote-Toss-The-Confetti-And-Celebrate-473.jpeg
// https://i.ibb.co/JFLd128/474.jpg	Quote-Travel-Far-Enough-To-Meet-Yourself-474.jpeg
// https://i.ibb.co/Rv0ph1s/475.jpg	Quote-Travel-Is-My-Therapy-475.jpeg
// https://i.ibb.co/GFfR50d/476.jpg	Quote-Trust-The-Timing-Of-Your-Life-476.jpeg
// https://i.ibb.co/p4FJ3t7/477.jpg	Quote-Wanderlust-A-Strong-Desire-To-Travel-477.jpeg
// https://i.ibb.co/CnngvNf/478.jpg	Quote-Wash-Your-Hands-478.jpeg
// https://i.ibb.co/p0gRpM3/479.jpg	Quote-We-Whisk-you-A-Merry-Christmas-479.jpeg
// https://i.ibb.co/5j1VnQq/480.jpg	Quote-Wild-and-480.jpeg
// https://i.ibb.co/TT5p66b/481.jpg	Quote-Wishin-I-Was-Fishin-481.jpeg
// https://i.ibb.co/vz6fmDy/482.jpg	Quote-Wonderful-Time-of-the-Year-482.jpeg
// https://i.ibb.co/F6sTnt7/483.jpg	Quote-Woohoo-Gettin-Ready-To-Smash-483.jpeg
// https://i.ibb.co/nbVgZMf/484.jpg	Rainbow-Butterfly-484.jpeg
// https://i.ibb.co/0qx7K7d/485.jpg	Rainbow-Cupcake-485.jpeg
// https://i.ibb.co/s5ykRD3/486.jpg	Rainbow-Love-Heart-486.jpeg
// https://i.ibb.co/qNvx2Lv/487.jpg	Rainbow-Love-Heart-487.jpeg
// https://i.ibb.co/PQjGWBh/488.jpg	Rainbow-Love-Heart-488.jpeg
// https://i.ibb.co/SvKqB6J/489.jpg	Rainbow-Stars-489.jpeg
// https://i.ibb.co/8DWKBxp/490.jpg	Santa-Love-Heart-490.jpeg
// https://i.ibb.co/NCQLYj2/491.jpg	Santas-Workshop-Sign-491.jpeg
// https://i.ibb.co/48FwZ3j/492.jpg	Sitting-On-A-Pot-Of-Gold-492.jpeg
// https://i.ibb.co/1z9md9k/493.jpg	Skull-Hello-Beautiful-493.jpeg
// https://i.ibb.co/9TW4PB5/494.jpg	Special-Delivery-From-Santa-Claus-494.jpeg
// https://i.ibb.co/16XFcCG/495.jpg	Split-Chevron-Love-Heart-495.jpeg
// https://i.ibb.co/58jqjjR/496.jpg	Split-Love-Heart-496.jpeg
// https://i.ibb.co/S6R2gFH/497.jpg	Split-Love-Heart-497.jpeg
// https://i.ibb.co/FH5Kzbz/498.jpg	Split-Love-Heart-498.jpeg
// https://i.ibb.co/McG5MLx/499.jpg	Split-Sunflower-499.jpeg
// https://i.ibb.co/rcQ489k/500.jpg	Spring-Fling-500.jpeg
// https://i.ibb.co/54M3C8H/501.jpg	Spring-501.jpeg
// https://i.ibb.co/VLjgWX6/502.jpg	Spring-Is-In-The-Air-502.jpeg
// https://i.ibb.co/CPGzPT6/503.jpg	Spring-Live-Life-In-Full-Bloom-503.jpeg
// https://i.ibb.co/rpZFrVn/504.jpg	Spring-Love-Heart-504.jpeg
// https://i.ibb.co/KX4TWS4/505.jpg	Spring-Makes-Me-Wet-My-Plants-505.jpeg
// https://i.ibb.co/CMtDxdM/506.jpg	Spring-Sunflower-Flower-Child-506.jpeg
// https://i.ibb.co/qkJzJbm/507.jpg	Spring-Vibes-507.jpeg
// https://i.ibb.co/LYC0bsZ/508.jpg	St-Patricks-Day-Pick-Up-Truck-508.jpeg
// https://i.ibb.co/wgQ5Srb/509.jpg	St-Patricks-Love-509.jpeg
// https://i.ibb.co/68WVpym/510.jpg	St-Patricks-Lucky-Charm-510.jpeg
// https://i.ibb.co/0mwBHsr/511.jpg	St-Patricks-Lucky-Horse-Shoe-511.jpeg
// https://i.ibb.co/TcXMpGS/512.jpg	Summer-Watermelon-512.jpeg
// https://i.ibb.co/Dk8J5Wf/513.jpg	Sunflower-513.jpeg
// https://i.ibb.co/myMfyPQ/514.jpg	Sunflower-Mandala-514.jpeg
// https://i.ibb.co/V9vSGP8/515.jpg	Sunflower-Monogram-Frame-515.jpeg
// https://i.ibb.co/HqV1wvr/516.jpg	Sweet-Sassy-&-Caffeinated-516.jpeg
// https://i.ibb.co/4TywXX8/517.jpg	Swirl-Monogram-Frame-517.jpeg
// https://i.ibb.co/GQV03sR/518.jpg	Thank-You-Arrow-518.jpeg
// https://i.ibb.co/fxTxMhF/519.jpg	Thank-You-519.jpeg
// https://i.ibb.co/HKh8t12/520.jpg	Thankful-and-Blessed-520.jpeg
// https://i.ibb.co/vYJQfY3/521.jpg	Thankful-Blessed-&-One-Hot-Mess-521.jpeg
// https://i.ibb.co/CMHqSs7/522.jpg	Thankful-That-Is-Nearly-Over-522.jpeg
// https://i.ibb.co/HCjrH3F/523.jpg	Thanks-523.jpeg
// https://i.ibb.co/kHkd5H9/524.jpg	Thanksgiving-524.jpeg
// https://i.ibb.co/qdq6QL1/525.jpg	The-BOO-Crew-525.jpeg
// https://i.ibb.co/n0Gx8dd/526.jpg	This-Kitchen-Is-For-Display-Only-526.jpeg
// https://i.ibb.co/tJSgMPn/527.jpg	Twenty-Twenty-One-527.jpeg
// https://i.ibb.co/3Y76XSq/528.jpg	Unicorn-528.jpeg
// https://i.ibb.co/gyZP18y/529.jpg	Unicorn-with-Bow-529.jpeg
// https://i.ibb.co/yWH0WYZ/530.jpg	Unicorn-with-Flower-Crown-530.jpeg
// https://i.ibb.co/dM9bGXG/531.jpg	Unicorn-with-Flower-Crown-and-Glasses-531.jpeg
// https://i.ibb.co/JqpQDp7/532.jpg	Unicorn-with-Rainbow-Crown-532.jpeg
// https://i.ibb.co/P4wr0Jh/533.jpg	Unicorn-with-Star-Crown-533.jpeg
// https://i.ibb.co/tbCQmJd/534.jpg	Valentines-In-Love-534.jpeg
// https://i.ibb.co/3BLTyjW/535.jpg	Valentines-Love-Heart-535.jpeg
// https://i.ibb.co/8DFRNww/536.jpg	Valentines-Love-Heart-Pick-Up-Truck-536.jpeg
// https://i.ibb.co/rZQZ4jp/537.jpg	Valentines-Love-Heart-Puzzle-537.jpeg
// https://i.ibb.co/Gt8GGbn/538.jpg	Vintage-Frame-Dividers-538.jpeg
// https://i.ibb.co/tmwGbRf/539.jpg	Warning-I-Have-A-Cricut-539.jpeg
// https://i.ibb.co/Y0LRLfT/540.jpg	Watercolor-Butterfly-Free-Sublimation-PNG-540.jpeg
// https://i.ibb.co/VWpHxCn/541.jpg	Watercolor-Mandala-Free-Sublimation-PNG-541.jpeg
// https://i.ibb.co/vQdQcyJ/542.jpg	Watercolor-Sunburst-Flower-Free-Sublimation-PNG-542.jpeg
// https://i.ibb.co/ZJrXFjD/543.jpg	Weekend-Forecast-Crafty-With-A-Chance-Of-Glitter-543.jpeg
// https://i.ibb.co/k4N6yvc/544.jpg	Welcome-Spring-544.jpeg
// https://i.ibb.co/Jr4qLd0/545.jpg	What-The-Fork-545.jpeg
// https://i.ibb.co/Dz5MVSP/546.jpg	Whip-It-–-546.jpeg
// https://i.ibb.co/5BPJVNw/547.jpg	Working-On-my-Creative-PHD-547.jpeg
// https://i.ibb.co/F5JF1KN/548.jpg	You-Are-The-Icing-On-My-Cupcake-548.jpeg
// https://i.ibb.co/hFVzMjF/549.jpg	Beach-Babe-–-549.jpeg
// https://i.ibb.co/k4GPZCr/550.jpg	Bee-Brave-550.jpeg
// https://i.ibb.co/zbGSsGn/551.jpg	Bee-Kind-551.jpeg
// https://i.ibb.co/T4pTFXs/552.jpg	Blue-Cupcake-552.jpeg
// https://i.ibb.co/RP7F95t/553.jpg	Cat-Love-SVG-Files-553.jpeg
// https://i.ibb.co/TMVq8Nj/554.jpg	Chevron-Bunting-554.jpeg
// https://i.ibb.co/85v2kQB/555.jpg	Daddy-Valentine-555.jpeg
// https://i.ibb.co/vjk2vdf/556.jpg	Dino-Bunting-556.jpeg
// https://i.ibb.co/r6CKpQW/557.jpg	Dinosaur-Bunting-557.jpeg
// https://i.ibb.co/nwbpyFR/558.jpg	Dinosaur-Bunting-558.jpeg
// https://i.ibb.co/zsbXpNY/559.jpg	Dinosaur-Bunting-559.jpeg
// https://i.ibb.co/4f5TFky/560.jpg	Frame-560.jpeg
// https://i.ibb.co/02mPF7z/561.jpg	Happy-Fall-Y’All-561.jpeg
// https://i.ibb.co/KGc5ZFJ/562.jpg	Happy-ST-Patrick’s-Day-562.jpeg
// https://i.ibb.co/FB2h4Gx/563.jpg	Happy-St-Patrick’s-Day-563.jpeg
// https://i.ibb.co/9thvMHB/564.jpg	Heart-564.jpeg
// https://i.ibb.co/7pCPxZd/565.jpg	Heart-565.jpeg
// https://i.ibb.co/qpgVPGz/566.jpg	Heart-Bunting-566.jpeg
// https://i.ibb.co/Jn8m9HQ/567.jpg	Heart-Monogram-Frame-567.jpeg
// https://i.ibb.co/kJTNHK5/568.jpg	I-Love-You-–-568.jpeg
// https://i.ibb.co/4YsBZ3M/569.jpg	I-Love-You-To-The-Moon-And-Back-569.jpeg
// https://i.ibb.co/xHrQg6h/570.jpg	Keep-Calm-and-Pull-my-Finger-570.jpeg
// https://i.ibb.co/WWxw07K/571.jpg	Kiss-Me-571.jpeg
// https://i.ibb.co/d6b4sjM/572.jpg	Lady-Luck-572.jpeg
// https://i.ibb.co/dQjtnb3/573.jpg	Little-Fire-Cracker-–-573.jpeg
// https://i.ibb.co/wJ36gXX/574.jpg	Live-Your-Dreams-574.jpeg
// https://i.ibb.co/ZH8LR0s/575.jpg	Love-575.jpeg
// https://i.ibb.co/bbFDGj0/576.jpg	Love-You-576.jpeg
// https://i.ibb.co/m6FHgHK/577.jpg	Mandala-577.jpeg
// https://i.ibb.co/W6qBBK9/578.jpg	Mandala-578.jpeg
// https://i.ibb.co/pr2HdZ5/579.jpg	Mix-It-Up-Kitchen-Quote-–-579.jpeg
// https://i.ibb.co/Tcnt7Xd/580.jpg	Mommy-is-my-Valentine-580.jpeg
// https://i.ibb.co/MnD2w9h/581.jpg	Monogram-Frame-581.jpeg
// https://i.ibb.co/2nDvsNf/582.jpg	Peace-Love-Heart-582.jpeg
// https://i.ibb.co/CQ5jmgw/583.jpg	Pot-of-Gold-Monogram-Frame-583.jpeg
// https://i.ibb.co/mvgDKcX/584.jpg	Quote-Chop-It-Like-Its-Hot-584.jpeg
// https://i.ibb.co/1ZVyjvt/585.jpg	Quote-Coffee-Because-Wine-Isnt-Allowed-In-Class-585.jpeg
// https://i.ibb.co/Tgz1VZj/586.jpg	Quote-Country-Kitchen-586.jpeg
// https://i.ibb.co/1qcbQ4C/587.jpg	Quote-Every-Inch-Of-Me-Is-Perfect-587.jpeg
// https://i.ibb.co/T2W6tzx/588.jpg	Quote-Farm-Sweet-Farm-588.jpeg
// https://i.ibb.co/Stdq9v4/589.jpg	Quote-I-Can-And-I-Will-589.jpeg
// https://i.ibb.co/37GP9jg/590.jpg	Quote-Live-Laugh-Love-590.jpeg
// https://i.ibb.co/HTFCSpL/591.jpg	Quote-Make-Yourself-At-Home-591.jpeg
// https://i.ibb.co/Yjb3B2X/592.jpg	Quote-Teach-Love-Inspire-592.jpeg
// https://i.ibb.co/Pm9zK1X/593.jpg	Snowflake-593.jpeg
// https://i.ibb.co/k4Hn5q1/594.jpg	St-Pat’s-Day-Pot-of-Gold-594.jpeg
// https://i.ibb.co/BLpX9Mw/595.jpg	St-Patrick’s-Day-Love-595.jpeg
// https://i.ibb.co/Qnv4C2F/596.jpg	Star-Heart-Frame-596.jpeg
// https://i.ibb.co/68c23d7/597.jpg	Starfish-Monogram-Frame-597.jpeg
// https://i.ibb.co/gDSXzGV/598.jpg	Stars-Bunting-598.jpeg
// https://i.ibb.co/8cTncbh/599.jpg	Summer-Vibes-–-599.jpeg
// https://i.ibb.co/fvgjXzM/600.jpg	Sunflower-Mandala-600.jpeg
// https://i.ibb.co/6BQyG9b/601.jpg	Unicorn-Monogram-Frame-601.jpeg
// https://i.ibb.co/Q8c7GFb/602.jpg	Unicorn-Monogram-Frame-602.jpeg
// https://i.ibb.co/9b3F5Sn/603.jpg	Unicorn-with-Flower-Crown-603.jpeg
// https://i.ibb.co/r6PVsVx/604.jpg	Unicorn-with-Flower-Crown-and-Glasses-604.jpeg
// https://i.ibb.co/B2m5Zbd/605.jpg	Unicorn-with-Heart-Glasses-605.jpeg
// https://i.ibb.co/Fxkkxnr/606.jpg	Valentines-Day-Elements-606.jpeg
// https://i.ibb.co/18ymXNr/607.jpg	Valentines-Day-Elements-607.jpeg
// https://i.ibb.co/VpyphWd/608.jpg	Whisk-me-Away-–-608.jpeg
// https://i.ibb.co/PC92G3p/609.jpg	Witches-Legs-609.jpeg
// https://i.ibb.co/0sjJ6Kd/610.jpg	Quote-Nurses-Rock-610.jpeg
// https://i.ibb.co/GJ63Fh9/611.jpg	Love-Heart-Arrows-Monogram-Frame-611.jpeg
// https://i.ibb.co/CQSHCVJ/612.jpg	Hand-Drawn-Doodle-Sunflower-Monogram-Frame-612.jpeg
// https://i.ibb.co/QfXzTTM/613.jpg	Love-Heart-Swirls-Monogram-Frame-613.jpeg
// https://i.ibb.co/xCJny0P/614.jpg	School-Pencil-Monogram-Frame-614.jpeg
// https://i.ibb.co/z77dXg9/615.jpg	School-Pencils-Split-Frame-615.jpeg
// https://i.ibb.co/2Z2GdQt/616.jpg	School-Pencil-Monogram-Frame-616.jpeg
// https://i.ibb.co/942JSYQ/617.jpg	School-Bus-617.jpeg
// https://i.ibb.co/YNTMJ03/618.jpg	Split-School-Bus-Monogram-Frame-618.jpeg
// https://i.ibb.co/grzWbp2/619.jpg	Yellow-School-Bus-619.jpeg
// https://i.ibb.co/qjmDQbP/620.jpg	Love-To-Write-620.jpeg
// https://i.ibb.co/wWVYyR1/621.jpg	To-Do-List-Teach-Coffee-Inspire-621.jpeg
// https://i.ibb.co/gwkbzgg/622.jpg	Schools-Out-For-Summer-622.jpeg
// https://i.ibb.co/92hxM6W/623.jpg	Finished-Teaching-Onto-Beaching-623.jpeg
// https://i.ibb.co/RpXqzYB/624.jpg	Happy-Last-Day-Of-School-624.jpeg
// https://i.ibb.co/T8KRKtX/625.jpg	Happy-First-Day-Of-School-625.jpeg
// https://i.ibb.co/NYLbJ4r/626.jpg	My-Students-Are-Awesome-626.jpeg
// https://i.ibb.co/QQVYhBF/627.jpg	Arrow-Monogram-Frame-627.jpeg
// https://i.ibb.co/CnrnjPF/628.jpg	Ornate-Monogram-Frame-628.jpeg
// https://i.ibb.co/SxKpXkD/629.jpg	Stars-Circles-Monogram-Frame-629.jpeg
// https://i.ibb.co/RvHCmdX/630.jpg	Arrow-Stars-Monogram-Frame-630.jpeg
// https://i.ibb.co/4SZHMNp/631.jpg	Hexagon-Monogram-Frame-631.jpeg
// https://i.ibb.co/Yh0Z9Pk/632.jpg	Diamond-Square-Monogram-Frame-632.jpeg
// https://i.ibb.co/5BCBW2s/633.jpg	Square-Monogram-Frame-633.jpeg
// https://i.ibb.co/tHKgNBh/634.jpg	Hand-Drawn-Doodle-Monogram-Frame-634.jpeg
// https://i.ibb.co/ZVv6bYg/635.jpg	Hand-Drawn-Doodle-Art-Love-Heart-Monogram-Frame-635.jpeg
// https://i.ibb.co/bgYzfh4/636.jpg	Hand-Drawn-Doodle-Monogram-Frame-636.jpeg
// https://i.ibb.co/R7G6pXT/637.jpg	Floral-Ornate-Monogram-Frame-637.jpeg
// https://i.ibb.co/QHf0Mz5/638.jpg	Mandala-Monogram-Frame-638.jpeg
// https://i.ibb.co/FBKYxxG/639.jpg	Hand-Drawn-Doodle-Sunflower-Monogram-Frame-639.jpeg
// https://i.ibb.co/b5ghnVc/640.jpg	Yellow-School-Bus-Monogram-Frame-640.jpeg
// https://i.ibb.co/vsFRyV9/641.jpg	Math-Easy-As-Pi-641.jpeg
// https://i.ibb.co/tZpg4gb/642.jpg	Science-I-Drink-Coffee-Periodically-642.jpeg
// https://i.ibb.co/2ktZxX5/643.jpg	One-Smart-Cookie-643.jpeg
// https://i.ibb.co/LJ1KjYF/644.jpg	Science-Periodically-Eat-Chocolate-644.jpeg
// https://i.ibb.co/qds8qZr/645.jpg	Math-Sweet-As-Pi-645.jpeg
// https://i.ibb.co/jv0dFgy/646.jpg	Math-Teachers-Rule-646.jpeg
// https://i.ibb.co/VJQnM1f/647.jpg	Science-I-Eat-Cookies-Periodically-647.jpeg
// https://i.ibb.co/f4sD4HV/648.jpg	Wake-Up-Teach-Be-Awesome-648.jpeg
// https://i.ibb.co/wgQGshC/649.jpg	Teachers-Change-The-World-649.jpeg
// https://i.ibb.co/84h1cZ2/650.jpg	Math-Pumpkin-Pi-650.jpeg
// https://i.ibb.co/z4nd4MK/651.jpg	Science-Be-Nice-Periodic-Table-Elements-651.jpeg
// https://i.ibb.co/XWXCjdr/652.jpg	Science-Cute-Periodic-Table-Elements-652.jpeg
// https://i.ibb.co/XJrcmxC/653.jpg	Educator-Of-Tiny-Humans-653.jpeg
// https://i.ibb.co/hfQ10qn/654.jpg	Math-Cutie-Pi-654.jpeg
// https://i.ibb.co/YtMmx3N/655.jpg	Math-Inspire-Pi-655.jpeg
// https://i.ibb.co/WtZYz6N/656.jpg	Science-Is-Awesome-Periodic-Table-Elements-656.jpeg
// https://i.ibb.co/hDMhLVp/657.jpg	Living-The-Teacher-Life-657.jpeg
// https://i.ibb.co/vxdsgHn/658.jpg	Science-Teacher-Inspirational-Element-658.jpeg
// https://i.ibb.co/m5z3hvg/659.jpg	Math-Mistakes-Allow-Thinking-To-Happen-659.jpeg
// https://i.ibb.co/jGk9c57/660.jpg	Science-Nerds-Have-More-Fun-Periodic-Table-Elements-660.jpeg
// https://i.ibb.co/9p4sv1y/661.jpg	Problem-Solver-Math-Teacher-661.jpeg
// https://i.ibb.co/Mh6rgKM/662.jpg	I-Love-Science-Periodic-Table-662.jpeg
// https://i.ibb.co/VYSDYJx/663.jpg	NERD-I-Prefer-Intellectual-Bad-Ass-663.jpeg
// https://i.ibb.co/ftrwZXh/664.jpg	My-Students-One-In-A-Melon-664.jpeg
// https://i.ibb.co/SmwsJj8/665.jpg	My-Teacher-One-In-A-Melon-665.jpeg
// https://i.ibb.co/fGVYLM7/666.jpg	Chemistry-Just-like-Cooking-Dont-Lick-The-Spoon-666.jpeg
// https://i.ibb.co/Z2Gw8Mq/667.jpg	Science-Rocks-Glass-Half-Full-667.jpeg
// https://i.ibb.co/GP7tPNV/668.jpg	Sorry-My-Teaching-Interrupting-Your-Talking-668.jpeg
// https://i.ibb.co/3FHr50n/669.jpg	Teaching-Is-A-Walk-In-The-Park-Jurassic-Park-669.jpeg
// https://i.ibb.co/hyZYkv4/670.jpg	Math-Rules-670.jpeg
// https://i.ibb.co/NNrnWhL/671.jpg	Science-I-Have-My-PHD-In-Sarcasm-671.jpeg
// https://i.ibb.co/KVPx2DB/672.jpg	Book-Nerd-And-Proud-672.jpeg
// https://i.ibb.co/ynhxVHD/673.jpg	Book-Nerd-Mama-673.jpeg
// https://i.ibb.co/wCGW3nL/674.jpg	Dog-Ate-My-Lesson-Plan-Teacher-Life-674.jpeg
// https://i.ibb.co/myc9tDn/675.jpg	Book-A-Day-Keeps-Reality-Away-675.jpeg
// https://i.ibb.co/gDKLXpG/676.jpg	Magic-On-Every-Page-676.jpeg
// https://i.ibb.co/3CzBSFb/677.jpg	Science-Teacher-Periodic-Table-Elements-677.jpeg
// https://i.ibb.co/99F6NzP/678.jpg	Science-Think-Periodic-Table-Elements-678.jpeg
// https://i.ibb.co/fnhsKS6/679.jpg	Science-Is-Fun-Periodic-Table-Elements-679.jpeg
// https://i.ibb.co/Yf5MZLw/680.jpg	Teacher-I-Prefer-Educational-Rock-Star-680.jpeg
// https://i.ibb.co/qkcQ2W9/681.jpg	I-Run-On-Caffeine-And-Bacon-Science-Elements-681.jpeg
// https://i.ibb.co/dKvHRbx/682.jpg	Science-Talk-Nerdy-To-Me-682.jpeg
// https://i.ibb.co/Z8CTVmp/683.jpg	Problem-Solver-Maths-Teacher-683.jpeg
// https://i.ibb.co/fGZwwNf/684.jpg	Maths-Teachers-Rule-684.jpeg
// https://i.ibb.co/S69dFcs/685.jpg	In-Love-With-A-Science-Teacher-Elements-685.jpeg
// https://i.ibb.co/qpXnN0f/686.jpg	Mom-Bun-Yoga-Hair-Dont-Care-686.jpeg
// https://i.ibb.co/sQxx0Yv/687.jpg	Summer-Girls-Just-Wana-Have-Sun-687.jpeg
// https://i.ibb.co/0s3T7Np/688.jpg	Wild-And-Free-Mandala-688.jpeg
// https://i.ibb.co/G34fkdr/689.jpg	All-I-Need-Is-Vitamin-Sea-689.jpeg
// https://i.ibb.co/M5ySvTD/690.jpg	Find-Your-Balance-690.jpeg
// https://i.ibb.co/Wy184Jw/691.jpg	Sundae-Is-My-Favorite-Day-691.jpeg
// https://i.ibb.co/RNqFymc/692.jpg	Mom-Bun-Soul-Sisters-692.jpeg
// https://i.ibb.co/GsqZHYh/693.jpg	Summer-Vibes-693.jpeg
// https://i.ibb.co/jHjpd0G/694.jpg	Mom-Bun-Sunglasses-694.jpeg
// https://i.ibb.co/w0f4pVh/695.jpg	Summer-Good-Time-And-Tan-Lines-695.jpeg
// https://i.ibb.co/VT2WT6s/696.jpg	Mandala-Boho-Whale-Silhouette-696.jpeg
// https://i.ibb.co/47FLPSd/697.jpg	Summer-Days-Are-The-Best-Days-697.jpeg
// https://i.ibb.co/cDM0YYG/698.jpg	Namaste-698.jpeg
// https://i.ibb.co/JKZTGJp/699.jpg	All-You-Ever-Need-Is-Ice-Cream-699.jpeg
// https://i.ibb.co/XkSkGFY/700.jpg	Love-You-More-Than-Ice-Cream-700.jpeg
// https://i.ibb.co/RYpbnmK/701.jpg	Mom-Bun-Messy-Bun-Summer-Fun-701.jpeg
// https://i.ibb.co/zsFgXFY/702.jpg	Mandala-Boho-Dolphin-702.jpeg
// https://i.ibb.co/GnsTPNr/703.jpg	Beach-Please-Distressed-Grunge-703.jpeg
// https://i.ibb.co/jzjTFyb/704.jpg	Beach-Is-My-Happy-Place-704.jpeg
// https://i.ibb.co/Yc45y2s/705.jpg	Ice-Cream-Beach-705.jpeg
// https://i.ibb.co/sgtLWNy/706.jpg	Yoga-Hair-Dont-Care-706.jpeg
// https://i.ibb.co/tQN5t30/707.jpg	Beach-Is-My-Happy-Place-707.jpeg
// https://i.ibb.co/dMfQDWR/708.jpg	Be-Kind-708.jpeg
// https://i.ibb.co/LvDxYFX/709.jpg	Ice-Cream-Solves-Everything-709.jpeg
// https://i.ibb.co/NL74fKT/710.jpg	Summer-Beach-Junkie-710.jpeg
// https://i.ibb.co/3sDyT02/711.jpg	Summer-Beach-Babe-711.jpeg
// https://i.ibb.co/k50LP57/712.jpg	Summer-Just-Beachy-712.jpeg
// https://i.ibb.co/TBxpMFv/713.jpg	Unicorns-Are-Real-Its-Science-713.jpeg
// https://i.ibb.co/BgpZz6G/714.jpg	My-Unicorn-Ate-My-Homework-714.jpeg
// https://i.ibb.co/zx05yS3/715.jpg	I-Love-You-Dad-715.jpeg
// https://i.ibb.co/4RMyNfg/716.jpg	Dad-I-Love-You-716.jpeg
// https://i.ibb.co/QdJqxnj/717.jpg	My-Dad-Is-My-Hero-717.jpeg
// https://i.ibb.co/Y73Zxv9/718.jpg	I-Love-My-Daddy-718.jpeg
// https://i.ibb.co/sRt1sBV/719.jpg	Best-Dad-Ever-719.jpeg
// https://i.ibb.co/j3mLJ9F/720.jpg	I-Am-Sofa-King-Awesome-720.jpeg
// https://i.ibb.co/J773Vzr/721.jpg	Mum-I-Love-You-721.jpeg
// https://i.ibb.co/Ms7dKH2/722.jpg	I-Love-You-Mum-722.jpeg
// https://i.ibb.co/vs7w8T7/723.jpg	Mom-I-Love-You-723.jpeg
// https://i.ibb.co/K9B05H2/724.jpg	I-Love-You-Mom-724.jpeg
// https://i.ibb.co/mFX20XH/725.jpg	Sorry-Im-Late-I-Have-Kids-725.jpeg
// https://i.ibb.co/Y2SMLQs/726.jpg	Mom-Hair-Dont-Care-726.jpeg
// https://i.ibb.co/Ct465DC/727.jpg	Wedding-Welcome-To-Our-Special-Day-727.jpeg
// https://i.ibb.co/9yHH8B3/728.jpg	Wedding-Photo-Booth-728.jpeg
// https://i.ibb.co/yhc9cd6/729.jpg	Wedding-Diamond-Ring-Mr-Mrs-729.jpeg
// https://i.ibb.co/zJRZYxV/730.jpg	Wedding-Were-Getting-Hitched-730.jpeg
// https://i.ibb.co/v31kSnV/731.jpg	Wedding-Photo-Booth-731.jpeg
// https://i.ibb.co/D86p7zp/732.jpg	Wedding-Our-Love-Story-732.jpeg
// https://i.ibb.co/xhdX1TG/733.jpg	Wedding-Welcome-To-Our-Wedding-733.jpeg
// https://i.ibb.co/qkwQLVy/734.jpg	Brush-Stroke-Love-Heart-BFF-734.jpeg
// https://i.ibb.co/xY0yMtY/735.jpg	Brush-Stroke-TGIF-735.jpeg
// https://i.ibb.co/BwW4Z4H/736.jpg	Brush-Stroke-YOLO-736.jpeg
// https://i.ibb.co/PDDTp86/737.jpg	Brush-Stroke-BAE-737.jpeg
// https://i.ibb.co/7NZ6fDN/738.jpg	Brush-Stroke-WTF-738.jpeg
// https://i.ibb.co/p3s5sd6/739.jpg	Brush-Stroke-LOL-739.jpeg
// https://i.ibb.co/cwj24Nm/740.jpg	Brush-Stroke-Swirl-740.jpeg
// https://i.ibb.co/KLxZc3h/741.jpg	Brush-Stroke-741.jpeg
// https://i.ibb.co/N7g4SMj/742.jpg	Brush-Stroke-742.jpeg
// https://i.ibb.co/vJ89zpX/743.jpg	Brush-Stroke-Love-Heart-743.jpeg
// https://i.ibb.co/CBjSfhY/744.jpg	Brush-Stroke-Circle-744.jpeg
// https://i.ibb.co/7r3w8SC/745.jpg	Brush-Stroke-745.jpeg
// https://i.ibb.co/25gt4Dk/746.jpg	Brush-Stroke-746.jpeg
// https://i.ibb.co/NxLfCbF/747.jpg	Brush-Stroke-747.jpeg
// https://i.ibb.co/Nnk4yhM/748.jpg	Brush-Stroke-748.jpeg
// https://i.ibb.co/BBsCMT2/749.jpg	Distressed-Grunge-Circle-749.jpeg
// https://i.ibb.co/vJNTZfQ/750.jpg	Distressed-Grunge-Love-Heart-750.jpeg
// https://i.ibb.co/s1FXmvY/751.jpg	Distressed-Grunge-Circle-751.jpeg
// https://i.ibb.co/p4YYr9S/752.jpg	Brush-Stroke-752.jpeg
// https://i.ibb.co/R97T6kH/753.jpg	Brush-Stroke-753.jpeg
// https://i.ibb.co/f0kzhJQ/754.jpg	Brush-Stroke-754.jpeg
// https://i.ibb.co/T81YmfN/755.jpg	Brush-Stroke-755.jpeg
// https://i.ibb.co/VS4FHj6/756.jpg	Brush-Stroke-756.jpeg
// https://i.ibb.co/n3Jgt9q/757.jpg	Brush-Stroke-757.jpeg
// https://i.ibb.co/Wz23Ssj/758.jpg	Brush-Stroke-758.jpeg
// https://i.ibb.co/B39Qtfs/759.jpg	Brush-Stroke-759.jpeg
// https://i.ibb.co/3mnmVZ1/760.jpg	Brush-Stroke-760.jpeg
// https://i.ibb.co/68HHKFV/761.jpg	Brush-Stroke-761.jpeg
// https://i.ibb.co/QCzcD58/762.jpg	Brush-Stroke-762.jpeg
// https://i.ibb.co/L6FtDrC/763.jpg	Brush-Stroke-763.jpeg
// https://i.ibb.co/10pNcn9/764.jpg	Fall-Halloween-Welcome-Pumpkin-764.jpeg
// https://i.ibb.co/5LjzxHL/765.jpg	Fall-Yall-Pumpkin-Sunflower-765.jpeg
// https://i.ibb.co/CHr4H8d/766.jpg	Fall-Pumpkin-766.jpeg
// https://i.ibb.co/Xx4JwRQ/767.jpg	Halloween-Fall-Welcome-To-Our-Pumpkin-Patch-767.jpeg
// https://i.ibb.co/hsfyY3H/768.jpg	Fall-Pumpkin-Spice-And-All-Things-Nice-768.jpeg
// https://i.ibb.co/NrR4CN5/769.jpg	Halloween-Fall-Distressed-Grunge-Pumpkin-769.jpeg
// https://i.ibb.co/7twjGZN/770.jpg	I-Love-Fall-Most-Of-All-770.jpeg
// https://i.ibb.co/gS51n73/771.jpg	Fall-Is-In-The-Air-771.jpeg
// https://i.ibb.co/VjqD94V/772.jpg	Fall-Love-Heart-772.jpeg
// https://i.ibb.co/c1WkzbH/773.jpg	Halloween-Mandala-Pumpkin-773.jpeg
// https://i.ibb.co/gZnNXLT/774.jpg	Halloween-Wild-Witch-774.jpeg
// https://i.ibb.co/y8y4jDC/775.jpg	Having-Two-Kidneys-Is-So-Last-Year-775.jpeg
// https://i.ibb.co/9p54PDw/776.jpg	Leopard-Print-Brush-Stroke-776.jpeg
// https://i.ibb.co/xjGgqcr/777.jpg	Leopard-Print-Circle-777.jpeg
// https://i.ibb.co/KqrBy4p/778.jpg	Leopard-Print-Brush-Stroke-778.jpeg
// https://i.ibb.co/6grmMxS/779.jpg	Leopard-Print-Love-Heart-779.jpeg
// https://i.ibb.co/pxbyw2S/780.jpg	Halloween-Cute-Witch-Quote-780.jpeg
// https://i.ibb.co/CBFGdkh/781.jpg	Halloween-Ghoul-Squad-Quote-781.jpeg
// https://i.ibb.co/WkpdS9S/782.jpg	Halloween-Bootiful-Quote-782.jpeg
// https://i.ibb.co/qY0pX2w/783.jpg	Halloween-Hocus-Pocus-Quote-783.jpeg
// https://i.ibb.co/DM4Q9bV/784.jpg	Halloween-I-Put-A-Spell-On-You-Quote-784.jpeg
// https://i.ibb.co/JQxmvJS/785.jpg	Halloween-Wild-One-Quote-785.jpeg
// https://i.ibb.co/hVtPLB2/786.jpg	Halloween-Witches-Brew-Quote-786.jpeg
// https://i.ibb.co/LQMshTc/787.jpg	Happy-Halloween-787.jpeg
// https://i.ibb.co/prRT0N1/788.jpg	Halloween-Mandala-Black-Cat-788.jpeg
// https://i.ibb.co/YRnCB2w/789.jpg	Halloween-Mandala-Witches-Hat-789.jpeg
// https://i.ibb.co/wC2q7s5/790.jpg	Halloween-Mandala-Spider-790.jpeg
// https://i.ibb.co/0FFPsrF/791.jpg	Halloween-Mandala-Skull-791.jpeg
// https://i.ibb.co/kG25HLt/792.jpg	Halloween-Dads-Little-Monster-792.jpeg
// https://i.ibb.co/hcFLTMJ/793.jpg	Halloween-Moms-Little-Monster-793.jpeg
// https://i.ibb.co/p0Xh1XY/794.jpg	Halloween-Mums-Little-Monster-794.jpeg
// https://i.ibb.co/CP1MRPF/795.jpg	Halloween-Pumpkin-Queen-795.jpeg
// https://i.ibb.co/gW7xS8Y/796.jpg	Happy-Halloween-796.jpeg
// https://i.ibb.co/kQ6tMGM/797.jpg	Happy-Halloween-Skeleton-797.jpeg
// https://i.ibb.co/kysGjph/798.jpg	Happy-Halloween-Pumpkin-798.jpeg
// https://i.ibb.co/tMXM3ch/799.jpg	Halloween-Eat-Drink-Be-Scary-Quote-799.jpeg
// https://i.ibb.co/XCy8Pdy/800.jpg	Halloween-Mom-Bun-Momster-800.jpeg
// https://i.ibb.co/tJmcqxr/801.jpg	Halloween-Mum-Bun-Mumster-801.jpeg
// https://i.ibb.co/gjSZBh2/802.jpg	Sugar-Skull-Mom-Bun-802.jpeg
// https://i.ibb.co/qyTBqwG/803.jpg	Halloween-Mom-Bun-803.jpeg
// https://i.ibb.co/zX5X7B7/804.jpg	Halloween-Perfectly-Wicked-Quote-804.jpeg
// https://i.ibb.co/h1Jy6DG/805.jpg	Halloween-Wickedly-Cute-Quote-805.jpeg
// https://i.ibb.co/YXGZ4dx/806.jpg	Halloween-Wickedly-Handsome-Quote-806.jpeg
// https://i.ibb.co/dgkp7xH/807.jpg	Halloween-Witchy-Woman-Quote-807.jpeg
// https://i.ibb.co/j8bdTgB/808.jpg	Happy-Halloween-808.jpeg
// https://i.ibb.co/GCSfs1T/809.jpg	Halloween-Mom-Wife-Witch-Quote-809.jpeg
// https://i.ibb.co/5v9Hy1J/810.jpg	Halloween-Pumpkins-Witches-Hat-810.jpeg
// https://i.ibb.co/h9WxSXb/811.jpg	Halloween-Peace-Love-Candy-811.jpeg
// https://i.ibb.co/17FMHSw/812.jpg	Halloween-Peace-Love-Fall-812.jpeg
// https://i.ibb.co/Db7NT06/813.jpg	Halloween-Peace-Love-Magic-813.jpeg
// https://i.ibb.co/ThBDp6N/814.jpg	Peace-Love-Halloween-814.jpeg
// https://i.ibb.co/gtvNDp2/815.jpg	My-st-Halloween-815.jpeg
// https://i.ibb.co/S7BgbDv/816.jpg	Happy-Halloween-Witches-816.jpeg
// https://i.ibb.co/HV2HBYM/817.jpg	Halloween-Mandala-Black-Cat-Moon-817.jpeg
// https://i.ibb.co/jvqVrXf/818.jpg	Halloween-Mandala-Witch-818.jpeg
// https://i.ibb.co/cYWYxQj/819.jpg	Thanksgiving-Im-Only-Here-For-The-Turkey-819.jpeg
// https://i.ibb.co/jgSkZFd/820.jpg	Thanksgiving-Feeling-Thankful-Mandala-820.jpeg
// https://i.ibb.co/fQNTj9p/821.jpg	Thanksgiving-Grateful-Thankful-Blessed-821.jpeg
// https://i.ibb.co/ZmFyTL7/822.jpg	Thanksgiving-Put-On-Your-Fat-Pants-822.jpeg
// https://i.ibb.co/2WTzCLC/823.jpg	Thanksgiving-Im-Only-Here-For-The-Pie-823.jpeg
// https://i.ibb.co/k3Sv6wq/824.jpg	Thanksgiving-Turkey-Lets-Get-Basted-824.jpeg
// https://i.ibb.co/1ns8MK8/825.jpg	Thanksgiving-You-Wana-Piece-Of-Me-825.jpeg
// https://i.ibb.co/v415CDh/826.jpg	Thanksgiving-Im-Thankful-For-Vegans-826.jpeg
// https://i.ibb.co/rkgm410/827.jpg	Thanksgiving-Talk-Turkey-To-Me-827.jpeg
// https://i.ibb.co/BB3McVj/828.jpg	Thanksgiving-Feast-Mode-828.jpeg
// https://i.ibb.co/ckWrB5x/829.jpg	Thanksgiving-Happy-Turkey-Day-829.jpeg
// https://i.ibb.co/PNkvCCG/830.jpg	Thanksgiving-Official-Pie-Taster-830.jpeg
// https://i.ibb.co/30XdT8H/831.jpg	Halloween-Costume-Is-A-Responsible-Adult-831.jpeg
// https://i.ibb.co/3kPmgJ1/832.jpg	Halloween-This-Witch-Can-Be-Bribed-With-Chocolate-832.jpeg
// https://i.ibb.co/GWLBftT/833.jpg	Halloween-Zombies-Love-Brains-Dont-Worry-You-Will-Be-Safe-833.jpeg
// https://i.ibb.co/2yT5vcy/834.jpg	Halloween-Happy-Hallowine-834.jpeg
// https://i.ibb.co/8zpHkms/835.jpg	Floral-Mandala-835.jpeg
// https://i.ibb.co/CMPFrmJ/836.jpg	Summer-Heart-Collage-836.jpeg
// https://i.ibb.co/DgYN6BJ/837.jpg	Winter-Heart-Collage-837.jpeg
// https://i.ibb.co/rmQbd5z/838.jpg	Floral-Mandala-838.jpeg
// https://i.ibb.co/r34DM13/839.jpg	You-Are-The-Sprinkles-On-My-Donut-839.jpeg
// https://i.ibb.co/2g349yY/840.jpg	Donut-Worry-Be-Happy-840.jpeg
// https://i.ibb.co/dMKdRr6/841.jpg	All-You-Need-Is-Love-And-Donuts-841.jpeg
// https://i.ibb.co/Qv596X3/842.jpg	Squad-Goals-Donuts-842.jpeg
// https://i.ibb.co/syyLx87/843.jpg	Magic-Is-In-The-Air-Dandelion-Butterflies-843.jpeg
// https://i.ibb.co/Nmfjh22/844.jpg	Floral-Mandala-844.jpeg
// https://i.ibb.co/nfKRt8V/845.jpg	Mamasaurus-Dinosaur-845.jpeg
// https://i.ibb.co/Mft6Jc5/846.jpg	Daddysaurus-Dinosaur-846.jpeg
// https://i.ibb.co/8gZ2Rz7/847.jpg	I-Like-My-Mornings-Tall-Dark-And-Handsome-847.jpeg
// https://i.ibb.co/rGJhMnm/848.jpg	Caution-Contents-May-Be-Hot-And-Addictive-848.jpeg
// https://i.ibb.co/ZJsvkj6/849.jpg	Classy-With-A-Side-Of-Fierce-849.jpeg
// https://i.ibb.co/mv2MjTX/850.jpg	Sunshine-With-A-Little-Hurricane-850.jpeg
// https://i.ibb.co/Rg4sXgs/851.jpg	Donut-Stop-Believing-851.jpeg
// https://i.ibb.co/y4VwkPK/852.jpg	You-Are-The-Sprinkles-To-My-Donut-852.jpeg
// https://i.ibb.co/zZsP3b6/853.jpg	Donut-Stress-Just-Do-Your-Best-853.jpeg`;
// sheet.split("\n").forEach(function(itemm){
// var img =  itemm.split(" ")[0];
// var netimg =  itemm.split(" ")[1];

// databases.query('UPDATE productss SET image = "https://dropitsvg.com/dropitsvgcom/'+netimg+'" WHERE image = "'+img+'";' , function (error, results, fields) {


// })

// })

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

  var page = req.query.page;
 if(page==null || page==undefined || page<=0){
    page = 1
  };
  
  var lastp = page*20;
  var firstp = lastp-20;

  var searchterm = req.query.q;
  if(searchterm==null || searchterm==undefined || searchterm=="")
   return res.redirect("/shop")

  var worddb = 'SELECT * FROM productss where id like "%ded%"';
  searchterm.split(" ").forEach(function(keyword){


    worddb = worddb+" "+'OR  tags like "%'+keyword+'%"'

  });
 

  databases.query(worddb+" limit "+firstp+","+lastp+"" , function (error, results, fields) {
    if (error) throw error;
     console.log(results)
    //  res.json({results})
    if(results.length==0){
console.log("no results");
if(page==1){
  var keysearchhtml= "";
  var raport = `No Match For '`+searchterm+`'`
  res.render("search.ejs",{htmlsearch:keysearchhtml,raport:raport})
  
}else{
  var bostthrough = parseFloat(page)-1
  res.redirect("/search?q="+searchterm+"page="+bostthrough);
}





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

    var nextpageis = parseFloat(page)+1
    var lastpageis = parseFloat(page)-1
    var raport = `Search Result For '`+req.query.q+`'`
   res.render("search.ejs",{htmlsearch:keysearchhtml,raport:raport,nextpage:nextpageis,lastpage:lastpageis,searchterm:searchterm})
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
if(results.length==0)
 return res.render("error.ejs")
var dbword = 'SELECT * FROM  productss WHERE id= "'+results[0].idkey+'"'
results.forEach(function(ido){
  dbword = dbword +'OR id = "'+ido.idkey+'" '



});
databases.query(dbword, function (error, results, fields) {
  var drives = ``;
  results.forEach(function(imo){
  var driveid = imo.zip.replace("https://drive.google.com/file/d/","").replace("/edit","").replace("/","").replace("view?usp=drivesdk","").replace("?usp=drivesdk","").replace("view","")
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


