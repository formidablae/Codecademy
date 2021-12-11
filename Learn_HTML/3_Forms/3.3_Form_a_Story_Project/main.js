// Grab values from the submitted form in the URL
const words = new URLSearchParams(window.location.search);

// Cleans up and capitalizes the names of the animals
function cleanAndCap(str) {
    if (!str) return null
    let temp = str.trim()
    return temp[0].toUpperCase() + temp.substring(1)
}

// Assigning the variables with values used in the story
const firstAnimal = cleanAndCap(words.get('animal-1'));
const secondAnimal = cleanAndCap(words.get('animal-2'));

const answer = cleanAndCap(words.get('answer'));
const conjunction = answer === 'Yes' ? 'and' : 'but';

const speed = words.get('speed');
const adj1 = words.get('adj-1');

const thirdAnimal = cleanAndCap(words.get('animal-3'));
const quote = words.get('quote');

const verb1 = words.get('verb-1');
const num1 = words.get('num-1');
const message = words.get('message');

// The string containing HTML and text which will populate the story.html page
const story = `<p>A <span class="word" title="id: animal-1">${firstAnimal}</span> was making fun of the <span class="word" title="id: animal-2">${secondAnimal}</span> one day for being so slow.</p>

<p>"Do you ever get anywhere?" he asked with a mocking laugh.</p>

<p>"<span class="word" title="id: answer">${answer}</span>," replied the <span class="word" title="id: animal-2">${secondAnimal}</span>, "${conjunction} I get there <span class="word" title="id: speed">${speed}</span> than you think. I'll run you a race and prove it."</p>

<p>The <span class="word" title="id: animal-1">${firstAnimal}</span> was much <span class="word" title="id: adj-1">${adj1}</span> at the idea of running a race with the <span class="word" title="id: animal-2">${secondAnimal}</span>, but for the fun of the thing he agreed. So the <span class="word" title="id: animal-3">${thirdAnimal}</span>, who had consented to act as judge, marked the distance yelled, "<span class="word" title="id: quote">${quote}</span>".</p>

<p>The <span class="word" title="id: animal-1">${firstAnimal}</span> was soon far out of sight, and to make the <span class="word" title="id: animal-2">${secondAnimal}</span> feel very deeply how ridiculous it was for him to try a race with a <span class="word" title="id: animal-1">${firstAnimal}</span>, he went off the course to practice <span class="word" title="id: verb-1">${verb1}</span> for <span class="word" title="id: num-1">${num1}</span> hours until the <span class="word" title="id: animal-2">${secondAnimal}</span> should catch up.</p>

<p>The <span class="word" title="id: animal-2">${secondAnimal}</span> meanwhile kept going slowly but steadily, and, after a time, passed the place where the <span class="word" title="animal-1">${firstAnimal}</span> was <span class="word" title="id: verb-1">${verb1}</span>. The <span class="word" title="id: animal-1">${firstAnimal}</span> was so caught up in <span class="word" title="id: verb-1">${verb1}</span>; and when at last he did stop, the <span class="word" title="id: animal-2">${secondAnimal}</span> was near the goal. The <span class="word" title="id: animal-1">${firstAnimal}</span> now ran his swiftest, but he could not overtake the <span class="word" title="id: animal-2">${secondAnimal}</span> in time.</p>`;

// Grabbing the title element
const title = document.getElementById('title');
// Populating the title element with text
title.innerHTML = `The <span class="word" title="id: animal-1">${firstAnimal}</span> And The  <span class="word" title="id: animal-2">${secondAnimal}</span>`;

// Grabbing the story element
const storyEl = document.getElementById('story');
// Populating the story element with the value of the story variable
storyEl.innerHTML = story;

// Grabbing the moral-message element
const moralMessage = document.getElementById('moral-message');
// Populating the moral-message element with text
moralMessage.innerHTML = `<span class="italics" title="id: message">"${message}"</span>`;
