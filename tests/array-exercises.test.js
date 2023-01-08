describe("Tests for array exercises.", () => {
  describe("Exercise 1 tests. (Array Exercises)", () => {
    test("1.1 Testing solution for returning element/value 2.", () => {
      const { returnElementTwoFromArray } = require("../exercises/array-exercises");

      const value = returnElementTwoFromArray();

      expect(value).toEqual(2);
    });

    test("1.2 Testing solution for returning element/value 4.", () => {
      const { returnElementFourFromArray } = require("../exercises/array-exercises");

      const value = returnElementFourFromArray();

      expect(value).toEqual(4);
    });

    test("1.3 Testing the solution to return the array size.", () => {
      const { returnArraySize } = require("../exercises/array-exercises");

      const value = returnArraySize();

      expect(value).toEqual(4);
    });

    test("1.4 Testing the solution to add number 5 to the array.", () => {
      const { addTheNumberFiveToTheArray } = require("../exercises/array-exercises");

      const value = addTheNumberFiveToTheArray();

      expect(value).toEqual([1, 2, 3, 4, 5]);
    });
  });

  describe("Exercise 2 tests. (Array Exercises)", () => {
    test("2.1 Testing the solution to check the array size of the second element in the main array.", () => {
      const { returnArraySizeOfSecondElementInMainArray } = require("../exercises/array-exercises");

      const value = returnArraySizeOfSecondElementInMainArray();

      expect(value).toEqual(3);
    });

    test("2.2 Testing the solution to return the array element containing numbers 6, 8 and 9.", () => {
      const {
        returnTheArrayElementContainingNumbersSixEightAndNineFromArray
      } = require("../exercises/array-exercises");

      const value = returnTheArrayElementContainingNumbersSixEightAndNineFromArray();

      expect(value).toEqual([6, 8, 9]);
    });

    test("2.3 Testing the solution to return the element/value 3 from the array.", () => {
      const { returnElementThreeFromArray } = require("../exercises/array-exercises");

      const value = returnElementThreeFromArray();

      expect(value).toEqual(3);
    });

    test("2.4 Testing the solution to add an array with numbers 7 and 8 to the main array.", () => {
      const { addAnArrayToTheMainArrayWithNumberSevenAndEight } = require("../exercises/array-exercises");

      const value = addAnArrayToTheMainArrayWithNumberSevenAndEight();

      expect(value).toEqual([
        [2, 4, 17, 19],
        [6, 8, 9],
        [1, 3],
        [7, 8]
      ]);
    });

    test("2.5 Testing the solution to return the array size of the first array element in the main array.", () => {
      const { returnTheArraySizeOfTheFirstArrayElementInTheMainArray } = require("../exercises/array-exercises");

      const value = returnTheArraySizeOfTheFirstArrayElementInTheMainArray();

      expect(value).toEqual(4);
    });
  });

  describe("Exercise 3 tests. (Array Exercises)", () => {
    test("3.1 Testing the solution to return the array containing numbers 6 and 8", () => {
      const { returnArrayContainingSixAndEight } = require("../exercises/array-exercises");

      const value = returnArrayContainingSixAndEight();

      expect(value).toEqual([6, 8]);
    });

    test("3.2 Testing the solution to return the element/value 4 from the array.", () => {
      const { returnValueFourFromArray } = require("../exercises/array-exercises");

      const value = returnValueFourFromArray();

      expect(value).toEqual(4);
    });

    test("3.3 Testing the solution to add an array with elements/values 9,12 and 15 in the array containing the arrays that contain 2 and 4, and 6 and 8.", () => {
      const { addAnArrayWithElementsNineTwelveAndFifteen } = require("../exercises/array-exercises");

      const value = addAnArrayWithElementsNineTwelveAndFifteen();

      expect(value).toEqual([
        [1, 3],
        [
          [2, 4],
          [7, 9, 11],
          [6, 8],
          [9, 12, 15]
        ]
      ]);
    });

    test("3.4 Testing the solution to return the array size of the second array in the second position of the main array.", () => {
      const { returnArraySizeOfTheSecondArrayInTheSecondPosition } = require("../exercises/array-exercises");

      const value = returnArraySizeOfTheSecondArrayInTheSecondPosition();

      expect(value).toEqual(3);
    });
  });
});
