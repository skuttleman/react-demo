export default class SimpleRedux {
  constructor(reducers) {
    this._reducers = reducers;
    this._store = this._buildStore({}, {});
  }

  _buildStore(currentStore, action) {
    return Object.keys(this._reducers).reduce((newStore, key) => {
      newStore[key] = this._reducers[key](currentStore[key], action);
      return newStore;
    }, {});
  }

  getStore() {
    return this._store;
  }

  dispatch(action) {
    console.log('dispatching...', action);
    this._store = this._buildStore(this._store, action);
  }
}
