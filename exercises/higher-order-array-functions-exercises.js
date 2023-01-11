// Exercise 1. (Map Function) ✍

// 1.1 Return an array that contains the names only, of the people in the given array using the Map Function.⚡
// Expected answer ["Tshepo","Daniel","Lethabo","Skomoto"] ✅

module.exports.returnPeoplesNamesUsingMap = () => {
  const people = [
    { name: "Tshepo", surname: "Mailula" },
    { name: "Daniel", surname: "Ntsoane" },
    { name: "Lethabo", surname: "Moseamo" },
    { name: "Skomoto", surname: "Cooper" }
  ];
};

// Exercise 2. (Filter Function) ✍

// 2.1 Return an array of users that are 18 years or older.⚡
// Expected answer  [{ name: "Daniel", surname: "Ntsoane", age: 19, gender: "Female" },{ name: "Lethabo", surname: "Moseamo", age: 30, gender: "Male" },{ name: "Skomoto", surname: "Cooper", age: 21, gender: "Female" },{ name: "Andrew", surname: "Langa", age: 33, gender: "Female" },{ name: "Trevor", surname: "Kipembe", age: 27, gender: "Female" },{ name: "Khaya", surname: "Mseleku", age: 32, gender: "Male" }]✅

module.exports.returnPeopleThatAre18YearsOrOlder = () => {
  const people = [
    { name: "Tshepo", surname: "Mailula", age: 16, gender: "Male" },
    { name: "Daniel", surname: "Ntsoane", age: 19, gender: "Female" },
    { name: "Lethabo", surname: "Moseamo", age: 30, gender: "Male" },
    { name: "Skomoto", surname: "Cooper", age: 21, gender: "Female" },
    { name: "Andrew", surname: "Langa", age: 33, gender: "Female" },
    { name: "Anele", surname: "Lwala", age: 14, gender: "Male" },
    { name: "Trevor", surname: "Kipembe", age: 27, gender: "Female" },
    { name: "Sizwe", surname: "Mkhize", age: 9, gender: "Female" },
    { name: "Khaya", surname: "Mseleku", age: 32, gender: "Male" }
  ];
};

// 2.2 Return an array of users that are 18 years or older and are female.⚡
// Expected answer [{ name: "Daniel", surname: "Ntsoane", age: 19, gender: "Female" },{ name: "Skomoto", surname: "Cooper", age: 21, gender: "Female" },{ name: "Andrew", surname: "Langa", age: 33, gender: "Female" },{ name: "Trevor", surname: "Kipembe", age: 27, gender: "Female" }]✅

module.exports.returnPeopleThatAre18YearsOrOlderAndAreFemale = () => {
  const people = [
    { name: "Tshepo", surname: "Mailula", age: 16, gender: "Male" },
    { name: "Daniel", surname: "Ntsoane", age: 19, gender: "Female" },
    { name: "Lethabo", surname: "Moseamo", age: 30, gender: "Male" },
    { name: "Skomoto", surname: "Cooper", age: 21, gender: "Female" },
    { name: "Andrew", surname: "Langa", age: 33, gender: "Female" },
    { name: "Anele", surname: "Lwala", age: 14, gender: "Male" },
    { name: "Trevor", surname: "Kipembe", age: 27, gender: "Female" },
    { name: "Sizwe", surname: "Mkhize", age: 9, gender: "Female" },
    { name: "Khaya", surname: "Mseleku", age: 32, gender: "Male" }
  ];
};

// Exercise 3. (forEach Function) ✍

// 3.1 Generate an email for every user e.g(name.surname@mock.com) and add the email property to every user with the generated email as the value.⚡
// Expected answer [{ name: "Tshepo", surname: "Mailula", email: "Tshepo.Mailula@mock.com" },{ name: "Daniel", surname: "Ntsoane", email: "Daniel.Ntsoane@mock.com" },{ name: "Lethabo", surname: "Moseamo", email: "Lethabo.Moseamo@mock.com" },{ name: "Skomoto", surname: "Cooper", email: "Skomoto.Cooper@mock.com" }]✅

module.exports.generateAnEmailForEveryUserAndAddTheEmailPropertyToEveryUser = () => {
  const people = [
    { name: "Tshepo", surname: "Mailula" },
    { name: "Daniel", surname: "Ntsoane" },
    { name: "Lethabo", surname: "Moseamo" },
    { name: "Skomoto", surname: "Cooper" }
  ];
};

// Exercise 4. (Reduce Function) ✍

// 4.1 Return the summed total of the quantity of all the products.⚡
// Expected answer 11 ✅

module.exports.returnSummedTotalOfTheProductsQuantities = () => {
  const products = [
    { product: "Bar One", price: 36, quantity: 3 },
    { product: "Oros", price: 70, quantity: 2 },
    { product: "Bread", price: 30, quantity: 2 },
    { product: "Oranges", price: 25, quantity: 1 },
    { product: "Coca Cola", price: 50, quantity: 3 }
  ];
};

// 4.2 Return the summed total of the prices of all the products.⚡
// Expected answer 211✅

module.exports.returnSummedTotalOfTheProductsPrices = () => {
  const products = [
    { product: "Bar One", price: 36, quantity: 3 },
    { product: "Oros", price: 70, quantity: 2 },
    { product: "Bread", price: 30, quantity: 2 },
    { product: "Oranges", price: 25, quantity: 1 },
    { product: "Coca Cola", price: 50, quantity: 3 }
  ];
};
