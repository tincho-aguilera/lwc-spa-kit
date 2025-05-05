// router.js

const routes = {};

export function defineRoute(path, callback) {
  routes[path] = callback;
}

export function navigateTo(path) {
  window.location.hash = `#${path}`;
}

export function startRouter() {
  window.addEventListener("hashchange", () => {
    const path = location.hash.slice(1);
    if (routes[path]) {
      routes[path]();
    }
  });

  const initPath = location.hash.slice(1);
  if (routes[initPath]) routes[initPath]();
}
