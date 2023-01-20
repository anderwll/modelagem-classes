"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Car = exports.GasPump = exports.Calculator = exports.Account = exports.Ball = exports.Counter = void 0;
// ------- EXERCICIO 1 -------
class Counter {
    constructor() {
        this._counter = 0;
    }
    ;
    reset() {
        this._counter = 0;
        console.log(`Zerado. Total: ${this._counter}`);
    }
    ;
    increment(value) {
        this._counter += value;
        console.log(`Adicionado +${value}. Total: ${this._counter}`);
    }
    ;
    decrement(value) {
        if (value > this._counter) {
            this._counter = 0;
            console.log(`Removido ${value}. Total: ${this._counter}`);
            return;
        }
        this._counter -= value;
        console.log(`Removido ${value}. Total: ${this._counter}`);
    }
}
exports.Counter = Counter;
;
// ------- EXERCICIO 2 -------
class Ball {
    constructor(color, circumference, material) {
        this._color = color;
        this._circumference = circumference;
        this._material = material;
    }
    ;
    changeColor(newColor) {
        this._color = newColor;
        console.log(`Cor alterada com sucesso 🎉. Nova cor: ${this._color}`);
    }
    ;
    showColor() {
        console.log(`A cor da bola é ${this._color}`);
    }
    ;
}
exports.Ball = Ball;
;
// ------- EXERCICIO 3 -------
class Account {
    constructor(number, name) {
        this._numberAccount = number;
        this._nameAccountHolder = name;
        this._balance = 0;
    }
    ;
    changeName(newName) {
        this._nameAccountHolder = newName;
        console.log(`Nome alterado com sucesso. Nome => ${this._nameAccountHolder}`);
    }
    ;
    deposit(value) {
        this._balance += value;
        console.log(`Parabéns vc depositou R$${value}. Saldo => R$${this._balance}`);
    }
    ;
    withdraw(value) {
        if (value > this._balance) {
            console.log(`Vc não possi saldo suficiente. Saldo => R$${this._balance}`);
            return;
        }
        ;
        this._balance -= value;
        console.log(`Parabéns vc sacou R$${value}. Saldo => R$${this._balance}`);
    }
}
exports.Account = Account;
;
// ------- EXERCICIO 4 -------
class Calculator {
    constructor() {
        this._history = [];
    }
    ;
    add(value1, value2) {
        const results = value1 + value2;
        console.log(`${value1} + ${value2} = ${results}`);
        this._history.push(` ${value1} + ${value2} = ${results}`);
    }
    ;
    subtract(value1, value2) {
        const results = value1 - value2;
        console.log(`${value1} - ${value2} = ${results}`);
        this._history.push(` ${value1} - ${value2} = ${results}`);
    }
    ;
    multiply(value1, value2) {
        const results = value1 * value2;
        console.log(`${value1} * ${value2} = ${results}`);
        this._history.push(` ${value1} * ${value2} = ${results}`);
    }
    ;
    share(value1, value2) {
        const results = value1 / value2;
        console.log(`${value1} / ${value2} = ${results}`);
        this._history.push(` ${value1} / ${value2} = ${results}`);
    }
    ;
    changeHistory() {
        console.log(`Seu historico: ${this._history}`);
    }
    ;
    clearHistory() {
        this._history = [];
        console.log(`Historico limapado com sucesso! 🎉`);
    }
}
exports.Calculator = Calculator;
;
// ------- EXERCICIO 5 -------
class GasPump {
    constructor(type, value, quantity) {
        this._typeFuel = type;
        this._valueLiter = value;
        this._bombaQuantity = quantity;
    }
    supplyByValue(value) {
        const totalSupply = value / this._valueLiter;
        if (totalSupply > this._bombaQuantity) {
            console.log(`Vc não possui gasolina suficiente! Bomba => ${this._bombaQuantity}`);
            return;
        }
        this._bombaQuantity -= totalSupply;
        console.log(`Vc abasteceu com sucesso! Bomba => ${this._bombaQuantity}`);
    }
    ;
    supplyByLiter(liter) {
        if (liter > this._bombaQuantity) {
            console.log(`A bomba não possui gasosa que chega! Bomba => ${this._bombaQuantity}`);
            return;
        }
        const valueLiter = liter * this._valueLiter;
        this._bombaQuantity -= liter;
        console.log(`Vc abasteceu com sucesso! O valor a ser pago é R$${valueLiter.toFixed(2)} reais`);
    }
    ;
    changeValue(value) {
        if (value < 0) {
            console.log(`O valor informado deve ser maior que 0`);
            return;
        }
        this._valueLiter = value;
        console.log(`Valor do litro alterado para R$${this._valueLiter.toFixed(2)}`);
    }
    ;
    changeFuel(newType) {
        this._typeFuel = newType;
        console.log(`Alterado o tipo de combustivel para ${this._typeFuel}`);
    }
    ;
    changeQuantityFuel(quantity) {
        if (quantity < 0) {
            console.log(`O valor informado deve ser maior que 0`);
            return;
        }
        ;
        this._bombaQuantity = quantity;
        console.log(`A quantidade foi alterada para ${this._bombaQuantity} litros.`);
    }
    ;
}
exports.GasPump = GasPump;
// ------- EXERCICIO 6 -------
class Car {
    constructor(consume) {
        this._kilometerPerLiter = consume;
        this._fuelQuantity = 0;
    }
    ;
    toWalk(distance) {
        const totalNecessary = distance / this._kilometerPerLiter;
        if (totalNecessary > this._fuelQuantity) {
            console.log(`Não é possivel percorrer essa distancia com o seu nivel de combustivel 😥.`);
            console.log(`Combustivel: ${this._fuelQuantity} litros. Necessário ${totalNecessary} litros.`);
            return;
        }
        ;
        this._fuelQuantity -= totalNecessary;
        console.log(`Vc andou ${distance}km. Seu combustivel atual é de ${this._fuelQuantity} litros.`);
    }
    ;
    changeFuel() {
        console.log(`A quantida de gasolina é ${this._fuelQuantity} litros`);
    }
    ;
    addFuel(fuelQuantity) {
        this._fuelQuantity += fuelQuantity;
        console.log(`Vc adicionou ${fuelQuantity} litros. Combustivel disponivel: ${this._fuelQuantity} litros.`);
    }
    ;
}
exports.Car = Car;
;
