const moreClickDiv = document.getElementById('moreClick')
const lessClickDiv = document.getElementById('lessClick')
const extraDivOne = document.getElementById('extraDivOne')
const extraDivTwo = document.getElementById('extraDivTwo')
const extraDivThree = document.getElementById('extraDivThree')

if (moreClickDiv){
    moreClickDiv.addEventListener('click', showMore)
}
if (lessClickDiv){
    lessClickDiv.addEventListener('click', showLess)
}

function showMore(){
    moreClickDiv.hidden = true
    lessClickDiv.hidden = false
    extraDivOne.hidden = false
    extraDivTwo.hidden = false
    extraDivThree.hidden = false
}


function showLess(){
    moreClickDiv.hidden = false
    lessClickDiv.hidden = true
    extraDivOne.hidden = true
    extraDivTwo.hidden = true
    extraDivThree.hidden = true
}
document.getElementById('icon').addEventListener('click', myFunction)
function myFunction() {
    let x = document.getElementById("headerLeft");
    if (x.className === "header-left") {
        x.className += " responsive";
    } else {
        x.className = "header-left";
    }
    setTimeout(()=>x.classList.remove('responsive'),2500)
}