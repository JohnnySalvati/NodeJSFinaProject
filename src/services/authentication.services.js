
import userModels from '../models/user.model.js'
import  generateToken from '../utils/token-generator.js'

const createJWT = async (name, password) => {
    const dbUser = await userModels.getUserbyName(name);
    
    if (dbUser){
        const dbName = dbUser.name;
        const dbPassword = dbUser.password;

        if (name == dbName && password == dbPassword)
            return generateToken({"id": dbUser.id, "email": dbUser.email});
    }
}

export default {createJWT}