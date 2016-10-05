'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Bicycle Facts';

/**
 * Array containing bicycle facts.
 */
var FACTS = [
  "The first human powered land vehicle was constructed by Giovanni Fontana in 1418.",
  "The term 'bicycle' first entered into popular usage in France in the 1860s.",
  "The longest 'tandem' bike ever built was almost 67 feet long and could seat 35.",
  "The smallest adult bicycle ever created had wheels made from silver dollars.",
  "Unicycling is a mandatory subject at St. Helen's School in Newbury, Ohio.",
  "Half of all the parts of a typical bicycle are in the chain.",
  "The slow cycling record was set by Tsugunobu Mitsuishi of Japan in 1965 when he stayed stationary for 5 hours, 25 minutes.",
  "The fastest speed ever recorded on a bicycle was attained by American Olympic Cyclist and Ironman triathlon competitor John Howard, when he reached 152.2 mph in 1985.",
  "Lance Armstrong's heart is one-third larger than average.",
  "There are roughly one billion bicycles in the world (about twice as many as motor vehicles).",
  "An estimated 130 million bicycles were produced worldwide in 2007 (more than twice the 52 million cars produced).",
  "According to Transportation Alternatives, 10% of New York City's work force--approximately 65,000 humans--commute by bicycle.",
  "A study found almost three-quarters of fatal crashes (74%) in NYC involved a head injury and nearly all bicyclists who died (97%) were not wearing a helmet. Helmets have been found to be 85% effective in preventing head injury.",
  "Research has shown that tripling the number of bike riders on the street cuts motorist-bicyclist crashes in half.",
  "Bicycles currently displace over 238 million gallons of gasoline per year, by replacing car trips with bicycle trips.",
  "Bicycles use 2% as much energy as cars per passenger-kilometer, and cost less than 3% as much to purchase.",
  "Orville and Wilbur Wright, the brothers who built the first flying airplane, operated a small bike repair shop in Dayton, Ohio. They used their workshop to build the 1903 Wright Flyer.",
  "There are over a half billion bicycles in China. Bikes were first brought to China in the late 1800s.",
  "The Tour de France is one of the most famous bicycle races in the world. Established in 1903, it is considered to be the biggest test of endurance out of all sports."
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
        // Get a random bicycle fact from the bicycle facts list
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
