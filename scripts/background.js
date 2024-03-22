chrome.runtime.onStartup.addListener(() => {
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.scripting
        .executeScript({
          files: ["./scripts/blindrs-on.js"],
          target: { tabId: tab.id },
        });
    });
  });
});
