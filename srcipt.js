const kartyak = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, ]
const jelek = ["kor", "karo", "treff", "pikk"]
const szamok = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

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

let clicks = 0
function hit(){
    console.log(clicks)
    if (clicks <= 10)
        clicks += 1
    if (clicks == 1){
        document.getElementById('sajatlap1').style.display = "block"
        jel1 = Math.floor(Math.random() * 4)
        szam1 = Math.floor(Math.random() * 13)

        

        document.getElementById('jobbalsokep1').src = "jelek/" + jelek[jel1] + ".png"
        document.getElementById('balfelsokep1').src = "jelek/" + jelek[jel1] + ".png"      
        document.getElementById('jobbfelso1').innerHTML = "<p>" + szamok[szam1] + "</p>"
        document.getElementById('balalso1').innerHTML = "<p>" + szamok[szam1] + "</p>"
        
        document.getElementById('sajatlap2').style.display = "block"
        jel2 = Math.floor(Math.random() * 4)
        szam2 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep2').src = "jelek/" + jelek[jel2] + ".png"
        document.getElementById('balfelsokep2').src = "jelek/" + jelek[jel2] + ".png"
        document.getElementById('jobbfelso2').innerHTML = "<p>" + szamok[szam2] + "</p>"
        document.getElementById('balalso2').innerHTML = "<p>" + szamok[szam2] + "</p>"
    }
    else if (clicks == 2){
        document.getElementById('sajatlap3').style.display = "block"
        jel3 = Math.floor(Math.random() * 4)
        szam3 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep3').src = "jelek/" + jelek[jel3] + ".png"
        document.getElementById('balfelsokep3').src = "jelek/" + jelek[jel3] + ".png"
        document.getElementById('jobbfelso3').innerHTML = "<p>" + szamok[szam3] + "</p>"
        document.getElementById('balalso3').innerHTML = "<p>" + szamok[szam3] + "</p>"
    }
    else if (clicks == 3){
        document.getElementById('sajatlap4').style.display = "block"
        jel4 = Math.floor(Math.random() * 4)
        szam4 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep4').src = "jelek/" + jelek[jel4] + ".png"
        document.getElementById('balfelsokep4').src = "jelek/" + jelek[jel4] + ".png"
        document.getElementById('jobbfelso4').innerHTML = "<p>" + szamok[szam4] + "</p>"
        document.getElementById('balalso4').innerHTML = "<p>" + szamok[szam4] + "</p>"
    }
    else if (clicks == 4){
        document.getElementById('sajatlap5').style.display = "block"
        jel5 = Math.floor(Math.random() * 4)
        szam5 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep5').src = "jelek/" + jelek[jel5] + ".png"
        document.getElementById('balfelsokep5').src = "jelek/" + jelek[jel5] + ".png"
        document.getElementById('jobbfelso5').innerHTML = "<p>" + szamok[szam5] + "</p>"
        document.getElementById('balalso5').innerHTML = "<p>" + szamok[szam5] + "</p>"
    }
    else if (clicks == 5){
        document.getElementById('sajatlap6').style.display = "block"
        jel6 = Math.floor(Math.random() * 4)
        szam6 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep6').src = "jelek/" + jelek[jel6] + ".png"
        document.getElementById('balfelsokep6').src = "jelek/" + jelek[jel6] + ".png"
        document.getElementById('jobbfelso6').innerHTML = "<p>" + szamok[szam6] + "</p>"
        document.getElementById('balalso6').innerHTML = "<p>" + szamok[szam6] + "</p>"
    }
    else if (clicks == 6){
        document.getElementById('sajatlap7').style.display = "block"
        jel7 = Math.floor(Math.random() * 4)
        szam7 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep7').src = "jelek/" + jelek[jel7] + ".png"
        document.getElementById('balfelsokep7').src = "jelek/" + jelek[jel7] + ".png"
        document.getElementById('jobbfelso7').innerHTML = "<p>" + szamok[szam7] + "</p>"
        document.getElementById('balalso7').innerHTML = "<p>" + szamok[szam7] + "</p>"
    }
    else if (clicks == 7){
        document.getElementById('sajatlap8').style.display = "block"
        jel8 = Math.floor(Math.random() * 4)
        szam8 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep8').src = "jelek/" + jelek[jel8] + ".png"
        document.getElementById('balfelsokep8').src = "jelek/" + jelek[jel8] + ".png"
        document.getElementById('jobbfelso8').innerHTML = "<p>" + szamok[szam8] + "</p>"
        document.getElementById('balalso8').innerHTML = "<p>" + szamok[szam8] + "</p>"
    }
    else if (clicks == 8){
        document.getElementById('sajatlap9').style.display = "block"
        jel9 = Math.floor(Math.random() * 4)
        szam9 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep9').src = "jelek/" + jelek[jel9] + ".png"
        document.getElementById('balfelsokep9').src = "jelek/" + jelek[jel9] + ".png"
        document.getElementById('jobbfelso9').innerHTML = "<p>" + szamok[szam9] + "</p>"
        document.getElementById('balalso9').innerHTML = "<p>" + szamok[szam9] + "</p>"
    }
    else if (clicks == 9){
        document.getElementById('sajatlap10').style.display = "block"
        jel10 = Math.floor(Math.random() * 4)
        szam10 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep10').src = "jelek/" + jelek[jel10] + ".png"
        document.getElementById('balfelsokep10').src = "jelek/" + jelek[jel10] + ".png"
        document.getElementById('jobbfelso10').innerHTML = "<p>" + szamok[szam10] + "</p>"
        document.getElementById('balalso10').innerHTML = "<p>" + szamok[szam10] + "</p>"
    }
    else if (clicks == 10){
        document.getElementById('sajatlap11').style.display = "block"
        jel11 = Math.floor(Math.random() * 4)
        szam11 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep11').src = "jelek/" + jelek[jel11] + ".png"
        document.getElementById('balfelsokep11').src = "jelek/" + jelek[jel11] + ".png"
        document.getElementById('jobbfelso11').innerHTML = "<p>" + szamok[szam11] + "</p>"
        document.getElementById('balalso11').innerHTML = "<p>" + szamok[szam11] + "</p>"
    }

}