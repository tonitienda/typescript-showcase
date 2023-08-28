// This is a trick to simulate an API.
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const API_DELAY = 300;

type TestCase = {
  id: number;
};

type TestRun = {
  id: number;
};

type TestCasesCallback = (testCases: TestCase[]) => void;
type EmptyCallback = () => void;
type TestRunsCallback = (testCases: TestRun[]) => void;

export const getTestCasesByTestCycleId: (
  testCycleId: number,
  callback?: TestCasesCallback
) => Promise<TestCase[] | void> = async (testCycleId, callback) => {
  await sleep(API_DELAY);
  const testcases = [{ id: 1 }, { id: 2 }, { id: 3 }];

  if (callback) {
    callback(testcases);
    return;
  }
  return Promise.resolve(testcases);
};

export const getTestRunsByTestCycleId: (
  testCycleId: number,
  callback?: TestRunsCallback
) => Promise<TestRun[] | void> = async (testCycleId, callback) => {
  await sleep(API_DELAY);

  const testruns = [{ id: 1 }, { id: 2 }, { id: 3 }];

  if (callback) {
    callback(testruns);
    return;
  }
  return Promise.resolve(testruns);
};

export const lockTestRuns: (
  testRunsIds: number[],
  callback?: EmptyCallback
) => Promise<void> = async (testRunsIds, callback) => {
  // Lock the TestRuns
  console.log("Locking TestRuns:", testRunsIds);
  await sleep(API_DELAY);

  if (callback) {
    callback();
    return;
  }
  return Promise.resolve();
};
