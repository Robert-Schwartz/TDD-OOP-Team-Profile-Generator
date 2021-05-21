//required package imports
// =====================================================
const { prompt } = require("inquirer");
const fs = require("fs");
const pageTemplate = require("./src/newPageTemplate");

// Employee Packages
// =====================================================
const Manager = require("./lib/manager");
const Engineer = require("./lib/engineer");
const Intern = require("./lib/intern");
const { totalmem } = require("os");
const { title } = require("process");

//  New Team Array Resulting from Prompts
// ===========================================
const myTeamArray = [];

//Begin Inquirer prompts
// ============================================
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
        message: "Please enter the office location number: ",
        name: "officeNumber",
    },
];

// Add another team member or finish
const addTeamMember = [
    {
        type: "list",
        message: "Would you like to add another member to the team?",
        name: "addMember",
        choices: ["Add Engineer?", "Add Intern?", "No Additional Members"]
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

// Functions to run Prompts
// ===============================================

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
            addToTeam();
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

// Prompt for adding additional team members
// ======================================================
function addToTeam() {
    // ask to add team member or End team
    prompt(addTeamMember)
        .then((data) => {
            if (data.addMember === 'Add Engineer?') {
                addEngineer();
            } else if (data.addMember === 'Add Intern?') {
                addIntern();
            } else {
                console.log('myTeamArray =' + myTeamArray);
                //call peopleHTML to create employee cards string
                const peopleHTML = initNewHTML();
                //call pageTemplate to create Complete HTML page
                const allHTML = pageTemplate(peopleHTML);
                //call write to file to generate HTML with allHTML
                writeToFile('./dist/index.html', allHTML);
            }
        });
}

//  Function to initialize HTML Cards
// =====================================================
function initNewHTML() {
    let allPeople = '';
    myTeamArray.forEach(person => {
        let uniqueAttribute = '';
        let title = ''
        if
            ('officeNumber' in person) {
            title = 'Manager'
            uniqueAttribute = `Office Location:${person.officeNumber}`
        } else if
            ('school' in person) {
            title = 'Intern'
            uniqueAttribute = `School: ${person.school}`
        } else if
            ('github' in person) {
            title = 'Engineer',
                uniqueAttribute = `Github: ${person.github}`
        }

        allPeople = allPeople + `
        <div class="col">
            <div class="card" style="width: 18rem">
                <div class="card-header">
                <h3>${person.name}</h3>
                <h4>${title}</h4>
                </div>
                <ul class="list-group list-group-flush">
                <li class="list-group-item employeeProperties"> Employee ID: <span>${person.id}</span></li>
                <li class="list-group-item employeeProperties"> Email: <span>${person.email}</span></li>
                <li class="list-group-item employeeProperties"> <span>${uniqueAttribute}</span></li>
                </ul>
            </div>
        </div>
        `
    })
    console.log('allPeople =' + allPeople);
    return allPeople
}




// Function to write HTML file
// =====================================================
function writeToFile(fileName, allHTML) {
    fs.writeFile(fileName, allHTML, (err) => {
        if (err) {
            console.log(err);
            return;
        }
    });
}


// Call function to begin prompts
// =====================================================
askQuestions()

// Export new myTeamArray
// =====================================================
module.exports = [myTeamArray];