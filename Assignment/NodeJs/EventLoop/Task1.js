//Log order of setTimeout(fn, 0) vs console.log()
setTimeout(() => {
  console.log('Hello');
}, 0);
console.log('Hey');

/*
    console.log()->callStack->answer on console
    setTimout->callbackQueue->callStack->then Log
*/

// Output: 
// Hey 
// Hello