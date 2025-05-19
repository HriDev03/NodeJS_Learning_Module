
const EventEmitter=require('events');
const ChatRoomEventEmitter = new EventEmitter();

ChatRoomEventEmitter
    .on("userJoined", (user) => {
    	console.log(`${user} joined the chat room.`);
	})
	.prependListener("userJoined", (user) => {
    	console.log(`${user} is attempting to join...`);
	});

//event chaining
ChatRoomEventEmitter
    .on('Left', (user) => {
      console.log(`${user} left the chat room.`);
    })
    .on('Left', (user) => {
      console.log(`${user} can no longer send messages.`);
    });


ChatRoomEventEmitter.on("newMessage",({userName,message}) => {
    console.log(`${userName}:${message}`);
});

ChatRoomEventEmitter.on("replyMessage",({userName,message,reply, repliedTo}) => {
    console.log(`${userName} replied to ${repliedTo}:${message} reply :${reply}`);
});

//ek hii baar chalega
ChatRoomEventEmitter.once('userLeft', (user) => {
    console.log(`${user} has left.`);
});


ChatRoomEventEmitter.on('error',()=>{
	console.log("error aa gaya");
})


chatRoom.emit('userJoined', 'Ironman');
chatRoom.emit('newMessage', { user: 'Ironman', message: 'Hello, Avengers!' });
chatRoom.emit('replyMessage', {user: 'Thor', originalMessage: 'Hello, Avengers!', reply:'We are here!',user2:'IronMan'});
chatRoom.emit('userLeft','Ironman');
chatRoom.emit('userLeft', 'Spiderman'); 
chatRoom.emit('error');
