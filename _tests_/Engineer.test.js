const Engineer = require('../lib/Engineer.js');

test('creates engineer object', () => {
    const engineer = new Engineer('Ian', 'manager', 1, 'ian@email.com', 'ianbridges');

    expect(engineer.name).tobe('Ian');
    expect(engineer.title).toBe('manager');
    expect(engineer.id).tobe(1);
    expect(engineer.email).tobe('ian@email.com');
    expect(engineer.gitUsername).tobe('ianbridges');
});