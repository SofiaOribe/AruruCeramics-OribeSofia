import { initializeApp } from "firebase/app";

import { getFirestore, collection, doc, addDoc, getDocs, getDoc, updateDoc, deleteDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.API_KEY,
    authDomain: "aruru-ceramic.firebaseapp.com",
    projectId: "aruru-ceramic",
    storageBucket: "aruru-ceramic.appspot.com",
    messagingSenderId: "924017984404",
    appId: "1:924017984404:web:8a85e4dc2ceba65dc7c581"
};  

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app); //Referencia a mi base de datos, consulto 

export const cargarBDD = async() => {
    const promise = await fetch('./json/productos.json')
    const productos = await promise.json()
    productos.forEach(async (prod) => {
        await addDoc(collection(db, "productos"), {
            idCategoria: prod.idCategoria,
            nombre: prod.nombre,
            marca: prod.marca,
            modelo: prod.modelo,
            stock: prod.stock,
            precio: prod.precio,
            especificaciones1: prod.especificaciones1,
            especificaciones2: prod.especificaciones2,
            img: prod.img,
            descripcion: prod.descripcion
        });
    });
}

//Consulto todos los elementos
export const getProductos = async () => {
    const productos = await getDocs(collection(db, "productos"));
    const items = productos.docs.map(prod => {
        return {...prod.data(), id:prod.id}
    })
    return items;
}

//Consulto un elemento
export const getProducto = async (id) => {
    const producto = await getDoc(doc(db, "productos", id));
    const item = {...producto.data(), id:producto.id}
    return item;
}

export const updateProducto = async(id, info) => {
    await updateDoc(doc(db, "productos", id), info)
}

export const deleteProducto = async(id) => {
    await deleteDoc(doc(db, "productos", id))
}

//create read (orden de compra)

//crear
export const createOrdenCompra = async(cliente, producto, precioTotal, fecha) => {
    const ordenCompra = await addDoc(collection(db, "ordenesCompra"), {
        datosCliente: cliente,
        producto: producto,
        precioTotal: precioTotal,
        fecha: fecha
    });
    return ordenCompra;
}

//consultar
export const getOrdenCompra = async(id) => {
    const ordC = await getDoc(doc(db, "ordenesCompra", id));
    const ordenCompra = {...ordC.data(), id: ordC.id};
    return ordenCompra;
}