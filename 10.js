// Pipelining

var redis = require("redis"),
    client = redis.createClient(),
    messages = [];
    
for (var i = 0; i < 10; i++) {
    messages.push("This is message " + i);
}

messages.forEach(function (msg, num) {
    client.hset("messages", msg, function (err, res) {
        if (num === messages.length - 1) {
            console.log("Wrote last, shutting down.");
            client.quit();
        } else {
            console.log("Wrote " + num);
        }
    });
});
