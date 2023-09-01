import axios from "axios";

const futureGoogle = axios.get("https://google.com");

console.log(futureGoogle);

futureGoogle.then((x) =>
  console.log("Promise resolved:", x.status, x.statusText)
);
