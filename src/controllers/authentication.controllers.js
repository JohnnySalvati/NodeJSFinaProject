//authenticacion.controllers.js
import authServices from '../services/authentication.services.js';

const createJWT = async (req, res) =>{
    try {
        const {name, password} = req.body;
        
        if (name && password){
            const token = await authServices.createJWT(name, password);
        
            if (!token)
                return res.status(401).json({error: 'Usuario o contraseña invalidos'});
            return res.status(200).json({message: 'Acceso concedido', payload: token});
        }else{
            return res.status(401).json({error: 'Formato de datos invalido'});
        }
    } catch (error) {
        return res.status(500).json({message: 'Error interno del servidor', error: error.message});
    }
}
export default {createJWT};
