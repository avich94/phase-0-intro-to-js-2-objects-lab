// Write your solution in this file!
const employee = {
    name : "Sam",
    streetAddress : "11 Broadway"
};

console.log(employee);

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {
        ...employee,
        [key]:value,
    };
}
const obj = updateEmployeeWithKeyAndValue(
    employee,
    "Sam",
    "11 Broadway"
);

console.log(employee.name);
console.log(employee.streetAddress);

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;

    return obj;
}
console.log(employee.name = 'Sam');
console.log(employee.streetAddress = '12 Broadway');

function deleteFromEmployeeByKey(obj, key) {
    const newObj = { ...obj };
    delete newObj[key];
    return newObj;
  }
  
  const newObj = deleteFromEmployeeByKey(employee, 'streetAddress');
  
  console.log(newObj.name);
  console.log(newObj.streetAddress);



  function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
  }
  
  const newEmployee = destructivelyDeleteFromEmployeeByKey(employee, 'name');
  
  console.log(newEmployee.name);

