//var ,let ,const
//Var known
// console.log("Hello word");
// console.log([1,2,3,4]);
// var raja="this my first time";
// console.log(raja);
// var object=({a:223,b:45});
// console.log(object);
// console.table(object);
// var name;
// name='habib raja';
// console.log(name);
//Let
// let raja="this my first time";
// console.log(raja);
// let object=({a:223,b:45});
// console.log(object);
// console.table(object);
// let name;
// name='habib raja';
// console.log(name);
//const
// const object=({name:'Raja',add:'swabi',
// age:19});
// console.table(object);

// Data TYpes
// primitive data type

// //string
// const name='Raja';
// //boolean
// const raja=true;
// //number
// const age=20;
// //undifinde
// let test;
// //null
// const apple=null;
// //symbol
// const sym=Symbol();
// console.log(typeof sym);

// Reprence Data type
//arry         
// const arry=[1,3,3,4,5] ;
// //object
// let obj=({name:'Raja', age:20, add:'peshawar'});
// console.log(typeof obj);         

//Data type conversion
// number to string
// var v1;
//  v1=String(45);
// //boll
//  v1=String(true);
//  //arry
//  v1=String([1,2,3,4]);
// String to Number
// let v1;
// v1=Number(6);
// v1=Number(false);
// v1=Number(true);
// v1=Number(null);
// console.log(v1);
// console.log(typeof v1);
// console.log(v1.toFixed());
// var v1=String(5);
// var v2=6;
// var sum=Number(v1+v2);
// console.log(sum); 
// console.log(typeof sum); 

// const v1 = 50;
// const v2 = 40;
// let v3;
// Simple mathe
// v3=v1+v2;
// v3=v1-v2;
// v3=v1*v2;
// v3=v1%v2;
// v3=v1/v2;
// console.log(v3);

//object mathe
// v3 = Math.PI;
// v3 = Math.E;
// v3 = Math.round;
// v3 = Math.min(1,4,5,5,6,3);
// v3 = Math.max(3,4,5,6,33);
// v3 = Math.pow(6,2);
// v3 = Math.ceil(2.4);
// v3 = Math.floor(2.8);
// v3 = Math.random();
// v3 = Math.ceil(Math.random()* 20 + 1);
// console.log(v3);
// concatenation

// const firstname='Habib';
// const lastname='Raja';
// let val;
// val=firstname+ ' '+lastname;
// val=firstname.concat(' ' ,lastname);
// // Escaping
// val = 'That\'s awesome, i can\'t wait';
// // Apeend
// val=firstname,
// val +=' '+lastname;
// // case change
// val= firstname.toUpperCase();
// val= firstname.toLowerCase();
// // length
// val= firstname.length;
// // substring
// val= firstname.substring(0,2);
// //Replace
// var age='i am 20 year old';
// val= age.replace('20','19');
// // split
// const str='wordprees, excel, java ,javascript';
// val= str.split(' ');
// val = str.split(',');
// // chaArt
// val=firstname.charAt(2);
// console.log(val); 
// var name='Habib';                
// const age=30;
// var detail;
// detail= 'My name is '+name+' my '+age;
// console.log(detail);

// Without tamplate using string
// const name='Habib';
// const age=20;
// const  city= 'peshawar';
// const job= 'web developer';
// let html;
// html ='<ul>'+
//   '<li>Name:' +name+'</li>'+
//   '<li>Age:' +age+'</li>'+
//   '<li>Job:'+job+'</li>'+
//   '<li>City:'+city+'</li>'+
// '</ul>';

// Tamplate using string     
// html=`
// <u>
//   <li>Name:${name}</li>
//   <li>age:${age}</li>
//   <li>Job:${job}</li>
//   <li>City:${city}</li>
// </u>`;
// document.body.innerHTML = html;

// arry methods
// let numbers = [43,56,33,23,44,36,5];
// let numbers2 = new Array(22,45,33,76,54);
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a:1, b:1}, new Date()];
// let val;
// // if statement
// val=Array.isArray(numbers);
// // Length
// val=numbers.length;
// // find
// val=numbers[2];
// // finde index
// val=mixed.indexOf(null);
// // push nalue
// val=numbers.push(100);
// console.log(val);


        // IF ELSE
//         const id=200;
// console.log(id==200?'correct':'incorrect');        

          // Function
// function raja(firstname='Habib',lastname='Jani'){
//         return'Hello'+' ' +firstname+' '+lastname;

// }          console.log(raja());
// (function(name){
//         console.log('Hello' +' '+name);

// })('Raja')
// const obj={
//         add:function(){
//                 console.log('add to obj..');
//         },
//         edit:function(ID){
//                 console.log(`edit ${ID}`);
//         }
// }
// obj.add();
// obj.edit(22);

                // Loop
// const car=['honda','toyota','sedan','sports']
// car.forEach(function(car,index,arry){
//         console.log(`${index} ${car}`);
//         console.log(arry);
// }); 
                
              // change style
              document.getElementById('task-title').style.background=('#333');
              
              document.getElementById('task-title').style.color='#fff';
              document.getElementById('task-title').style.padding='5pxt';

// change content
document.getElementById('task-title').textContent='Task-List'; 
document.getElementById('task-title').innerHTML='My Task';
document.getElementById('task-title').textContent='task-List';  

                          // document.query selector
                         console.log( document.querySelector('task-title'));
                         console.log(document.querySelector('h5'));