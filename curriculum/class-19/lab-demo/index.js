'use strict';

const Q = require('./server');
Q.start();

const db = new Q('database');
db.monitorEvent('create');
db.monitorEvent('read');
db.monitorEvent('update');

const network = new Q('network');
network.monitorEvent('attack');
network.monitorEvent('status');