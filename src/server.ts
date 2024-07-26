import 'reflect-metadata';
import express, { request } from 'express';

import path from 'path';

import { createServer } from 'http';
import { Server, Socket } from 'socket.io';

import routes from './routes';
import './database';

const port = 3000;

const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('views', path.join(__dirname, '..', 'public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.get('/pages/client', (request, response) => {
  return response.render('html/client.html');
});

const http = createServer(app);

const io = new Server(http);
io.on('connection', (socket: Socket) => {
  console.log('Se conectou', socket.id);
});

app.use(express.json());
app.use(routes);

http.listen(port, () =>
  console.log(`Example app listening on in http://localhost:${port}`)
);
