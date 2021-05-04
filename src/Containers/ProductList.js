import React,{useEffect} from 'react'
import {useSelector,useDispatch} from "react-redux"
import ProductComponent from './ProductComponent'
import axios from "axios"
import {setProducts} from "../Redux/Actions/productActions"
const ProductList = () => {
    const products = useSelector((state) => state)
    const dispatch = useDispatch()
        //console.log(products)
    const fetchProduct = async () => {
        const response = await axios
            .get("https://fakestoreapi.com/products")
            .catch((err) => {
                console.log("Error", err)
            });
        //console.log(response.data)
        dispatch(setProducts(response.data))
    }
    useEffect(() => {
        fetchProduct()
    }, [])
    //console.log("Products: ",products)
    return (
        <div className="ui grid container">
            <ProductComponent/>
        </div>
    )
}

export default ProductList
