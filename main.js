// load fs, and simple-ngram-markov
var fs = require('fs');
var ngram = require('simple-ngram-markov');


//Set options for simple-ngram-markov
var options = {
  length: 3, //default for ngram is 2, but we're making this into a bigram instead for better result.
  stripPunctuation: true 
};

//Create ngram-model from the simple-ngram-markov library
var model = ngram.createModel(options);

//Read and handle the data from the data file
file = process.argv[2]
fs.readFile(file, got_data);

function got_data(error, data) {
    array = data.toString().split('\n')    
    array.forEach(function(item) {
		
		//Add sentences to markov model
        if (item !== '') {
            ngram.addSentenceToModel(model, item);
		}
    })
    //Generate sentences with 40 words
    var sentence = ngram.generateSentence(model, 40); 
	
    //Present the new christmas song in the same format as lyrics found online 
    var text = sentence.replace(/\. /g, '\n');
    console.log(text);
}