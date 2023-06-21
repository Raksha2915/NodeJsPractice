const events=require('events');
const eventEmitter=new events.EventEmitter();

//create an event handler
const myEventHandler=()=>{
    console.log("I can hear!");
}

//Assign the event handler to an event
eventEmitter.on("scream",myEventHandler);

//Fire the 'scream' event
eventEmitter.emit("scream");