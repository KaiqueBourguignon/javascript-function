function showList (list){
    console.log('-__ Lista completa dos Itens __')
    for (let i = 0 ; i < list.length ; i++) {
        console.log (`${ i + 1} - ${list[i]}`)
    }
}
module.exports = showList;