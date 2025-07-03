var person = {
    firstNAme: "John",
    lastName: "Doe",
    age:30,
    subjects :['JavaScript', 'Python', 'Java']

}

console.log(person);
console.log(person.subjects);
console.log(person.subjects[2]);
var x = 'age';
console.log(person[x]);

console.log(person['subjects'[0]]);


var project = [
    {
        name: "Web Development",
        duration: "3 months",
        teamMembers: ["Alice", "Bob", "Charlie"],
        
        
    },
    {
        name: "Mobile App Development",
        duration: "4 months",
        teamMembers: ["David", "Eve", "Frank"],
    },
    {
        name: "Data Science",
        duration: "6 months",
        teamMembers: ["Grace", "Heidi", "Ivan"],
    }

]

project.name='kasun';
project.duration ='6 months';
console.log(project);

  