

//Global Variable
let genderType = "female";
//Function
function printGender(){
let color = "brown"
//IF Condition
if(genderType.startsWith("female"))
//Inside IF BLOCK
{
    var age =30;
    let color = "pink" //BLOCKED SCOPE
    console.log("Pink is the colour INSIDE BLOCK");
    
}
console.log("Outside the if-block but inside the function, PRINT THE VALUE OF THE AGE.",age);

}
printGender();
console.log("Call the function and print the value of GLOBAL GENDER TYPE. usin java script",genderType);
