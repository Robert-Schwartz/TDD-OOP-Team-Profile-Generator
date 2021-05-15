//--------------Require Employee.js file to test
const Employee = require('../lib/Employee');

//--------------- Test for creation of an Employee object
test('able to set employee name in class object',() => {
    const employee = new Employee('Bob');
    expect(employee.name).toBe('Bob');
});

//--------------Test for employee ID gives a number 
test('able to set employee ID as a number', () => {
    const employee = new Employee('Bob',7411);
    expect(employee.id).toBe(7411);
});

//--------------Test for employee email gives a string 
test('test for email to be a string', () => {
    const employee = new Employee('Bob', 7411, 'bschwartz23@gmail.com');
    expect(employee.email).toBe('bschwartz23@gmail.com');
});

//--------------Test for employee getName() returns name
test('testing getName method to return the name', () => {
    const employee = new Employee('Bob', 7411, 'bschwartz23@gmail.com');
    expect(employee.getName()).toBe('Bob');
});

//--------------Test for employee getID() returns Id
test('testing getID method to return the id', () => {
    const employee = new Employee('Bob', 7411, 'bschwartz23@gmail.com');
    expect(employee.getId()).toBe(7411);
});

//--------------Test for employee getEmail() returns email string
test('testing getName method to return the name', () => {
    const employee = new Employee('Bob', 7411, 'bschwartz23@gmail.com');
    expect(employee.getEmail()).toBe('bschwartz23@gmail.com');
});

//--------------Test for employee getRole() returns 'Employee'
test('testing getName method to return the name', () => {
    const employee = new Employee('Bob', 7411, 'bschwartz23@gmail.com');
    expect(employee.getRole()).toBe('Employee');
});