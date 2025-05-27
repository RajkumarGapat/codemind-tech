let professor = {
    firstName: "John",
    lastName: "Nichol",
    age: 49,
    college: "Imperial College",
    subject: "AI",
    
    degrees : {
        engineering: "CSC",
        pgdac: "DAC",
        masters: "Computer Engineering",
        phd: "Advanced Computing",
        diploma: "IT"
    },

     certificates: [
        "Hacker Rank Participation",
        "Certificate in IFE course",
        "Certificate in Adv Programming"
    ]
};

console.log("======== Original Professor Object ========");
console.log(professor);

console.log("======= Added totalExperience ========");
professor.totalExperience = "14 years";
console.log(professor);

console.log("======= Updated age property =========");
professor.age = 45;
console.log(professor);

console.log("======= Added new certificate at index 2 =======");
professor.certificates.splice(2, 0, "Oracle Certified");
console.log(professor.certificates);

console.log("======== Last certificate in the array is =======");
var lastCertificate = professor.certificates[professor.certificates.length - 1];
console.log(lastCertificate);

console.log("====== Logging all properties of professor object using for-in loop =======");
for (const key in professor) {
    const value = professor [key];
    console.log(`${key} ===> ${value}`);   
}