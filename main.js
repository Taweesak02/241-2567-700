/*//String, Number, Boolean, Object and Array

//string
let firstname = "John";
const idcard = "1234";
console.log(firstname);

//number
let age = 25;
let height = 5.9;

//boolean
let isMarried = false;

firstname = "Jane";
console.log(idcard);
console.log('my name is ' + firstname + ' and I am ' + age + ' years old');
*/


/*
 + - * / %
*/
/* 
== equal to
!= not equal to
> greater than
< less than
>= greater than or equal to
<= less than or equal to
*/
/*
let number1 = 5;
let number2 = 5;

let condition = number1 >= number2;

console.log('result of condition is',condition);
*/

//if else condition
/*
if(number1 != number2){
    console.log('this is if');

}else if(number1 == number2){
    console.log('this is else if');
}
else{
    console.log('this is else');
}
*/

/*
let score = 10;
//if - else condition
if(score >= 80){
    console.log('you are grade A');
} else if(score >= 70){
    console.log('you are grade B');
} else if(score >= 60){
    console.log('you are grade C');
} else if(score >= 50){
    console.log('you are grade D');
} else{
    console.log('you are grade F');
}*/
/*
let number1 = 5;
let number2 = 8;

let condition = number1 >= 3 || number2 >= 10;
console.log('result of condition is',condition);

let age = 30;
let gender = 'male'

// true && true = true
if (age >= 20 && gender == 'male'){
    console.log('you are a male adult');
}*/
/*
let counter = 0;

while(counter < 10){
    console.log('while loop');
    counter = counter + 1;
    counter += 1;
}

for (let counter = 0; counter < 10; counter = counter + 1){
    console.log('for loop');
}
*/

//array
/*
let age = [30, 35, 40, 45, 50];

console.log(ages);
ages.sort();
console.log(ages);

let names_list


//object

let student = [{
    name: 'zz',
    age: 90,
    grade: 'A'
},{
    name: 'aa',
    age: 66,
    grade: 'B'
}];

student.pop();

for(let index = 0; index < student.length; index++){
    console.log('Student number',(index + 1));
    console.log('Name:',student[index].name);
    console.log('Age:',student[index].age);
}
*/

//object + array
/*
let scores1 = 50
let scores2 = 90

let grades = ''

//define function
function calculateGrade(scores) {

    if(scores >= 80){
        grades = 'A';
    } else if(scores >= 70){
        grades = 'B';
    } else if(scores >= 60){
        grades = 'C';
    } else if(scores >= 50){
        grades = 'D';
    } else{
        grades = 'F';
    }
    return grades;
}
*/
//arrow function
let calculateGrade = (scores) => {
    if(scores >= 80){
        grades = 'A';
    } else if(scores >= 70){
        grades = 'B';
    } else if(scores >= 60){
        grades = 'C';
    } else if(scores >= 50){
        grades = 'D';
    } else{
        grades = 'F';
    }
    return grades;
}

/*
let student1 = calculateGrade(scores1)
let student2 = calculateGrade(scores2)
console.log('grad:',student1,student2);
*/


//array
/*
let scores = [10,20,30,40,50];
let newScortes = []

for (let index = 0; index < scores.length; index++){
    console.log(scores[index]);
    /*
    if (scores[index] >= 30){
        newScortes.push(scores[index]);
    }*/
    /*

let newScortes = scores.filter((s) => {)

scores.forEach((ns) =>{
console.log('new score:',ns);
})
*/

// object function

let students = [
    {
        name: 'John',
        scores: 90,
        grades: 'A'
    },
    {
        name: 'Jane',
        scores: 75,
        grades: 'B'
    },
    {
        name: 'Jim',
        scores: 60,
        grades: 'C'
    }
]

let student = students.find((s) => {
    if(s.name == 'Jane'){
        return true;
    }
})

let doublescore_student = students.map((s) => {
    s.scores = s.scores * 2
})

console.log('student:',student);
//console.log('highscore_student:',highscore_student)
