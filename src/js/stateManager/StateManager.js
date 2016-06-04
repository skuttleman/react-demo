export default class StateManager {
  constructor() {
    this._state = {};
    this._subscribers = [];
  }

  getState() {
    return {
      ...this._state
    };
  }

  updateState(property, value) {
    this._state[property] = value;
    this._subscribers.forEach(({ setState }) => setState(this.getState()));
  }

  subscribe(comp) {
    let setState = comp.setState.bind(comp);
    this._subscribers.push({ comp, setState });
    return this.getState();
  }

  unsubscribe(comp) {
    this._subscribers = this._subscribers.filter(sub => sub.comp !== comp);
  }
}
