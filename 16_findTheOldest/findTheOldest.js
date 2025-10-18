const getAge = function (birth, death) {
    if (death === undefined) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function (people) {
    let arr = people.map(x => getAge(x.yearOfBirth, x.yearOfDeath));
    let max = Math.max(...arr);
    for (let i = 0; i < arr.length; i++) {
        if (max === arr[i]) {
            return people[i];
        }
    }
};

// Do not edit below this line
module.exports = findTheOldest;
