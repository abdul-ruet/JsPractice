

// function fibonacci(n){
// var fibo =[0,1];
// for (var i=2; i<=n; i++){
//     // console.log(fibo[0],fibo[1]);
//     fibo[i]=fibo[i-1]+fibo[i-2];
//     //console.log(fibo[i],fibo[i-1],fibo[i-2]);


// }
// return fibo;
// }
// var result = fibonacci(12);
// console.log(result);

// RECURSION

// function fibonacci(n)
// {
//     if (n==0){
//         return 0;
//     }
//     if(n==1)
//     {
//         return 1;

//     }
//     else
//     {
//         return fibonacci(n-1)+fibonacci(n-2);
//     }
// }
// var result = fibonacci(10);
// console.log(result);

//RECURSIVE SERIES
function fibonacci(n){
    if(n==0){
        return 0;
    }
    else if (n ==1){
        return [0,1];
    }
    else 
    {
        // find nth element array fibonacci
        var fibo= fibonacci(n-1);
        var nextElement =fibo[n-1]+fibo[n-2];
        fibo.push(nextElement);
        return fibo;
    }
}
var result =fibonacci(34);
console.log(result);

// function fibonacci(n){
//     if (n==0){
//         return 0;
//     }
//     else if(n==1){
//         return [0,1];
//     }
//     else{
//         var fibo= fibonacci(n-1);
//         var newelement = fibo[n-1]+ fibo[n-2];
//         fibo.push(newelement);
//         return fibo;

//     }
// }
// var result = fibonacci(22);
// console.log(result);
