//---------------required packages
const { prompt } = require("inquirer");
// const fs = require("fs");

//---------------Employee Packages
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");

//---------------- New Team Array Resulting from Prompts
const myTeamArray = [];

//--------------- Begin Inquirer prompts
// Manager Questions
const managerPrompts = [
    {
        type: "input",
        message: "Please enter the name of the Manager: ",
        name: "name",
    },
    {
        type: "input",
        message: "Please enter the manager's employee ID number: ",
        name: "id",
    },
    {
        type: "input",
        message: "Please enter the manager's email address: ",
        name: "email",
    },
    {
        type: "input",
        message: "Please enter the office number: ",
        name: "officeNumber",
    },
];

// Engineer Questions
const engineerPrompts = [
    {
        type: "input",
        message: "Please enter the name of the Engineer: ",
        name: "name",
    },
    {
        type: "input",
        message: "Please enter the engineers employee ID number: ",
        name: "id",
    },
    {
        type: "input",
        message: "Please enter the Engineer's email address: ",
        name: "email",
    },
    {
        type: "input",
        message: "Please enter the Engineer's GitHub username: ",
        name: "github",
    },
];

// Intern Questions
const internPrompts = [
    {
        type: "input",
        message: "Please enter the name of the Intern: ",
        name: "name",
    },
    {
        type: "input",
        message: "Please enter the Intern's employee ID number: ",
        name: "id",
    },
    {
        type: "input",
        message: "Please enter the Intern's email address: ",
        name: "email",
    },
    {
        type: "input",
        message:
            "Please enter the name of the school the Intern is attending: ",
        name: "school",
    },
];

//-------------- Prompts to add additional team member
// Add another team member
const addTeamMember = [
    {
        type: "list",
        message: "Would you like to add another member to the team?",
        name: "addMember",
        choices: ["Add Engineer?", "Add Intern?", "No Additional Members"]
    },
];

//--------------- Functions to run Prompts

function askQuestions() {
    // ask manager questions
    prompt(managerPrompts)
        .then((data) => {
            const manager = new Manager(
                data.name,
                data.id,
                data.email,
                data.officeNumber
            );

            myTeamArray.push(manager);
            return addToTeam();
        });
}

//--------------Prompt for adding additional team members
function addToTeam() {
    // ask to add team member or End team
    prompt(addTeamMember)
        .then((data) => {
            if (data.addMember === 'Add Engineer?') {
                addEngineer();
            } else if (data.addMember === 'Add Intern?') {
                addIntern();
            } else {
                //send to generate new page
                console.log(myTeamArray);
                return console.log('New page Ready!')
                //return generateHTML()
            }
        });
}

function addEngineer() {
    // ask Engineer questions
    prompt(engineerPrompts)
        .then((data) => {
            const engineer = new Engineer(
                data.name,
                data.id,
                data.email,
                data.github
            );

            myTeamArray.push(engineer);
            return addToTeam();
        });
}

function addIntern() {
    // ask Intern questions
    prompt(internPrompts)
        .then((data) => {
            const intern = new Intern(
                data.name,
                data.id,
                data.email,
                data.school
            );

            myTeamArray.push(intern);
            return addToTeam();
        });
}

//--------------- Call function to begin prompts
askQuestions()

//--------------- Export new myTeamArray
module.exports = [myTeamArray];