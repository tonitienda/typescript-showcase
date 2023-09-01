import {
  getTestCasesByTestCycleId,
  getTestRunsByTestCycleId,
  lockTestRuns,
} from "../api";
import { readFile } from "fs/promises";
import path from "path";

async function execute() {
  const data = await readFile(path.resolve("pipeline.json"));

  const testcycleIds = JSON.parse(data.toString())["pipelines"][
    "hils"
  ] as number[];
  testcycleIds.forEach(async (testcycleId) => {
    console.log("TestCycleId:", testcycleId);

    const testruns = await getTestRunsByTestCycleId(12345);

    if (testruns) {
      await lockTestRuns(testruns.map((testrun) => testrun.id));
    }

    const testcases = await getTestCasesByTestCycleId(12345);
    console.log(testcases);
  });
}

execute().then(() => console.log("\nDone!!!\n"));
