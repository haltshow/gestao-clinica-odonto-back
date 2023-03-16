const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.json('xD')
})

app.listen(PORT, () => {
    console.log(`porta rodando na ${PORT}`);
})