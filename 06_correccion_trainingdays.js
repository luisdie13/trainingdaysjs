const getRandEvent = () => {
    const random = Math.floor(Math.random() * 3); // random ahora tiene ámbito local
    if (random === 0) {
        return 'Marathon';
    } else if (random === 1) {
        return 'Triathlon';
    } else {
        return 'Pentathlon';
    }
};

const getTrainingDays = event => {
    let days; // days se declara fuera de los bloques if/else if
    if (event === 'Marathon') {
        days = 50;
    } else if (event === 'Triathlon') {
        days = 100;
    } else {
        days = 200;
    }
    return days;
};

const name = 'Nala'; // name ahora tiene un ámbito más amplio
const logEvent = event => {
    console.log(`${name}'s event is: ${event}`);
};

const logTime = days => {
    console.log(`${name}'s time to train is: ${days} days`);
};

const event = getRandEvent();
const days = getTrainingDays(event);

logEvent(event);
logTime(days);