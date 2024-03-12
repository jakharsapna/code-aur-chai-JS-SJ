const form =document.querySelector('form')

form.addEventListener("submit",function(e){
    e.preventDefault()
    const h=parseInt(document.querySelector("#height").value)
    const w=parseInt(document.querySelector("#weight").value)
    const res=document.querySelector("#result")
    if(h===""|| h<0 || isNaN(h)){
      res.innerHTML="Please enter a valid Height"
    }else if (w===""|| w<0 || isNaN(w)){
    res.innerHTML="Please enter a valid Weight"
   
    }else{
        const bmi=(w/((h*h)/10000)).toFixed(2)
        console.log(bmi);
        res.innerHTML=`Your BMI is <span>${bmi}</span>`
        const msg=document.querySelector('#msg')
        if(bmi<18.5){
            msg.innerHTML="you are Under Weight"
            msg.style.color="red"
        }
        else if(18.5<bmi && bmi<24.9){
            msg.innerHTML="you are in Normal range"
            msg.style.color="green"
        }else if(bmi >25.0){
            msg.innerHTML="you are Over Weight"
            msg.style.color="red"
        }
    }
})