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
    
}
