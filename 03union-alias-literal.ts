
type combinable = number|string

/* 
In Type Alias we use short forms for our types

This is an example of literal types with union type in T.S. */

function combine(n1: combinable, n2: number|string ,s: 'as-num'|'as-str'){
    let result;
    if(typeof(n1)==="number" && typeof(n2)==="number" && s==='as-num'){
    result = n1+n2;
    }
    else{
        result = n1.toString()+n2.toString();
    }
    console.log(result);
}

combine(23,46,"as-num");
combine("Hello",23,"as-str");
