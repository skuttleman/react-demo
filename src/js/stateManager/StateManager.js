export default class StateManager {
  constructor() {
    this._state = {};
    this._stateSetters = [];
  }

  getState() {
    return this._state;
  }

  updateState(property, value) {
    this._state = {
      ...this._state,
      [property]: value
    };
    this._stateSetters.forEach(setState => setState(this._state));
  }

  wireUp(component) {
    this._stateSetters.push(component.setState.bind(component));
    component.state = this.getState();
  }
}
