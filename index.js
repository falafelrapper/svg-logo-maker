// Main script
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes.js');

// Question array to plug into our inquirer prompt
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

// Function to run the questionnaire itself
function init() {
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            let selectedShape;

            switch (answers.shape[0]) {
                case 'Circle':
                    selectedShape = new Circle(answers.text, answers.textcolor);
                    break;
                case 'Square':
                    selectedShape = new Square(answers.text, answers.textcolor);
                    break;
                case 'Triangle':
                    selectedShape = new Triangle(answers.text, answers.textcolor);
                    break;
            }

            selectedShape.setColor(answers.shapecolor);

            const finalSVG = selectedShape.getSVG();

            // Writes a new shape.SVG displaying our new logo we chose
            fs.writeFile('./shape.SVG', finalSVG, (err) =>
                err ? console.log(err) : console.log('Successfully created your logo!')
            );
        })
        .catch((error) => console.error(error));
};

init();