

//no error but code readability decrease and both are same ,=>next line ; required
if (5>4) console.log("hello"),
console.log("hello");
if (5>4) console.log("hello"),console.log("hello");
 /*--------*/

const LoginFromGoogle=true
const correctPass=true
const LoginFromGmail=false

if (LoginFromGoogle && correctPass){
    console.log("hii you can access resouses");
}

if (LoginFromGoogle || correctPass){
    console.log("hii are loged in");
}

/**------------------------ */
//swiches in redux useful
const month=3 //"march" srtring also an take

switch (month) {
    case 1:
        console.log("jan");
        // break;
    case 2:
            console.log("feb");
         //   break; 
    case 3:
            console.log("march");
           //     break; 
        
    default:
        console.log("invalid");
        break;
}
/*
falsy values ====>
//false , 0, -0, null , undefined, NaN, BigInt 0n, ""

truthy values======>
// '0' , 'false' , " ", [],{}, function(){}
*/

/*------------------------------*/

//check obj and array are EMPTY or not
const arr=[]
if(arr.length===0){
    console.log("arr is empty");
}

const obj={}
if(Object.keys(obj).length===0){
    console.log("obj is empty");
}
 console.log(false  == 0 == "") //=>false
 console.log(false  == 0 )// true
 console.log(false  == "" )// true
 console.log(""  == 0 )// true

// Nullish Coalescing Operator (??): null undefined
//null and undefined  safity check 
let val1= 5 ?? 10 
let val2= null ?? 10
let val3= undefined ?? 80
let val4= undefined ?? null ??80

console.table([val1,val2,val3 , val4])

// Terniary operator
// condition ? true : false

const iceCreamPrice =100
iceCreamPrice >= 200 ? console.log("don't take"):console.log("take it") 