// // /* Your Code Here */
// function createEmployeeRecord(firstName, lastName, role, salary) {
//     return {
//       firstName: firstName,
//       lastName: lastName,
//       role: role,
//       salary: salary,
//     };
//   }
  
// function createEmployeeRecord(arr) {
//     return {
//         firstName: arr[0],
//         familyName: arr[1],
//         title: arr[2],
//         payPerHour: arr[3],
//         timeInEvents: [],
//         timeOutEvents: [],
//     };
// }

// function createEmployeeRecords(arr) {
//     return arr.map(createEmployeeRecord);
  
//     // return arr.map((employeeArr) => createEmployeeRecord(employeeArr));
// }

// // function createTimeInEvent(employee, dateStamp) {
// //     const [date, hour] = dateStamp.split(" ");
// //     employee.timeInEvents.push({
// //         type: "TimeIn",
// //         hour: parseInt(hour),
// //         date: date,
// //     });
// //     return employee;
// // }
// function createTimeInEvent(dateTimeString) {
//     const [date, hour] = dateTimeString.split(" ");
//     const timeInEvent = {
//       type: "TimeIn",
//       date: date,
//       hour: parseInt(hour, 10)
//     };
//     this.timeInEvents.push(timeInEvent);
//     return this;
//   }
  

// // function createTimeOutEvent(employee, dateStamp) {
// //     const [date, hour] = dateStamp.split("2024-03-04 1700");
// //     employee.timeOutEvents.push({
// //         type: "TimeOut",
// //         hour: parseInt(hour),
// //         date: date,
// //     });
// //     return employee;
// // }
// function createTimeOutEvent(dateTimeString) {
//     const [date, hour] = dateTimeString.split(" ");
//     const timeOutEvent = {
//       type: "TimeOut",
//       date: date,
//       hour: parseInt(hour, 10)
//     };
//     this.timeOutEvents.push(timeOutEvent);
//     return this;
//   }
  
//   function hoursWorkedOnDate(date) {
//     const timeInEvent = this.timeInEvents.find(event => event.date === date);
//     const timeOutEvent = this.timeOutEvents.find(event => event.date === date);
  
//     if (!timeInEvent || !timeOutEvent) {
//       return 0; // If either timeIn or timeOut event is missing, return 0 hours worked
//     }
  
//     const timeInHour = timeInEvent.hour / 100; // Convert military time to hours
//     const timeOutHour = timeOutEvent.hour / 100;
  
//     return timeOutHour - timeInHour; // Calculate hours worked
//   }
  

// // function hoursWorkedOnDate(employee, date) {
// //     const timeInEvent = employee.timeInEvents.find(
// //         (event) => event.date === date
// //     );
// //     const timeOutEvent = employee.timeOutEvents.find(
// //         (event) => event.date === date
// //     );

// //     if (!timeInEvent || !timeOutEvent) {
// //         return 0; // If either timeInEvent or timeOutEvent is not found, return 0
// //     }

// //     const hoursWorked = (timeOutEvent.hour - timeInEvent.hour) / 100; // Calculate hours worked
// //     return hoursWorked;
// // }
// function wagesEarnedOnDate(date) {
//     const hoursWorked = hoursWorkedOnDate.call(this, date);
//     const payRate = this.payPerHour;
    
//     return hoursWorked * payRate;
//   }
  
// // function wagesEarnedOnDate(employee, date) {
// //     const hoursWorked = hoursWorkedOnDate(employee, date);
// //     const payRate = employee.payPerHour;
// //     const wagesEarned = hoursWorked * payRate;
// //     return wagesEarned;
// // }

// function allWagesFor() {
//     const datesWorked = this.timeInEvents.map(event => event.date);
  
//     const totalWages = datesWorked.reduce((total, date) => {
//       return total + wagesEarnedOnDate.call(this, date);
//     }, 0);
  
//     return totalWages;
//   }
  
// // function allWagesFor(employee) {
// //     const datesWorked = employee.timeInEvents.map((event) => event.date); // Extract dates worked
// //     const totalWages = datesWorked.reduce((total, date) => {
// //         return total + wagesEarnedOnDate(employee, date); // Accumulate wages for each date
// //     }, 0);
// //     return totalWages;
// // }


// // function findEmployeeByFirstName(srcArray, firstName) {
// //     return srcArray.find((employee) => employee.firstName === firstName);
// // }

// function findEmployeeByFirstName(collection, firstNameString) {
//     return collection.find(employee => employee.firstName === firstNameString);
//   }

  
//   describe("Full Payroll Test", function () {
//     // Step 1: Create employee records from CSV data
//     const employees = createEmployeeRecords(csvDataEmployees);
  
//     // Step 2: Populate timeIn and timeOut events for each employee based on the respective time data
//     csvTimesIn.forEach(([firstName, timeIns]) => {
//       const employee = findEmployeeByFirstName(employees, firstName);
//       timeIns.forEach(timeIn => createTimeInEvent.call(employee, timeIn));
//     });
  
//     csvTimesOut.forEach(([firstName, timeOuts]) => {
//       const employee = findEmployeeByFirstName(employees, firstName);
//       timeOuts.forEach(timeOut => createTimeOutEvent.call(employee, timeOut));
//     });
  
//     // Step 3: Calculate wages earned for each employee
//     const payrollData = employees.map(employee => ({
//       firstName: employee.firstName,
//       wages: allWagesFor.call(employee)
//     }));
  
//     // Step 4: Sum up the wages earned by all employees to get the total payroll
//     const totalPayroll = payrollData.reduce((total, employee) => total + employee.wages, 0);
  
//     it("calculates the total payroll to be $", function () {
//       expect(totalPayroll).to.equal(3495); // The expected total payroll based on the provided data
//     });
//   });
  
// function calculatePayroll(arr) {
//     return arr.reduce((totalPayroll, employee) => {
//         return totalPayroll + allWagesFor(employee); // Accumulate total payroll for all employees
//     }, 0);
// }

// module.exports = {
//     createEmployeeRecord,
//     createEmployeeRecords,
//     createTimeInEvent,
//     createTimeOutEvent,
//     hoursWorkedOnDate,
//     wagesEarnedOnDate,
//     allWagesFor,
//     findEmployeeByFirstName,
//     calculatePayroll,
// };
// /*
//  We're giving you this function. Take a look at it, you might see some usage
//  that's new and different. That's because we're avoiding a well-known, but
//  sneaky bug that we'll cover in the next few lessons!

//  As a result, the lessons for this function will pass *and* it will be available
//  for you to use if you need it!
//  */

// // Define helper functions
// const parseTimeStamp = (timeStamp) => {
//     const [date, hour] = timeStamp.split(' ');
//     return {
//         date: date,
//         hour: parseInt(hour, 10)
//     };
// };

// // // Define main functions
// // const createEmployeeRecord = (employeeArray) => {
// //     return {
// //         firstName: employeeArray[0],
// //         familyName: employeeArray[1],
// //         title: employeeArray[2],
// //         payPerHour: employeeArray[3],
// //         timeInEvents: [],
// //         timeOutEvents: []
// //     };
// // };

// // const createEmployeeRecords = (employeeArrays) => {
// //     return employeeArrays.map(createEmployeeRecord);
// // };

// // const createTimeInEvent = (employeeRecord, timeStamp) => {
// //     const timeIn = parseTimeStamp(timeStamp);
// //     employeeRecord.timeInEvents.push({
// //         type: "TimeIn",
// //         hour: timeIn.hour,
// //         date: timeIn.date
// //     });
// //     return employeeRecord;
// // };

// // const createTimeOutEvent = (employeeRecord, timeStamp) => {
// //     const timeOut = parseTimeStamp(timeStamp);
// //     employeeRecord.timeOutEvents.push({
// //         type: "TimeOut",
// //         hour: timeOut.hour,
// //         date: timeOut.date
// //     });
// //     return employeeRecord;
// // };

// // const hoursWorkedOnDate = (employeeRecord, date) => {
// //     const timeIn = employeeRecord.timeInEvents.find(event => event.date === date);
// //     const timeOut = employeeRecord.timeOutEvents.find(event => event.date === date);
// //     return (timeOut.hour - timeIn.hour) / 100;
// // };

// // const wagesEarnedOnDate = (employeeRecord, date) => {
// //     const hoursWorked = hoursWorkedOnDate(employeeRecord, date);
// //     return hoursWorked * employeeRecord.payPerHour;
// // };

// // const allWagesFor = (employeeRecord) => {
// //     const datesWorked = employeeRecord.timeInEvents.map(event => event.date);
// //     const wages = datesWorked.reduce((totalWages, date) => {
// //         return totalWages + wagesEarnedOnDate(employeeRecord, date);
// //     }, 0);
// //     return wages;
// // };

// // const findEmployeeByFirstName = (srcArray, firstName) => {
// //     return srcArray.find(employee => employee.firstName === firstName);
// // };

// // const calculatePayroll = (employeeRecords) => {
// //     return employeeRecords.reduce((totalPayroll, employee) => {
// //         return totalPayroll + allWagesFor(employee);
// //     }, 0);
// // };

// // // Export functions
// // // module.exports = {
// // //     createEmployeeRecord,
// // //     createEmployeeRecords,
// // //     createTimeInEvent,
// // //     createTimeOutEvent,
// // //     hoursWorkedOnDate,
// // //     wagesEarnedOnDate,
// // //     allWagesFor,
// // //     findEmployeeByFirstName,
// // //     calculatePayroll
// // // };

// // //  const allWagesFor = function () {
// // //     const eligibleDates = this.timeInEvents.map(function (e) {
// // //        return e.date;
// // // //     });
// // //      const payable = eligibleDates.reduce(
// // //         function (memo, d) {
// // //              return memo + wagesEarnedOnDate.call(this, d);
// // //          }.bind(this),
// // //          0
// // //     ); // <== Hm, why did we need to add bind() there? We'll discuss soon!

// // //      return payable;
// // //  };
let createEmployeeRecord = function(array){
  return {
      firstName: array[0],
      familyName: array[1],
      title: array[2],
      payPerHour: array[3],
      timeInEvents: [],
      timeOutEvents: []
  }
}

let createEmployeeRecords = function(employeeRowData) {
  return employeeRowData.map(function(array){
      return createEmployeeRecord(array)
  })
}

let createTimeInEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(' ')

  this.timeInEvents.push({
      type: "TimeIn",
      hour: parseInt(hour, 10),
      date,
  })

  return this
}

let createTimeOutEvent = function(dateStamp){
  let [date, hour] = dateStamp.split(' ')

  this.timeOutEvents.push({
      type: "TimeOut",
      hour: parseInt(hour, 10),
      date,
  })

  return this
}

let hoursWorkedOnDate = function(soughtDate){
  let inEvent = this.timeInEvents.find(function(e){
      return e.date === soughtDate
  })

  let outEvent = this.timeOutEvents.find(function(e){
      return e.date === soughtDate
  })

  return (outEvent.hour - inEvent.hour) / 100
}

let wagesEarnedOnDate = function(dateSought){
  let rawWage = hoursWorkedOnDate.call(this, dateSought)
      * this.payPerHour
  return parseFloat(rawWage.toString())
}

let findEmployeeByFirstName = function(srcArray, firstName) {
return srcArray.find(function(rec){
  return rec.firstName === firstName
})
}

let calculatePayroll = function(arrayOfEmployeeRecords){
  return arrayOfEmployeeRecords.reduce(function(memo, rec){
      return memo + allWagesFor.call(rec)
  }, 0)
}
/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!

As a result, the lessons for this function will pass and it will be available
for you to use if you need it!
*/

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date
  })

  const payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}