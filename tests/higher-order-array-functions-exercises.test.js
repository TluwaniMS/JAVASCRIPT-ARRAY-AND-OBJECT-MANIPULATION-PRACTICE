describe("Tests for Array Higher Order Functions", () => {
  describe("Exercise 1 tests. (Higher Order Functions/Map)", () => {
    test("1.1 Testing solution for returning an array that contains the names only, of the people in the given array using the Map Function.", () => {
      const { returnPeoplesNamesUsingMap } = require("../exercises/higher-order-array-functions-exercises");

      const value = returnPeoplesNamesUsingMap();

      expect(value).toEqual(["Tshepo", "Daniel", "Lethabo", "Skomoto"]);
    });
  });

  describe("Exercise 2 tests. (Higher Order Functions)", () => {
    test("2.1 Testing solution for returning an array of users that are 18 years or older.", () => {
      const { returnPeopleThatAre18YearsOrOlder } = require("../exercises/higher-order-array-functions-exercises");

      const value = returnPeopleThatAre18YearsOrOlder();

      expect(value.length).toEqual(6);
    });

    test("2.2 Testing solution for returning an array of users that are 18 years or older and are female.", () => {
      const {
        returnPeopleThatAre18YearsOrOlderAndAreFemale
      } = require("../exercises/higher-order-array-functions-exercises");

      const value = returnPeopleThatAre18YearsOrOlderAndAreFemale();

      expect(value).toEqual([
        { name: "Daniel", surname: "Ntsoane", age: 19, gender: "Female" },
        { name: "Skomoto", surname: "Cooper", age: 21, gender: "Female" },
        { name: "Andrew", surname: "Langa", age: 33, gender: "Female" },
        { name: "Trevor", surname: "Kipembe", age: 27, gender: "Female" }
      ]);
    });
  });

  describe("Exercise 3 tests. (Higher Order Functions)", () => {
    test("3.1 Testing solution for generating an email for every user e.g(name.surname@mock.com) and add the email property to every user with the generated email as the value.", () => {
      const {
        generateAnEmailForEveryUserAndAddTheEmailPropertyToEveryUser
      } = require("../exercises/higher-order-array-functions-exercises");

      const value = generateAnEmailForEveryUserAndAddTheEmailPropertyToEveryUser();

      expect(value).toEqual([
        { name: "Tshepo", surname: "Mailula", email: "Tshepo.Mailula@mock.com" },
        { name: "Daniel", surname: "Ntsoane", email: "Daniel.Ntsoane@mock.com" },
        { name: "Lethabo", surname: "Moseamo", email: "Lethabo.Moseamo@mock.com" },
        { name: "Skomoto", surname: "Cooper", email: "Skomoto.Cooper@mock.com" }
      ]);
    });
  });

  describe("Exercise 4 tests. (Higher Order Functions)", () => {
    test("4.1 Testing solution for returning the summed total of the quantity of all the products.", () => {
      const {
        returnSummedTotalOfTheProductsQuantities
      } = require("../exercises/higher-order-array-functions-exercises");

      const value = returnSummedTotalOfTheProductsQuantities();

      expect(value).toEqual(11);
    });

    test("4.2 Testing solution for returning the summed total of the prices of all the products.", () => {
      const { returnSummedTotalOfTheProductsPrices } = require("../exercises/higher-order-array-functions-exercises");

      const value = returnSummedTotalOfTheProductsPrices();

      expect(value).toEqual(211);
    });
  });
});
