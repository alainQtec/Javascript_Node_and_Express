// Copyright 2022 alainQtec
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     http://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import variables, { sayHi } from "./Node/Fundamentals.js";
import { currentOs, getText, sayHi as _sayHi } from "./Node/utils.js";
import path from 'path';
import EventEmitter from "events";
// import { startmyServer } from "./Node/Http.js";

function testImportedStuff() {
  console.log(variables);
  _sayHi();
  sayHi("Mom");
  console.log(currentOs);
  console.log(path.sep);
  console.log(
    "normalised path :",
    path.join("content", "subfolder", "test.txt")
  );
}
console.log("starting the first task");
getText("./assets/file-one.txt").then(
  (result) => {
    console.log(result);
  },
  (err) => {
    console.log(err);
  }
);
console.log("starting the next task");
console.log("Starting task 2");
console.log("t2_ 1");
setTimeout(() => {
  console.log("t2_ 2");
}, 0);
console.log("t2_ 3");

const eventE = new EventEmitter();
eventE.on("response", () => {
  console.log("data recieved");
});
eventE.emit("response");
// startmyServer();
