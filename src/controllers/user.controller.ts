import { Request, ResponseToolkit, ResponseObject } from '@hapi/hapi';
import User, { IUser } from '../models/User';


export const createUser = async (request: Request, h: ResponseToolkit): Promise<ResponseObject> => {
    try {
        const user = new User(request.payload);
        const userSaved = await user.save();
        console.log(request.payload);
        return h.response(userSaved)
    } catch (error) {
        return h.response(error).code(500);
    }
};

export const getUsers = async (request: Request, h: ResponseToolkit):
    Promise<ResponseObject> => {
    try {
        const users = await User.find();
        return h.response(users)
    } catch (error) {
        return h.response(error).code(500);
    }
};
export const getUser = async (request: Request, h: ResponseToolkit):
    Promise<ResponseObject> => {
    try {
        const userfound = await User.findById(request.params.id);
        if (userfound) {
            return h.response(userfound);
        }
        return h.response().code(404);
    } catch (error) {
        return h.response(error).code(500);
    }
};

export const updateUser = async (request: Request, h: ResponseToolkit):
    Promise<ResponseObject> => {
    try {
        const updatedeuser = await User.findByIdAndUpdate(
            request.params.id,
            request.payload,
            {new:true}
        );
        if (updatedeuser) {
            return h.response(updatedeuser);
        }
        return h.response().code(404);
    } catch (error) {
        return h.response(error).code(500);
    }
};
export const deleteUser = async (request: Request, h: ResponseToolkit):
    Promise<ResponseObject> => {
    try {
        const deleteuser = await User.findByIdAndDelete(request.params.id);
        if (deleteuser) {
            return h.response(deleteuser);
        }
        return h.response().code(404);
    } catch (error) {
        return h.response(error).code(500);
    }
};