let homeScore=document.getElementById("home-score")
let guestScore=document.getElementById("guest-score")

let countHome =0
let countGuest =0

function check(){
    if(countGuest>countHome){
        homeScore.style.color="green"
        guestScore.style.color="#F94F6D"
    }
    else{
        guestScore.style.color="green"
        homeScore.style.color="#F94F6D"
    }
}
check();

function homeAdd1(){
    check()
    countHome += 1
    homeScore.innerText=countHome
}

function homeAdd2(){
    check()
  countHome += 2
    homeScore.innerText=countHome
}
function homeAdd3(){
    check()
    countHome += 3
    homeScore.innerText=countHome
}
function guestAdd1(){
    check()
    countGuest += 1
    guestScore.innerText=countGuest
}
function guestAdd2(){
    check()
    countGuest += 2
    guestScore.innerText=countGuest
}
function guestAdd3(){
    check()
   countGuest += 3
    guestScore.innerText=countGuest
}
function clear1(){
    check()
    countHome=0
    countGuest=0
     homeScore.innerText= countHome
     guestScore.innerText= countGuest
}