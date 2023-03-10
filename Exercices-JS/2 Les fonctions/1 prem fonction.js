////////////// Question 1 //////////////////////
console.log("---------------------------------------")
console.log("Question 1 : ")

function multiply(a, b) {
    if (isNaN(a) || isNaN(b)) {
        throw new Error("Une des valeurs entrées n'est pas un nombre !");
    }
    return a * b;
}

var x = multiply(5, 10);

console.log(x);
console.log("Nombre d'arguments : ", arguments.length);

var y = multiply(1, 10, 2);
console.log(y);
console.log("Nombre d'arguments : ", arguments.length);

//var z = multiply(1, "a");
//console.log(z);


////////////// Question 2 //////////////////////
console.log("---------------------------------------")
console.log("Question 2 : ")

function printResult(a, b) {
    x = multiply(a, b);
    return console.log(x);
}

printResult(2, 5);

////////////// Question 3 //////////////////////
console.log("---------------------------------------")
console.log("Question 3 : Fonction de callback")

function sayHello() {
    return console.log("Hello !");
}

function execute(callback) {
    if (callback && typeof callback == 'function') {
        callback();
    }
}

execute(sayHello());
execute("blabla");
execute(5);

/////

function computeOperation(operation, a, b) {
    return operation(a, b);
}

x = computeOperation(multiply, 9, 9);
console.log(x);

////////////// Question 4 //////////////////////
console.log("---------------------------------------")
console.log("Question 4 : Fonction asynchrone");

function asyncSayHello() {
    setTimeout(sayHello, 5000);
}

asyncSayHello();