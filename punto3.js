
function changeCoins(coinsList) {
    var sortList = coinsList.sort((a,b) => a-b);
    var value = 0;
    for(element of sortList){
        if(element > value + 1){
            return value + 1;
        }
        value += element;
    }
    return value + 1;
}

console.log(changeCoins([1,5,,1,1,1,10,15,20,100]));