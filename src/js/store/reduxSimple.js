import SimpleRedux from './SimpleRedux';

// initialStore = { age: 0, favoriteAnimals: [] }
let reducers = {
  age(state = 0, action) {
    switch (action.type) {
      case 'HAPPY_BIRTHDAY':
        return state + 1;
      case 'FOUNTAIN_OF_YOUTH':
        return state - 1;
      default:
        return state;
    }
  },
  favoriteAnimals(state = [], action) {
    switch (action.type) {
      case 'ADD_FAVORITE_ANIMAL':
        return state.concat(action.animal);
      default:
        return state;
    }
  }
};

window.simpleRedux = () => {
  let stateManager = new SimpleRedux(reducers);

  console.log('inital store');
  console.log(stateManager.getStore());

  stateManager.dispatch({ type: 'HAPPY_BIRTHDAY' });
  console.log(stateManager.getStore());

  stateManager.dispatch({ type: 'ADD_FAVORITE_ANIMAL', animal: 'giraffe' });
  console.log(stateManager.getStore());

  stateManager.dispatch({ type: 'ADD_FAVORITE_ANIMAL', animal: 'zebra' });
  console.log(stateManager.getStore());

  stateManager.dispatch({ type: 'HAPPY_BIRTHDAY' });
  console.log(stateManager.getStore());

  stateManager.dispatch({ type: 'NOT_A_RECOGNIZED_ACTION' });
  console.log(stateManager.getStore());
};
