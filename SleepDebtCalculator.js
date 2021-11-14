//GOAL OF PROGRAM: determine how many hours of sleep you got each night of the week.


//helper function for getActualSleepHours
const getSleepHours = day =>
{
  //make all input lowercase
  day = day.toLowerCase();
  
  //assign a random number of hours to each day range (0 - 8)
  switch(day)
  {
    case 'monday':
      return Math.floor(Math.random()*9);
    case 'tuesday':
      return Math.floor(Math.random()*9);
    case 'wednesday':
      return Math.floor(Math.random()*9);
    case 'thursday':
      return Math.floor(Math.random()*9);
    case 'friday':
      return Math.floor(Math.random()*9);
    case 'saturday':
      return Math.floor(Math.random()*9);
    case 'sunday':
      return Math.floor(Math.random()*9);
  }
  
}


//how many hours you actually slept
const getActualSleepHours = () =>
{
  let total = (getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday'));

  return total;
}


console.log('This is how many hours you actually slept: ' + getActualSleepHours());


//ideal sleep hours
const getIdealSleepHours = () =>
{
  let idealHours = 8;
  return idealHours * 7;
}

console.log('This is the ideal amount of hours slept: ' + getIdealSleepHours());

//calculate sleep debt
const calculateSleepDebt = () =>
{
  let actualSleepHours = getActualSleepHours();
  let idealSleepHours = getIdealSleepHours();

  //calculations
  if(actualSleepHours === idealSleepHours)
  {
    console.log('You got the perfect amount of sleep!');
  }
  else if (actualSleepHours > idealSleepHours)
  {
     console.log('Too much sleep!!');
  }
  else 
  {      
    console.log('Sleep more!!!');
  }
}


calculateSleepDebt();
