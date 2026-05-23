const starts = [
    'Heute programmierst du mit Fokus',
    'Heute gehst du Schritt für Schritt vor',
    'Heute bleibst du ruhig beim Debugging',
    'Heute denkst du wie ein Entwickler'
];

const actions = [
    'löst ein kniffliges Problem',
    'verstehst ein neues Konzept',
    'schreibst sauberen Code',
    'findest einen Fehler und behebst ihn'
];

const endings = [
    'und erinnerst dich: Jeder Bug macht dich besser.',
    'und merkst: Übung ist wichtiger als Perfektion.',
    'und siehst: Kleine Fortschritte zählen.',
    'und weißt: Auch Profis googeln Fehlermeldungen.'
];

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateMessage() {
    const start = getRandomElement(starts);
    const action = getRandomElement(actions);
    const ending = getRandomElement(endings);

    return `${start}, ${action} ${ending}`;
}

console.log(generateMessage());