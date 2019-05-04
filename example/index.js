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


