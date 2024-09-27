// console.log("Hello there!");
// var time = 0;
// var timer = setInterval(function(){
//     time += 2;
//     console.log(time + "Time to stand");
//     if (time > 10){
//         clearInterval(timer);
//     }
// }, 2000);

// console.log(__dirname);

// Functions in Node.js

// function sayHello(){
//     console.log("Hello");
// }
// sayHello();

// function expression
// var sayHello = function(){
//     console.log("Hello");
// };
// sayHello();

// modules and require

// var modules = require('./modules');

// console.log(modules.counter(['james', 'sus', 'Fran']));
// console.log(modules.sum(1, 2));
// console.log(modules.pi);

// var events = require('events');

// var myEmitter = new events.EventEmitter();

// myEmitter.on('someEvent', function(mssg){
//     console.log(mssg);
// });

// myEmitter.emit('someEvent', 'The event was emitted');

//  events and utl modules

var events = require('events');
var util = require('util');


var Person = function(name){
    this.name = name;
};


util.inherits(Person, events.EventEmitter);

var francode = new Person('francode');
var Lydia = new Person('Lydia');
var John = new Person('John');
var Joyce = new Person('Joyce');

var fam = [francode, Lydia, John, Joyce];

fam.forEach(function(person){
    person.on('speak', function(mssg){
        console.log(person.name + ' said: ' + mssg);
    });
});

francode.emit('speak', 'I am a winner');
Lydia.emit('speak', 'I am cold');
John.emit('speak', 'I am hungry');
