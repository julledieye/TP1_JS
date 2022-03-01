const header = document.querySelector('.header');
const textArea = document.querySelector('textarea');
const long = document.getElementById('passe');
const lower = document.getElementById('lower');
const upper = document.getElementById('upper');
const number = document.getElementById('number');
const special = document.getElementById('special');
const btn = document.querySelector('#ok');

const dataLowercase = "azertyuiopqsdfghjklmwéxcvbn".split('');
const dataUppercase = "AZERTYUIOPQSDFGHJKLMWXCVBN".split('');
const dataNumbers = "0123456789".split('');
const dataSymbols = "!@#$%^&*<°µù-_=+\|]²:;',.>/?)~(}{[".split('');


const c = document.createElement('button');
c.innerText = 'copy';
c.id = 'copy';

function randomize(tab) {
    var i, j, tmp;
    for (i = tab.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        tmp = tab[i];
        tab[i] = tab[j];
        tab[j] = tmp;
    }
}
btn.addEventListener('click', function(e) {
    e.preventDefault();
    const data = [].concat(
        upper.checked ? dataLowercase : [],
        lower.checked ? dataUppercase : [],
        number.checked ? dataNumbers : [],
        special.checked ? dataSymbols : []
    );
    let passwordLength = parseInt(long.value);
    let newPassword = '';
    if (data.length === 0) {
        newPassword = "donner un choix";
        // for (let i = 0; i < 15; i++) {
        //     newPassword += data[Math.floor(Math.random() * data.length)];
        // }
    } else {
        for (let i = 0; i < passwordLength; i++) {
            randomize(data);
            newPassword += data[Math.floor(Math.random() * data.length)];
            // console.dir(data);
            // i = passwordLength;
        }
    }

    textArea.value = newPassword;
    textArea.addEventListener('mouseenter', function() {
        textArea.select();
        document.execCommand('copy');
        header.appendChild(c);

    });

    c.addEventListener('click', function() {
        header.removeChild(c)
    });
});