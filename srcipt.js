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

function ellenorzes(oszto, sajat){
    if (oszto > 16 && oszto > sajat){
        alert("Veszítettél!")
        levonas = parseInt(document.getElementById('tet').innerText)
        meow = parseInt(document.getElementById('penz').innerText)
        document.getElementById('penz').innerText = meow - levonas
        document.getElementById('sajatlap1').style.display = "none"
        document.getElementById('sajatlap2').style.display = "none"
        document.getElementById('sajatlap3').style.display = "none"
        document.getElementById('sajatlap4').style.display = "none"
        document.getElementById('sajatlap5').style.display = "none"
        document.getElementById('sajatlap6').style.display = "none"
        document.getElementById('sajatlap7').style.display = "none"
        document.getElementById('sajatlap8').style.display = "none"
        document.getElementById('sajatlap9').style.display = "none"
        document.getElementById('sajatlap10').style.display = "none"
        document.getElementById('sajatlap11').style.display = "none"
        document.getElementById('osztoszam').innerText = "??"
        document.getElementById('osztolap1').style.display = "none"
        document.getElementById('osztolap2').style.display = "none"
        document.getElementById('osztolap3').style.display = "none"
        document.getElementById('osztolap4').style.display = "none"
        document.getElementById('osztolap5').style.display = "none"
        document.getElementById('osztolap6').style.display = "none"
        document.getElementById('osztolap7').style.display = "none"
        document.getElementById('osztolap8').style.display = "none"
        document.getElementById('osztolap9').style.display = "none"
        document.getElementById('osztolap10').style.display = "none"
        document.getElementById('osztolap11').style.display = "none"
        document.getElementById('sajatszam').innerText = "??"
        document.getElementById('tet').innerText = "?"
        ossz = 0
        osztoossz = 0
    }

    else if (oszto > 16 && sajat>oszto){
        alert("Nyertél!")
        meow = parseInt(document.getElementById('penz').innerText)
        nyeremeny = parseInt(document.getElementById('tet').innerText)*2
        document.getElementById('penz').innerText = meow + nyeremeny
        document.getElementById('sajatlap1').style.display = "none"
        document.getElementById('sajatlap2').style.display = "none"
        document.getElementById('sajatlap3').style.display = "none"
        document.getElementById('sajatlap4').style.display = "none"
        document.getElementById('sajatlap5').style.display = "none"
        document.getElementById('sajatlap6').style.display = "none"
        document.getElementById('sajatlap7').style.display = "none"
        document.getElementById('sajatlap8').style.display = "none"
        document.getElementById('sajatlap9').style.display = "none"
        document.getElementById('sajatlap10').style.display = "none"
        document.getElementById('sajatlap11').style.display = "none"
        document.getElementById('sajatszam').innerText = "??"
        document.getElementById('tet').innerText = "?"
        ossz = 0
        osztoossz = 0
        document.getElementById('osztoszam').innerText = "??"
        document.getElementById('osztolap1').style.display = "none"
        document.getElementById('osztolap2').style.display = "none"
        document.getElementById('osztolap3').style.display = "none"
        document.getElementById('osztolap4').style.display = "none"
        document.getElementById('osztolap5').style.display = "none"
        document.getElementById('osztolap6').style.display = "none"
        document.getElementById('osztolap7').style.display = "none"
        document.getElementById('osztolap8').style.display = "none"
        document.getElementById('osztolap9').style.display = "none"
        document.getElementById('osztolap10').style.display = "none"
        document.getElementById('osztolap11').style.display = "none"
    }

    else if (oszto == sajat){
        alert("Döntetlen!")
        meow = parseInt(document.getElementById('penz').innerText)
        nyeremeny = parseInt(document.getElementById('tet').innerText)
        document.getElementById('penz').innerText = meow + nyeremeny
        document.getElementById('sajatlap1').style.display = "none"
        document.getElementById('sajatlap2').style.display = "none"
        document.getElementById('sajatlap3').style.display = "none"
        document.getElementById('sajatlap4').style.display = "none"
        document.getElementById('sajatlap5').style.display = "none"
        document.getElementById('sajatlap6').style.display = "none"
        document.getElementById('sajatlap7').style.display = "none"
        document.getElementById('sajatlap8').style.display = "none"
        document.getElementById('sajatlap9').style.display = "none"
        document.getElementById('sajatlap10').style.display = "none"
        document.getElementById('sajatlap11').style.display = "none"
        document.getElementById('sajatszam').innerText = "??"
        document.getElementById('tet').innerText = "?"
        ossz = 0
        osztoossz = 0
        document.getElementById('osztoszam').innerText = "??"
        document.getElementById('osztolap1').style.display = "none"
        document.getElementById('osztolap2').style.display = "none"
        document.getElementById('osztolap3').style.display = "none"
        document.getElementById('osztolap4').style.display = "none"
        document.getElementById('osztolap5').style.display = "none"
        document.getElementById('osztolap6').style.display = "none"
        document.getElementById('osztolap7').style.display = "none"
        document.getElementById('osztolap8').style.display = "none"
        document.getElementById('osztolap9').style.display = "none"
        document.getElementById('osztolap10').style.display = "none"
        document.getElementById('osztolap11').style.display = "none"
    }
    else if (oszto >21){
        alert("Nyertél!")
        meow = parseInt(document.getElementById('penz').innerText)
        nyeremeny = parseInt(document.getElementById('tet').innerText)*2
        document.getElementById('penz').innerText = meow + nyeremeny
        document.getElementById('sajatlap1').style.display = "none"
        document.getElementById('sajatlap2').style.display = "none"
        document.getElementById('sajatlap3').style.display = "none"
        document.getElementById('sajatlap4').style.display = "none"
        document.getElementById('sajatlap5').style.display = "none"
        document.getElementById('sajatlap6').style.display = "none"
        document.getElementById('sajatlap7').style.display = "none"
        document.getElementById('sajatlap8').style.display = "none"
        document.getElementById('sajatlap9').style.display = "none"
        document.getElementById('sajatlap10').style.display = "none"
        document.getElementById('sajatlap11').style.display = "none"
        document.getElementById('sajatszam').innerText = "??"
        document.getElementById('tet').innerText = "?"
        ossz = 0
        osztoossz = 0
        document.getElementById('osztoszam').innerText = "??"
        document.getElementById('osztolap1').style.display = "none"
        document.getElementById('osztolap2').style.display = "none"
        document.getElementById('osztolap3').style.display = "none"
        document.getElementById('osztolap4').style.display = "none"
        document.getElementById('osztolap5').style.display = "none"
        document.getElementById('osztolap6').style.display = "none"
        document.getElementById('osztolap7').style.display = "none"
        document.getElementById('osztolap8').style.display = "none"
        document.getElementById('osztolap9').style.display = "none"
        document.getElementById('osztolap10').style.display = "none"
        document.getElementById('osztolap11').style.display = "none"
    }
    else{
        alert("Nyertél!")
        meow = parseInt(document.getElementById('penz').innerText)
        nyeremeny = parseInt(document.getElementById('tet').innerText)*2
        document.getElementById('penz').innerText = meow + nyeremeny
        document.getElementById('sajatlap1').style.display = "none"
        document.getElementById('sajatlap2').style.display = "none"
        document.getElementById('sajatlap3').style.display = "none"
        document.getElementById('sajatlap4').style.display = "none"
        document.getElementById('sajatlap5').style.display = "none"
        document.getElementById('sajatlap6').style.display = "none"
        document.getElementById('sajatlap7').style.display = "none"
        document.getElementById('sajatlap8').style.display = "none"
        document.getElementById('sajatlap9').style.display = "none"
        document.getElementById('sajatlap10').style.display = "none"
        document.getElementById('sajatlap11').style.display = "none"
        document.getElementById('sajatszam').innerText = "??"
        document.getElementById('tet').innerText = "?"
        ossz = 0
        osztoossz = 0
    }

}

let osztoossz = 0
function stand(){
    const tet = document.getElementById('tet')
    const penz = document.getElementById('penz')
    maradek = parseInt(penz.innerText) - parseInt(tet.innerText)
    penz.innerText = maradek
    document.getElementById('stand').style.opacity = 0.5
    document.getElementById('hit').style.opacity = 0.5
    document.getElementById('double').style.opacity = 0.5
    document.getElementById('zseton1').style.opacity = 0.5
    document.getElementById('zseton5').style.opacity = 0.5
    document.getElementById('zseton10').style.opacity = 0.5
    document.getElementById('zseton25').style.opacity = 0.5
    
    document.getElementById('osztolap1').style.display = "block"
    osztojel1 = Math.floor(Math.random() * 4)
    osztoszam1 = Math.floor(Math.random() * 13)
    document.getElementById('jobbalsokep12').src = "jelek/" + jelek[osztojel1] + ".png"
    document.getElementById('balfelsokep12').src = "jelek/" + jelek[osztojel1] + ".png"      
    document.getElementById('jobbfelso12').innerHTML = "<p>" + numbers(osztoszam1) + "</p>"
    document.getElementById('balalso12').innerHTML = "<p>" + numbers(osztoszam1) + "</p>"
    osztoszam1 = document.getElementById('osztoszam').innerText = ertek(osztoszam1, osztoossz)
    osztoszam1 = parseInt(document.getElementById('osztoszam').innerText)
    osztoossz += osztoszam1

        document.getElementById('osztolap2').style.display = "block"
        jel2 = Math.floor(Math.random() * 4)
        szam2 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep13').src = "jelek/" + jelek[jel2] + ".png"
        document.getElementById('balfelsokep13').src = "jelek/" + jelek[jel2] + ".png"
        document.getElementById('jobbfelso13').innerHTML = "<p>" + numbers(szam2) + "</p>"
        document.getElementById('balalso13').innerHTML = "<p>" + numbers(szam2) + "</p>"
        osztoszam2 = document.getElementById('osztoszam').innerText = ertek(szam2, osztoossz)
        osztoossz += osztoszam2
        ellenorzes(osztoossz, ossz)
            document.getElementById('osztolap3').style.display = "block"
            jel3 = Math.floor(Math.random() * 4)
            szam3 = Math.floor(Math.random() * 13)

            document.getElementById('jobbalsokep14').src = "jelek/" + jelek[jel3] + ".png"
            document.getElementById('balfelsokep14').src = "jelek/" + jelek[jel3] + ".png"
            document.getElementById('jobbfelso14').innerHTML = "<p>" + numbers(szam3) + "</p>"
            document.getElementById('balalso14').innerHTML = "<p>" + numbers(szam3) + "</p>"
            osztoszam3 = document.getElementById('osztoszam').innerText = ertek(szam3, osztoossz)
            osztoossz += osztoszam3
            ellenorzes(osztoossz, ossz)
            document.getElementById('osztolap4').style.display = "block"
            jel4 = Math.floor(Math.random() * 4)
            szam4 = Math.floor(Math.random() * 13)

            document.getElementById('jobbalsokep15').src = "jelek/" + jelek[jel4] + ".png"
            document.getElementById('balfelsokep15').src = "jelek/" + jelek[jel4] + ".png"
            document.getElementById('jobbfelso15').innerHTML = "<p>" + numbers(szam4) + "</p>"
            document.getElementById('balalso15').innerHTML = "<p>" + numbers(szam4) + "</p>"
            osztoszam4 = document.getElementById('osztoszam').innerText = ertek(szam4, osztoossz)
            osztoossz += osztoszam4
            ellenorzes(osztoossz, ossz)
                document.getElementById('osztolap5').style.display = "block"
                jel5 = Math.floor(Math.random() * 4)
                szam5 = Math.floor(Math.random() * 13)

                document.getElementById('jobbalsokep16').src = "jelek/" + jelek[jel5] + ".png"
                document.getElementById('balfelsokep16').src = "jelek/" + jelek[jel5] + ".png"
                document.getElementById('jobbfelso16').innerHTML = "<p>" + numbers(szam5) + "</p>"
                document.getElementById('balalso16').innerHTML = "<p>" + numbers(szam5) + "</p>"
                osztoszam5 = document.getElementById('osztoszam').innerText = ertek(szam5, osztoossz)
                osztoossz += osztoszam5
                ellenorzes(osztoossz, ossz)
                    document.getElementById('osztolap6').style.display = "block"
                    jel6 = Math.floor(Math.random() * 4)
                    szam6 = Math.floor(Math.random() * 13)

                    document.getElementById('jobbalsokep17').src = "jelek/" + jelek[jel6] + ".png"
                    document.getElementById('balfelsokep17').src = "jelek/" + jelek[jel6] + ".png"
                    document.getElementById('jobbfelso17').innerHTML = "<p>" + numbers(szam6) + "</p>"
                    document.getElementById('balalso17').innerHTML = "<p>" + numbers(szam6) + "</p>"
                    osztoszam6 = document.getElementById('osztoszam').innerText = ertek(szam6, osztoossz)
                    osztoossz += osztoszam6
                    ellenorzes(osztoossz, ossz)
                        document.getElementById('osztolap7').style.display = "block"
                        jel7 = Math.floor(Math.random() * 4)
                        szam7 = Math.floor(Math.random() * 13)

                        document.getElementById('jobbalsokep18').src = "jelek/" + jelek[jel7] + ".png"
                        document.getElementById('balfelsokep18').src = "jelek/" + jelek[jel7] + ".png"
                        document.getElementById('jobbfelso18').innerHTML = "<p>" + numbers(szam7) + "</p>"
                        document.getElementById('balalso18').innerHTML = "<p>" + numbers(szam7) + "</p>"
                        osztoszam7 = document.getElementById('osztoszam').innerText = ertek(szam7, osztoossz)
                        osztoossz += osztoszam7
                        ellenorzes(osztoossz, ossz)
                            document.getElementById('osztolap8').style.display = "block"
                            jel8 = Math.floor(Math.random() * 4)
                            szam8 = Math.floor(Math.random() * 13)

                            document.getElementById('jobbalsokep19').src = "jelek/" + jelek[jel8] + ".png"
                            document.getElementById('balfelsokep19').src = "jelek/" + jelek[jel8] + ".png"
                            document.getElementById('jobbfelso19').innerHTML = "<p>" + numbers(szam8) + "</p>"
                            document.getElementById('balalso19').innerHTML = "<p>" + numbers(szam8) + "</p>"
                            osztoszam8 = document.getElementById('osztoszam').innerText = ertek(szam8, osztoossz)
                            osztoossz += osztoszam8
                            ellenorzes(osztoossz, ossz)
                                document.getElementById('osztolap9').style.display = "block"
                                jel9 = Math.floor(Math.random() * 4)
                                szam9 = Math.floor(Math.random() * 13)

                                document.getElementById('jobbalsokep20').src = "jelek/" + jelek[jel9] + ".png"
                                document.getElementById('balfelsokep20').src = "jelek/" + jelek[jel9] + ".png"
                                document.getElementById('jobbfelso20').innerHTML = "<p>" + numbers(szam9) + "</p>"
                                document.getElementById('balalso20').innerHTML = "<p>" + numbers(szam9) + "</p>"
                                osztoszam9 = document.getElementById('osztoszam').innerText = ertek(szam9, osztoossz)
                                osztoossz += osztoszam9
                                ellenorzes(osztoossz, ossz)
                                    document.getElementById('osztolap10').style.display = "block"
                                    jel10 = Math.floor(Math.random() * 4)
                                    szam10 = Math.floor(Math.random() * 13)

                                    document.getElementById('jobbalsokep21').src = "jelek/" + jelek[jel10] + ".png"
                                    document.getElementById('balfelsokep21').src = "jelek/" + jelek[jel10] + ".png"
                                    document.getElementById('jobbfelso21').innerHTML = "<p>" + numbers(szam10) + "</p>"
                                    document.getElementById('balalso21').innerHTML = "<p>" + numbers(szam10) + "</p>"
                                    osztoszam10 = document.getElementById('osztoszam').innerText = ertek(szam10, osztoossz)
                                    osztoossz += osztoszam10
                                    ellenorzes(osztoossz, ossz)
                                        document.getElementById('osztolap11').style.display = "block"
                                        jel11 = Math.floor(Math.random() * 4)
                                        szam11 = Math.floor(Math.random() * 13)
                                        document.getElementById('jobbalsokep22').src = "jelek/" + jelek[jel11] + ".png"
                                        document.getElementById('balfelsokep22').src = "jelek/" + jelek[jel11] + ".png"
                                        document.getElementById('jobbfelso22').innerHTML = "<p>" + numbers(szam11) + "</p>"
                                        document.getElementById('balalso22').innerHTML = "<p>" + numbers(szam11) + "</p>"
                                        osztoszam11 = document.getElementById('osztoszam').innerText = ertek(szam11, osztoossz)
                                        osztoossz += osztoszam11
                                        

}

function ertek(number, all){
    all = parseInt(all);
    if (number == 0)
        return 2
    else if (number == 1)
        return 3
    else if (number == 2)
        return 4
    else if (number == 3)
        return 5
    else if (number == 4)
        return 6
    else if (number == 5)
        return 7
    else if (number == 6)
        return 8
    else if (number == 7)
        return 9
    else if (number == 8)
        return 10
    else if (number == 9)
        return 10
    else if (number == 10)
        return 10
    else if (number == 11)
        return 10
    else if (number == 12)
        if (all <=10)
            return 11
        else
            return 1

}

function numbers(number){
    if (number == 0)
        return "2"
    else if (number == 1)
        return "3"
    else if (number == 2)
        return "4"
    else if (number == 3)
        return "5"
    else if (number == 4)
        return "6"
    else if (number == 5)
        return "7"
    else if (number == 6)
        return "8"
    else if (number == 7)
        return "9"
    else if (number == 8)
        return "10"
    else if (number == 9)
        return "J"
    else if (number == 10)
        return "Q"
    else if (number == 11)
        return "K"
    else if (number == 12)
        return "A"
}

function bust(all){
    if (all > 21){
        alert('BUUUUUUUUST!')
        levonas = parseInt(document.getElementById('tet').innerText)
        ossz = parseInt(document.getElementById('penz').innerText)
        document.getElementById('penz').innerText = ossz - levonas
        document.getElementById('sajatlap1').style.display = "none"
        document.getElementById('sajatlap2').style.display = "none"
        document.getElementById('sajatlap3').style.display = "none"
        document.getElementById('sajatlap4').style.display = "none"
        document.getElementById('sajatlap5').style.display = "none"
        document.getElementById('sajatlap6').style.display = "none"
        document.getElementById('sajatlap7').style.display = "none"
        document.getElementById('sajatlap8').style.display = "none"
        document.getElementById('sajatlap9').style.display = "none"
        document.getElementById('sajatlap10').style.display = "none"
        document.getElementById('sajatlap11').style.display = "none"
        document.getElementById('sajatszam').innerText = "??"
        document.getElementById('tet').innerText = "?"
        ossz = 0
        osztoossz = 0

        
    }
    else if (all == 21){
        alert('blackjack!')
        ossz = parseInt(document.getElementById('penz').innerText)
        nyeremeny = parseInt(document.getElementById('tet').innerText)*2
        document.getElementById('penz').innerText = ossz + nyeremeny
        document.getElementById('sajatlap1').style.display = "none"
        document.getElementById('sajatlap2').style.display = "none"
        document.getElementById('sajatlap3').style.display = "none"
        document.getElementById('sajatlap4').style.display = "none"
        document.getElementById('sajatlap5').style.display = "none"
        document.getElementById('sajatlap6').style.display = "none"
        document.getElementById('sajatlap7').style.display = "none"
        document.getElementById('sajatlap8').style.display = "none"
        document.getElementById('sajatlap9').style.display = "none"
        document.getElementById('sajatlap10').style.display = "none"
        document.getElementById('sajatlap11').style.display = "none"
        document.getElementById('sajatszam').innerText = "??"
        document.getElementById('tet').innerText = "?"
        ossz = 0
        osztoossz = 0
    }
}

let ossz = 0
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
        document.getElementById('jobbfelso1').innerHTML = "<p>" + numbers(szam1) + "</p>"
        document.getElementById('balalso1').innerHTML = "<p>" + numbers(szam1) + "</p>"
        
        document.getElementById('sajatlap2').style.display = "block"
        jel2 = Math.floor(Math.random() * 4)
        szam2 = Math.floor(Math.random() * 13)
        if (szam1 == 12)
            document.getElementById('sajatszam').innerText = "1/11"
        else
            document.getElementById('sajatszam').innerText = ertek(szam1, ossz)
        
        document.getElementById('jobbalsokep2').src = "jelek/" + jelek[jel2] + ".png"
        document.getElementById('balfelsokep2').src = "jelek/" + jelek[jel2] + ".png"
        document.getElementById('jobbfelso2').innerHTML = "<p>" + numbers(szam2) + "</p>"
        document.getElementById('balalso2').innerHTML = "<p>" + numbers(szam2) + "</p>"
        kuki2 = document.getElementById('sajatszam').innerText
        kuki2 = parseInt(kuki2)
        ossz2 = document.getElementById('sajatszam').innerText = ertek(szam2, ossz)+kuki2
        bust(ossz2)
    }
    else if (clicks == 2){
        document.getElementById('double').style.opacity = 0.5
        document.getElementById('sajatlap3').style.display = "block"
        jel3 = Math.floor(Math.random() * 4)
        szam3 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep3').src = "jelek/" + jelek[jel3] + ".png"
        document.getElementById('balfelsokep3').src = "jelek/" + jelek[jel3] + ".png"
        document.getElementById('jobbfelso3').innerHTML = "<p>" + numbers(szam3) + "</p>"
        document.getElementById('balalso3').innerHTML = "<p>" + numbers(szam3) + "</p>"
        kuki3 = parseInt(document.getElementById('sajatszam').innerText)
        ossz3 = document.getElementById('sajatszam').innerText = ertek(szam3, ossz)+kuki3
        bust(ossz3)
    }
    else if (clicks == 3){
        document.getElementById('sajatlap4').style.display = "block"
        jel4 = Math.floor(Math.random() * 4)
        szam4 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep4').src = "jelek/" + jelek[jel4] + ".png"
        document.getElementById('balfelsokep4').src = "jelek/" + jelek[jel4] + ".png"
        document.getElementById('jobbfelso4').innerHTML = "<p>" + numbers(szam4) + "</p>"
        document.getElementById('balalso4').innerHTML = "<p>" + numbers(szam4) + "</p>"
        kuki4 = parseInt(document.getElementById('sajatszam').innerText)
        ossz4 = document.getElementById('sajatszam').innerText = ertek(szam4, ossz)+kuki4        
        bust(ossz4)
    }
    else if (clicks == 4){
        document.getElementById('sajatlap5').style.display = "block"
        jel5 = Math.floor(Math.random() * 4)
        szam5 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep5').src = "jelek/" + jelek[jel5] + ".png"
        document.getElementById('balfelsokep5').src = "jelek/" + jelek[jel5] + ".png"
        document.getElementById('jobbfelso5').innerHTML = "<p>" + numbers(szam5) + "</p>"
        document.getElementById('balalso5').innerHTML = "<p>" + numbers(szam5) + "</p>"
        kuki5 = parseInt(document.getElementById('sajatszam').innerText)
        ossz5 = document.getElementById('sajatszam').innerText = ertek(szam5, ossz)+kuki5
        bust(ossz5)
    }
    else if (clicks == 5){
        document.getElementById('sajatlap6').style.display = "block"
        jel6 = Math.floor(Math.random() * 4)
        szam6 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep6').src = "jelek/" + jelek[jel6] + ".png"
        document.getElementById('balfelsokep6').src = "jelek/" + jelek[jel6] + ".png"
        document.getElementById('jobbfelso6').innerHTML = "<p>" + numbers(szam6) + "</p>"
        document.getElementById('balalso6').innerHTML = "<p>" + numbers(szam6) + "</p>"
        kuki6 = parseInt(document.getElementById('sajatszam').innerText)
        ossz6 = document.getElementById('sajatszam').innerText = ertek(szam6, ossz)+kuki6
        bust(ossz6)
    }
    else if (clicks == 6){
        document.getElementById('sajatlap7').style.display = "block"
        jel7 = Math.floor(Math.random() * 4)
        szam7 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep7').src = "jelek/" + jelek[jel7] + ".png"
        document.getElementById('balfelsokep7').src = "jelek/" + jelek[jel7] + ".png"
        document.getElementById('jobbfelso7').innerHTML = "<p>" + numbers(szam7) + "</p>"
        document.getElementById('balalso7').innerHTML = "<p>" + numbers(szam7) + "</p>"
        kuki7 = parseInt(document.getElementById('sajatszam').innerText)
        ossz7 = document.getElementById('sajatszam').innerText = ertek(szam7, ossz)+kuki7
        bust(ossz7)
    }
    else if (clicks == 7){
        document.getElementById('sajatlap8').style.display = "block"
        jel8 = Math.floor(Math.random() * 4)
        szam8 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep8').src = "jelek/" + jelek[jel8] + ".png"
        document.getElementById('balfelsokep8').src = "jelek/" + jelek[jel8] + ".png"
        document.getElementById('jobbfelso8').innerHTML = "<p>" + numbers(szam8) + "</p>"
        document.getElementById('balalso8').innerHTML = "<p>" + numbers(szam8) + "</p>"
        kuki8 = parseInt(document.getElementById('sajatszam').innerText)
        ossz8 = document.getElementById('sajatszam').innerText = ertek(szam8, ossz)+kuki8
        bust(ossz8)
    }
    else if (clicks == 8){
        document.getElementById('sajatlap9').style.display = "block"
        jel9 = Math.floor(Math.random() * 4)
        szam9 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep9').src = "jelek/" + jelek[jel9] + ".png"
        document.getElementById('balfelsokep9').src = "jelek/" + jelek[jel9] + ".png"
        document.getElementById('jobbfelso9').innerHTML = "<p>" + numbers(szam9) + "</p>"
        document.getElementById('balalso9').innerHTML = "<p>" + numbers(szam9) + "</p>"
        kuki9 = parseInt(document.getElementById('sajatszam').innerText)
        ossz9 = document.getElementById('sajatszam').innerText = ertek(szam9, ossz)+kuki9
        bust(ossz9)
    }
    else if (clicks == 9){
        document.getElementById('sajatlap10').style.display = "block"
        jel10 = Math.floor(Math.random() * 4)
        szam10 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep10').src = "jelek/" + jelek[jel10] + ".png"
        document.getElementById('balfelsokep10').src = "jelek/" + jelek[jel10] + ".png"
        document.getElementById('jobbfelso10').innerHTML = "<p>" + numbers(szam10) + "</p>"
        document.getElementById('balalso10').innerHTML = "<p>" + numbers(szam10) + "</p>"
        kuki10 = parseInt(document.getElementById('sajatszam').innerText)
        ossz10 = document.getElementById('sajatszam').innerText = ertek(szam10, ossz)+kuki10
        bust(ossz10)
    }
    else if (clicks == 10){
        document.getElementById('sajatlap11').style.display = "block"
        jel11 = Math.floor(Math.random() * 4)
        szam11 = Math.floor(Math.random() * 13)

        document.getElementById('jobbalsokep11').src = "jelek/" + jelek[jel11] + ".png"
        document.getElementById('balfelsokep11').src = "jelek/" + jelek[jel11] + ".png"
        document.getElementById('jobbfelso11').innerHTML = "<p>" + numbers(szam11) + "</p>"
        document.getElementById('balalso11').innerHTML = "<p>" + numbers(szam11) + "</p>"
        kuki11 = parseInt(document.getElementById('sajatszam').innerText)
        ossz11 = document.getElementById('sajatszam').innerText = ertek(szam11, ossz)+kuki11
        bust(ossz11)
    }
}


function cardHit() {
    const sajatlap1 = document.getElementById('sajatlap1');
    const sajatlap2 = document.getElementById('sajatlap2');
    const sajatlap3 = document.getElementById('sajatlap3');
    const sajatlap4 = document.getElementById('sajatlap4');
    const sajatlap5 = document.getElementById('sajatlap5');
    const sajatlap6 = document.getElementById('sajatlap6');
    const sajatlap7 = document.getElementById('sajatlap7');
    const sajatlap8 = document.getElementById('sajatlap8');
    const sajatlap9 = document.getElementById('sajatlap9');
    const sajatlap10 = document.getElementById('sajatlap10');
    const sajatlap11 = document.getElementById('sajatlap11');

    sajatlap1.classList.add('active');
    sajatlap2.classList.add('active');
    sajatlap3.classList.add('active');
    sajatlap4.classList.add('active');
    sajatlap5.classList.add('active');
    sajatlap6.classList.add('active');
    sajatlap7.classList.add('active');
    sajatlap8.classList.add('active');
    sajatlap9.classList.add('active');
    sajatlap10.classList.add('active');
    sajatlap11.classList.add('active');
}