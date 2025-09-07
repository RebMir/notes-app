import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
    // Don't add confirmPassword here - it's not stored in database
}, {timestamps: true});

// Hash password before saving
userSchema.pre("save", async function(next){
    if (!this.isModified("password")) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

// Method to compare passwords
userSchema.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

// Static method to create user with password confirmation
userSchema.statics.createWithConfirmation = async function(userData) {
    const { username, email, password, confirmPassword } = userData;
    
    // Validate password confirmation
    if (password !== confirmPassword) {
        const error = new Error('Passwords do not match');
        error.statusCode = 400;
        throw error;
    }
    
    // Create user (confirmPassword is not saved)
    return this.create({ username, email, password });
};

const User = mongoose.model("User", userSchema);

export default User;