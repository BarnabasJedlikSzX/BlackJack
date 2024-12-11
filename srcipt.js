const jelek = ["karo", "treff", "pikk", "tök"]
const szamok = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "B", "D", "K", "A"]

const kihuzott = []

function emeles(x){
    const tet = document.getElementById('tet')
    const penz = document.getElementById('penz')
    if (tet.innerText == "?"){
        tet.innerText = x
    }
    else{        
        tet.innerText = parseInt(tet.innerText) + x
    }

    if (parseInt(tet.innerText) > parseInt(penz.innerText)){
        alert("Nem emelhetsz többet!")
        tet.innerText = parseInt(penz.innerText)
    }

}

var clicks = 2
function hit(){
    clicks += 1
    console.log(clicks)
    const jel = jelek[Math.floor(Math.random()*jelek.length)]
    console.log(jel)
    const szam = szamok[Math.floor(Math.random()*szamok.length)]
    console.log(szam)
    
}


 function double(){
     const tet = document.getElementById('tet')
     const penz = document.getElementById('penz')
     parseInt(tet.innerText) * 2
     if (parseInt(tet.innerText) > parseInt(penz.innerText)){
         alert("Nem emelhetsz többet!")
         tet.innerText = parseInt(penz.innerText)
     }
}