document.addEventListener('click', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      var currentTab = tabs[0];
      var tabTitle = currentTab.title;
      document.getElementById('titleDisplay').innerHTML = "<h3>Title of Current Tab:</h3>" + `<h3>${tabTitle}</h3>`;
    });
  });
  