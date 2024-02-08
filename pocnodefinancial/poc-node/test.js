
function executeAnotherFunction(logFn, testing) {
    logFn('Log it for me');
    testing("testing");
}

const logger = (message) => {
    console.log(message)
    console.log("saving in database")
}


const test = (message) => {
    console.log(message)
    console.log("hello")
    
  }

executeAnotherFunction(test, logger);
