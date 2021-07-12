/*
void is the return type when function does not return anything
and if we mention void and still return sometihng then T>S> will ingnore the return statement

NOTE -> In error handleling there is no return value and there won't be ever here we can use the 'never' type
        which says that function would never return anything ever

undefined is when, when we try to return w/o returning an actual value 
*/

function add(n1:number,n2:number,cd:(a:number)=>void){
    let res:number;
    res = n1+n2;
    cd(res);
}

function sayHello(){
    console.log("Hello There!!")
}

// let add2 : Function;
// add2=add;
// This works but it doesn't specify what kind of fuction is add2 that's why we use function types

let add3: (a:number,b:number,c:(a:number)=>void) => void;
add3 = add;
// // add3 = sayHello;
// // add3();
// This will give error

//Example of call back function in typescript
//the outer cslLog will return undefined cause expecting a non exsistant return value
console.log(add(210,210,(res)=>{
    console.log(res)
}));

/*
let nam : any;
nam = 42;
let nam2: string;
nam2 = nam;
The problem here is we are able to assign a num value to a string variable because the nam variable is of type any
and when we assign this to a string variable nam2 T.S. don't check whats in nam

that is why we use unknown type in which we can store any type of value but it gives error if we try to store nam's value(of different type) to nam2(of different type)

*/

// Example of unkown type
let nam : unknown;
nam = "42";
let nam2: string;
// nam2 = nam; // error so we write a runtime check
if(typeof nam ==='string'){
    nam2 = nam;
    console.log(nam2);
}
