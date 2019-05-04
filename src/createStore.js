module.exports = function createStore(reducer, preloadState, enhancer) {
  let currentReducer = reducer;
  let currentState = preloadState;
  let currentListeners = [];
  let nextListeners = currentListeners;

  function getState() {
    return currentState;
  }

  function subscribe(listener) {
    nextListeners.push(listener);
  }

  function dispatch(action) {
    currentState = currentReducer(currentState, action);
    const listeners = (currentListeners = nextListeners);
    for (let i = 0; i < listeners.length; i++) {
      const listener = listeners[i];
      listener();
    }
  }

  dispatch({ type: "@@redux/INIT" });
  return {
    dispatch,
    subscribe,
    getState
  };
};
