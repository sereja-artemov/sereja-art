const activeLink = (url: string, pathname: string) => pathname === url ? "active-menu-link" : "";

export function lockScroll() {
  const root = document.getElementsByTagName("html")[0];
  root.classList.toggle("lock-scroll"); // class is define in the global.css
}
export function removeScrollLock() {
  const root = document.getElementsByTagName("html")[0];
  root.classList.remove("lock-scroll"); // class is define in the global.css
}

export {activeLink}
