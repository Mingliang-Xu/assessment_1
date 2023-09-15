// In this section you will answer some work through problems related to the Software Development Lifecycle

//////////////////PROBLEM 1////////////////////
/*
    Reorganize the following steps of the Software Development Lifecycle to be in their correct order.
*/

// Implementation --- 4th
// Design --- 3rd
// Maintain --- 6th
// Analysis of Requirements --- 2nd
// Testing & Integration --- 5th
// Planning --- 1st


//////////////////PROBLEM 2////////////////////
/*
    Create a variable for each of the above steps of the Software Development Lifecycle and set the values of each variable to a definition of the step.
    The first one is done for you. 
*/
const planning = "This is the first step, in which the end goal of the software is determined and defined. Developers typically will see what systems are already in place, and determine what features will need to be added." 

const analysisOfRequirements = "This is the second step, in which developvers gathering all the specific details required for a new system as well as determining the first ideas for prototypes. Developers may: Define any prototype system requirements. Evaluate alternatives to existing prototypes." 

const deign = "This is the tird step, in which software developers define the technical details of the product. Depending on the project, these details can include screen designs, databases, sketches, system interfaces, and prototypes. Clients use these details to make final product design choices." 

const implementation = "This is the fourth step, it includes user notification, user training, installation of hardware, installation of software onto production computers, and integration of the system into daily work processes. This phase continues until the system is operating in production in accordance with the defined user requirements." 

const testingAndIntegration = "This is the fifth step, it can involve unit testing, performing integration and end-to-end tests, verification and validation, and reporting or identifying bugs or defects in the software solution." 

const mantain = "This is the last step in which the software is operationalized to ensure there are no issues or incidents related to the deployment. This stage of work can involve reviewing, understanding, and monitoring network settings, infrastructure configurations, and performance of application services in production. This process can involve incident resolution or management in the course of any issues or new feature changes made to impact a customer or user base. " 

console.log("Planning: " + planning)
console.log("=============================================================")
console.log("Analysis of Requirements: " + analysisOfRequirements)
console.log("=============================================================")
console.log("Design: " + deign)
console.log("=============================================================")
console.log("Implementation: " + implementation)
console.log("=============================================================")
console.log("Testing & Integration: " + testingAndIntegration)
console.log("=============================================================")
console.log("Maintain: " + mantain)