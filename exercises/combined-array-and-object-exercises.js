// Exercise 1.✍

// 1.1. Return the persons lucky numbers.⚡
// Expected answer [14, 21, 9] ✅

module.exports.returnThePersonsLuckyNumbers = () => {
    const person = {
        name: "Thomas",
        surname: "Mapheto",
        lucky_numbers: [14, 21, 9]
    };
};

// 1.2. Return the persons second listed lucky number.⚡
// Expected answer 21 ✅

module.exports.returnThePersonsSecondListedLuckyNumber = () => {
    const person = {
        name: "Thomas",
        surname: "Mapheto",
        lucky_numbers: [14, 21, 9]
    };
};

// 1.3. Add the number 5 to the persons lucky numbers.⚡
// Expected answer { name: "Thomas",surname: "Mapheto",lucky_numbers: [14, 21, 9, 5] }✅

module.exports.addNumberFiveTothePersonsLuckyNumbers = () => {
    const person = {
        name: "Thomas",
        surname: "Mapheto",
        lucky_numbers: [14, 21, 9]
    };
};

// Exercise 2.✍

// 2.1. Return the total sports the person is interested in.⚡
// Expected answer 3 ✅

module.exports.returnTheTotalSportsThePersonIsInterestedIn = () => {
    const person = {
        name: "Leon",
        surname: "Mapuranga",
        hobbies: {
            sports: ["hockey", "swimming", "soccer"]
        }
    };
};

// 2.2. Add rugby to the sports the person is interested in.⚡
// Expected answer { name: "Leon",surname: "Mapuranga",hobbies: {sports: ["hockey", "swimming", "soccer", "rugby"]} }✅

module.exports.addRugbyToTheSportsThePersonIsInterestedIn = () => {
    const person = {
        name: "Leon",
        surname: "Mapuranga",
        hobbies: {
            sports: ["hockey", "swimming", "soccer"]
        }
    };
};

// Exercise 3.✍

// 3.1. Return the first set of lucky numbers of the persons set_of_lucky_numbers.⚡
// Expected answer [2, 9]✅

module.exports.returnTheFirstSetOfThePersonsSetOfLuckyNumbers = () => {
    const person = {
        name: "Thabang",
        surname: "Seshoene",
        beliefs: {
            set_of_lucky_numbers: [
                [2, 9],
                [7, 10],
                [11, 14]
            ]
        }
    };
};

// 3.2. Add the number 15 to the second element of the persons set_of_lucky_numbers.⚡
// Expected answer { name: "Thabang",surname: "Seshoene",beliefs: {set_of_lucky_numbers: [[2, 9],[7, 10, 15],[11, 14]]}}✅

module.exports.addTheNumberFifteenToTheSecondElementOfThePersonsSetOfLuckyNumbers =
    () => {
        const person = {
            name: "Thabang",
            surname: "Seshoene",
            beliefs: {
                set_of_lucky_numbers: [
                    [2, 9],
                    [7, 10],
                    [11, 14]
                ]
            }
        };
    };
