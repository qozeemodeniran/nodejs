var events = require('events');
var fs = require('fs');
var eventEmitter = new events.EventEmitter();

// event handler
var eventHandler = function () {
    console.log("I can hear someone screaming");
    fs.writeFile('event.txt', 'Someone is screaming continuosly', function (err) {
        if (err) throw err;
        console.log("File was created");
    });
}

// assign handler to an event
eventEmitter.on('scream', eventHandler);

// fire 'scream' event
eventEmitter.emit('scream');