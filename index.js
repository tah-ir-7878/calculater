import inquirer from "inquirer";
const answer = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstnumber" },
    { message: "Enter Second number", type: "number", name: "secondnumber" },
    { message: "Select one of the operators to perform operation", type: "list", name: "operation",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"] },
]);
// conditional statement
if (answer.operation === "Addition") {
    console.log(answer.firstnumber + answer.secondnumber);
}
else if (answer.operation === "Subtraction") {
    console.log(answer.firstnumber - answer.secondnumber);
}
else if (answer.operation === "Multiplication") {
    console.log(answer.firstnumber * answer.secondnumber);
}
else if (answer.operation === "Division") {
    console.log(answer.firstnumber / answer.secondnumber);
}
else {
    console.log("Please select valid operator");
}
