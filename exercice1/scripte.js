const btnAdd = document.querySelector('.btn-add');
const container = document.querySelector('.container');

btnAdd.addEventListener('click', function() {
    built();
});
//window.onload = built;

function built() {
    const blocNot = document.createElement('div');
    const item = document.createElement('div');
    const textArea = document.createElement('textArea');
    const btnEdit = document.createElement('button');
    const btnCor = document.createElement('button');

    blocNot.setAttribute('class', 'bloc-note');
    item.setAttribute('class', 'item');
    btnEdit.setAttribute('class', 'edit');
    btnCor.setAttribute('class', 'cor');
    textArea.setAttribute('rows', '10');
    textArea.setAttribute('cols', '24');

    btnEdit.innerText = 'Edit';
    btnCor.innerText = 'Cor';

    item.appendChild(btnEdit);
    item.appendChild(btnCor);
    blocNot.appendChild(item);
    blocNot.appendChild(textArea);
    container.appendChild(blocNot);
    btnEdit.addEventListener('click', function() {
        textArea.toggleAttribute('disabled');
    });

    btnCor.addEventListener('click', function() {
        blocNot.parentNode.removeChild(blocNot);
    });

}