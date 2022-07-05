const express = require('express');
const app = express();

const delay = process.env.DELAY ?? 6000;
const label = 'Time taken';

app.use((req, res, next) => {
    console.log('Delaying response by:', delay);
    console.time(label);
    const id = setTimeout(() => {
        clearTimeout(id);
        next();
    }, delay);
});

app.use((req, res) => {
    console.timeEnd(label);
    return res.status(200).send("OK");
})

const port = process.env.APP_PORT ?? 3000;

app.listen(port, () => {
    console.log('Listening on port', port);
});
