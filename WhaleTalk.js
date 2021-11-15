//take any phrase and translate it to whale talk!

//phrase I want to translate. 
const input = "My name is Areebah and I want to speak whale!";

let vowels = ['a','e','i','o','u'];//whales only talk on vowels

let resultArray = []; //place to store vowels from input string

//iterate through input and see if it matches a vowel from the array. If it does add those vowels to the result array. 
for (let i=0; i<input.length; i++)
{
  for (let j=0; j<vowels.length; j++)
  {
    if(input[i] === vowels[j])
    {
      resultArray.push(vowels[j]);
      if(input[i] === 'e' || 'u') //the letters u and e are doubled in whale tongue.
      {
        resultArray.push(input[i]);
      }
    }

  }
}

//print your whale phrase!
console.log(resultArray.join('').toUpperCase());
