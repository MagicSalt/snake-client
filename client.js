const net = require('net');

const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541,
  });

  conn.on('connect', () => {
    console.log('Welcome to Snake Game');
  });

  conn.on('connect', () => {
    conn.write(`Name: DL`);
  });

  conn.on('data', (data) => {
    console.log('got the data but', data);
  });
  
  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };