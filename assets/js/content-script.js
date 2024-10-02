chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (request.darkMode !== undefined) {
    if (request.darkMode) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  }
});
