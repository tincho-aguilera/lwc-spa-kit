// storageAdapter.js

export const localStorageAdapter = {
    get(key) {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    },
    set(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  };

  export const sessionStorageAdapter = {
    get(key) {
      const raw = sessionStorage.getItem(key);
      return raw ? JSON.parse(raw) : null;
    },
    set(key, value) {
      sessionStorage.setItem(key, JSON.stringify(value));
    }
  };

  export function selectiveAdapter(baseAdapter, keysToPersist) {
    return {
      get(key) {
        if (keysToPersist.includes(key)) {
          return baseAdapter.get(key);
        }
        return null;
      },
      set(key, value) {
        if (keysToPersist.includes(key)) {
          baseAdapter.set(key, value);
        }
      }
    };
  }
