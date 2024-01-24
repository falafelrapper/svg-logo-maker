// Main script
const inquirer = require('inquirer');
const fs = require('fs');
// const generateShape = require('./lib/shapes.js')

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
 

function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            switch (answers.shape) {
                case "Circle":
                //create a circle instance with the new keyword
                  break;
                case "Square":
                //create a square instance with the new keyword
                  break;
      
                case "Triangle":
                //create a triangle instance with the new keyword
                  break;
            }
            // const finalSVG = generateShape(answers);

            fs.writeFile('./shape.SVG', finalSVG, (err) =>
                err ? console.log(err) : console.log('Successfully created your logo!')
            );
        })
};

init();