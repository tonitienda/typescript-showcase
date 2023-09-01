import {
  getTestCasesByTestCycleId,
  getTestRunsByTestCycleId,
  lockTestRuns,
} from "../api";
import { readFile } from "fs/promises";
import path from "path";

function execute() {
  let pendingPromises: Promise<any>[] = [];

  return readFile(path.resolve("pipeline.json"))
    .then((data) => {
      const testcycleIds = JSON.parse(data.toString())["pipelines"]["hils"];

      for (const testcycleId of testcycleIds) {
        console.log("TestCycleId:", testcycleId);

        const pendingPromise = getTestRunsByTestCycleId(12345)
          .then((testruns) => {
            console.log(testruns);
            if (testruns) {
              return lockTestRuns(testruns.map((testrun) => testrun.id));
            }
          })
          .then(() => getTestCasesByTestCycleId(12345))
          .then((testcases) => console.log(testcases));

        pendingPromises.push(pendingPromise);
      }

      return Promise.all(pendingPromises);
    })
    .catch((err) => {});
}

execute().then(() => console.log("\nDone!!!\n"));
