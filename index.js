import inquirer from "inquirer";
import fs from "fs";

import Engineer from '../Ian-s-Team-Profile-Generator/lib/Engineer.js'
import Intern from '../Ian-s-Team-Profile-Generator/lib/Intern.js'
import Manager from '../Ian-s-Team-Profile-Generator/lib/Manager.js'

import renderData from '../Ian-s-Team-Profile-Generator/src/renderData.js'
import Choices from "inquirer/lib/objects/choices.js";

const questions = [
    {
        type: 'input',
        name: 'employeeName',
        message: "What is the employee's name?"
    },
    {
        type: 'input',
        name: 'employeeId',
        message: "What is the employee's id?"
    },
    {
        type: 'input',
        name: 'employeeEmail',
        message: "What is the employee's email?"
    }
];

const engineerQuestion = {
    type: 'input',
    name: 'git User',
    message: "What is the engineeer's username on github?"
};

const internQuestion = {
    type: 'input',
    name: 'school',
    message: "What school did the intern attend?"
}

const managerQuestion = {
    type: 'input',
    name: 'office',
    message: "What is the manger's office number?"
};

const exitQuestion = {
    type: 'input',
    name: 'chooseNext',
    message: "What would you like to do now?",
    choices: [
       'Add Engineer',
       'Add Intern',
       'Exit'
    ]
}