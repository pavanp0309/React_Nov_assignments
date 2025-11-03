const numbers = [1, [2, 3, [4, 5]]];
function extractNumbers([first, [second, , nested]]) {
  console.log(`First: ${first}, Second: ${second}, Nested: ${nested}`);
}
extractNumbers(numbers);



const developer = { name: 'Eve', skills: ['HTML', 'CSS', 'JavaScript'] };
function listSkills({ name, skills }) {
  console.log(`${name}'s skills:`);
  skills.forEach(skill => console.log(skill));
}
listSkills(developer);


// const user = {  
//   id: 1,  
//   personalInfo: {  
//     name: 'Frank',  
//     email: 'frank@example.com',  
//     address: { city: 'Paris', country: 'France' },  
//   },  
// };
// function getUserInfo({ personalInfo: { name, email, address: { city } } }) {
//   console.log(`Name: ${name}, Email: ${email}, City: ${city}`);
// }
// getUserInfo(user);


// const user = { name: 'Grace' };
// function displayUserInfo({ name: userName, age = 25 }) {
//   console.log(`User: ${userName}, Age: ${age}`);
// }
// displayUserInfo(user);


const user = { name: 'Hank', email: 'hank@example.com', age: 40 };
function createUserObject({ name, email }) {
  return { name, email };
}
console.log(createUserObject(user));

let x = 5, y = 10;
function swapVariables() {
  [x, y] = [y, x];
}
swapVariables();
console.log(`x: ${x}, y: ${y}`);


// const person = { name: 'Ivy', country: 'USA', city: 'Seattle' };
// function displayPerson({ name, age = 30, ...details }) {
//   console.log(`Name: ${name}, Age: ${age}, Details:`, details);
// }
// displayPerson(person);

const person = { firstName: 'Jack', lastName: 'Smith', age: 28 };
function logProperties(obj) {
  Object.keys(obj).forEach(key => console.log(`${key}: ${obj[key]}`));
}
logProperties(person);


function getData() {
  return { id: 123, name: 'Kate', role: 'Developer' };
}
const { id, name, role } = getData();
console.log(`ID: ${id}, Name: ${name}, Role: ${role}`);


function getScores() {
  return [85, 90, 95];
}
const [math, science, english] = getScores();
console.log(`Math: ${math}, Science: ${science}, English: ${english}`);



const books = [
  { title: 'Book A', author: 'Author A' },
  { title: 'Book B', author: 'Author B' },
];
function logBooks() {
  books.forEach(({ title, author }) => {
    console.log(`Title: ${title}, Author: ${author}`);
  });
}
logBooks();

const data = { user: { id: 1, name: 'Liam' }, meta: { role: 'Admin' } };
function dynamicExtract(obj, key) {
  const value = obj.meta[key];
  console.log(`Value: ${value}`);
}
dynamicExtract(data, 'role');














