let value1=25
let value2=35

function add(num1, num2){
    return num1+num2
}

const res1=add(value1, value2)
const res2=add(10,15)


/*
//js is single thread 
// 3 exicution context will be created here

1.global exi (this exist)

2.mem phase values=undefined

3.exicution phase val=.... fun then

//new var env +exicution thread =>1.mem phase 2. exi phase (every time each return delted and again created 1. 2. phase in fun)
 to global exicution and exicution phase val=.. and  resulte return
 */

 ///stack calls

/*exicute in FIFO

|3.fun2/ method |
|2.fun1         |
|1.global ex    |
|_______________|

*/