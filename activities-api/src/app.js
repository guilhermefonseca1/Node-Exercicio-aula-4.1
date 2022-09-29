const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.status(200).json({ message: 'chegou na rota /' })
});

module.exports = app; 