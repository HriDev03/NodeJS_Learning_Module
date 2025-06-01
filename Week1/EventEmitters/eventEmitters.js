//INTRO 
/*
Events and Event Emitters

Event : Anything that happens at a time is an event
Writing logic that would be executed based on events
 
writing logic based On events
-> when someone joined a chatroom some stuff should happen .
-> when someone leaves, when someone joins

we can not write a code that runs infinitely , We create and attach events

every event is attached with one or more event listeners
when that event happens those event listeners will be executed in sequential

Events in Node Js are given to us by default
event emitter object/class is given to us :  we can create our event , we can attatch event listeners to it a complete event driven programming language . 

used widely -> when we are connect to db , error events ,  when event happens that event listener logic will be executed

how event is created, how we can attach listeners , diff type of listeners , how listener execution is there



//creating a new event emitter object

with this event emitter obj we can 
-> emit the events
-> you can listen to the events
-> Add event listeners conditionally
-> we can remove event listeners
-> Add event listeners which will be executed only once
-> list of all events
-> get list of all event listeners
*/

//requiring evenet module from node js
// const EventEmitter= require('events');

// const ChatRoomEventEmitter=new EventEmitter();


// Listener is added even before emiting the event

//will run everytime when an event happens
// ChatRoomEventEmitter.on("Joined", function(data){
// 	console.log(`${data} joined the chat`)
// })

// //will run only once
// chatRoomEventEmitter.once("Joined",function(data){
// 	console.log("Welcome to the group",data):
// 	console.log("this will be executed only once")
// })

// // adding event listeners to the top 
// .prependListener

// // a new person joined the chat room

// function newPersonJoined(name){
// 	// we will validate their credentials 

// 	//then at last emit these event
// 	// name of the person who joined

// 	ChatRoomEventEmitter.emit("Joined",name)

// }


// function main(){
	
// 	const names=['Ironman','thor','hulk','captainAmerica'];

// 	setInterval (func(){
		
// 		const randomIndex = Math.floor(Math.random())*names.length()+1;

// 		//when someone logged in--->emitting the event
// 		newPersonJoined(names[randomIndex]);
	
// 	},2000)

// }
// main();




// // class allows us to Emmit Events
// // we can listen to these events and can do stuff based on what events were fired
// // we can listen to events

// // Hey this event happened and do the specified functions

// const EventEmitter=require("events");
// class myEmitter extends EventEmitter{

// }

// //predefined function
// /* function ListenForData(data){
//      console.log(`predefined function ${data}`);
   
// }*/
// var emitter=new myEmitter();

// //adding event listeners
// // name of event, callback Func
// // emitter
// //     .on("message",()=>{
// //         console.log("A message is emitted")
// //     })
// //     .once("message",()=>{
// //         console.log("This is not the right message");
// //     })
// //     .on("event",()=>{
// //         console.log("An event just occured");
// //     })
// //     .addListener("message",()=>{
// //        console.log( "added with add event listener");
// //     }) // same as on function 

//     // .on("data",ListenForData);

//     // .on("data",function(a,b){
//     //     console.log(`Anonymous function ${a} , ${b}`);
//     // })
 

// emitter.once("oncee",()=>{
//     console.log("will work only for the first time")
// })

// // emitter.setMaxListeners(1);
// //only one event listener per a particular event

// // emitter.prependListener("prepend",()=>{
// //     console.log("prepended to the top !");
// // })

// function prepended(){
//     console.log("prepended to the top  !");
// }

// emitter.on("prepend",prepended);

// // emitter.prependOnceListener("prepend",)

// // will stop a event listener to listen for a particular event
// /* When we want to remove a listener we need to give its name IT IS SAME AS of  */

// // emitter.emit("data","This is my message That I passed","Ram ram")
// setInterval(()=>{
//     emitter.emit("oncee")
//     emitter.emit("prepend");
// },1000)



// setTimeout(()=>{
//     emitter.removeListener("prepend",prepended);
// },4000)

// listeners(eventName)==> array of listeners of event
// listenerCount(eventName)==> number of listeners for an event
// eventNames()=>array of eventNames

// myEmitter.on('log', () => console.log('Second')); 4th
// myEmitter.on('log', () => console.log('Second')); 3rd
// myEmitter.prependListener('log', () => console.log('First')); 2nd
// myEmitter.prependListener('log', () => console.log('Thrid')); 1st
//-------------------------------------------------------------------------------------------------
//Practice

// Chat Room Example Of Event Emitters
// CHAT NEW ROOM
// ->NEW MESSAGE
// ->PERSON JOINED THE CHAT
// ->REPLY TO THE MESSAGE
// ->REPLY TO THE CHAT
// ->PERSON LEFT THE CHAT

// Reqiring the EventEmitter from the event modules

const EventEmitter=require('events');

// now creating an event emitter object i.e ChatRoomEventEmitter

const ChatRoomEventEmitter = new EventEmitter();

// connecting the event to the event listeners

// 1 : A person has joined
ChatRoomEventEmitter
	.on("userJoined", (user) => {
    	console.log(`${user} joined the chat room.`);
	})
	.prependListener("userJoined", (user) => {
    	console.log(`${user} is attempting to join...`);
	});

//2 : a person has left

ChatRoomEventEmitter
  .on('Left', (user) => {
      console.log(`${user} left the chat room.`);
  })
  .on('Left', (user) => {
      console.log(`${user} can no longer send messages.`);
  });


// 3 : new message in the group
ChatRoomEventEmitter.on("newMessage",({userName,message}) => {
    console.log(`${userName}:${message}`);
});

// 4 :  message replied in the group
ChatRoomEventEmitter.on("replyMessage",({userName,message,reply, repliedTo}) => {
    console.log(`${userName} replied to ${repliedTo}:${message} reply :${reply}`);
});

//5 : user left
ChatRoomEventEmitter.once('userLeft', (user) => {
    console.log(`${user} has left.`);
});

//6: error wile sending message (network error)

ChatRoomEventEmitter.on('error',(err)=>{
	console.log(` came across an error while sending message :` ${err.message});
}

// firing events for different use cases

chatRoom.emit('userJoined', 'Ironman');

chatRoom.emit('newMessage', { user: 'Ironman', message: 'Hello, Avengers!' });

chatRoom.emit('replyMessage', {user: 'Thor', originalMessage: 'Hello, Avengers!', reply:'We are here!'});

// run once
chatRoom.emit('userLeft', 'Ironman');

// Won’t be shown because `once` was used
chatRoom.emit('userLeft', 'Spiderman'); 

chatRoom.emit('error', new Error('Server connection lost'));

chatRoom.removeListener('newMessage', handleNewMessage);
console.log('Removed newMessage listener');

ChatRoomEventEmitter.removeAllListeners('newMessage');
ChatRoomEventEmitter.removeAllListeners('Left');


console.log('Registered Events:', ChatRoomEventEmitter.eventNames());

console.log('Listeners for "Left":', ChatRoomEventEmitter.listenerCount('Left'));

console.log('Listeners for "newMessage":', 
ChatRoomEventEmitter.listenerCount('newMessage'));

// This will not be logged because listener was removed
chatRoom.emit('newMessage', { user: 'Hulk', message: 'Smash!' });








///////////////////////////////////////// IMPROVED ///////////////////////////////////////

// Reqiring the EventEmitter from the event modules
const EventEmitter = require('events');

// Now creating an event emitter object i.e ChatRoomEventEmitter
const ChatRoomEventEmitter = new EventEmitter();

// Connecting the event to the event listeners

// 1 : A person has joined
ChatRoomEventEmitter

  .on("userJoined", (user) => {
    console.log(`${user} joined the chat room.`);
  })

  .prependListener("userJoined", (user) => {
    console.log(`${user} is attempting to join...`);
  });


// 2 : A person has left
ChatRoomEventEmitter

  .on('Left', (user) => {
    console.log(`${user} left the chat room.`);
  })

  .on('Left', (user) => {
    console.log(`${user} can no longer send messages.`);
  });

// 3 : New message in the group

ChatRoomEventEmitter.on("newMessage", ({ userName, message }) => {
  console.log(`${userName}: ${message}`);
});


// 4 : Message replied in the group

ChatRoomEventEmitter.on("replyMessage", ({ userName, message, reply, repliedTo }) => {
  console.log(`${userName} replied to ${repliedTo}: ${message} reply: ${reply}`);
});


// 5 : User left (executed only once)

ChatRoomEventEmitter.once('userLeft', (user) => {
  console.log(`${user} has left.`);
});

// 6 : Error while sending message (network error)

ChatRoomEventEmitter.on('error', (err) => {
  console.log(`Came across an error while sending message: ${err.message}`);
});

// --- Custom handler for removeListener example ---

function handleNewMessage({ userName, message }) {
  console.log(`Custom Handler: ${userName}: ${message}`);
}

// Add the custom handler listener for 'newMessage'

ChatRoomEventEmitter.on('newMessage', handleNewMessage);


// --- Firing events for different use cases ---

// 1. User joined

ChatRoomEventEmitter.emit('userJoined', 'Ironman');

// 2. New message

ChatRoomEventEmitter.emit('newMessage', { userName: 'Ironman', message: 'Hello, Avengers!' });

// 3. Reply to a message

ChatRoomEventEmitter.emit('replyMessage', { userName: 'Thor', originalMessage: 'Hello, Avengers!', reply: 'We are here!' });

// 4. User leaves

ChatRoomEventEmitter.emit('userLeft', 'Ironman');

// Won’t be shown because `once` was used

ChatRoomEventEmitter.emit('userLeft', 'Spiderman');

// 5. Error event

ChatRoomEventEmitter.emit('error', new Error('Server connection lost'));

// Remove the custom listener for 'newMessage'

ChatRoomEventEmitter.removeListener('newMessage', handleNewMessage);

console.log('Removed newMessage listener');

// Remove all listeners for 'newMessage' and 'Left'

ChatRoomEventEmitter.removeAllListeners('newMessage');

ChatRoomEventEmitter.removeAllListeners('Left');



// --- Event Stats ---
console.log('\nRegistered Events:', ChatRoomEventEmitter.eventNames());
console.log('Listeners for "Left":', ChatRoomEventEmitter.listenerCount('Left'));
console.log('Listeners for "newMessage":', ChatRoomEventEmitter.listenerCount('newMessage'));


// This will not be logged because the listener was removed
ChatRoomEventEmitter.emit('newMessage', { user: 'Hulk', message: 'Smash!' });


/////////////////////////////// CHAT ROOM USING CLASS BASED EVENT EMMITTERS ///////////////

class MyEventEmitter{

	constructor(){
		this.event_listeners={};
	}
	
	//register the listener for event
	// jab yeh event aaye ga toh iss lister ko call karna
	// kon se event ke liye kon se listeners available hai
	
	on(event,listener){
		// function ----> array of event listeners
		
		// if no event already make it in an empty array
		if(!this.event_listeners[event]){
			this.event_listeners=[];
		}
		this.event_listeners[event].push(listener);
		return true;
	}
	
	// starting the event
	emit(event,...args){
		// if there are no listeners
		if(!this.event_listeners[event]){
			return false;	
		}
		const listeners=this.event_listeners[event];
		listeners.forEach(listener=>listener(...args));
	}	
	
	off(event,listener){
		// if no event already make it in an empty array
		if(!this.event_listeners[event]){
			this.event_listeners=[];
		}
		
		// finding index
		const index=this.event_listeners[event].indexof(listener);

		if(index<0){
			return false;
		}
		this.event_listeners[event].splice(index,1);
		return true;
		
		
	}

	once(event,listener){

		const wrapperFn=(...args)=>{
			listener(...args);
			this.off(event,wrapperFn);
		};
		
		this.on(event,wrapperFn);
		return true;	
	
	}

}

const e= new MyEventEmitter();

const sendWhatsApp = (username)=>console.log('whatsApp to',username));

e.on("user:signup",(username)=>console.log('User Signup',username));
e.on("user:signup",(username)=>console.log('sending email to',username));
e.once("user:signup",sendWhatsApp);
e.on("user:logOut",(username)=>console.log('User Logged Out',username));

e.emit("user:signup","Hri");
e.emit("user:signup","Hri1");

e.off("user:signup",sendWhatsApp)

e.emit("user:signup","Hri2");
e.emit("user:logOut","Hri")


///////////////////////////////////////////////////////// CLASS BASED LOGGER   ///////////

const EventEmitter = require("events");

// since we extended this it will be able to do stuff just like the event emitter class
const MyLogger extends EventEmitter{
	
	constructor(){
		super();// calling the parent class constructor
	}

	// Method to log a message
  	log(message) {
    		console.log(message);
    		// Emit an event 'messageLogged' whenever a message is logged
    		this.emit('messageLogged', { message });
  	}
}

// Create an instance of MyLogger class
const logger = new MyLogger();

logger.on('messageLogged',(data)=>{
	console.log("data received",data)
});


// Call the log method, which will trigger the 'messageLogged' event
logger.log('Hello, EventEmitter!');


////////////////////////////// CLASS BASED CHAT APP -> SINGLE INSTANCE //////////////////////////////////////
const EventEmitter= require(évents);

class ChatSim extends EventEmitter{
	//methods

	1)sending message
	sendMessage(user,message){
		console.log(`${user}:${message}`);
		//once message is logged emit an event to tell message is received
		this.emit('messageReceived',{user,message});
	}	
}

//Will keep the history of are chat
class MessageLogger{
	constructor(){
		this.chatRoom=new ChatSim();
		this.chatRoom.on('messageReceived',(data)=>this.recordmessage(data));	
	}
	
	recordmessage(data){
		 console.log(`${data.user} sent a message: "${data.message}"`);
	}
}

class NotificationService {
  constructor() {
    this.chatRoom = new ChatSimulator(); 

    // Listen for the 'messageReceived' event and send a notification
    this.chatRoom.on('messageReceived', (data) => this.notifyUser(data));

  }

  // Method to send a notification to the user
  notifyUser(data) {
    console.log(`Notification: New message from ${data.user} - "${data.message}"`);
  }
}

// Test the system
const messageLogger = new MessageLogger(); // Log messages
const notificationService = new NotificationService(); // Notify users

// Simulate sending messages
const chatSimulator = new ChatSimulator(); // Instance of ChatSimulator to send messages
chatSimulator.sendMessage('Alice', 'Hello everyone!');
chatSimulator.sendMessage('Bob', 'Hi Alice! How are you?');
chatSimulator.sendMessage('Alice', 'I am doing great, thanks for asking!');
//  ---------------------------------------------------------------------------------------------------------------------------------------------------------------------
// -----------------------------------------------------------------------------------------------------------------------------------------------------------------------

// EventEmitter Module

const EventEmitter = require('events');

// ChatSim Class (Handles sending and receiving messages)

class ChatSim extends EventEmitter {
    sendMessage(user, message) {
        console.log(`${user}: ${message}`);
        // Once the message is logged, emit an event that the message is received
        this.emit('messageReceived', { user, message });
    }

}

// MessageLogger Class (Handles logging of messages)

class MessageLogger {

    constructor(chatRoom) {

        this.chatRoom = chatRoom;

        // Listen for the 'messageReceived' event and log the message
        this.chatRoom.on('messageReceived', (data) => this.recordMessage(data));

    }

    // Record the message
    recordMessage(data) {
        console.log(`${data.user} sent a message: "${data.message}"`);
    }
}

// NotificationService Class (Handles notifying users)

class NotificationService {

    constructor(chatRoom) {

        this.chatRoom = chatRoom;
        // Listen for the 'messageReceived' event and send a notification
        this.chatRoom.on('messageReceived', (data) => this.notifyUser(data));

    }

    // Method to send a notification to the user
    notifyUser(data) {
        console.log(`Notification: New message from ${data.user} - "${data.message}"`);
    }
}

// Test the system
const chatSimulator = new ChatSim(); // Single instance of ChatSim

// Create the services that will listen to the same chat room
const messageLogger = new MessageLogger(chatSimulator); // Log messages

const notificationService = new NotificationService(chatSimulator); // Notify users

// Simulate sending messages
chatSimulator.sendMessage('Alice', 'Hello everyone!');
chatSimulator.sendMessage('Bob', 'Hi Alice! How are you?');
chatSimulator.sendMessage('Alice', 'I am doing great!');
