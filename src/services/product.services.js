
//product.services.js
import productModel from '../models/product.model.js';

const getAll = async () => {
    return productModel.getAllProducts();
}

const get = async (id) =>{
    return productModel.getProduct(id);
}

const create = async (newProduct) =>{
    return productModel.createProduct(newProduct);
}

const del = async (id) =>{
    return productModel.deleteProduct(id);
}

export default {getAll, get, create, del}