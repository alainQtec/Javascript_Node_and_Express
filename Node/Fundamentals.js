// Simple "Node is environment to run Javascript Outside of the Browser"

// Global Variables
// __dirname  - path to current directory
// __filename - file name
// require    - function to use modules (CommonJS)
// module     - info about current module (file)
// process    - info about env where the program is being executed

const globalVariables = ["module", "process", "__dirname", "__filename"];

export function sayHi(name) {
  console.log(`Hi ${name} !`);
}
// Modules
// Modules are encapsulated code
// Every File in Node is a module

export default { globalVariables };
