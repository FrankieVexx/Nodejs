// Exporting moduels method 1
var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

var sum = function(a, b){
    return `The sum of the two numbers is ${a+b}`;
};

var pi = 3.142;

module.exports.counter = counter;
module.exports.sum = sum;
module.exports.pi = pi;

//exportiong modules method 2

module.exports.counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

module.exports.sum = function(a, b){
    return `The sum of the two numbers is ${a+b}`;
};

module.exports.pi = 3.142;

// exporting modules method 3

var counter = function(arr){
    return 'There are ' + arr.length + ' elements in this array';
};

var sum = function(a, b){
    return `The sum of the two numbers is ${a+b}`;
};

var pi = 3.142;

module.exports = {
    counter: counter,
    sum: sum,
    pi: pi
};
