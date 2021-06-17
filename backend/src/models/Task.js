import mongoose from 'mongoose';

const Schema = mongoose.Schema;
const TaskSchema = new Schema({
    author: {
        type: String,
        required: 'Enter author name',
    },
    body: {
        type: String,
        required: 'Enter task details',
        maxlength: 100,
    },
    due_date: {
        type: Date,
        default: Date.now(),
    },
    status: {
        type: String,
        enum: ['Pending', 'In Progress', 'Completed'],
        default: 'In Progress',
        required: 'Select a status',
    },
});

const Task = mongoose.model('Task', TaskSchema);

export default Task;
