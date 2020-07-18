const express = require('express');
const redirectToHttps = require('express-http-to-https').redirectToHTTPS;
const path = require('path')

const app = express();

app.use(redirectToHttps([/localhost:(\d{4})/]));
app.use(express.static(path.join(__dirname, 'build')));

app.listen(process.env.PORT || 3000);
