function applyDarkMode(apply = true) {
  document.body?.classList.toggle("dark-mode", apply);
}

document.addEventListener("DOMContentLoaded", () => {
  chrome.storage.local.get("darkMode", ({ darkMode }) => {
    applyDarkMode(darkMode);
  });

  const observer = new MutationObserver(() => {
    chrome.storage.local.get("darkMode", ({ darkMode }) =>
      applyDarkMode(darkMode)
    );
  });

  observer.observe(document.body, { childList: true, subtree: true });
});
