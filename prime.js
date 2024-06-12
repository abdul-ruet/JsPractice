// var n=13;
// for(var i=2; i<=n-1; i++){
//    // console.log(i,n%i);
    
//     if(n&i==0){
//         console.log("Not a prime number",num);
//         break;

//     }
    
    
// }



function Prime(n){
    for(i=2;i<n;i++){
        if(n%i==0){
            return 'Not a prime number';
        }
        
    }
    return 'A prime number';
}
var result= Prime(139);
console.log(result);

    


