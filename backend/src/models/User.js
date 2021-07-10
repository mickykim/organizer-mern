import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const UserSchema = mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    first_name: {
        type: String,
        required: true,
    },
    last_name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
});

UserSchema.pre('save', async function (next) {
    // Salt and Hash password before storing
    try {
        const hashedPassword = await bcrypt.hash(this.password, 12);
        this.password = hashedPassword;
        next();
    } catch (err) {
        if (err) {
            next(err);
        }
    }
});

UserSchema.methods.isValidPassword = async function (password) {
    const user = this;
    try {
        const compare = await bcrypt.compare(password, user.password);
        return compare;
    } catch (error) {
        console.error(error);
    }
};

const User = mongoose.model('User', UserSchema);

export default User;
