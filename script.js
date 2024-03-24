document.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var currentTab = tabs[0];
      var tabTitle = currentTab.title;
      document.getElementById('titleDisplay').innerText = tabTitle;
    });
  });
  