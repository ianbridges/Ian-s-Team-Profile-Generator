const Manager = require('../lib/Manager.js');

test('creates manager object', () => {
    const manager = new Manager('Ian', 1, 'ian@email.com', '5');

    expect(manager.name).tobe('Ian');
    expect(manager.id).tobe(1);
    expect(manager.email).tobe('ian@email.com');
    expect(manager.office).tobe('5');
});