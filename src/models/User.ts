import { Schema, model, Document } from 'mongoose';
import bcrypt from 'bcrypt';

export interface IUser extends Document {
    username: string;
    fullname: string;
    password: string;
    //  comparePassword(password: string):Promise<string>;
    comparePassword: (password: string) => Promise<Boolean>;

}

const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        lowercase: true
    },
    fullname: {
        type: String
    },
    password: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

userSchema.pre<IUser>('save', async function (next) {
    const user = this;
    
    if (!user.isModified('password')) return next();

    const salt = await bcrypt.genSalt(10);
    user.password = await bcrypt.hash(user.password, salt);
    console.log(user.password);
    next();
});
userSchema.methods.comparePassword = async function (password: string): Promise<boolean> {
    return await bcrypt.compare(password, this.password)
}

export default model<IUser>('User', userSchema) 