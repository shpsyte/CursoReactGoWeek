const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

mongoose.connect('mongodb://shpsyte:shpsyte123@ds135234.mlab.com:35234/goweek-jsoe', {
    useNewUrlParser: true
});

app.use((req, res, next) => {
    req.io = io;
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    return next();
})
app.use(express.json());
app.use(require('./routes'));
app.use(cors());

server.listen(3000, () => {
    console.log('Server started on port 3000');
});