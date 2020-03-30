let arrDiem = [1,2,3,4,5,6,7,8,9,10];
function findMax(max) {
    max = arrDiem[0];
    for (let i = 0; i < arrDiem.length; i++){
        if(arrDiem[i] > max){
            max = arrDiem[i];
        }
    }
   console.log("Điểm cao nhất là " + max);
}
