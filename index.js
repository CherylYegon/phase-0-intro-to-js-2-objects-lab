// Write your solution in this file
let employee = {
    name: "Cheryl",
    streetAddress: "14567"
};

// Function to update employee with a new key-value pair
function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = { ...employee };
    updatedEmployee[key] = value;
    return updatedEmployee;
}

// Function to update employee destructively and return the entire updated employee
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;
    return employee;
}

// Function to delete a key from a clone of employee and returns the new employee
function deleteFromEmployeeByKey(employee, key) {
    const updatedEmployee = { ...employee };
    delete updatedEmployee[key];
    return updatedEmployee;
}

// Function to delete a key from employee destructively
function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
}

console.log(employee);
console.log(updateEmployeeWithKeyAndValue(employee, 'age', 30));
console.log(destructivelyUpdateEmployeeWithKeyAndValue(employee, 'position', 'Software Engineer'));
console.log(deleteFromEmployeeByKey(employee, 'name'));
console.log(destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress'));
console.log(employee);