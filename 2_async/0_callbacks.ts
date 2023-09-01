// Callbacks are "call me when something happens / something is done"

// Old ways -> Callback hell
doSomethingAsync(2, function (x: number) {
  doSomethingElseAsync(x, function (x: number) {
    doSomethingElseAsync(x, function (x: number) {
      doSomethingElseAsync(x, function (x: number) {
        doSomethingElseAsync(x, function (x: number) {
          doSomethingElseAsync(x, function (x: number) {});
          console.log(x);
        });
      });
    });
  });
});
