import { useReducer } from "react";
import clienteAxios from "../../config/axios";
import {
    OBTENER_PRODUCTOS,
    OBTENER_PRODUCTOS_CATEGORIAS,
    PRODUCTOS_ERROR,
    PRODUCTOS_LISTA,
    PRODUCTO_SELECCIONADO,
    OBTENER_PRODUCTOS_CLIENTE,
} from "../../types";

import productoReducer from "./productoReducer";
import productoContext from './productoContext';


const ProductoState = (props) => {

    const InitialState = {
        productos: [],
        productoslista: [],
        productoseleccionado: null,
    }

    // d dispatch para ejecutar las acciones
    const [state, dispatch] = useReducer(productoReducer, InitialState)



    //  d obtener todos los productos
    const obtenerProductos = async () => {
        try {
            const resultado = await clienteAxios.get('api/productos');
            dispatch({
                type: OBTENER_PRODUCTOS,
                payload: resultado.data
            })
        } catch (error) {
            dispatch({
                type: PRODUCTOS_ERROR,
            })
        }
    }

    // d obtener productos por categoria
    const obtenerporCategoria = async (categoria) => {
        try {
            const resultado = await clienteAxios.get('api/productos/' + categoria);
            // console.log(resultado.data)
            dispatch({
                type: OBTENER_PRODUCTOS_CATEGORIAS,
                payload: resultado.data
            })
        } catch (error) {
            dispatch({
                type: PRODUCTOS_ERROR
            })
        }
    }
    // d obtener productos del cliente como filtro de la lista actial
    const obtenerProductosListaActual = async (listaId) => {
        try {
            dispatch({
                type: OBTENER_PRODUCTOS_CLIENTE,
                payload: state.productoslista
            })
        } catch (error) {
            console.log(error)
        }
    }
    
    // d obtener producto seleccionado para añadir a lista
    const obtenerProductoSeleccionado =  async (productoId) => {
            try {
                const id = await productoId
                dispatch({
                    type: PRODUCTO_SELECCIONADO,
                    payload: id
                })
            } catch (error) {
                console.log(error)
            }
    }
   
    // d obtener productos de lista seleccionada
    const obtenerProductosDeLista = async (listaId) => {
        try {
            const resultado = await clienteAxios.get(`api/listas/${listaId}`)
            dispatch({
                type: PRODUCTOS_LISTA,
                payload: resultado.data.productos
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <productoContext.Provider
            value={{
                productos: state.productos,
                productoseleccionado: state.productoseleccionado,
                productoslista:state.productoslista,
                obtenerProductos,
                obtenerporCategoria,
                obtenerProductoSeleccionado,
                obtenerProductosDeLista,
            }}
        >
            {props.children}
        </productoContext.Provider>
    );
}


export default ProductoState;