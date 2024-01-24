// Main script
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle, Shape } = require('./lib/shapes.js');

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
    let selectedShape;
    inquirer
        .prompt(questions)
        .then((answers) => {
            console.log(answers);
            switch (answers.shape) {
                case [ 'Circle' ]:
                    //create a circle instance with the new keyword
                    selectedShape = new Circle(answers.text, answers.textcolor);
                    break;
                case [ 'Square' ]:
                    selectedShape = new Square(answers.text, answers.textcolor);
                    break;

                case [ 'Triangle' ]:
                    //create a triangle instance with the new keyword
                    selectedShape = new Triangle(answers.text, answers.textcolor);
                    break;
            }

            selectedShape.setColor(answers.shapecolor)

            const finalSVG = selectedShape.getSVG();

            fs.writeFile('./shape.SVG', finalSVG, (err) =>
                err ? console.log(err) : console.log('Successfully created your logo!')
            );
        })
        .catch((error) => console.error(error));
};

init();