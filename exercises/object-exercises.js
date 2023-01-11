// Exercise 1.✍

// 1.1. Return the persons name.⚡
// Expected answer Themba ✅

module.exports.returnThePersonsName = () => {
  const person = { name: "Themba", surname: "Mahlalela", age: 27 };
};

// 1.2. Return the persons age.⚡
// Expected answer 27 ✅

module.exports.returnThePersonsAge = () => {
  const person = { name: "Themba", surname: "Mahlalela", age: 27 };
};

// 1.3. Return the persons surname.⚡
// Expected answer Mahlalela ✅

module.exports.returnThePersonsSurname = () => {
  const person = { name: "Themba", surname: "Mahlalela", age: 27 };
};

// 1.4. Assign a gender property to the person object and assign to it the value 'Female'⚡
// Expected answer  { name: "Themba", surname: "Mahlalela", age: 27, gender: "Female" }✅

module.exports.addAGenderPropertyToThePerson = () => {
  const person = { name: "Themba", surname: "Mahlalela", age: 27 };
};

// Exercise 2.✍

// 2.1. Return the persons nationality.⚡
// Expected answer Alienian ✅

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
// Expected answer Alien ✅

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
// Expected answer { name: "Lebogang",surname: "Markle",age: 19,physical_information: { height: "1.8m" ,weight: "82KG" }} ✅

module.exports.addThePhysicalInformationPropertyToThePerson = () => {
  const person = {
    name: "Lebogang",
    surname: "Markle",
    age: 19
  };
};

// Exercise 3.✍

// 3.1. Return the persons home address street_name.⚡
// Expected answer "Albertina Sisule" ✅

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
// Expected answer { street_name: "Thabo Mbeko", area_code: 1632 } ✅

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
// Expected answer 1632 ✅

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

// 3.4. Add a parents property that has properties father and mother, the mother property should be given the value {name:'Engelinah',surname:'Roots'}, and the father property should be given the following value { name:'Elvin',surname:'Roots' }.⚡
// Expected answer { name: "Ashwin",surname: "Govender",age: 27,parents: { father: { name: "Elvin", surname: "Roots" }, mother: { name: "Engelinah", surname: "Roots" }}} ✅

module.exports.addParentsPropertyToPerson = () => {
  const person = {
    name: "Ashwin",
    surname: "Govender",
    age: 27
  };
};
