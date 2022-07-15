const Intern = require('../lib/Intern.js');

test('creates intern object', () => {
    const intern = new Intern('Ian', 1, 'ian@email.com', 'Washington University');

    expect(intern.name).tobe('Ian');
    expect(intern.id).tobe(1);
    expect(intern.email).tobe('ian@email.com');
    expect(intern.school).tobe('Washington University');
});