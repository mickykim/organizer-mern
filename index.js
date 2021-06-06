const express = require('express');
const app = express();
const indexRouter = require('./src/routes/index');

const PORT = 3000;


app.use('/', indexRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
})