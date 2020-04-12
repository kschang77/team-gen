const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const figlet = require("figlet")
const chalk = require("chalk")
// const clear = require("clear")

//gets current directory, look for output subdir, put team.html into that. 
const OUTPUT_DIR = path.resolve(__dirname, "output");
// create subdir if not exist
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR)
}
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");


// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// no employees to start
employees = [];

keepGoing = true;

function start() {

  console.log(chalk.yellow(figlet.textSync('Team-Gen', {
    font: 'Computer',
    horizontalLayout: 'fitted',
    verticalLayout: 'default'
  })));
  console.log("V0.1 by Kasey K S Chang (c) 2020")
  console.log("")

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

    if (typeOfEmployee.choice !== "Stop Entry") {
      // react to Manager, Engineer, or Intern
      if (typeOfEmployee.choice === "Manager") {
        await enterManager();
      } else if (typeOfEmployee.choice === "Engineer") {
        await enterEngineer();
      } else {
        // must be Intern
        await enterIntern();
      }
      // call self, do it one more time
      // doEnterEmployee();
    } else {
      keepGoing = false;
    }
  }
  catch (e) {
    console.error(e)
    throw "doEnterEmployee failed!"
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


async function enterManager() {
  console.log("-----")
  console.log("Enter Manager")
  console.log("-----")
  try {
    const tAnswer = await whatAboutManager();
    var tManager = new Manager(
      tAnswer.managerName,
      tAnswer.managerId,
      tAnswer.managerEmail,
      tAnswer.managerOffice
    )
    employees.push(tManager)
    console.log("Manager Added")
    return true
  }
  catch (e) {
    console.error(e)
    throw "enterManager failed!"
  }
}

function whatAboutManager() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "managerName",
        message: "Manager's full name please? ",
        // makes sure name is not blank
        validate: function validateName(name) {
          return name !== '';
        }
      },
      {
        type: "input",
        name: "managerId",
        message: "Manager's employeeId please? ",
        //makes sure ID is an integer
        validate: function validateId(name) {
          return !Number.isInteger(name);
        }
      },
      {
        type: "input",
        name: "managerEmail",
        message: "Manager's Email Address please? ",
        // checks that Email is not blank
        validate: function validateEmail(name) {
          return name !== '';
        }
      },
      {
        type: "input",
        name: "managerOffice",
        message: "Manager's Office Number please? ",
        // checks that Office Number is integer
        validate: function validateOffice(name) {
          return !Number.isInteger(name);
        }
      }
    ])


}

async function enterEngineer() {
  console.log("-----")
  console.log("Enter Engineer")
  console.log("-----")
  try {
    const tAnswer = await whatAboutEngineer();
    var tEngineer = new Engineer(
      tAnswer.engineerName,
      tAnswer.engineerId,
      tAnswer.engineerEmail,
      tAnswer.engineerGithub
    )
    employees.push(tEngineer)
    console.log("Engineer Added")
    return true
  }
  catch (e) {
    console.error(e)
    throw "enterEngineer failed!"
  }
}

function whatAboutEngineer() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "engineerName",
        message: "Engineer's full name please? ",
        // makes sure name is not blank
        validate: function validateName(name) {
          return name !== '';
        }
      },
      {
        type: "input",
        name: "engineerId",
        message: "Engineer's employeeId please? ",
        //makes sure ID is an integer
        validate: function validateId(name) {
          return !Number.isInteger(name);
        }
      },
      {
        type: "input",
        name: "engineerEmail",
        message: "Engineer's Email Address please? ",
        // checks that Email is not blank
        validate: function validateEmail(name) {
          return name !== '';
        }
      },
      {
        type: "input",
        name: "engineerGithub",
        message: "engineer's GithubID please? ",
        // checks that githubid is not blank
        validate: function validateGithub(name) {
          return name !== "";
        }
      }
    ])


}


async function enterIntern() {
  console.log("-----")
  console.log("Enter Intern")
  console.log("-----")
  try {
    const tAnswer = await whatAboutIntern();
    var tIntern = new Intern(
      tAnswer.internName,
      tAnswer.internId,
      tAnswer.internEmail,
      tAnswer.internSchool
    )
    employees.push(tIntern)
    console.log("Intern Added")
    return true
  }
  catch (e) {
    console.error(e)
    throw "enterIntern failed!"
  }
}


function whatAboutIntern() {
  return inquirer
    .prompt([
      {
        type: "input",
        name: "internName",
        message: "Intern's full name please? ",
        // makes sure name is not blank
        validate: function validateName(name) {
          return name !== '';
        }
      },
      {
        type: "input",
        name: "internId",
        message: "Intern's employeeId please? ",
        //makes sure ID is an integer
        validate: function validateId(name) {
          return !Number.isInteger(name);
        }
      },
      {
        type: "input",
        name: "internEmail",
        message: "Intern's Email Address please? ",
        // checks that Email is not blank
        validate: function validateEmail(name) {
          return name !== '';
        }
      },
      {
        type: "input",
        name: "internSchool",
        message: "Intern's School please? ",
        // checks that githubid is not blank
        validate: function validateSchool(name) {
          return name !== "";
        }
      }
    ])
}


function renderOutput() {
  console.log("-----")
  console.log("Let's render some output")
  console.log(employees)
  console.log("-----")
  // call htmlRenderer.js
  try {
    var myHTML = render(employees)
    console.log(myHTML)
  }
  catch (err) {
    console.error(err)
    throw "render failed!"
  }
  try {
    console.log(outputPath)
    fs.writeFileSync(outputPath, myHTML)
  } catch (err) {
    console.error(err)
    throw "writefilesync failed!"
  }

}


function quit() {
  renderOutput();
  console.log("-----")
  console.log("Thank you for using Team-Gen!")
  console.log("Your output is in " + outputPath)
  // process.exit(0);
}

async function mainloop() {
  while (keepGoing) {
    await doEnterEmployee();
  }
  quit();
}

start();
mainloop();
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
