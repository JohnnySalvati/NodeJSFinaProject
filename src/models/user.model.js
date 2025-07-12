//user.models.js
import { collection, getDocs, query, where } from 'firebase/firestore'
import {db} from '../config/data.js'

const userCollection = collection(db, 'users')

const getAllUsers = async () => {
    try {
        const userList = await getDocs(userCollection);
        const users = [];
        userList.forEach(user=>users.push({id:user.id, ...user.data()}));
        return users;
    } catch (error) {
        throw new Error("Error", error.message);
    }
}

const getUserbyName = async (name) => {
    try {
        const userRef = collection(db, 'users');
        const q = query(userRef, where('name', "==", name));
        const querySnapshot = await getDocs(q);

        const user = []
        querySnapshot.forEach(usr =>user.push({...usr.data()}));

        if (user.length != 0) return user[0];
        
    } catch (error) {
        throw new Error("Error", error.message);
    }
}

export default {getAllUsers, getUserbyName}