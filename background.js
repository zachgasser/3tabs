// Monitor tab creation
chrome.tabs.onCreated.addListener(async function(tab) {
    // Get the window to which this tab belongs
    let windowId = tab.windowId;
  
    // Get all tabs in the window
    let tabs = await chrome.tabs.query({windowId: windowId});
  
    // If the number of tabs exceeds 3, close the window
    if (tabs.length > 3) {
      await chrome.windows.remove(windowId);
    }
  });
  