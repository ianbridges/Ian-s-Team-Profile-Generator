const Employee = require('../lib/Engineer');

test('creates engineer object', () => {
    const engineer = new Engineer('Ian', 1, 'ian@email.com', 'ianbridges');

    expect(engineer.name).tobe('Ian');
    expect(engineer.id).tobe(1);
    expect(engineer.email).tobe('ian@email.com');
    expect(engineer.gitUsername).tobe('ianbridges');
});