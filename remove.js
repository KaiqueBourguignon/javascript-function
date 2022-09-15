const prompt = require ('prompt-sync')()
const showList = require ('./show')

function removeFromList (list) {
showList(list);
const positionText = prompt (' QUal elemento gostaria de remover')
const position = Number(positionText) - 1
list.splice(position , 1 ) ;
}
module.exports = removeFromList