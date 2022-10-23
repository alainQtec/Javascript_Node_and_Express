import os from "os";
export const currentOs = {
  Name: os.type(),
  Release: os.release(),
  Ram: os.totalmem(),
  Uptime: os.uptime(),
};
export const sayHi = (name) => {
  if (!name) {
    name = os.userInfo().username;
  }
  console.log("Hi", name);
};

// Set exports (Export Default)
export default { sayHi };
