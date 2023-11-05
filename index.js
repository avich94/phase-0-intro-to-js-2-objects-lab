const employee = {
    name : "Sam",
    streetAddress : "11 Broadway"
};
function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...employee,
        [key]:value,
    };
};


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
        employee[key] = value;
        return employee;
};

function deleteFromEmployeeByKey(employee, key) {
    let newEmployee = { ...employee };
    delete newEmployee[key];
    return newEmployee;
};
delete employee.key;

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];
    return employee;
  }
