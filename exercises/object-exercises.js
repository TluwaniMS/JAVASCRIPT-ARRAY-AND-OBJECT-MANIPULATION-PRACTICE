// Exercise 1.✍

// 1.1. Return the persons name.⚡
// Expected answer  ✅

module.exports.returnThePersonsName = () => {
  const person = { name: "Themba", surname: "Mahlalela", age: 27 };
};

// 1.2. Return the persons age.⚡
// Expected answer  ✅

module.exports.returnThePersonsAge = () => {
  const person = { name: "Themba", surname: "Mahlalela", age: 27 };
};

// 1.3. Return the persons surname.⚡
// Expected answer  ✅

module.exports.returnThePersonsSurname = () => {
  const person = { name: "Themba", surname: "Mahlalela", age: 27 };
};

// 1.4. Assign a gender property to the person object and assign to it the value 'Female'⚡
// Expected answer  ✅

module.exports.addAGenderPropertyToThePerson = () => {
  const person = { name: "Themba", surname: "Mahlalela", age: 27 };
};

// Exercise 2.✍

// 2.1. Return the persons nationality.⚡
// Expected answer  ✅

module.exports.returnThePersonsNationality = () => {
  const person = {
    name: "Lebogang",
    surname: "Markle",
    age: 19,
    additional_information: {
      nationality: "Alienian",
      race: "Alien"
    }
  };
};

// 2.2. Return the persons race.⚡
// Expected answer  ✅

module.exports.returnThePersonsRace = () => {
  const person = {
    name: "Lebogang",
    surname: "Markle",
    age: 19,
    additional_information: {
      nationality: "Alienian",
      race: "Alien"
    }
  };
};

// 2.3. Add a property named physical_information with the following object as its value { height:'1.8m',weight:'82KG' }.⚡
// Expected answer  ✅

module.exports.addThePhysicalInformationPropertyToThePerson = () => {
  const person = {
    name: "Lebogang",
    surname: "Markle",
    age: 19
  };
};

// Exercise 3.✍

// 3.1. Return the persons home address street_name.⚡
// Expected answer  ✅

module.exports.returnThePersonsHomeAddressStreetName = () => {
  const person = {
    name: "Ashwin",
    surname: "Govender",
    age: 27,
    address: {
      home: { street_name: "Albertina Sisule", area_code: 2109 },
      work: { street_name: "Thabo Mbeko", area_code: 1632 }
    }
  };
};

// 3.2. Return the persons work address.⚡
// Expected answer  ✅

module.exports.returnThePersonsWorkAddress = () => {
  const person = {
    name: "Ashwin",
    surname: "Govender",
    age: 27,
    address: {
      home: { street_name: "Albertina Sisule", area_code: 2109 },
      work: { street_name: "Thabo Mbeko", area_code: 1632 }
    }
  };
};

// 3.3. Return the persons work address area code.⚡
// Expected answer  ✅

module.exports.returnThePersonsWorkAddressAreaCode = () => {
  const person = {
    name: "Ashwin",
    surname: "Govender",
    age: 27,
    address: {
      home: { street_name: "Albertina Sisule", area_code: 2109 },
      work: { street_name: "Thabo Mbeko", area_code: 1632 }
    }
  };
};

// 3.3. Add a parents property that has properties father and mother, the mother property should be given the value {name:'Engelinah',surname:'Roots'}, and the father property should be given the following value { name:'Elvin',surname:'Roots' }.⚡
// Expected answer  ✅

module.exports.fn = () => {
  const person = {
    name: "Ashwin",
    surname: "Govender",
    age: 27
  };
};
