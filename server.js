const express = require("express");
const PORT = process.env.PORT || 3001;
const { notes } = require('./db/db.json');
const app = express();


app.get('/api/db', (req, res) => {
    res.json(notes);
});

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
});