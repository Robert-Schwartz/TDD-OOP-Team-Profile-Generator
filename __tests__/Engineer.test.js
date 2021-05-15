//--------------Require Engineer.js file to test
const Engineer = require('../lib/Engineer');

//--------------Test for Engineer GitHub Username
test('test for engineer subclass to add GitHub username parameter', () => {
    const engineer = new Engineer('Bob', 7411, 'bschwartz23@gmail.com','Robert-Schwartz');
    expect(engineer.github).toBe('Robert-Schwartz');
});

//--------------Test for Engineer to return GitHub username value
test('est for Engineer to return GitHub username value', () => {
    const engineer = new Engineer('Bob', 7411, 'bschwartz23@gmail.com', 'Robert-Schwartz');
    expect(engineer.getGithub()).toBe('Engineer');
});

//--------------Test for manager role to be overridden to "Engineer"
test('test for engineer role to be overridden to "Engineer"', () => {
    const manager = new Manager('Bob', 7411, 'bschwartz23@gmail.com', 'Robert-Schwartz',);
    expect(manager.getGithub()).toBe('Engineer');
});