
const happyQuotes = [
    "The best way to cheer yourself is to try to cheer someone else up. – Mark Twain",
    "Happiness is not something ready-made. It comes from your own actions. – Dalai Lama",
    "Count your age by friends, not years. Count your life by smiles, not tears. – John Lennon",
    "Happiness is a warm puppy. – Charles M. Schulz",
    "Happiness is not a goal; it is a by-product. – Eleanor Roosevelt",
    "For every minute you are angry you lose sixty seconds of happiness. – Ralph Waldo Emerson",
    "Happiness is the secret to all beauty; there is no beauty that is attractive without happiness. – Christian Dior",
    "The only way to find true happiness is to risk being completely cut open. – Chuck Palahniuk",
    "Happiness depends upon ourselves. – Aristotle",
    "Think of all the beauty still left around you and be happy. – Anne Frank",
    "Happiness is letting go of what you think your life is supposed to look like and celebrating it for everything that it is. – Mandy Hale",
    "The most important thing is to enjoy your life—to be happy—it's all that matters. – Audrey Hepburn",
    "Happiness is a direction, not a place. – Sydney J. Harris",
    "Happiness radiates like the fragrance from a flower and draws all good things towards you. – Maharishi Mahesh Yogi",
    "Be happy for this moment. This moment is your life. – Omar Khayyam",
];
const sadQuotes = [
    "Tears come from the heart and not from the brain. – Leonardo da Vinci",
    "Every human walks around with a certain kind of sadness. They may not wear it on their sleeves, but it's there if you look deep. – Taraji P. Henson",
    "You cannot protect yourself from sadness without protecting yourself from happiness. – Jonathan Safran Foer",
    "The good times of today are the sad thoughts of tomorrow. – Bob Marley",
    "Heavy hearts, like heavy clouds in the sky, are best relieved by the letting of a little water. – Christopher Morley",
    "Sadness flies away on the wings of time. – Jean de La Fontaine",
    "The walls we build around us to keep sadness out also keeps out the joy. – Jim Rohn",
    "Don't grieve. Anything you lose comes round in another form. – Rumi",
    "Sadness is but a wall between two gardens. – Khalil Gibran",
    "Our sweetest songs are those that tell of saddest thought. – Percy Bysshe Shelley",
    "Every man has his secret sorrows which the world knows not; and often we call a man cold when he is only sad. – Henry Wadsworth Longfellow",
    "Sometimes, you gotta pretend everything is okay. – Unknown",
    "Sadness is also a kind of defense. – Ivo Andrić",
    "Behind every sweet smile, there is a bitter sadness that no one can ever see and feel. – Tupac Shakur",
    "Sadness gives depth. Happiness gives height. Sadness gives roots. Happiness gives branches. – Osho",
];

const stressedQuotes = [
    "Stress is caused by being 'here' but wanting to be 'there.' – Eckhart Tolle",
    "It's not stress that kills us, it is our reaction to it. – Hans Selye",
    "You don’t have to control your thoughts. You just have to stop letting them control you. – Dan Millman",
    "Much of the stress that people feel doesn’t come from having too much to do. It comes from not finishing what they started. – David Allen",
    "Sometimes the most productive thing you can do is relax. – Mark Black",
    "Take rest; a field that has rested gives a bountiful crop. – Ovid",
    "Rule number one is, don’t sweat the small stuff. Rule number two is, it’s all small stuff. – Robert Eliot",
    "Within you, there is a stillness and a sanctuary to which you can retreat at any time and be yourself. – Hermann Hesse",
    "Our anxiety does not come from thinking about the future, but from wanting to control it. – Kahlil Gibran",
    "The greatest weapon against stress is our ability to choose one thought over another. – William James",
    "You must learn to let go. Release the stress. You were never in control anyway. – Steve Maraboli",
    "Almost everything will work again if you unplug it for a few minutes, including you. – Anne Lamott",
    "Sometimes, the most important thing in a whole day is the rest we take between two deep breaths. – Etty Hillesum",
    "Stress is an alarm clock that lets you know you’re attached to something not true for you. – Byron Katie",
    "One of the best pieces of advice I ever got was from a horse master. He told me to go slow to go fast. I think that applies to everything in life. – Viggo Mortensen",
];
const angryQuotes = [
    "For every minute you remain angry, you give up sixty seconds of peace of mind. – Ralph Waldo Emerson",
    "Anger is a wind which blows out the lamp of the mind. – Robert Green Ingersoll",
    "Speak when you are angry, and you’ll make the best speech you’ll ever regret. – Laurence J. Peter",
    "Anger makes you smaller, while forgiveness forces you to grow beyond what you were. – Cherie Carter-Scott",
    "Holding onto anger is like drinking poison and expecting the other person to die. – Buddha",
    "Never go to bed angry, stay up and fight. – Phyllis Diller",
    "Anger doesn’t solve anything. It builds nothing, but it can destroy everything. – Lawrence G. Lovasik",
    "Anger is an acid that can do more harm to the vessel in which it is stored than to anything on which it is poured. – Mark Twain",
    "Where there is anger, there is always pain underneath. – Eckhart Tolle",
    "The greatest remedy for anger is delay. – Seneca",
    "Anger is never without a reason, but seldom with a good one. – Benjamin Franklin",
    "People won’t have time for you if you are always angry or complaining. – Stephen Hawking",
    "Anybody can become angry—that is easy. But to be angry with the right person and to the right degree and at the right time and for the right purpose, and in the right way—that is not within everybody's power and is not easy. – Aristotle",
    "When angry, count to ten before you speak. If very angry, count to one hundred. – Thomas Jefferson",
    "Anger is just one letter short of danger. – Unknown",
];

const quoteContainer = document.getElementById("quote-container");



const happy = document.getElementById('happy');
happy.addEventListener('click', () => {
    const randomHappyQuote = happyQuotes[Math.floor(Math.random() * happyQuotes.length)];
    quoteContainer.innerHTML = randomHappyQuote;
});


const sad = document.getElementById('sad');
sad.addEventListener('click', () => {
    const randomSadQuote = sadQuotes[Math.floor(Math.random() * sadQuotes.length)];
    quoteContainer.innerHTML = randomSadQuote;
});


const angry = document.getElementById('angry');
angry.addEventListener('click', () => {
    const randomAngryQuote = angryQuotes[Math.floor(Math.random() * angryQuotes.length)];
    quoteContainer.innerHTML = randomAngryQuote;
});


const stressed = document.getElementById('stressed');
stressed.addEventListener('click', () => {
    const randomStressedQuote = stressedQuotes[Math.floor(Math.random() * stressedQuotes.length)];
    quoteContainer.innerHTML = randomStressedQuote;
});


const random = document.getElementById('random');
random.addEventListener('click', () => {
    const allQuotes = [...happyQuotes, ...sadQuotes, ...angryQuotes, ...stressedQuotes];
    const randomRandomQuote = allQuotes[Math.floor(Math.random() * allQuotes.length)];
    quoteContainer.innerHTML = randomRandomQuote;
});
