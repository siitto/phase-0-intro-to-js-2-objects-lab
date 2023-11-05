
 const employee= {
    name: "",
    streetAddress:"",
};

    for (const key in employee) {
      delete employee[key];
    }

employee.name = "Sam";

console.log(employee);

function updateEmployeeWithKeyAndValue(obj,key,value){
    const newObj = {...obj};
    newObj[key] = value;
    return newObj;
}
let newEmployee = updateEmployeeWithKeyAndValue(employee, "streetAddress", "11 Broadway");
console.log(employee);
console.log(newEmployee);

function destructivelyUpdateEmployeeWithKeyAndValue(obj,key,value){
    obj[key]= value;
    return obj;
}
console.log(destructivelyUpdateEmployeeWithKeyAndValue(obj));

const newEmployee2 = destructivelyUpdateEmployeeWithKeyAndValue(employee, "streetAddress", "12 Broadway");
console.log(employee);
console.log(newEmployee2);

function deleteFromEmployeeByKey(obj,key,value){
   const newObj = {...obj};
   newObj[key]= value;
    return newObj;
}
newEmployee = deleteFromEmployeeByKey(employee,"name");
console.log(newEmployee);
console.log(typeof newEmployee);
console.log(employee.name);

function destructivelyDeleteFromEmployeeByKey(obj,key,value){
    obj[key]= value;
    return obj;
}
console.log(destructivelyDeleteFromEmployeeByKey(obj));

 newEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name");
 console.log(newEmployee);

 newEmployee = destructivelyDeleteFromEmployeeByKey(employee, "name");
 console.log(employee.name);
 console.log(employee);

