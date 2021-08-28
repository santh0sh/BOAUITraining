var firstName;
var lastName;
var DOB;
var active;
var education;
(function (education) {
    education[education["Educated"] = 0] = "Educated";
    education[education["Uneducated"] = 1] = "Uneducated";
})(education || (education = {}));
var personEducation = education.Educated;
firstName = "Santhosh";
lastName = "Kulathumani";
active = true;
DOB = new Date(88, 6, 28);
console.log(firstName, lastName, DOB, active, education[personEducation]);
var accounts = {
    accountId: 39756937,
    balance: 785687384,
    dot: new Date()
};
console.log(accounts);
accounts = 5876836;
console.log(accounts);
accounts = "Transaction Completed";
console.log(accounts);
