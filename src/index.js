'use strict';
var Alexa = require('alexa-sdk');

var APP_ID = undefined; //OPTIONAL: replace with "amzn1.echo-sdk-ams.app.[your-unique-value-here]";
var SKILL_NAME = 'Modern Art Facts';

/**
 * Array containing modern art facts.
 */
var FACTS = [
  "Modern art is a general term, used for most of the artistic production from the late 19th century until approximately the 1970s.",
  "Modern art began as a Western movement, particularly in painting and printmaking, and then expanding to other visual arts, including sculpture and architecture in the mid-19th century.",
  "The term modern art is usually associated with art in which the traditions of the past have been thrown aside in a spirit of experimentation.",
  "More recent artistic production is often called Contemporary art or Postmodern art.",
  "Henri Matisse's two versions of The Dance marked a key point in his career and in the development of modern painting.",
  "Pablo Picasso made his first cubist paintings based on Cézanne's idea that all depiction of nature can be reduced to three solids: cube, sphere and cone.",
  "Analytic cubism was jointly developed by Pablo Picasso and Georges Braque, exemplified by Violin and Candlestick, Paris, from about 1908 through 1912.",
  "The notion of modern art is closely related to Modernism.",
  "The date perhaps most commonly identified as marking the birth of modern art is 1863, the year that Édouard Manet showed his painting Le déjeuner sur l'herbe in the Salon des Refusés in Paris.",
  "The pioneers of modern art were Romantics, Realists and Impressionists.",
  "The Impressionists argued that people do not see objects but only the light which they reflect, and therefore painters should paint in natural light (en plein air) rather than in studios and should capture the effects of light in their work.",
  "By the beginning of the 1872, The name Impressionism had emerged as a core label of this style. “Impressionism” was derived from the tile of a Claude Monet painting: Impression, soleil levant.",
  "Les Nabis is a modern art movement which was considered to be on the cutting edge of modern art during their early period. Their subject matter was quite emblematic, but it was also oriented along the prototypes of Art Nouveau and the outlines of Japanese prints they so admired.",
  "Post-Impressionism is a representation of both an extension of Impressionism and a rejection of that style’s inherent limitations.",
  "Art Nouveau has emerged through the British art movement called the Arts and Crafts movement, which praised traditional craftsmanship over mass-produced elements of the industrial revolution.",
  "Futurism is is a representation of embracing both popular and avant-garde mediums, and unlike many other modern art movements, Futurism was not immediately identified with a distinctive style.",
  "Only Matisse continued to explore the possibilities and variations of Fauvism after 1908.",
  "The foundation of Cubism Movement was Picasso’s early work including “Les Demoiselles d’Avignon” and it gradually developed into the style we now recognize as cubism.",
  "Although suprematism was generally expressed through painting, it often emphasized the texture of the paint as one of the fundamental, irreducible characteristics of the medium itself.",
  "All the various Dada groups was contrasting realism, embracing avant-garde shock strategies, but their tone differed; German Dada for example was far more political than the bohemian French strain.",
  "The Bauhaus style, aka the International Style, was endorsed by great luminaries such as Gropius and Mies van der Rohe. Thus created an approach to design that gave equal measure to form and function, thus doing away with ornate decoration and frills.",
  "Surrealism proved to be the most influential and the most persistent."
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
        // Get a random modern art fact from the modern art facts list
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
