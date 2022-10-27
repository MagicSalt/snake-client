const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const conn = net.createConnection({
    host: IP,
    port: PORT,
  });

  conn.on('connect', () => {
    console.log('Welcome to Snake Game');
  });

  conn.on('connect', () => {
    conn.write('Name: DL');
  });
  
  // conn.on('connect', () => {
  //   conn.write('Move: up');
  // });

  conn.on('data', (data) => {
    console.log('got the data but', data);
  });
  
  conn.setEncoding('utf8');

  return conn;
};

module.exports = { connect };