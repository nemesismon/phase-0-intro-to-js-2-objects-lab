// Write your solution in this file!

const employee = {
    name: "",
    streetAddress: "",
};

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = { ...obj };
    newObj[key] = value;
    return newObj;
}

const newEmployee = updateEmployeeWithKeyAndValue(employee, "name", "Sam");
newEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    obj[key] = value;
    return obj;
}

employee = destructivelyUpdateEmployeeWithKeyAndValue(employee, "name", "Sam");

function deleteFromEmployeeByKey(obj, key) {
    const cloneEmployee = { ...obj };
    delete cloneEmployee[key];
    return cloneEmployee;
}

deleteFromEmployeeByKey(employee, "name");
deleteFromEmployeeByKey(employee, "streetAddress");

function destructivelyDeleteFromEmployeeByKey(obj, key) {
    delete obj[key];
    return obj;
}

destructivelyDeleteFromEmployeeByKey(employee, "name");
destructivelyDeleteFromEmployeeByKey(employee, "streetAddress");
