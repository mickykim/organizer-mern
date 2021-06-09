const express = require('express');
const app = express();
const indexRouter = require('./src/routes/index');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const PORT = 3000;

// Configure secrets
dotenv.config();

// Connect database
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse incoming requests with JSON payloads

// Routes
app.use('/', indexRouter);

// Catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// Error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // Render the error page
    res.status(err.status || 500);
    res.render('error');
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
