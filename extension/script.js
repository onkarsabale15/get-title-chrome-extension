const profiles = [
  "https://www.linkedin.com/in/abhinavlohanide/",
  "https://www.linkedin.com/in/amankumar1in/",
  "https://www.linkedin.com/in/darikajain/"
];

async function checkStatus(allTabs) {
  // sendDataToServer(allTabs);
  let loadingTabs = await allTabs.slice();
  const a = fetch("http://localhost:3000")
  const intervalId = setInterval(function() {
    loadingTabs = loadingTabs.filter(tabId => {
      const tab = chrome.tabs.get(tabId);
      if(tab.status != "loading"){
        sendDataToServer(tabId);
      }
    });
    if (loadingTabs.length == 0) {
      clearInterval(intervalId);
      sendDataToServer(allTabs);
    }
  }, 100);
}

function sendDataToServer(allTabs) {
  fetch("http://localhost:3000/user", {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ allTabs: allTabs })
  })
}

document.addEventListener('click', function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const allTabs = [];
    profiles.forEach(profile => {
      chrome.tabs.create({ url: profile }, function (newTab) {
        allTabs.push(newTab.id);
        if (allTabs.length == profiles.length) {
          checkStatus(allTabs);
        }
      });
    });
  });
});
