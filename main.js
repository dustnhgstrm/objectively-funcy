// Your code here.

function getFirstName(object) {
  //returns the firstname value of given object.
  return object.firstName;
}

function getLastName(object) {
  return object.lastName;
}

function getFullName(object) {
  return getFirstName(object) + " " + getLastName(object);
}

function setFirstName(object, strName) {
  object.firstName = strName;
  return object.firstName;
}
function setAge(person, newAge) {
  person.age = newAge;
  return person.age;
}

function giveBirthday(person) {
  if (person.age === undefined) {
    return (person.age = 1);
  } else {
    return (person.age = person.age + 1);
  }
}

function marry(mama, papa) {
  mama.married = true;
  papa.married = true;
  mama.spouseName = getFullName(papa);
  papa.spouseName = getFullName(mama);
}

function divorce(mama, papa) {
  //I just wanna say that this does make me a little bit sad!
  mama.married = false;
  papa.married = false;
  delete mama.spouseName;
  delete papa.spouseName;
}

// Our code here. Don't touch!
if (typeof getFirstName === "undefined") {
  getFirstName = undefined;
}

if (typeof getLastName === "undefined") {
  getLastName = undefined;
}

if (typeof getFullName === "undefined") {
  getFullName = undefined;
}

if (typeof setFirstName === "undefined") {
  setFirstName = undefined;
}

if (typeof setAge === "undefined") {
  setAge = undefined;
}

if (typeof giveBirthday === "undefined") {
  giveBirthday = undefined;
}

if (typeof marry === "undefined") {
  marry = undefined;
}

if (typeof divorce === "undefined") {
  divorce = undefined;
}

module.exports = {
  getFirstName,
  getLastName,
  getFullName,
  setFirstName,
  setAge,
  giveBirthday,
  marry,
  divorce,
};
