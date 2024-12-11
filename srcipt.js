const jelek = ["karo", "treff", "pikk", "tök"]
const szamok = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "B", "D", "K", "A"]

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

function hit(){
    const jel = jelek[Math.floor(Math.random()*jelek.length)]
    console.log(jel)
    const szam = szamok[Math.floor(Math.random()*szamok.length)]
    console.log(szam)
    
}
