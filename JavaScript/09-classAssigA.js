class Vehicle {
    constructor(brand, model, isAutoPilot, color, price) {
        this.brand = brand;
        this.model = model;
        this.isAutoPilot = isAutoPilot;
        this.color = color;
        this.price = price;
    }
    showDetails() {
        console.log(`Vehicle Details → Brand: ${this.brand}, Model: ${this.model}, IsAutoPilot: ${this.isAutoPilot}, Color: ${this.color}, Price: ₹${this.price}`);
    }
}

const vehicle1 = new Vehicle("Rolls-Royce", "Phantom", "true", "White", 95000000);
const vehicle2 = new Vehicle("Ferrari", "SF90 Stradale", "false", "Red", 78000000);
const vehicle3 = new Vehicle("Lamborghini", "Aventador SVJ", "true", "Yellow", 62000000);
const vehicle4 = new Vehicle("Bugatti", "Chiron Super Sport", "false", "Black", 220000000);
const vehicle5 = new Vehicle("Bentley", "Flying Spur", "Luxury", "true", 55000000);

console.log("====== Displaying Vehicle Details ======");
vehicle1.showDetails();
vehicle2.showDetails();
vehicle3.showDetails();
vehicle4.showDetails();
vehicle5.showDetails();


class College {
    constructor(name, location, establishedYear, universityType, courseOffered, ranking) {
        this.name = name;
        this.location = location;
        this.establishedYear = establishedYear;
        this.universityType = universityType;
        this.courseOffered = courseOffered;
        this.ranking = ranking;
    }
    display() {
        console.log(`College: ${this.name}, Location: ${this.location}, Established: ${this.establishedYear}, Type: ${this.universityType}, Course: ${this.courseOffered}, Ranking: ${this.ranking}`);
    }
}

const college1 = new College("IIT Delhi", "New Delhi", 1961, "Government", "Engineering", 1);
const college2 = new College("BITS Pilani", "Pilani", 1964, "Private", "Technology", 4);
const college3 = new College("Christ University", "Bangalore", 1969, "Deemed", "Arts & Management", 7);
const college4 = new College("IIM Ahmedabad", "Ahmedabad", 1961, "Government", "Business Management", 2);

console.log("");
console.log("====== College Profiles =======");
college1.display();
college2.display();
college3.display();
college4.display();

