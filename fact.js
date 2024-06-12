
// let fac=10;
// var result=1;
// for (var i=1;i<=fac;i++){
//     // var fact=1;
//     result=result*i;
    
//     console.log(i,result);
    
// }
// console.log(result)
//function factorial(num)
// {
//     var fact=1;
//     for(var i=1; i<=num;i++){
//         fact=fact*i;

//     }
//     return fact;
// }
// var res=factorial(10);
// console.log(res);

// function factorial(num)
// {
    
//     var i=1;
//     var factorial=1;
//     while( i<=num){

        
//         factorial=factorial*i;
//         i++;
        
//     }
//     return factorial;

// }
// var result= factorial(10)
// console.log(result);
// Recursion




// var i=10;
// factorial=10;
// while(i>=1){
//     factorial=factorial*i;
//     i--;
//     console.log(factorial);
// }


function factorial(n){
    if(n==0){
        return 1;
    }
    else{
        return n* factorial(n-1);
    }
}
var result = factorial(10);
console.log(result);

















