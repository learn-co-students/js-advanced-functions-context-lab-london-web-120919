/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

let allWagesFor = function () {
    let eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })
    let payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

const createEmployeeRecord = function(args) {
    const record = {
        firstName: args[0],
        familyName: args[1],
        title: args[2],
        payPerHour: args[3],
        timeInEvents: [],
        timeOutEvents: []
    }
    return record
}

const createEmployeeRecords = function(employees) {
    return employees.map(employee => createEmployeeRecord(employee))
}

const createTimeInEvent = function(time) {
    const [date, hour] = time.split(" ")

    const timeIn = {
        type: "TimeIn",
        hour: parseInt(hour, 10),
        date
    }

    this.timeInEvents.push(timeIn)
    return this
}

const createTimeOutEvent = function(time) {
    const [date, hour] = time.split(" ")

    const timeOut = {
        type: "TimeOut",
        hour: parseInt(hour, 10),
        date
    }

    this.timeOutEvents.push(timeOut)
    return this
}

const hoursWorkedOnDate = function (date) {
    const timeIn = this.timeInEvents.find(date => date === date).hour / 100
    const timeOut = this.timeOutEvents.find(date => date === date).hour / 100

    return (timeOut - timeIn)
}

const wagesEarnedOnDate = function (date) {
    return hoursWorkedOnDate.call(this, date) * this.payPerHour
}

const findEmployeeByFirstName = function (employees, firstName) {
    return employees.find(employee => employee.firstName === firstName)
}

const calculatePayroll = function (records) {
    let pay = records.reduce((memo, record) => memo + allWagesFor.call(record), 0)
    return pay
}