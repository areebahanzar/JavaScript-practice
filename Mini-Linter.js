//This code will edit someones paragraph. 

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

//turn story into an array
const storyWords = story.split(' ');
//console.log(storyWords);

//print length of array
console.log('There are '
 + storyWords.length + ' words in your story.');

//filter out unnecessary words from storyWords
const betterWords = storyWords.filter(word => { return !unnecessaryWords.includes(word);});
//console.log(betterWords);

//Let the user know how many times they have used the overusedWords in their storyWords
let value = 0;
for(i=0; i<overusedWords.length;i++)
{
  for(j=0;j<storyWords.length;j++)
  {
    if (overusedWords[i] === storyWords[j])
    {
      value += 1;
    }
  }
}
console.log('You have overused words ' + value + ' times.');

//count how many sentences are in the paragraph
/*
let sentences = 0;
for( let i = 0; i<story.length;i++)
{
  if( story[i] === '.' || story[i]==='!')
  {
    sentences += 1;
  }
}

console.log(sentences);
*/

let sentences = 0;
//try using the forEach method to count how many sentences are in the paragraph! 
storyWords.forEach(word => 
{ 
  if (word.includes('.')||word.includes('!'))
  {
    sentences += 1;
  }
}
  );
console.log( 'There are ' + sentences + ' sentences in your story.');

//log betterWords array to the console as a single sting!
console.log('Here is my story: ');
console.log(storyWords.join(' '));
