
const express = require('express');
const app = express();
const cors = require('cors');
const server = require('http').createServer(app);
const cookieParser = require('cookie-parser');
//midelware
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(cookieParser());
app.use(express.json());
app.use('/apis/users', require('./apis/users'));
app.use('/apis/token', require('./apis/token'));

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on PORT ${PORT} 🔥`));