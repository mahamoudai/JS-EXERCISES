// non-blocking
function delayNonBlocking(callback) {
    setTimeout(() => {
        callback("Non-blocking delay completed!");
    }, 2000);
}

console.log("Start non-blocking delay...");
delayNonBlocking((message) => {
    console.log(message);
});
console.log("This message is not blocked and runs immediately.");

