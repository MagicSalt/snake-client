const { connect } = require('./client');

console.log('Connecting ...');
connect();

const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput();
  return stdin;
};

const handleUserInput = function() {
  process.stdin.on('data', (key) => {
    if (key === '\u0003') {
      console.log('Sssssee you later!')
      process.exit();
    }
  })
};

setupInput();