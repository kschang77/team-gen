const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const figlet = require("figlet")
const chalk = require("chalk")
const clear = require("clear")

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// no employees to start
employees = [];
// this.quitnow = false;

function start() {

  console.log(chalk.yellow(figlet.textSync('Team-Gen', {
    font: 'Computer',
    horizontalLayout: 'fitted',
    verticalLayout: 'default'
  })));

  // console.log("---- Available fonts ----")
  // figlet.fonts(function (err, fonts) {
  //   if (err) {
  //     console.log('something went wrong...');
  //     console.dir(err);
  //     return;
  //   }
  //   console.dir(fonts);
  // });
}



async function doEnterEmployee() {
  // choose what type to enter
  try {
    const typeOfEmployee = await whatTypeofEmployee();

    if (typeOfEmployee.choice === "Stop Entry") {
      // go back to start
      quit();
    } else {
      // react to Manager, Engineer, or Intern
      if (typeOfEmployee.choice === "Manager") {
        enterManager();
      } else if (typeOfEmployee.choice === "Engineer") {
        enterEngineer();
      } else {
        // must be Intern
        enterIntern();
      }
    }
    // call self, do it one more time
    doEnterEmployee();
  }
  catch (e) {
    throw "whatTypeofEmployee failed!"
  }
}

function whatTypeofEmployee() {
  // what type of employee?

  return inquirer
    .prompt([
      {
        type: 'list',
        name: 'choice',
        message: 'What type of employee do you wish to add to this team? ',
        choices: ["Manager", "Engineer", "Intern", "Stop Entry"]
      }
    ])
};


function enterManager() {
  console.log("-----")
  console.log("Manager Entered")
  console.log("-----")
}

function enterEngineer() {

  console.log("-----")
  console.log("Engineer entered")
  console.log("-----")
}

function enterIntern() {
  console.log("-----")
  console.log("Intern entered")
  console.log("-----")

}


function renderOutput() {
  console.log("-----")
  console.log("Let's render some output")
  console.log(employees)
  console.log("-----")
}


function quit() {
  renderOutput();
  console.log("-----")
  console.log("And that's the end!")
  process.exit(0);
}

start();
doEnterEmployee();

// var employees = [];  // contains all employees entered

//L1: Add employee / Render and Quit



//L2: Which Type of Employee (Manager, Engineer, Intern, Generic, End Input)

// Ask specific questions

// returned stuff appended to employees var

// resume loop until L1 Render and Exit

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
