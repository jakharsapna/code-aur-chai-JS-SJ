
const tinderobj= new Object();//singleton obj
console.log(tinderobj);
const tindObj={}// non-singlton obj

tinderobj.name="sapna"
tinderobj.id="1233bnvm"
tinderobj.isLoggedIn=false

console.log(tinderobj);

const regularUser={
    email:"sj25@gmail.com",
    fullname:{
        username:{
            fisrtName:"Shiva",
            LastName:"Jakhar"
        }
    }
}
console.log(regularUser.fullname.username.fisrtName);

const obj1={
    1:"a",
    2:"b"
}
const obj2={
    3:"ab",
    4:"bc"
}
const obj3={
    32:"abj",
    45:"bck"
}
const resObj=Object.assign({},obj1,obj2,obj3)// {}:target ....rest: source
console.log(resObj);

console.log({...obj1,...obj2,...obj3}); //{...xyz}spread opr commanly use

const resObjToArr=Object.keys(tinderobj) //also valuesj
console.log(resObjToArr); //now can apply loops

console.log(Object.entries(tinderobj)); // everty keys-value as arr [[],[]]

console.log(tinderobj.hasOwnProperty("id"));//check value exit or not

/**----------------------------------- */
//destructring

const course={
    coursename:"js course",
    price:15000,
    location:"delhi"

}
//course.coursename
const {coursename:cName,price}=course
console.log(price, cName);

// json {"name":"sapna","id":1} ApI data