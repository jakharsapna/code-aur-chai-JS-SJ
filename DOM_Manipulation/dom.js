console.log(window)
console.log(window.document)//
console.log(document)// not all methods so use
console.dir(document)

/**-------------------------------------------- */

let headingEl=document.createElement('h1')
headingEl.textContent="hello jiiii"
let h1El = document.querySelector('h1') //return single

// node collection/ html collection have to conver in arr use Array.from('html elm')

Array.from(h1El).forEach(element => {
    element.style.color="green"
});

//querySelectorAll('h1')/('#idName')/('.className') //return all

// h1El.innerText : only visible textContent
// h1El.textContent : whole content is except inner html tag name
// h1El.innerHTML :whole content and inner tags are also visible