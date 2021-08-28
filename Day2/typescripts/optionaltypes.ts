let firstName:string;
let lastName:string;
let DOB :Date;
let active :Boolean;
enum education{Educated = 0,Uneducated =1}
let personEducation = education.Educated;
firstName = "Santhosh";
lastName = "Kulathumani";
active = true;
DOB = new Date(88,6,28);

console.log(firstName,lastName,DOB,active,education[personEducation]);

let accounts:any={
    accountId:39756937,
    balance:785687384,
    dot:new Date()
}
console.log(accounts);
accounts=5876836;
console.log(accounts);
accounts="Transaction Completed";
console.log(accounts);
