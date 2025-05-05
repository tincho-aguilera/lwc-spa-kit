// globalStore.js

class Store {
    constructor(persistence = null) {
      this.state = {};
      this.listeners = {};
      this.persistence = persistence;
    }

    async init(key, initialValue = null) {
      const persisted = this.persistence?.get ? await this.persistence.get(key) : null;
      this.state[key] = persisted ?? initialValue;
      this.listeners[key] = [];
    }

    subscribe(key, callback) {
      if (!this.listeners[key]) this.init(key);
      this.listeners[key].push(callback);
      callback(this.state[key]);
    }

    async set(key, value) {
      this.state[key] = value;
      if (this.persistence?.set) await this.persistence.set(key, value);
      (this.listeners[key] || []).forEach(cb => cb(value));
    }

    setSilent(key, value) {
      this.state[key] = value;
      if (this.persistence?.set) this.persistence.set(key, value);
    }

    remove(key) {
      delete this.state[key];
      delete this.listeners[key];
      if (this.persistence?.set) this.persistence.set(key, null);
    }

    get(key) {
      return this.state[key];
    }
  }

  export const globalStore = new Store();
