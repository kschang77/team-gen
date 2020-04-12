const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

class App {
  constructor() {
    // no employees to start
    this.employees = [];
    // this.quitnow = false;
  }

  async start() {
    // enter Employee or Quit
    try {
      const enterOrQuit = await this.enterEmployeeOrQuit();

      if (enterOrQuit.choice === "Quit and Generate Output") {
        this.quit();
      } else {
        this.doEnterEmployee();
      }
      //do it over??
      // this.start()
    } catch (e) {
      throw "Error reading enterEmployeeOrQuit"
    }

  }


  enterEmployeeOrQuit() {
    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'choice',
          message: 'Your choice?? ',
          choices: ["Enter New Employee", "Quit and Generate Output"]
        }
      ])
  }

  async doEnterEmployee() {
    // choose what type to enter
    try {
      const typeOfEmployee = await this.whatTypeofEmployee();

      if (typeOfEmployee.choice === "Stop Entry") {
        // go back to start
        this.start();
      } else {
        // react to Manager, Engineer, or Intern
        if (typeOfEmployee.choice === "Manager") {
          this.enterManager();
        } else if (typeOfEmployee.choice === "Engineer") {
          this.enterEngineer();
        } else {
          // must be Intern
          this.enterIntern();
        }
      }
      // call self, do it one more time
      this.doEnterEmployee();
    }
    catch (e) {
      throw "whatTypeofEmployee failed!"
    }
  }


  whatTypeofEmployee() {
    // what type of employee?
    console.log("-----")
    console.log("So what type of employee?")
    console.log("-----")

    return inquirer
      .prompt([
        {
          type: 'list',
          name: 'choice',
          message: 'Your choice? ',
          choices: ["Manager", "Engineer", "Intern", "Stop Entry"]
        }
      ])
  };

  enterManager() {
    console.log("-----")
    console.log("Manager Entered")
    console.log("-----")
  }

  enterEngineer() {

    console.log("-----")
    console.log("Engineer entered")
    console.log("-----")
  }

  enterIntern() {
    console.log("-----")
    console.log("Intern entered")
    console.log("-----")

  }


  renderOutput() {
    console.log("-----")
    console.log("Let's render some output")
    console.log(this.employees)
    console.log("-----")
  }


  quit() {
    this.renderOutput();
    console.log("-----")
    console.log("And that's the end!")
    process.exit(0);
  }
}


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

module.exports = App;