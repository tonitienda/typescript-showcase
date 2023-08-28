# typescript-showcase

## History

### Intro

Javascript started in the browser to perform interactions when users performed actions in the website.
For example:
- Clicking a button
- Hovering over an element
- Scrolling the page
- Submitting a form
- Pressing a key
- etc.

For that reason Javascript is event based. It waits for an event to happen and then executes a function to completion.

### Phase 1 - Callbacks

Callbacks were the first way of handling asynchronous code in Javascript.
A callback is a function that is passed as an argument to another function and is executed when the function it was passed to is done.

```javascript
doSomething(args, function (err, result) {
  if (err) {
    // handle error
  } else {
    // handle result
    doSomethingElse(args2, function (err, result) {
        if (err) {
            // handle error
        } else {
            // handle result
            doSomethingElseAgain(args3, function (err, result) {
            if (err) {
                // handle error
            } else {
                // handle result
            }
            })
        }
        })
    })
  }
}

```

Callbacks are not very readable and can lead to callback hell.

### Phase 2 - Promises

Promises were introduced to solve the callback hell problem.
A promise is an object that represents the eventual completion (or failure) of an asynchronous operation, and its resulting value.

```javascript
doSomething(args)
    .then(function (result) {
        // handle result
        return doSomethingElse(args2)
    })
    .then(function (result) {
        // handle result
        return doSomethingElseAgain(args3)
    })
    .then(function (result) {
        // handle result
    })
    .catch(function (err) {
        // handle error
    })
```

And with the new syntax it can be even more readable.

```javascript
doSomething(args)
    .then(result => doSomethingElse(args2))
    .then(result => doSomethingElseAgain(args3))
    .then(result => {
        // handle result
    })
    .catch(err => {
        // handle error
    })
```


### Phase 3 - Async/Await

Async/Await is a new way of handling asynchronous code in Javascript.
Async/Await is built on top of promises and makes asynchronous code look and behave a little more like synchronous code.

```javascript
async function doSomething(args) {
    try {
        const result = await doSomethingElse(args2)
        const result2 = await doSomethingElseAgain(args3)
        // handle result
    } catch (err) {
        // handle error
    }
}
```