//--------------Require Intern.js file to test
const Intern = require('../lib/Intern');


//--------------Test for Intern school parameter
test('test for intern subclass to add school parameter', () => {
    const intern = new Intern('Bob', 7411, 'bschwartz23@gmail.com', 'UA');
    expect(intern.school).toBe('UA');
});

//--------------Test for Intern to return GitHub username value
test('test for Intern to return school value', () => {
    const intern = new Intern('Bob', 7411, 'bschwartz23@gmail.com','UA');
    expect(intern.getSchool()).toBe('UA');
});

//--------------Test for manager role to be overridden to "Intern"
test('test for intern role to be overridden to "Intern"', () => {
    const intern = new Intern('Bob', 7411, 'bschwartz23@gmail.com', 'UA',);
    expect(intern.getRole()).toBe('Intern');
});