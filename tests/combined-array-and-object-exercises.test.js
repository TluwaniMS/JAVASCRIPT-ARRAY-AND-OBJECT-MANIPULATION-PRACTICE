describe("Tests for combined array and object exercises", () => {
  describe("Exercise 1 tests. (Combined Array and Object Exercises)", () => {
    test("1.1 Testing solution for returning the persons lucky numbers.", () => {
      const { returnThePersonsLuckyNumbers } = require("../exercises/combined-array-and-object-exercises");

      const value = returnThePersonsLuckyNumbers();

      expect(value).toEqual([14, 21, 9]);
    });

    test("1.2 Testing the solution for returning the persons second listed lucky number.", () => {
      const { returnThePersonsSecondListedLuckyNumber } = require("../exercises/combined-array-and-object-exercises");

      const value = returnThePersonsSecondListedLuckyNumber();

      expect(value).toEqual(21);
    });

    test("1.3 Testing the solution for adding the number 5 to the persons lucky numbers.", () => {
      const { addNumberFiveTothePersonsLuckyNumbers } = require("../exercises/combined-array-and-object-exercises");

      const value = addNumberFiveTothePersonsLuckyNumbers();

      expect(value.lucky_numbers).toEqual([14, 21, 9, 5]);
    });
  });

  describe("Exercise 2 tests. (Combined Array and Object Exercises)", () => {
    test("2.1 Testing solution for returning the total sports the person is interested in.", () => {
      const {
        returnTheTotalSportsThePersonIsInterestedIn
      } = require("../exercises/combined-array-and-object-exercises");

      const value = returnTheTotalSportsThePersonIsInterestedIn();

      expect(value).toEqual(3);
    });

    test("2.2 Testing the solution for adding rugby to the sports the person is interested in.", () => {
      const {
        addRugbyToTheSportsThePersonIsInterestedIn
      } = require("../exercises/combined-array-and-object-exercises");

      const value = addRugbyToTheSportsThePersonIsInterestedIn();

      expect(value.hobbies.sports).toEqual(["hockey", "swimming", "soccer", "rugby"]);
    });
  });

  describe("Exercise 3 tests. (Combined Array and Object Exercises)", () => {
    test("3.1 Testing solution for returning the first set of lucky numbers of the persons set_of_lucky_numbers.", () => {
      const {
        returnTheFirstSetOfThePersonsSetOfLuckyNumbers
      } = require("../exercises/combined-array-and-object-exercises");

      const value = returnTheFirstSetOfThePersonsSetOfLuckyNumbers();

      expect(value).toEqual([2, 9]);
    });

    test("3.2 Testing the solution for adding the number 15 to the second element of the persons set_of_lucky_numbers.", () => {
      const {
        addTheNumberFifteenToTheSecondElementOfThePersonsSetOfLuckyNumbers
      } = require("../exercises/combined-array-and-object-exercises");

      const value = addTheNumberFifteenToTheSecondElementOfThePersonsSetOfLuckyNumbers();

      expect(value.beliefs.set_of_lucky_numbers).toEqual([
        [2, 9],
        [7, 10, 15],
        [11, 14]
      ]);
    });
  });
});
