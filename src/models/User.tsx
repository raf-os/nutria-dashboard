import mongoose, { Schema, model } from "mongoose";

export interface UserDocument {
    _id: string;
    name: string;
    email: string;
    password: string;
    phone: string;
    createdAt: Date;
}

const UserSchema = new Schema<UserDocument> ({
    email: {
        type: String,
        unique: true,
        required: [true, "Email is required"],
        match: [
            /^\S+@\S+$/,
            "Invalid email",
        ],
    },
    password: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: [true, "Name is required."],
    }
},
{
    timestamps: true,
});

const User = mongoose.models?.User || model<UserDocument>('User', UserSchema);
export default User;