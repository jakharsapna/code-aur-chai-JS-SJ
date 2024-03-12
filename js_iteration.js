// for 
for (let i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
    
}
//console.log(element);//error

for (let i = 1; i <= 10; i++) {
    console.log(`table ${i}`)
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i*j}`);
        
    }
    
}

//// in js out of range show undefiend

// do while / while
let value=10;
while (value>0) {
  console.log(value);  
  value=value-2;
}
let score= 1;
do {
    console.log("score is ", score);
    score =score+1
} while (score<10); // very less use


/// for of 
//["", "",""] // string
//[{},{},{}]
const number=[1,3,4,5,6]
for (const num of number) {
    console.log(num);
}

// map object hold key value pairs unique keys

const map=new Map()
map.set(1,"a")
map.set(1,"a")
map.set(1,"a")
map.set(2,"a")
map.set(1,"b")
console.log(map);//Map(2) { 1 => 'b', 2 => 'a' }

for (let [k,v] of map){
    console.log(k," = ", v);
}

const obj1={
    1:"hhh",
    2:"gshkjs"
} 
/**
// for of

for (let [k,v] of obj1){
    console.log(k," = ", v); //TypeError: obj1 is not iterable
} 

*/
// for in =>keys
for (const key in obj1) {
    console.log(key, obj1[key]);
}

const arr2=[5,6,8,9,75,5,54]

// for in on arr 0  1 2 3..indexs are keys of arr

for (const key in arr2 ) {
   console.log(arr2[key]);
} 

/*------------------------------------------- */
//maps are npt iterable
//for in on map not allowed

/**-------------------------------- */

//forEach
const coding=["js","HTML","CSS"]

coding.forEach((item,index,arr)=>console.log(item, index, arr)) //callback fun fun as argu w/o name

// js 0 [ 'js', 'HTML', 'CSS' ]
// HTML 1 [ 'js', 'HTML', 'CSS' ]
// CSS 2 [ 'js', 'HTML', 'CSS' ]


// [{}{}{}] here obj are items

// forEach  doen't return any value 

let val=coding.forEach((e)=>{
    // console.log(e);
    return e
})
console.log(val); //undefined
/**------------------------------------------------- */
//want to return then map, filter, map : return new arr
//arr.push() in forEach using extra arr

/***--------------------------------- */
//chainig
const res1=arr2.map((e)=>e*2).map((e)=>e+1).filter((e)=>e>50)
console.log(res1);

/**---------------------- */
//reduce method
//const initialValue=0  // initial value only once ask further res everytime in acc
// acc empty var take initial value
//const newArr=arr.reduce((acc,curr)=>acc+curr,initialValue)
const myTotal=arr2.reduce((acc,currval)=>{
    console.log(acc,currval)
    return acc+currval
},0)
console.log(myTotal)

/**----------------------------------------------- */