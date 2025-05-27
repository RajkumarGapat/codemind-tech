console.log("1 --> Object literals");

let person = {
    firstName : "Stew",
    lastName : "Job",
    age : 49,
    city : "LA",
    isMarried : true
};

console.log(person);
console.log(typeof person);

console.log("====== Accessing Object Property =======");
console.log(`Person first name is: ${person.firstName}`);
console.log(`Person age is: ${person.age}`);

console.log("====== Adding properties in the object =======");
person.pin = 411057;
console.table(person);

console.log("====== Updating properties in the object =========");
person.city = "Pune";
console.table(person);

console.log("====== Deleting properties from an object =========");
delete person.age;
console.table(person);

console.log("====== Traversing an object using for in loop =========");
for (const key in person) {
    const value = person [key];
    console.log(`${key} ===> ${value}`);   
}

console.log("====== Nested Object =========");
let student = {
    stdName: "Elon Musk",
    country: "USA",
    isMarried: true,
    address: {
        city: "Jalna",
        district: "Aurangabad",
        pin: 411234,
    }
}
console.log(student.address.pin);
student.address.street = "Wakad";
console.table(student.address);

console.log("====== Object with methods =========");
let employee = {
    // Properties 
    firstName: "Bill Gates",
    designation: "CEO",
    skills: ["HTML", "CSS", "JS", "React"], 
    // Methods
    details: function(){
        console.log(`Object Details: ${this.firstName} , ${this.designation}`); 
    }
}
employee.details();

const lastElement = employee.skills[employee.skills.length-1];
for (const element of employee.skills) {
    console.log(element);
}

let personStew = {
    firstName : "Stew",
    lastName : "Job",
    age : 49,
    city : "LA",
    isMarried : true
};

console.log("====== Get the Keys ============");
const keys = Object.keys(personStew);
console.log(keys);

console.log("====== Get the Values ============");
const values = Object.values(personStew);
console.log(values);

console.log("====== Check whether property exists or not ============");
const isAvailable = "age" in personStew;
console.log(isAvailable);

console.log("====== Clone Object ============");

let personElon = {
    firstName : "Elon",
    lastName : "Musk",
    age : 49,
    city : "LA",
    isMarried : true
};
let personNew = personElon;  // shallow Clone

console.log("===== Deep clone using Object.assign() =====");
const clonedPerson = Object.assign({}, personElon);
console.log(clonedPerson);
clonedPerson.country = "India";
console.log(personElon);

console.log("===== Deep clone using spread operator =====");
const copyPerson = {...personElon };
console.log(copyPerson);

console.log("===== Merge Object =====");
let personJenny = {
    firstName : "Jenny",
    lastName : "Musk",
    age : 49,
    city : "LA",
    isMarried : true
};
const address = {
    street: "Wakad",
    city: "Pune",
    country: "India"
}
Object.assign(personJenny, address);
console.table(personJenny);
