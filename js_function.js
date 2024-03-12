///
//fun definition number1, number2 are parameters (may be anything string, number at definition time)
function addTwoNumbers(number1,number2){
    console.log(number1+number2); //11
}

const resAdd= addTwoNumbers(5,6)// if addTwoNumbers() //NaN
console.log(resAdd); //undefined
// it's doesn't return anything
function addTwoNums(number1,number2){
    const res =number1+number2
    return res
    console.log("hello ji");
}
const res=addTwoNums(45,6) //res allowed diff scope
console.log(res);


/**------------------------------------- */

function loginUserMsg(username) {
    // if (username===undefined ) return console.log("please enter username");
    if (!username) return console.log("please enter username"); //both are same username===undefined and !username
    return `hello ${username} !! `
}

console.log(loginUserMsg("sapna"));//hello sapna !! 
console.log(loginUserMsg())//hello undefined !!

/***---------------------------------------- */
//false values : undefined /""/ false/ !value

//deafult value

function name1(params="shakti") {
    return `hello ${params}`
}
console.log(name1());

/***-------------------------------------------- */
//rest operator
function hero(...rest) {
    console.log(`heroes: ${rest}`, rest); //rest opr return arr//...xyz //...X
}

hero("shaktiman","Ram","Krishna")

/**---------------------------------------------------- */
//we can pass obj and arr as argument 
/**------------------------------------------------ */

//scop in js : fun /if else =>{}// not obj that was decr
 
/***----------------------------------------------- */
//closures in js :nested function child fun can use parent fun componets

function one() {
    const username="sapna"
    function two() {
        const myname="dream"
        console.log(`username ${username}`);
    }
    //console.log(myname);   //error out of scope
    //ReferenceError: myname is not defined
    two()

}
one()

 /***--------------------------------------------- */
 
 //in js var are powerfull an hold anything fun , value expression etc
 
 /**------------------------- */
 //hoisting for reg fun not for fun exp and arrow fun
 add(5,6)
function add(n1,n2){
    console.log(n1+n2)
}
// add1(4,6) hoisting not allowed in fun expression
const  add1=function (n1,n2){
    console.log(n1+n2)
}
add1(4,6)

/**------------------------------------------------------- */

// this in obj but not in fun
//this refer to current context

const chai={
    name:"green tea",
    drink:function(){console.log(this.name)}
    //this :{ name: 'green tea', drink: [Function: drink] }
}
chai.drink()
console.log(this)//{} in node env but in browser this refer to window obj

/***-------- */
// inside reg fun
function Guru() {
    const name="deva"
    console.log(this); //setInter... many methods
    console.log(this.name);//undefined in obj can access but in fun not
}
Guru()
/**------------ */
// inside arrow fun
const arjun=()=>{
    let  name="DhanuDhari"
    console.log(this)     //{}
    console.log(this.name);   //undefined

}
arjun()
// const add=(n,m)=> n+m //implicit return
// const add=(n,m)=> {return n+m}// explicit return

//obj return
const objArrow=()=>({name:"devi"})
console.log(objArrow); // ref :[Function: objArrow]
console.log(objArrow()); //method or fun exicution //{ name: 'devi' }

/**----------------------------- */
//IIFE : database connection start as file start , global scope polution escape
//Immediately Invoked Function Expression

(function ice() {
  ///named IIFE
    console.log("in winter");
})(); //()() also need semicolon ton stop

/*------ */
((country)=> {
    //simple IIFE
    console.log(`winters in ${country}`);
})("India");

/*-------------------------------------*/
