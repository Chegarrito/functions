/* function favoriteAnimal(animal) {
    return animal + " is my favorite animal";
}

function sum(num1, num2){
    return num1 + num2;
}

console.log(favoriteAnimal("cats"));
console.log(sum(5, 7)); */
/* 
function showCount(count) {
    alert(count ?? "unknown");
}

showCount(0);
showCount(null);
showCount(); */
/* 
function sayHi(){
    alert("Hi!");
}

let func = sayHi;

alert(sayHi());
alert(func());
 */
    /* 
    let sayHi = function() {
        alert("HI!");
    };

    let func = sayHi;

    sayHi();
    func();
 */
/* 
function ask(question, yes, no) {
    if (confirm(question)) yes()
    else no()
}

function showOk() {
    alert("You agreed.");
}

function showCancel() {
    alert("You canceled the execution.");
}

ask("Do you agree?", showOk, showCancel);
 */

function ask(question, yes, no) {
    if (confirm(quesion)) yes()
    else no();
}

ask(
    "Do you agree",
    function() { alert("You agreed."); },
    function() {alert("You canceled the execution"); }
);