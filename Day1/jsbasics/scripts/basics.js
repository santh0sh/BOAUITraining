console.log("Ready to run");

//Conditional Statement

var data = Math.random();
console.log(data);
if (data<200)
	console.log("under processing");
else
	console.log("done processing");
	
//control statements

for(let i=0;i<100;i++){
	console.log("Serial No :>> "+i +" >> "+Math.random());
	
}

//Read line
const readline=require("readline");
//const number=parseInt(readLine,radix:10)

const r1 =readline.createInterface({
	input:process.stdin,
	output:process.stdout
})

r1.question("What is your name",function(name){
	console.log(name);
	r1.close();
});

r1.on('close',function(){
	process.exit(0);
});
