'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Turtle Facts';

/**
 * Array containing turtle facts.
 */
var FACTS = [
    "Turtles are reptiles.",
    "Turtles have a hard shell that protects them.",
    "The upper part of a turtle's shell is called a 'carapace'.",
    "The lower part of a turtle's shell is called a 'plastron'.",
    "Turtles have existed for almost 215 million years.",
    "Turtles are cold blooded.",
    "The largest species of turtle is the leatherback sea turtle.",
    "In some species of turtle temperature can determine the sex of a developing egg.",
    "Some turtles lay eggs in the sand and leave them to hatch on their own. The young turtles make their way to the top of the sand and scramble to the water while trying to avoid predators.",
    "Sea turtles have specialized glands which help remove salt from the water they drink.",
    "Many turtle species are endangered.",
    "Turtles belong to the scientific order Testudines.",
    "There are 327 known species of turtles alive today.",
    "Turtles are classified as amniotes.",
    "In Great Britain, the word turtle is used for sea-dwelling species, but not for tortoises.",
    "The term tortoise usually refers to any land-dwelling, non-swimming chelonian.",
    "The word chelonian is popular among veterinarians, scientists, and conservationists working with these animals as a catch-all name for any member of the superorder Chelonia, which includes all turtles living and extinct, as well as their immediate ancestors.",
    "Terrapin is used to describe several species of small, edible, hard-shell turtles, typically those found in brackish waters, and is an Algonquian word for turtle.",
    "Although many turtles spend large amounts of their lives underwater, all turtles and tortoises breathe air, and must surface at regular intervals to refill their lungs.",
    "Like other reptiles, turtles lay eggs that are slightly soft and leathery.",
    "Paleontologists from North Carolina State University have found the fossilized remains of the world's largest turtle in a coal mine in Colombia.",
    "I like turtles."
];

exports.handler = function(event, context, callback) {
    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);
    alexa.execute();
};

var handlers = {
    'LaunchRequest': function () {
        this.emit('GetFact');
    },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        // Get a random turtle fact from the turtle facts list
        var factIndex = Math.floor(Math.random() * FACTS.length);
        var randomFact = FACTS[factIndex];

        // Create speech output
        var speechOutput = "Here's your fact: " + randomFact;

        this.emit(':tellWithCard', speechOutput, SKILL_NAME, randomFact)
    },
    'AMAZON.HelpIntent': function () {
        var speechOutput = "You can say tell me a turtle fact, or, you can say exit... What can I help you with?";
        var reprompt = "What can I help you with?";
        this.emit(':ask', speechOutput, reprompt);
    },
    'AMAZON.CancelIntent': function () {
        this.emit(':tell', 'Goodbye!');
    },
    'AMAZON.StopIntent': function () {
        this.emit(':tell', 'Goodbye!');
    }
};
