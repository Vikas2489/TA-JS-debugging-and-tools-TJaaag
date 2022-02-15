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
        },
        toBeEqual: function(expected) {
            if (typeof actual !== expected) {
                throw new Error(`${typeof actual} is not qual to ${expected}`);
            }
        }
    };
}

// 
function add(numA, numB) {
    return numA + numB;
}

let result, expected;

function testAdd1() {
    result = add(2, 4);
    expected = 61;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
test("adding 2 and 4", testAdd1);
//

function testAdd2() {
    result = add(2, 40);
    expected = 42;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
test("adding 2 and 40", testAdd2);
//

function testAdd3() {
    result = add(20, 4);
    expected = 24;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
test("adding 20 and 4", testAdd3);
//

function testAdd4() {
    result = add(22, 4);
    expected = 26;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
test("adding 22 and 4", testAdd4);
//
function testAdd5() {
    result = add(200, 4);
    expected = 222;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
test("adding 200 and 4", testAdd5);
//









function multiply(numA, numB) {
    return numA * numB;
}

function multiplyTest1() {
    result = multiply(2, 4);
    expected = 61;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
test("multiply 2 and 4", multiplyTest1);
//

function multiplyTest2() {
    result = multiply(20, 5);
    expected = 100;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
test("multiply 20 and 5", multiplyTest2);
//

function multiplyTest3() {
    result = multiply(200, 5);
    expected = 1000;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
test("multiply 200 and 5", multiplyTest3);
//

function multiplyTest4() {
    result = multiply(2, 5);
    expected = 10;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
test("multiply 2 and 5", multiplyTest4);
//

function multiplyTest5() {
    result = multiply(6, 3);
    expected = 18;
    if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
    }
}
test("multiply 6 and 3", multiplyTest5);
//