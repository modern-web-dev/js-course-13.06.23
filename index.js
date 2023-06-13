// Model, View, View Model
class Employee {
    constructor(id, firstName, lastName) {
        this.id = id;
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class EmployeeService {
    getOne(id) {
        return new Promise(function (resolve, reject) {
            setTimeout(function () {
                resolve(new Employee(id, 'John', 'Smith'));
                // reject(new Error(`No employee with ID ${id} found`));
            }, 2000);
        });
    }
}

class EmployeeFormComponent {
    currentEmployee;

    constructor(employees) {
        this.employees = employees;
        const formElement = document.querySelector('form');
        formElement.addEventListener('submit', this.submit);
    }

    submit = (event) => {
        console.log(this);
        event.preventDefault();
        const formElement = event.target;
        const firstNameInput =
            formElement.querySelector('#firstName');
        const lastNameInput = formElement['lastName'];
        console.log(
            new Employee(this.currentEmployee.id, firstNameInput.value, lastNameInput.value));
    }

    show(employeeId) {
        this.employees.getOne(employeeId)
            .then(employee => {
                    this.currentEmployee = employee;
                    const firstNameInput = document.querySelector('#firstName');
                    firstNameInput.value = this.currentEmployee.firstName;
                    const lastNameInput = document.querySelector('#lastName');
                    lastNameInput.value = this.currentEmployee.lastName;
                },
                error => console.log('Sorry... ', error));
        console.log('End');
    }
}

new EmployeeFormComponent(new EmployeeService()).show(1234);
