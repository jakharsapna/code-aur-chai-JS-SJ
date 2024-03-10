// Array, obj, function in js treat as functions and fun are obj functions
// copy: default[shallow copy/partial => ref (orignal change)] 2. deep copy :diff copy (value) orignal not affected
 /*---------------------------- */

const arr1= new Array(1,2,3,4,5) //prototype more methods access
arr1.push(6,67)
arr1.unshift(33,78,89)
console.log(arr1)
// arr1.pop()                        /// last value
// arr1.shift()                      ///first value
// console.log(arr1)
// shift()[]pop() for delete, only one value 

/*---------------------------- */

// console.log(arr1.includes(6))

// console.log(arr1.indexOf(5))
 
/*----------------------------- */
let newArr1=arr1.join()

console.log(newArr1)
console.log(typeof newArr1,typeof(arr1))

//conatination: add 2 arr in one , push() :[---,[]]
let arr2=[5,6,4,2,2]
console.log(arr1.concat(arr2) , [...arr1 ,...arr2]);

/*-------------------------------------------------------------- */
const arr3=[52,3,4.44 ,["344","rsyy"],"gdj",[3,[667]]]
console.log(arr3.flat(Infinity));

/**------------------------------------------------------------- */
//ask q or convert Array.method()
console.log(Array.isArray([6,8,8]));
console.log(Array.from("sapna"));
console.log(Array.from({name:"sapna"}));//intresting :[] empty arr o/p

console.log(Array.of(1222.3,44,55,"dgsjdh"));

/**---------------------------------------------------------------- */

 //Math fun no need to import access methds by Math.
 const mathArr=[2,3,4,5,677,8]
 console.table([ Math.min(...mathArr)  , Math.max(...mathArr),Math.sqrt(25) ,Math.abs(-4),Math.round(44.19), Math.pow(8,2), Math.floor(Math.random()*100) ])
//Math.abs() make +ve value
 //random no. between a range (min, max) (10,20)
 console.table([Math.floor((Math.random()*(20-10 +1))+10)])
 let min=20
 let max=25
 console.log( Math.floor ( (Math.random() * (max-min+1))  + min ))