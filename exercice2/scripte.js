btnS = document.querySelector('.btnS');
btnP = document.querySelector('.btnP');
const left = document.querySelector('.left');
const rigth = document.querySelector('rigth');
const liste1 = document.querySelector('#liste1');
const liste2 = document.querySelector('#liste2');
tab = ['Mon Premiere', 'Mon Deuxieme', 'Mon Trosieme', 'Mon Quatrieme'];



function Deplacer(liste1, liste2) {

    if (liste1.options.selectedIndex >= 0) {
        ind = liste1.options[liste1.options.selectedIndex].text;
        don = liste1.options[liste1.options.selectedIndex].value;
        donner = new Option(ind, don);
        liste2.options[liste2.options.length] = donner;
        liste1.options[liste1.options.selectedIndex] = null;
    } else {
        alert("mangui diegeulou!!!!!!!!!");
    }
}

btnP.addEventListener('click', function() {
    if (liste2.length != 0) {
        Deplacer(liste2, liste1);
    } else {
        btnP.disable = true;
    }
});
btnS.addEventListener('click', function() {
    if (liste1.length != 0) {
        Deplacer(liste1, liste2);
    } else {
        btnP.disable = true;
    }
});