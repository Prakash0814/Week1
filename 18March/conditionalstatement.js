// Function to launch browser
function launchBrowser(browserName) {
    if (browserName === "chrome") {
        console.log("Launching Chrome browser");
    } else {
        console.log("Launching other browser");
    }
}
launchBrowser("chrome");

// Function to run tests
function runTests(testType) {
    switch (testType) {
        case "smoke":
            console.log("Smoke tests");
            break;
        case "sanity":
            console.log("Sanity tests");
            break;
        case "regression":
            console.log("Regression tests");
            break;
        default:
            console.log("default tests");
    }
}

runTests("Sanity");
