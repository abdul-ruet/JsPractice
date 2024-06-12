function leapyear(year){
    const remainder= year%4;
    if(remainder==0 && year%100!=0 || year%400 ==0 ){
        return true;
    }
    else{
        return false;
    }}
const check =leapyear(2025);
console.log(check);
