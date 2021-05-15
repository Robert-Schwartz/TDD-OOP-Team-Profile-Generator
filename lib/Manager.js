const Employee = require("./Employee");

//---------------Create Manager Subclass
class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;
    }
    getRole() {
        return 'Manager';
    }
}

//----------------Export Manager subclass
module.exports = Manager;