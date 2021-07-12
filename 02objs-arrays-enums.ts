//This is static assignment is TS for objects;

// const person:{
//     name:String;
//     age:number;
// } = {


//Enum assigns labels to numbers by default number starts with zero you can assign custom num/str etc too 
// if you assign only the first label with a number for eg 5 other labels will be auto assigned to incrementing values 6,7 etc
enum Gender {MALE,FEMALE,OTHER};

//Type Infeerance for objects in TS
const person: {
    name: string,
    age: number,
    gender: number,
    interests: string[],
    role: [number,string] // defining types to enforce tuple behavior
} = {
    name: "Samy",
    age: 22,
    gender: Gender.MALE,
    interests: ["Anime","Marvel"],
    role: [2,"Admin"]
};

/*
 person.role.push("Sasuke");//you cannot ^ the size of tuple manually but .push is an exception
 person.role = [3,"Manager",5];  ]
 person.role= ["hello",5];       ]
 person.role[0] = "aur";         ]  ye Sab error dega
*/
console.log(person.role);


console.log(person.name);

if(person.gender === Gender.MALE){
    console.log("Male");
}


// Basic example of FOR OF LOOP (provides value at an index of loop) you can also use the standard form "for(x=0;x<i;x++){}"
//There is something called FOR IN LOOP use 'in' instead of 'of' that returns index
//list ke type ke hisab se you can use different methods on the elements

for(const inter of person.interests){
    console.log(inter.toUpperCase());
} 