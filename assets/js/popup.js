document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleDarkMode");

  if (toggleButton) {
    chrome.storage.local.get("darkMode", ({ darkMode }) => {
      toggleButton.textContent = darkMode
        ? "Disable Dark Mode"
        : "Enable Dark Mode";
    });

    toggleButton.addEventListener("click", function () {
      chrome.storage.local.get("darkMode", function (data) {
        const isDarkMode = !data.darkMode;

        chrome.storage.local.set({ darkMode: isDarkMode }, function () {
          toggleButton.textContent = isDarkMode
            ? "Disable Dark Mode"
            : "Enable Dark Mode";

          chrome.tabs.query({}, function (tabs) {
            tabs.forEach((tab) => {
              if (
                tab.url &&
                (tab.url.includes("/phpmyadmin/") ||
                  tab.url.includes("auth-db"))
              ) {
                chrome.tabs.sendMessage(tab.id, { darkMode: isDarkMode });
              }
            });
          });
        });
      });
    });
  }
});
