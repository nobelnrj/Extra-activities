// // covert to array

// // console.log(Array.from('foo'));
// // console.log(Array.from([1,2,3], x => x + x));

// // check whether the given input is an array

// // console.log(Array.isArray([1,2,4]));

// // concat array

// let array1 = [1,2,3];
// let array2 = [4,5,6];
// // console.log(array1.concat(array2));

// // copywithin

// let array3 = [1,2,3,4,5,6,7,8,9];
// console.log(array3.copyWithin(2,0,8));

// // iterator

// let array4 = [1,2,3,4,5];
// let iterator = array4.entries();
// for (let e of iterator){
//     console.log(e);
// }

// // fill

// let array5 = [1,2,3,4,5,6,7];
// console.log(array5.fill(6));
// console.log(array5.fill(5,1));
// console.log(array5.fill(0,2,6));

// // filter & find

// let array6 = ['nobel','reo','jacob','ragul','jeno','yogeshwar'];
// let result = array6.filter(word => word.length>4);
// let result2 = array6.find(word => word.length>4);
// console.log(result);
// console.log(result2);

const companies= [
    {name: "Company One", category: "Finance", start: 1981, end: 2004},
    {name: "Company Two", category: "Retail", start: 1992, end: 2008},
    {name: "Company Three", category: "Auto", start: 1999, end: 2007},
    {name: "Company Four", category: "Retail", start: 1989, end: 2010},
    {name: "Company Five", category: "Technology", start: 2009, end: 2014},
    {name: "Company Six", category: "Finance", start: 1987, end: 2010},
    {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
    {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
    {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
  ];
  
  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  companies.forEach(function(company){
        console.log(company.name);
  });

  const canDrink = ages.filter(function(age){
    if(age>21){
        return true;
    }
  });

  console.log(canDrink);