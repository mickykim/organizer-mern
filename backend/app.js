import express from 'express';
import indexRouter from './src/routes/indexRoutes.js';
import taskRouter from './src/routes/taskRoutes.js';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

const PORT = 4000;
const app = express();

// Configure secrets
dotenv.config();

// Connect database
mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json()); // Parse incoming requests with JSON payloads

// Enable CORS
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
    res.header(
        'Access-Control-Allow-Headers',
        'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
});
// Routes
app.use('/', indexRouter);
app.use('/tasks', taskRouter);

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