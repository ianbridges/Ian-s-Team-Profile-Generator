const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Ian', 1, 'ian@email.com');

    expect(employee.name).tobe('Ian');
    expect(employee.id).tobe(1);
    expect(employee.email).tobe('ian@email.com');
});