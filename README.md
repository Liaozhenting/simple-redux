# How to use 
use `npm start` to show result.
The example code:
> ./reducer.js
```js
module.exports = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
```
> ./index.js
```js
const { createStore } = require("../src");
const counter = require("./reducers");
const store = createStore(counter);

const myConsole = () => {
  console.log(store.getState());
}
store.subscribe(myConsole);

store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
/* output */
// 1
// 2
// 1
```