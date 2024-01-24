// Main script
const inquirer = require('inquirer');
const fs = require('fs');

const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'What would you like your logo to say?',
    },
    {
        type: 'input',
        message: 'What color would you like your text?',
        name: 'textcolor',
    },
    {
        type: 'checkbox',
        message: 'What shape would you like to use?',
        name: 'shape',
        choices: ['Triangle', 'Square', 'Circle'],
    },
    {
        type: 'input',
        message: 'What color would you like your shape?',
        name: 'shapecolor',
    },
];

// inquirer
//     .prompt([
//         {
//             type: 'input',
//             name: 'text',
//             message: 'What would you like your logo to say?',
//         },
//         {
//             type: 'input',
//             message: 'What color would you like your text?',
//             name: 'textcolor',
//         },
//         {
//             type: 'checkbox',
//             message: 'What shape would you like to use?',
//             name: 'shape',
//             choices: ['Triangle', 'Square', 'Circle'],
//         },
//         {
//             type: 'input',
//             message: 'What color would you like your shape?',
//             name: 'shapecolor',
//         },
//     ])
//     .then((data) => {

//         fs.writeFile('shape.svg', JSON.stringify(data, null, '\t'), (err) =>
//             err ? console.log(err) : console.log('Success!')
//         );
//     });

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            const finalSVG = generateShape(answers);

            fs.writeFile('./shape.SVG', finalSVG, (err) =>
                err ? console.log(err) : console.log('Successfully created README!')
            );
        })
};

init();