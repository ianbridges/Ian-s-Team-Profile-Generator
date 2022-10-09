const Employee = require('../lib/Employee.js');

test('creates employee object', () => {
    const employee = new Employee('Ian', 'manager', 1, 'ian@email.com', 'manager');

    expect(employee.name).tobe('Ian');
    expect(employee.title).toBe('manager');
    expect(employee.id).tobe(1);
    expect(employee.email).tobe('ian@email.com');
    expect(employee.title).toBe('manager');
});