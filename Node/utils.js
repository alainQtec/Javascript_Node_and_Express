import os from "os";
import { readFile } from "fs";

export function getText(path) {
  return new Promise((resolve, reject) => {
    readFile(path, "utf8", (err, res) => {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
}
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
