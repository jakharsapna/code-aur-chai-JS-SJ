//
/**------------------------------------------ */

const date= new Date()  //create instance //obj

console.log(date)   // 2024-03-10T18:01:31.458Z

console.log(date.getDate()); //10 (10 march)
console.log(date.getDay());  //0 (sun)
console.log(date.toString());  //Sun Mar 10 2024 18:04:59 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString()); //Sun Mar 10 2024 

/*------------------------------------------- */

const nowdate= Date.now() //ms number

console.log(nowdate);  //  1710094085499 (ms)
console.log(Math.floor(nowdate/1000));  //1710094189  (sec)

/**-------------------------------------------- */

//compare time date and nowdate
console.log(date.getTime())// 1710094519285
console.log(date.getTime()- nowdate)  //-6

/**------------------------------------------------------ */

//customize
console.log(new Date().toLocaleDateString('default',
{
    weekday:"long"
})) // Sunday

/***------------------------------------ */
//our date
const mydate=new Date("25-04-1999") //Invalid Date //1-12 month
console.log(mydate);