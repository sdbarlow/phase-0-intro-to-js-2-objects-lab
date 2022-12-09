const employee = {
    name: "seth",
    streetAddress: "14161 Deer Haven cv",
}

function updateEmployeeWithKeyAndValue(employeeObject, Key, Value) {
    const newObj = {...employee};
    newObj[Key] = Value;
    return newObj;

}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, Key, Value) {
    obj[Key] = Value;
    return obj;
}


function deleteFromEmployeeByKey(obj, Key) {
 const newObj = {...employee};
 delete newObj[Key];
 return newObj
}


function destructivelyDeleteFromEmployeeByKey(obj, Key) {
 delete employee[Key]
 return employee;
}

