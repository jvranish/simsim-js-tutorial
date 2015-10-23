var port = Number(process.env.PORT || 4050)

var simSim = require('sim-sim-js');

var express    = require('express');
var expressApp = express();
var httpServer = require('http').createServer(expressApp);
var socketIO   = require('socket.io').listen(httpServer, {log: true, secure: false});

var simultSimServer = simSim.create.socketIOServer({
    socketIO: socketIO,
    period: 50,
    logging: {
      debug: true,
      incomingMessages: true,
      outgoingMessages: true,
      suppressTurnMessages: true, }
    });

httpServer.listen(port);
