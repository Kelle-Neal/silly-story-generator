
const customName = document.getElementById('customName');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = 'It was 94 fahrenheit outside, so :insertX: went for a walk. When they got to :insertY:, they stared in horror for a few moments, then :insertZ:. Bob saw the whole thing, but was not surprised — :insertX: weighs 300 pounds, and it was a hot day.'

const insertX = [
    'Willy the Goblin', 
    'Big Daddy', 
    'Father Christmas'
];

const insertY = [
    'the soup kitchen', 
    'Disneyland', 
    'the White house']
    ;

const insertZ = [
    'spontaneously combusted', 
    'melted into a puddle on the sidewalk', 
    'turned into a slug and crawled away'
];


randomize.addEventListener('click', result);

function result() {
    let newStory = storyText
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertX',xItem);
    newStory = newStory.replaceAll(':insertY',yItem);
    newStory = newStory.replaceAll(':insertZ',zItem);

  if(customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replaceAll('Bob',customName);
  }

  if(document.getElementById("uk").checked) {
    const weight = '${Math.round(300/14)} stone';
    const temperature =  '${Math.round((94-32)*(5/9))} centigrade';
    newStory = newStory.replaceAll('300 pounds',weight);
    newStory = newStory.replaceAll('94 fahrenheit',temperature);

  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
