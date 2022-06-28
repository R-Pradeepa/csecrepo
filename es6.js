//fat arrows
// let arr = [1,2,3,4,5,6,7,8,9]; 
//  const square = arr.map(a => a*a);
//  console.log(square);
//  const cube = arr.map(a => a*a*a);
//  console.log(cube);
//  const es6EvenNumbers = arr.filter(number => !
// (number%2));
//  console.log(es6EvenNumbers);
//  const isMultipleof3 = arr.filter(number => !(number%3));
//  console.log(isMultipleof3)
//destructing
// const person = {
//     name: 'Sara',
//     age: 25,
//     gender: 'female' 
//    }
// let { name, age, gender } = person;
// console.log(name); 
// console.log(age); 
// console.log(gender); 
// const arrValue = ['one', 'two', 'three'];
// destructuring assignment in arrays
// const [x, y, z] = arrValue;
// console.log(x); // one
// console.log(y); // two
// // console.log(z); // thre
// const arrValue = ['one', 'two', 'three', 'four'];
// destructuring assignment in arrays
// assigning remaining elements to y
// const [x, ...y] = arrValue;
// console.log(x); // one
// console.log(y); 
// const person = {
//     name: 'Jack',
//     age: 26,
//     hobbies: {
//     read: true,
//     playGame: true
//     }}
   // nested destructuring 
//    const {name, hobbies: {read, playGame}} = person;
//    console.log(name); // Jack
//    console.log(read); // true
//    console.log(playGame); // tru
//modules
// export function greet(name){
//     return `Hello ${name}`;
// }
//generators
// function add(){
//     console.log("hi frm add func")
//     return 10;
// }
// function* info(){
//     console.log("hello frm info function")
//     yield x = add();
//     console.log("value of x:"+x)
//     return ;
// }
// var a=info();
// console.log(a.next())
// console.log(a.next())
 
// fat arrows
// let arr = [1,2,3,4,5,6,7,8,9]
// const sq = arr.map(a=> a*a);
// console.log(sq);
// const cube = arr.map(a=>a*a*a);
// console.log(cube);
// const even = arr.filter(number=>!(number%2));
// console.log(even);
// const mult3 = arr.filter(number=>!(number%3));
// console.log(mult3);
 
// // destructuring
// const person = {
//     name1:'pradeepa',
//     age:20,
//     gender:'female'
// }
// let {name1,age,gender}=person;
// console.log(name1)
// console.log(age)
// console.log(gender)

// const arr1 = {
//     name:'pinky',
//     age:21,
//     hobbies:{
//         read:'true',
//         play:'true'
//     }
// }
 
// const {name,hobbies:{read,play}} = arr1;
// console.log(name)
// console.log(read)
// console.log(play)

// const ele=['one','two','three']
// var [x,y,z] = ele
// console.log(x)
// console.log(y)
// console.log(z)
// const ele1=['one','two','three','four','five']
// var [x,...y] = ele1
// console.log(x)
// console.log(y)

// // generators
// function* info(){
//     console.log("info func")
//     yield x = add()
//     console.log("x = "+x)
//     return ;
// }
// function add(){
//     console.log("add func")
//     return 10;
// }

// var a = info()
// console.log(a.next())
// console.log(a.next())

//modules
export function greet(name){
    return `this is module of ${name}`;
}