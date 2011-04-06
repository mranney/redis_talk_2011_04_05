// Talking to Redis from node

var redis = require("redis"),
    client = redis.createClient();
    
client.set("some_key", "A value with Unicode: ☕");
client.get("some_key", function (err, reply) {
    // a wise user also checks for errors
    console.log("Reply: " + reply);
});

for (var i = 0; i < 10; i++) {
    client.incr("counter", redis.print);
}
