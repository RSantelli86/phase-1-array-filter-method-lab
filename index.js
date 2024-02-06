// Function to find matching drivers by name
function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
  }
  
  // Function to find drivers if beginning provided letters match
  function fuzzyMatch(drivers, testString) {
    return drivers.filter(driver => driver.startsWith(testString));
  }
  
  // Function to check if name matches within a data structure
  function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
  }
