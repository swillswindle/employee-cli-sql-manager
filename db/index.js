const connection = require("./connection");

class DB {
    constructor(connection) {
        this.connection = connection;
    }

    viewEmployees() {
        return this.connection.promise().query(
            "SELECT * FROM employee, employee.first_name, role.title, department.name AS department, role.salary, manager.first_name AS manager from EMPLOYEE LEFT JOIN MANAGER ON employee.manager_id = manager.id LEFT JOIN ROLE ON employee.role_id = role.id LEFT JOIN DEPARTMENT ON role.department_id = department.id; LEFT JOIN employee manager on manager.id = employee.manager_id"
        );
    }
    viewDepartments(){
        return this.connection.promise().query(
            "SELECT * FROM department;"
        );
    }
    viewRoles(){
        return this.connection.promise().query(
            "SELECT * FROM role;"
        );
    }
    addEmployee(employee){
        return this.connection.promise().query(
            "INSERT INTO employee SET ?", employee
        );
    }
    removeEmployee(employeeId){
        return this.connection.promise().query(
            "DELETE FROM employee WHERE id = ?", employeeId
        );
    }
    updateEmployeeRole(employeeId, roleId){
        return this.connection.promise().query(
            "UPDATE employee SET role_id = ? WHERE id = ?", [roleId, employeeId]
        );
    }
    addDepartment(department){
        return this.connection.promise().query(
            "INSERT INTO department SET ?", department
        );
    }
    removeDepartment(departmentId){ 
        return this.connection.promise().query(
            "DELETE FROM department WHERE id = ?", departmentId
        );
    }
    addRole(role){
        return this.connection.promise().query(
            "INSERT INTO role SET ?", role
        );
    }
    removeRole(roleId){
        return this.connection.promise().query(
            "DELETE FROM role WHERE id = ?", roleId
        );
    }
}
    
module.exports = new DB(connection);