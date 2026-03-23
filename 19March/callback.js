// 1. Global variable
let browser = "Chrome";

// 2. Function with callback
function checkBrowserVersion(callback) {
    // Simulate delay (2 seconds)
    setTimeout(() => {
        // Invoke callback with browser value
        callback(browser);
    }, 5000);
}

// 3. Callback function
function displayBrowserVersion(version) {
    console.log("Browser version is:", version);
}

// 4. Call function and pass callback
checkBrowserVersion(displayBrowserVersion);
