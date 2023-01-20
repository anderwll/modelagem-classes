"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_1 = require("./class");
// ------- EXERCICIO 1 -------
const counter1 = new class_1.Counter;
counter1.increment(10);
counter1.decrement(5);
counter1.reset();
// ------- EXERCICIO 2 -------
const ball1 = new class_1.Ball('Red', 2, 'Leather');
ball1.showColor();
ball1.changeColor('Blue');
// ------- EXERCICIO 3 -------
const account1 = new class_1.Account(1, 'Anderson');
console.log(account1);
account1.changeName('Eduarda');
account1.deposit(10000);
account1.withdraw(200);
account1.withdraw(10000);
console.log(account1);
// ------- EXERCICIO 4 -------
const calculator1 = new class_1.Calculator();
calculator1.add(1, 1);
calculator1.subtract(10, 5);
calculator1.multiply(3, 2);
calculator1.share(10, 5);
calculator1.changeHistory();
// ------- EXERCICIO 5 -------
const gasPump1 = new class_1.GasPump('Comum', 5, 50);
gasPump1.supplyByLiter(2);
gasPump1.supplyByValue(10);
gasPump1.changeFuel('Aditivada');
gasPump1.changeQuantityFuel(100);
// ------- EXERCICIO 6 -------
const myFusca = new class_1.Car(10); // KM/L
myFusca.addFuel(1); // VALOR EM LITROS
myFusca.toWalk(1); // VALOR EM KM
myFusca.changeFuel();
