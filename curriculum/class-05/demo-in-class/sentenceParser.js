'use strict';

const fs = require('fs');
const sentenceInput = process.argv[2];
const path = './data/data.txt';

class SentenceParser {
  constructor(sentence) {
    this.words = sentence.split(' ');
  }

  write() {
    fs.writeFile(sentenceInput, this.words.join(' '), (err => {
      if (err) {
        console.error(err);
      } else {
        console.log('file written');
      }
    }))
  }

  replace(find, replace) {
    return new Promise((resolve, reject) => {
      if (this.words.includes(find)) {
        let wordIndex = this.words.indexOf(find);
        this.words[wordIndex] = replace;
        const newSentence = this.words.join(' ');
        resolve(newSentence);
      } else {
        reject('word not found');
      }
    });
  }
}

const sentenceParser = new SentenceParser(sentenceInput);
sentenceParser.write();
sentenceParser.replace('a', 'the')
  .then(() => sentenceParser.write())
  .catch(err => console.log(err));