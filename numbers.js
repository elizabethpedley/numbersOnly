function numbersOnly(arr){
    var newArr = [];
    for(var i=0;i<arr.length;i++){
        if(typeof arr[i] === 'number'){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}

function numbersOnly2(arr){
    for(var i=arr.length-1;i>=0;i--){
        if(typeof arr[i] != 'number'){
            arr.splice(i,1);
        }
    }
    return arr;
}