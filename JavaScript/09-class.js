
class Person {
    //Data members
   
    //constructor
    constructor(fullName, age, city){
        this.fullName = fullName;
        this.age = age;
        this.city = city;
    }
    //Member Functions
    display(){
        console.log(`FullName: ${this.fullName}, AGE: ${this.age}, CITY: ${this.city}`);
        
    }
}
const personElon = new Person("Elon Musk", 45, "Pune");
console.log(personElon);
console.log(personElon.fullName);
personElon.display();

const personStew = new Person("Stew Job", 56, "LA");
personStew.display();