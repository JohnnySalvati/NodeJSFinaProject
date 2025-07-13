//user.controllers.js
import userServices from '../services/user.services.js'

const getAll = async (req, res) => {
    try {
        const users = await userServices.getAll();
        if (users.length == 0)
            return res.status(200).json({message: 'No hay datos'});
        res.status(200).json({message: 'Listado de usuarios', payload: users});
    } catch (error) {
        res.status(500).json({message: 'Error interno del servidor', error: error.message})
    }
}

const getByName = async (req, res) => {
    try {
        const name = req.params.name;
        const user = await userServices.getByName(name);
        if (!user)
            return res.status(404).json({message: 'Usuario no encontrado'});
        res.status(200).json({message: 'Usuario encontrado', payload: user});
    } catch (error) {
        res.status(500).json({message: 'Error interno del servidor', error: error.message})
    }
}

export default {getAll, getByName}