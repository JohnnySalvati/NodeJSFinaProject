// product.controllers.js
import productServices from '../services/product.services.js'

const getAll = async (req, res) => {
    try {
        const products = await  productServices.getAll();
        if (products.length == 0)
            return res.status(200).json({message: 'No hay datos', payload: []});
        res.status(200).json({message: 'Listado de productos', payload: products});
    } catch (error) {
        res.status(500).json({message: 'Error interno del servidor', error: error.message})
    }
}

const get = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await  productServices.get(id);
        if (!product)
            return res.status(404).json({error: 'Producto no encontrado'});
        res.status(200).json({message: 'Producto', payload: product});
    } catch (error) {
        res.status(500).json({message: 'Error interno del servidor', error: error.message})
    }
}

const create = async (req, res) => {
    try {
        const {name, price, category} = req.body;
        if (name && price && category){
            const newProduct = await  productServices.create({name, price, category});
            res.status(201).json({message: 'Producto creado', payload: newProduct});
        }else{
            res.status(400).json({error: 'Formato del Body invalido'});
        }
    } catch (error) {
        res.status(500).json({message: 'Error interno del servidor', error: error.message})
    }
}

const del = async (req, res) => {
    try {
        const id = req.params.id;
        const product = await  productServices.get(id);
        if (product){
            await  productServices.del(id);
            return res.status(204).send();
        }
        else {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }
    } catch (error) {
        res.status(500).json({message: 'Error interno del servidor', error: error.message})
    }
}
export default {getAll, get, create, del}