// Stores the active TCP connection object.
let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  handleUserInput(connection);
  return stdin;
};

const handleUserInput = () => {
  process.stdin.on('data', (key) => {
    switch(key) { 
    case '\u0003':
      console.log('Sssssee you later!')
      process.exit();
      
      case 'w':
        connection.write('Move: up');
        break;

      case 'a':
        connection.write('Move: left');
        break;
      case 's':
        connection.write('Move: down');
        break;
      case 'd':
        connection.write('Move: right');
        break;
    }
  })
};

module.exports = { setupInput };