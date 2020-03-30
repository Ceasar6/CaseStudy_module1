let arr =  [1,2,3,4,5,6,7,8,9,10];
function tryRemoteFromArray(x) {
    x = 3;
    for (let i = 0; i < arr.length; i++){
        if (x == arr[i]){
            arr.splice(i , 1 );
        }
    }
    console.log(arr)
}
tryRemoteFromArray(arr);