'use strict'; // treat all js code as newer version
// alert(3+3) we are using nodejs, not browser
console.log("hello sapna");

// console.log("gghh");console.log(56); code readability should be heigh
let name
console.table([name,"sapna","jakhar","s/w Engineer"]) 

/* don't use var b/c no scope
*/

//data-types (premeetive)

let age=23 //number => range 2 to power 53    = (=means same type as string number etc)
let Fname="sapna" //string     =
let graduate=true //boolean   =
let job=null //empty ex-temp standalone value   typeof=>object
let ctc;//undefined       =
 // 6.symbol=> unique value //7. bigint =>for large no ex- in fb , stock market
 console.log('premeetive');
console.log(Symbol('123')===Symbol('123'));
let bigintValue=342746284n
console.table([typeof bigintValue, bigintValue]);

 //************Conversion********** */

 console.table([Number("34") , Number("34abc"), Number("sapna") ,Number(""), Number(true)]); //all typeof=>number

 console.table([String(45), "sana" +" jakhar"])
 
 
 //************Operations*********** */

 console.log(1+'6'+2);
 console.log(1+6+"2");
 console.log("1"+6+2);


 /***not best practice
 console.log(1+3*8%7) => give paranthesis for it console.log(1+((3*8)%7))
 */

 /*****  tricky one */  //avoid these type of code or conversion or comparision
 console.table([+true , +""]) //convert into boolean but true+ error

console.table([null > 0 ,null==0 , null<=0 , null>=0]) //but for undefined all time false


 /****************** */

 //strickt check( === )//loose check(==)

