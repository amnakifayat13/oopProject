#! /usr/bin/env node
import inquirer from "inquirer";

class Student {
    name: string;
    constructor(n:string){
        this.name = n
    }
}

class Person{
    students: Student[] = [];
    addStudent(obj: Student){
        this.students.push(obj)
    }
}
const persons = new Person;
const programStart = async(persons: Person) => {
    do{
        console.log("Welcome");
    const answer = await inquirer.prompt({
        type: "list",
        message: "To whom would you like to talk?",
        choices: ["Self", "student"],
        name: "select",
    });
if(answer.select == "Self"){
    console.log("I am talking with myself");
    console.log("My health is good");

}
if(answer.select == "student"){
    const ans = await inquirer.prompt({
        type: "input",
        message: "To Whom Student do want to talk?",
        name: "student",

    });
    const student = persons.students.find(val => val.name == ans.student)
    if(!student){
        const name = new Student(ans.student)
        persons.addStudent(name);
        console.log(`Hello I am ${name.name} and I am good`);
        console.log(persons.students);
    }
    if(student){
        console.log(`Hello I am ${student.name} and I am good.........................`);
        console.log(persons.students);
    }

}
    }while(true);

};
programStart(persons);