const inquirer = require("inquirer");
const fs = require("fs");

const Manager = require ('../Ian-s-Team-Profile-Generator/lib/Manager');
const Engineer = require ('../Ian-s-Team-Profile-Generator/lib/Engineer');
const Intern = require ('../Ian-s-Team-Profile-Generator/lib/Intern');
const renderData = require ('../Ian-s-Team-Profile-Generator/src/renderData');

var employees = [];

const questions = [
    {
        type: 'input',
        name: 'employeeName',
        message: "Employee's name?"
    },
    {
        type: 'list',
        name: 'employeeTitle',
        message: "Employee's title?",
        choices: [
            'Manager',
            'Engineer',
            'Intern'
        ]
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "Employee's id?"
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "Employee's email?"
    }];

const managerQuestion = {
    type: 'input',
    name: 'office',
    message: "Manager's office number?"
};

const exitQuestion = {
    type: 'list',
    name: 'chooseNext',
    message: "What's next?",
    choices: [
        'Add Engineer',
        'Add Intern',
        'Exit'
    ]
};

const internQuestion = {
    type: 'input',
    name: 'school',
    message: "Intern's school?"
};

const engineerQuestion = {
    type: 'input',
    name: 'gUser',
    message: "Engineer's github?"
};

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
            console.error(err);
        }
        console.log("File written")
    })
};

function init() {
    var managerQuestions = [...questions, managerQuestion, exitQuestion]
    inquirer.prompt(managerQuestions)
        .then((answers) => {
            var manager = new Manager(answers.employeeName, answers.employeeTitle, answers.employeeId, answers.employeeEmail, answers.office);
            employees.push(manager)
            if (
                answers.chooseNext === 'Add Engineer'
            ) {
                addEngineer();
            } else if (
                answers.chooseNext === 'Add Intern'
            ) {
                addIntern();
            } else if (
                answers.chooseNext === 'Exit'
            ) {
                var data = renderData(employees);
                writeToFile("dist/index.html", data);
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt failed to render")
            } else {
                console.log("Something else went wrong")
            }
        });
}

function addEngineer() {
    var engineerQuestions = [...questions, engineerQuestion, exitQuestion]
    inquirer.prompt(engineerQuestions)
        .then((answers) => {
            var engineer = new Engineer(answers.employeeName, answers.employeeTitle, answers.employeeId, answers.employeeEmail, answers.gUser);
            employees.push(engineer);
            if (
                answers.chooseNext === 'Add Engineer'
            ) {
                addEngineer();
            } else if (
                answers.chooseNext === 'Add Intern'
            ) {
                addIntern();
            } else if (
                answers.chooseNext === 'Exit'
            ) {
                var data = renderData(employees);
                writeToFile("dist/index.html", data);
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt failed to render")
            } else {
                console.log("Something else went wrong")
            }
        });
};

function addIntern() {
    var internQuestions = [...questions, internQuestion, exitQuestion]
    inquirer.prompt(internQuestions)
        .then((answers) => {
            var intern = new Intern(answers.employeeName, answers.employeeTitle, answers.employeeId, answers.employeeEmail, answers.school);
            employees.push(intern);
            if (
                answers.chooseNext === 'Add Engineer'
            ) {
                addEngineer();
            } else if (
                answers.chooseNext === 'Add Intern'
            ) {
                addIntern();
            } else if (
                answers.chooseNext === 'Exit'
            ) {
                var data2 = renderData(employees);
                writeToFile("dist/index.html", data2);
            }
        })
        .catch((error) => {
            if (error.isTtyError) {
                console.log("Prompt failed to render")
            } else {
                console.log("Something else went wrong")
            }
        });
};


init();