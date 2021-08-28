function Customer (id,name,phoneNumber,jobType){
	this.id = id;
	this.name = name;
	this.phoneNumber = phoneNumber;
	 var jobType=jobType;//private scope
    //getter method
    this.getJobType=function(){
        console.log(jobType)
    };
}

Customer.prototype.updatePhoneNumber=function(phoneNumber){
	this.phoneNumber = phoneNumber;
}
var customer = new Customer(26762,'Sandy',994146998,'SSE');
console.log(customer);
customer.getJobType();
customer.updatePhoneNumber(123456);
console.log(customer);