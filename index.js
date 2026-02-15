window.alert('we are good')

 const users = {
  Alex: {
    email: 'alex@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript'],
    age: 20,
    isLoggedIn: false,
    points: 30
  },
  Asab: {
    email: 'asab@asab.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
    age: 25,
    isLoggedIn: false,
    points: 50
  },
  Brook: {
    email: 'daniel@daniel.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
    age: 30,
    isLoggedIn: true,
    points: 50
  },
  Daniel: {
    email: 'daniel@alex.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  John: {
    email: 'john@john.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
    age: 20,
    isLoggedIn: true,
    points: 50
  },
  Thomas: {
    email: 'thomas@thomas.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'React'],
    age: 20,
    isLoggedIn: false,
    points: 40
  },
  Paul: {
    email: 'paul@paul.com',
    skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
    age: 20,
    isLoggedIn: true,
    points: 40
  }
}
let requiredSkill =['MongoDB', 'Express', 'React', 'Node']

let loggedUsers = 0
let loggedUser =[]
let mern = []

for (const key in users) {
    if (users[key].isLoggedIn ) {
        loggedUsers +=1
        loggedUser.push(users[key].email)
    } 

    if (requiredSkill.every(skill =>users[key].skills.includes(skill) )) {
        mern.push(users[key].email)
    
}
    
}

users.lucash = {}

console.log(mern);

console.log(loggedUser);

console.log(loggedUsers);
console.log(users);
console.log(Object.keys(users));
console.log(Object.values(users));

let date = new Date().toLocaleDateString()
console.log(date);





// console.log(users.Alex.age);

let student = {
        name: 'lola',
        class: ['jss1'],
        courses: [
            { level1: ['css', 'html', 'git'] },
            { level2: ['js', 'git', 'firebase'] },
            { level3: ['react', 'node'] }
        ],
        maritalStatus: undefined,
        age: 35
    }

 student.courses[2].level3[1]  += 'php';

node = 'php'
console.log(student);

for (const val in student) {
        console.log(`key:${val} - value:${student[val]}`);

    }

console.log(student['name'])

    
