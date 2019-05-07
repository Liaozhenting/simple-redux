const {combineReducers} =require('../src');
console.log(typeof combineReducers);
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};

const helloReducer = (state = '', action) => {
  switch (action.type) {
    case "HELLO":
      return 'hello';
    case "BYE":
      return 'bye bye';
    default:
      return state;  
    
  }
}

module.exports = combineReducers({
  counterReducer,
  helloReducer
})
