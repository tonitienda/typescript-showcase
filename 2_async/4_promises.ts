import axios from "axios";

const futureGoogle = axios.get("https://google.com");
const futureYahoo = axios.get("https://yahoo.co.jp");

console.log(futureGoogle);
console.log(futureYahoo);

// Sync all parallel executions
Promise.all([futureGoogle, futureYahoo]).then((responses) =>
  responses.forEach((y) =>
    console.log("Promise resolved:", y.status, y.statusText)
  )
);
