import { readFile } from "fs";
import path from "path";

readFile(path.resolve("../pipeline.json"), (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(data.toString());
});
