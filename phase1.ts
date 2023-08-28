import {
  getTestCasesByTestCycleId,
  getTestRunsByTestCycleId,
  lockTestRuns,
} from "./api";
import { readFile } from "fs";
import path from "path";

function execute(callback: () => void) {
  readFile(path.resolve("pipeline.json"), function (err, data) {
    const testcycleIds = JSON.parse(data.toString())["pipelines"]["hils"];
    let totalTestCycles = testcycleIds.length;

    for (const testcycleId of testcycleIds) {
      console.log("TestCycleId:", testcycleId);

      getTestRunsByTestCycleId(12345, function (testruns) {
        console.log(testruns);

        lockTestRuns(
          testruns.map((testrun) => testrun.id),

          function () {
            getTestCasesByTestCycleId(12345, function (testcases) {
              console.log(testcases);
              totalTestCycles--;
              if (totalTestCycles === 0) {
                callback();
              }
            });
          }
        );
      });
    }
  });
}

execute(() => console.log("\nDone!!!\n"));
