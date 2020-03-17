module.exports = function reverse (n) {
  if(n<0){
        let a = n*-1;
        return +a.toString().split('').reverse().join('') 
     }else{
         return +n.toString().split('').reverse().join('') 
     }
}
