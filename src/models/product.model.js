//product.models.js
import { addDoc, collection, doc, getDoc, getDocs, deleteDoc } from 'firebase/firestore';
import {db} from '../config/data.js';

const productCollection = collection(db, 'products');

const getAllProducts = async () => {
    try {
        const productList = await getDocs(productCollection);
        const products = [];
        productList.forEach(product=>products.push({id:product.id, ...product.data()}));
        return products;
    } catch (error) {
        throw new Error("Error", error.message);
    }
}

const getProduct = async (id) => {
    try {
        const docRef = doc(productCollection, id);
        const product = await getDoc(docRef);
        return product.data();
    } catch (error) {
        throw new Error("Error", error.message);
    }
}

const createProduct = async (newProduct) => {
    try {
        await addDoc(productCollection, newProduct);
    } catch (error) {
        throw new Error("Error", error.message);
    }
}

const deleteProduct = async (id) => {
    try {
        await deleteDoc(doc(productCollection, id));
    } catch (error) {
        throw new Error("Error", error.message);
    }
}

export default {getAllProducts, getProduct, createProduct, deleteProduct}