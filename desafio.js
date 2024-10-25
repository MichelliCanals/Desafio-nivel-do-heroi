var nomePersonagem = "Himmel";
var qtdXP = 1500;

/* Mesuração de XP */

var nivelPersonagem = "";

if (qtdXP<=1000){
    nivelPersonagem = "Ferro";
}
else if (qtdXP>=1001 && qtdXP<=2000){
    nivelPersonagem = "Bronze";
}
else if (qtdXP>=2001 && qtdXP<=5000){
    nivelPersonagem = "Prata";
}

else if (qtdXP>=5001 && qtdXP<=7000){
    nivelPersonagem = "Ouro";
} 
else if (qtdXP>=7001 && qtdXP>=8000){
    nivelPersonagem = "Platina";
}
else if (qtdXP>=8001 && qtdXP<=9000){
    nivelPersonagem = "Ascendente";
}
else if (qtdXP>=9001 && qtdXP<=10000){
    nivelPersonagem = "Imortal";
}
else{
    nivelPersonagem = "Radiante";
}

console.log("O herói de nome " + nomePersonagem + " está no nível " + nivelPersonagem);



