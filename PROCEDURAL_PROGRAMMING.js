function dot_product(v1,v2) {
  var product = 0
    for (let i = 0; i < 3; i++) {
        product = product + v1[i]*v2[i]
        return (product)
        
    }
}
var exp = dot_product([31,0,0],[3,0,0])
console.log(exp)



const array_of_pairs =[[[31,0,0],[3,0,0]],[[1,0,0],[-1,0,0]],[[2,0,0],[-2,0,0]],[[3,0,3],[0,5,0]]]
for (let i = 0; i < array_of_pairs.length; i++) {
    var pair=array_of_pairs[i];
    var result = dot_product(pair[0],pair[1])
    console.log(dot_product(pair[0],pair[1]))
    if (result==0){
        console.log(pair + 'are orthogonal')
    }

    
}