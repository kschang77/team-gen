// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager {
  constructor(name, id, email, office) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.role = "Manager";
    this.officeNumber = office;
  }

  getRole() {
    return this.role;
  }

  getOfficeNumber() {
    return this.officeNumber;
  }
}

module.exports = Manager;