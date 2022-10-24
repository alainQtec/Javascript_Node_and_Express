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
import { currentOs, sayHi as _sayHi } from "./Node/utils.js";
import path from "path";
import { startmyServer } from "./Node/Http.js";
import { readFile } from "fs/promises";

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
readFile("./assets/file-one.txt", "utf8", (err, res) => {
  if (err) {
    return console.log(err);
  }
  console.log(res);
  console.log("Completed the first Task");
});
console.log("starting the next task");
// startmyServer();
