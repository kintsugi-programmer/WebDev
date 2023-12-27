let names = ["Bali","Bhaskar","Bhati","Bali","Bali"];
// i want to make each element have 1 at last Bali1
//normal way,for loop
//mentos way

names.map((name)=>{
    return name + "1"
});

names.map((name)=>{
    return <h1>{name}</h1>
});

names.filter((name)=>{
    return name !== "Bali"
});

// .map()
// .filter()
// .reduce()


const name1 = data?.person?.name;  
/*
"?"
: This is the optional 
chaining operator. It allows you to access 
properties of an object without the need 
to explicitly check if each level of the 
object hierarchy is defined 
(i.e., not null or undefined). 
If any intermediate property in the chain 
is null or undefined, the entire expression 
evaluates to undefined instead of throwing an 
error.


*/