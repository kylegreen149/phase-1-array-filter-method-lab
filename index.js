// Code your solution here

function findMatching(driverNames, nameToMatch) {
    return driverNames.filter(driverName => {
        return driverName.toUpperCase() === nameToMatch.toUpperCase()
    })
}

function fuzzyMatch(driverNames, startsWithString) {
    return driverNames.filter(driverName => {
        for(let index = 0; index < startsWithString.length; index++) {
            if (driverName[index] !== startsWithString[index]) {
                return false
            }
        }
        return true
    })
}

function matchName(drivers, name) {
    return drivers.filter(driver => {
        return driver.name === name;
    })
}