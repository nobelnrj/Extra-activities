// covert to array

console.log(Array.from('foo'));
console.log(Array.from([1,2,3], x => x + x));

// check whether the given input is an array

console.log(Array.isArray([1,2,4]));

// concat array

let array1 = [1,2,3];
let array2 = [4,5,6];
console.log(array1.concat(array2));

// copywithin

let array3 = [1,2,3,4,5,6,7,8,9];
console.log(array3.copyWithin(2,0,8));

// iterator

let array4 = [1,2,3,4,5];
let iterator = array4.entries();
for (let e of iterator){
    console.log(e);
}

// fill

let array5 = [1,2,3,4,5,6,7];
console.log(array5.fill(6));
console.log(array5.fill(5,1));
console.log(array5.fill(0,2,6));

// filter & find

let array6 = ['nobel','reo','jacob','ragul','jeno','yogeshwar'];
let result = array6.filter(word => word.length>4);
let result2 = array6.find(word => word.length>4);
console.log(result);
console.log(result2);