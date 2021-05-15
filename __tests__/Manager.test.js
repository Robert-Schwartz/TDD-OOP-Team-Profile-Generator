//--------------Require Manager.js file to test
const Manager = require('../lib/Manager');

//--------------Test for Manager office number
test('test for office number for manager object', () => {
    const manager = new Manager('Bob', 7411, 'bschwartz23@gmail.com',1802,);
    expect(manager.officeNumber).toBe(1802);
});

//--------------Test for Manager get Role
test('test for manager role to be overridden to "Manager"', () => {
    const manager = new Manager('Bob', 7411, 'bschwartz23@gmail.com', 1802,);
    expect(manager.getRole()).toBe('Manager');
});