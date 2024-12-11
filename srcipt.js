const jelek = ["karo", "treff", "pikk", "tök"]
const szamok = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "B", "D", "K", "A"]

const kihuzott = []

function emeles(x){
    const tet = document.getElementById('tet')
    if (tet.innerText == "?"){
        tet.innerText = x
    }
    else{        
        tet.innerText = parseInt(tet.innerText) + x
    }

    if (parseInt(tet.innerText) > 250){
        alert("Nem emelhetsz többet!")
        tet.innerText = 250
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
     const dupla = parseInt(tet.innerText) * 2
     if (dupla > parseInt(penz.innerText)){
         alert("Nincs ennyi pénzed!")
     }
     else{
        tet.innerText = dupla
        document.getElementById('double').style.opacity = 0.5
     }
}

function stand(){
    const tet = document.getElementById('tet')
    const penz = document.getElementById('penz')
    if (parseInt(tet.innerText) == 0){
        alert("Emeld a tétet!")
    }
    else{
        maradek = parseInt(penz.innerText) - parseInt(tet.innerText)
        penz.innerText = maradek
        document.getElementById('stand').style.opacity = 0.5
        document.getElementById('hit').style.opacity = 0.5
        document.getElementById('zseton1').style.opacity = 0.5
        document.getElementById('zseton5').style.opacity = 0.5
        document.getElementById('zseton10').style.opacity = 0.5
        document.getElementById('zseton25').style.opacity = 0.5
    }

}