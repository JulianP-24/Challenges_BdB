function switchList(numberList) {
    var numero = 6;
    var newList = numberList.map(num => num.toString().split(''));
    for(let i = 0; i<newList.length; i++){
        for(let j = 0; j<newList.length + 1 ; j++){
            if(newList[i].includes(numero.toString()) || newList[i][j] >= numero){
                delete newList[i][j];
            }
        }
    }
    let res =  newList.map(num => num.toString().replace(',','')).filter(el => el!='').reverse();
    return res.map(num => parseInt(num));
}
console.log(switchList([60,6,5,4,3,2,7,7,29,1]));




