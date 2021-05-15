//---------------Require Employee Class Constructor
const Employee = require("./Employee");

//---------------Create Intern Subclass
class Intern extends Employee {
    constructor(name, id, email, school) {
        //super brings in parameter assignments from Employee class
        super(name, id, email);
        this.school = school;
    }
    getSchool() {
        return this.school;
    }

    getRole() {
        return 'Intern';
    }
}

//----------------Export Intern subclass
module.exports = Intern;