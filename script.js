const emojis = [
    '🚀',
    '💡',
    '🛠️',
    '🐛',
    '✅',
    '🔥'
];

const topics = [
    'JavaScript',
    'Git',
    'GitHub',
    'Debugging'
];

const starts = [
    'Heute programmierst du mit Fokus',
    'Heute gehst du Schritt für Schritt vor',
    'Heute bleibst du ruhig beim Debugging',
    'Heute denkst du wie ein Entwickler',
    'Heute vertraust du deinem Lernprozess',
    'Heute baust du etwas, das dich weiterbringt'
];

const actions = [
    'löst ein kniffliges Problem',
    'verstehst ein neues Konzept',
    'schreibst sauberen Code',
    'findest einen Fehler und behebst ihn',
    'übst einen wichtigen Workflow',
    'machst aus Theorie echte Praxis'
];

const endings = [
    'und erinnerst dich: Jeder Bug macht dich besser.',
    'und merkst: Übung ist wichtiger als Perfektion.',
    'und siehst: Kleine Fortschritte zählen.',
    'und weißt: Auch Profis googeln Fehlermeldungen.',
    'und bleibst dran, auch wenn es kurz schwierig wird.',
    'und machst heute wieder einen echten Schritt nach vorne.'
];

function getRandomElement(array) {
    const randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}

function generateMessage() {
    const emoji = getRandomElement(emojis);
    const topic = getRandomElement(topics);
    const start = getRandomElement(starts);
    const action = getRandomElement(actions);
    const ending = getRandomElement(endings);

    return `
==============================
Deine Developer Message ${emoji}
==============================

Thema: ${topic}

${start}, ${action} ${ending}

==============================
`;
}

console.log(generateMessage());