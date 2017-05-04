const multiply = require ("./multiplier.js");

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

  testMultiplyByZero() {
    return this.assertEquals(multiply(5,0), 0);
  }

  testMultiplyByOne() {
    return this.assertEquals(multiply(5,1), 5);
  }
   
   testMultiplyPositiveNumbers() {
    return this.assertEquals(multiply(5,7), 35);
  }

  testMultiplyNegativeNumbers() {
    return this.assertEquals(multiply(-5, -7), 35);
  }

  testMultiplyPositiveAndNegativeNumbers() {
   return this.assertEquals(multiply(5, -7), -35);
 }
}

const testSuite = new TestSuite();
testSuite.runTests();
