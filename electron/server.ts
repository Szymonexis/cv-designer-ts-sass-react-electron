const fs = require("fs");
const path = require("path")

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

// app.use('/uploads/images', express.static(path.join('uploads', 'images')))

app.use((req: any, res: any, next: any) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    );
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PATCH, DELETE');

    next();
});

app.use((error: any, req: any, res: any, next: any) => {
    if (req.file) {
        fs.unlink(req.file.path, (err: any) => {
            console.log(err);
        })
    }
    if (res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);
    res.json({ message: error.message || 'An unknown error occurred!' });
});

app.listen(5000);