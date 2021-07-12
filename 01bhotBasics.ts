// A basic function in TS

function add(n1:number,n2:number){
    return n1+n2;
}

/*Type inference in T.S.
T.S. ko khud samjh aa jata hai type agar hum declare karte he inintialize karte hai no need toh otherwise we have to use const num1:number etc
TS assign bhi nhi karne deta aur kisi type ki cheeze if we use let keyword and a diiferent type to assign later on like:
let num1 = 24;
num1 = "Hello" // ye error dega
kuch assign nhi karoge and declare karte time mention nhi karoge then the type will be any 
*/

const num1 = 24;
const num2 = 45;
const res = add(num1,num2);

console.log(`Hello There, how are you ? ${res}`);