// What is this?
console.log(this, global);

const Jacob = {name: 'Jacob'};

function log(greeting, bye) {
  console.log(`${this.name} says: hello ${greeting}, ${bye}`);
}

// call, bind, apply
// these methods allow us to define this

log.call(Jacob, 'class', 'goodbye');

log.apply(Jacob, ['class', 'bye']);

const contextualLog = log.bind(Jacob);
contextualLog('Class');