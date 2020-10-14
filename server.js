const mysql = require("mysql")
const inquirer = require("inquirer")

const connection = mysql.createConnection({
    host: "localhost",

    PORT: 3306,

    user: "root",

    password: "password",

    database: "employertracker_db"

});

connection.connect(function (err) {
    if (err) throw err
    start();
})

function start() {
    inquirer.prompt({
        name: "options",
        type: "list",
        message: "Please choose an option?",
        choices: ["Add department", "Add an role", "View department",]
    }).then(function ({ options }) {
        if (options === "Add a department") {
            addDepartment()
        } else if (options === "Add an role") {
            addRole()

        } else if (options === "View department") {
            viewDepartment()
        }
        else {
            connection.end()
        }
    })
}

function addDepartment() {
    inquirer.prompt({
        name: "name",
        type: "input",
        message: "What is the name of the department you want to add?",
    }).then(function (answers) {
        connection.query("INSERT INTO department SET ?", { title: answers.name }, function (err) {
            if (err) throw err
            start()
        })

    })
}

function addRole() {
    connection.query("SELECT * FROM department", function (err, data) {
        if (err) throw err

        let depArr = data.map(function (dep) {
            return {
                name: dep.title,
                value: dep.id
            }
        })
    })
    inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the department you want to add??"
        }, {
            name: "depId",
            type: "list",
            message: "What is the name of the department id of this employee??",
            choices: depArr
        }, {
            name: "salary",
            type: "number",
            message: "How much money is one making??"
        },
    ]).then(function (answers) {
        connection.query("INSERT INTO roles SET ?", {
            title: answers.title,
            salary: answers.salary,
            department_id: answers.depId
        }), function (err) {
            if (err) throw err
            start()

        }
    })
}

function viewDepartment() {
    connection.query("SELECT * FROM department", function (err, data) {
        if (err) throw err
        console.table(data)
        start()


    })

}