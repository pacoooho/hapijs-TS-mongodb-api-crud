"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = __importDefault(require("../models/User"));
exports.createUser = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = new User_1.default(request.payload);
        const userSaved = yield user.save();
        console.log(request.payload);
        return h.response(userSaved);
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
exports.getUsers = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield User_1.default.find();
        return h.response(users);
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
exports.getUser = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userfound = yield User_1.default.findById(request.params.id);
        if (userfound) {
            return h.response(userfound);
        }
        return h.response().code(404);
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
exports.updateUser = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedeuser = yield User_1.default.findByIdAndUpdate(request.params.id, request.payload, { new: true });
        if (updatedeuser) {
            return h.response(updatedeuser);
        }
        return h.response().code(404);
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
exports.deleteUser = (request, h) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deleteuser = yield User_1.default.findByIdAndDelete(request.params.id);
        if (deleteuser) {
            return h.response(deleteuser);
        }
        return h.response().code(404);
    }
    catch (error) {
        return h.response(error).code(500);
    }
});
