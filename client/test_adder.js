 add = require ("./adder.js");

 class TestSuite {

  runTest(testName) {
    const result = this[testName]();
    console.log(result, testName);
  }

  runTests() {
    Object.getOwnPropertyNames(Object.getPrototypeOf(this))
    .filter(prop => this[prop] instanceof Function)
    .filter(prop => prop.indexOf("test") !== -1)
    .forEach(testName => this.runTest(testName));
  }

  assertEquals(a, b) {
    return a === b;
  }

  testAddPositiveNumbers() {
    return this.assertEquals(add(5,7), 12);
  }

  testAddNegativeNumbers() {
    return this.assertEquals(add(-5, -7), -12);
  }

  testAddPositiveAndNegativeNumbers() {
   return this.assertEquals(add(5, -7), -2);
 }
}

const testSuite = new TestSuite();
testSuite.runTests();
