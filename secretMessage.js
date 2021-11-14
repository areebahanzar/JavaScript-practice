//transforming arrays using many JS methods

let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

//remove last string of array
secretMessage.pop();

//double check by looking at length
console.log(secretMessage.length);

//add two strings to the end of the array
secretMessage.push('to', 'Program');

//change an element in the array
secretMessage[7] = 'right';

//remove first element
secretMessage.shift();

//add new first element
secretMessage.unshift('Programming');

//remove these elements and replace with a string
secretMessage.splice(6,5,'know');
console.log(secretMessage);
