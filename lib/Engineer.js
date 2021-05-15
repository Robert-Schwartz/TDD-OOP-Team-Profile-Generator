//---------------Require Employee Class Constructor
const Employee = require("./Employee");

//---------------Create Engineer Subclass
class Engineer extends Employee {
    constructor(name, id, email, github) {
        //super brings in parameter assignments from Employee class
        super(name, id, email);
        this.github = github;
    }
    getGithub() {
        return this.github;
    }

    getRole() {
        return 'Engineer';
    }
}

//----------------Export Engineer subclass
module.exports = Engineer;