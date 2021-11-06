let firstSection = ['You can ', 'You should ', 'Never give up!'];
let secondSet = ['achieve it!', 'get the job!', 'do it!'];
let thirdSet = ['shoot for the stars!', 'never give up!', 'believe in yourself!'];

const displayMessage = () => {
    console.log("Welcome to the Inspirational Message Generator\nToday's inspiration message is: ");
    let randMessage = firstSection[Math.floor(Math.random(firstSection.length))];
    if (randMessage === 'You can '){
        console.log(`${randMessage}${secondSet[Math.floor(Math.random(secondSet.length))]}`);
    } else if (randMessage === 'You should ') {
        console.log(`${randMessage}${thirdSet[Math.floor(Math.random(thirdSet.length))]}`)
    } else {
        console.log(randMessage);
    }
}

displayMessage();