// Testing Framework
function test(message, callback) {
    try {
        callback();
        console.log(message);
    } catch (error) {
        console.error(error);
        console.log(message);
    }
}

// Assertion Liberary

function expect(actual) {
    return {
        toEqual: function(expected) {
            if (actual !== expected) {
                throw new Error(`${actual} is not qual to ${expected}`);
            }
        }
    };
}

// 
function add(numA, numB) {
    return numA + numB;
}

let result, expected;

function testAdd() {
    result = add(2, 4);
    expected = 7;
    if (typeof result !== expected) {
        throw new Error(`${typeof result} is not equal to ${expected}`);
    }
}

test("adding 2 and 4", testAdd);
// 

function testAdd1() {
    result = add(2, 3);
    expected = 5;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}

test("adding 2 and 3", testAdd1);
//

function testAdd2() {
    result = add(3, 3);
    expected = 5;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}

test("adding 3 and 3", testAdd2);
//

function testAdd3() {
    result = add(23, 3);
    expected = 26;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}

test("adding 23 and 3", testAdd3);
//

function testAdd4() {
    result = add(20, 3);
    expected = 23;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}

test("adding 20 and 3", testAdd4);
//