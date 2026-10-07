const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('===== Student Information =====');

rl.question('Enter your name: ', (name) => {
    rl.question('Enter your age: ', (age) => {
        rl.question('Enter your branch: ', (branch) => {

            console.log('\n===== Student Details =====');
            console.log('Name   :', name);
            console.log('Age    :', age);
            console.log('Branch :', branch);

            rl.close();
        });
    });
});