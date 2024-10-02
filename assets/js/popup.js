document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("toggleDarkMode");

  if (toggleButton) {
    chrome.storage.local.get("darkMode", ({ darkMode }) => {
      toggleButton.textContent = darkMode
        ? "Toggle Dark Mode"
        : "Toggle Dark Mode";
    });

    toggleButton.addEventListener("click", function () {
      const btn = this;

      chrome.storage.local.get("darkMode", function (data) {
        const isDarkMode = !data.darkMode;

        chrome.storage.local.set({ darkMode: isDarkMode }, function () {
          toggleButton.textContent = isDarkMode
            ? "Toggle Dark Mode"
            : "Toggle Dark Mode";

          chrome.tabs.query({}, function (tabs) {
            tabs.forEach((tab) => {
              if (
                tab.url &&
                (tab.url.includes("/phpmyadmin/") ||
                  tab.url.includes("hstgr.io"))
              ) {
                chrome.tabs.sendMessage(tab.id, { darkMode: isDarkMode });
              }
            });

            btn.animate(
              [
                { backgroundColor: "#509F3AFF" },
                { color: "#2AFA00FF" },
                { borderColor: "#3E8923FF" },
              ],
              {
                duration: 500,
                iterations: 1,
              }
            );
          });
        });
      });
    });
  }
});
