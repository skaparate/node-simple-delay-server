const express = require('express');
const app = express();

const delay = process.env.DELAY ?? 6000;

app.use((req, res, next) => {
    console.log('Delaying response by:', delay);
    const id = setTimeout(() => {
        console.log('Clearing timeout');
        clearTimeout(id);
        console.log('Calling next');
        next();
    }, delay);
});

app.use((req, res) => {
    return res.status(200).send("OK");
})

const port = process.env.APP_PORT ?? 3000;

app.listen(port, () => {
    console.log('Listening on port', port);
});
