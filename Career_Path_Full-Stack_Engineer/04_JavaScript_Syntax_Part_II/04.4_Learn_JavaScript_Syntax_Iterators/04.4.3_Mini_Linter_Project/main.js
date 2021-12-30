let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';
let overusedWords = ['really', 'very', 'basically'];
let unnecessaryWords = ['extremely', 'literally', 'actually'];
console.log(story);
console.log(overusedWords);
console.log(unnecessaryWords);

const storyWords = story.split(' ');
console.log('There are', storyWords.length, 'words in the story.');

const betterWords = storyWords.filter(word => {
    return !unnecessaryWords.includes(word);
});
console.log('There are', betterWords.length, 'words in the story that are not unnecessary words.');

const countSentences = storyWords.reduce((acc, currVal) => {
    if (currVal.endsWith('.') || currVal.endsWith('!')) {
        return acc + 1;
    } else {
        return acc;
    }
}, 0);
console.log('There are', countSentences, 'sentences in the story.');

// create a function that logs with some formatting the word count, the sentence count and the number of times each overused word appears
const logCounts = (wordCount, sentenceCount, overusedWords) => {
    console.log('There are', wordCount, 'words in the story.');
    console.log('There are', sentenceCount, 'sentences in the story.');
    overusedWords.forEach(word => {
        console.log('\"' + word + '\" appears', storyWords.filter(w => w === word).length, 'times in the story.');
    });
}
logCounts(betterWords.length, countSentences, overusedWords);

console.log(betterWords.join(' '));
