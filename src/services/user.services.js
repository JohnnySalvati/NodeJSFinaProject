
//user.services.js
import userModels from '../models/user.model.js';

const getAll = async () => {
    return userModels.getAllUsers();
}

const getByName = async(name) => {
    return userModels.getUserbyName(name);
}

export default {getAll, getByName}