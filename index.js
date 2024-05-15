#!/usr/bin/env node
import inquirer from "inquirer";
class Person {
    personality;
    constructor(personality) {
        this.personality = personality;
    }
    askQuestion(answer) {
        if (answer === 1) {
            this.personality = "Extrovert";
        }
        else if (answer === 2) {
            this.personality = "Introvert";
        }
        else {
            this.personality = "Mystery";
        }
    }
    getPersonality() {
        return this.personality;
    }
    async Program() {
        const answers = await inquirer.prompt([
            {
                type: "input",
                name: "options",
                message: "Type 1 if you like to be with others, or type 2 if you like to keep to yourself."
            },
        ]);
        const response = parseInt(answers.options);
        this.askQuestion(response);
    }
}
class Student {
    name;
    constructor(name) {
        this.name = name;
    }
    static async getStudentName() {
        const response = await inquirer.prompt([
            {
                name: "username",
                type: "input",
                message: "What is your name",
            }
        ]);
        return response.username;
    }
}
async function main() {
    let mystery = new Person("Mystery");
    await mystery.Program();
    const studentName = await Student.getStudentName();
    console.log(`Your name is ${studentName}. Your personality is ${mystery.getPersonality()}`);
}
main();
