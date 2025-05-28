function Bank (bankName, location, ifscCode, branchCode) {
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
};

const yesBank = new Bank("YES Bank", "Hyderabad", "YESB3002103", 1234);
const sbiBank = new Bank("SBI Bank", "Pune", "SBIN0005241", 5678);
const mahBank = new Bank("Maharashtra Bank", "Nashik", "MAHB000321", 9876);
const axisBank = new Bank("AXIS Bank", "Delhi", "UTIB0000798", 5432);

console.log(`Bank Details: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);
console.log(`Bank Details: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
console.log(`Bank Details: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);
console.log(`Bank Details: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);

Bank.prototype.openTime = "9 AM IST";
Bank.prototype.closeTime = "6 PM IST";

console.log(`SBI Bank's Opening Time: ${sbiBank.openTime}`);
console.log(`SBI Bank's Closing Time: ${sbiBank.closeTime}`);

console.log(`Axis Bank Name: ${axisBank.bankName}, Closing Time: ${axisBank.closeTime}`);

console.log(`YES Bank - Name: ${yesBank.bankName}, Branch Code: ${yesBank.branchCode}, Opening Time: ${yesBank.openTime}`);

