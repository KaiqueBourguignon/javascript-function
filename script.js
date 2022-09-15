const prompt = require ('prompt-sync')();
const showMenu = require ('./menu')
const addToList = require ('./add')
const showList = require ('./show')
const removeFromList = require ('./remove')
const list = []

let option = 0

do {
    console.clear();
    showMenu();
   option = Number (prompt ());
    console.clear();
    switch (option) {
        case 1:
            addToList(list)
            break;
        case 2:
            showList(list)
            break;
        case 3:
           removeFromList(list) 
            break;
        case 4:
            console.log('lista finalizada com sucesso , boas compras !')
            break;
    
        default: 
        console.log('opção invalida')
            break;
    }
prompt('presione enter para continuar...')
} while (option != 4)