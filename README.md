# typescript-showcase

Parts of the showcase include concepts inherited from Javascript, not Typescript itself.

## Basics about Types

See 0_types.ts

## Functions

Functions are 1st class citizens. 
They can be declared, stored in arrays, passed as arguments, etc.
There are multiple ways of defining functions (more or less compact).

See 1_functions.ts

## Array manipulation

### Filter - Map - Reduce

array.filter(somePredicate).map(someFunction).reduce(someReducer)

- Filter: Returns a new array with the elements that pass the predicate
- Map: Returns a new array with the result of applying the function to each element
- Reduce: Returns a single value by applying the reducer function to each element


Problem: intermediate arrays are created between each step
Solution: Transducers (not included today)
    Summary: each element passes the pipeline of functions without creating intermediate arrays.



## Async

Default way of programming in Javascript/Typescript.

Modern way of handling async code in Javascript/Typescript is using Promises and Async/Await.
Promises are another type. Like `Optional[str]` in Python means the value might or might not be there
`Promises<string>` means the value will eventually be there,

But promises can be passed around and chained assuming that at some point the value will be available.

Promises are called Futures in other languages.

See 3_*_promises.ts


### Async/Await

Async/Await is syntactic sugar on top of Promises. The runtime works with Callbacks internally and therefore all the async/await is translated into Promise.then() and Promise.catch().

See 4_async_await.ts

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