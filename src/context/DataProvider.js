import React, { createContext, useState, useEffect } from "react";
import Data from "../Data";

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [produtos, setProdutos] = useState([]);
	const [cart, setCart] =useState([])
	const [total, setTotal] = useState(0)

  useEffect(() => {
	const produto = Data.items 
	if(produto){
		setProdutos(produto)
	}else{
		setProdutos([])
	}
	}, []);

	const addCart = (id) =>{
		const check = cart.every(item =>{
			return item.id !== id
			
		})
		if(check){
			const data = produtos.filter(producto =>{
				return producto.id === id
			})
			setCart([...cart, ...data])
		}else{
			alert("O produto já foi adicionado ao carrinho")
		}
	}
	useEffect(() =>{
		const dataCart = JSON.parse(localStorage.getItem('dataCart'))
		if(dataCart){
			setCart(dataCart)
		}
	},[])

	useEffect(() =>{
		localStorage.setItem('dataCart', JSON.stringify(cart))
	},[cart])

	const value = {
		produtos : [produtos],
		cart: [cart, setCart],
		addCart: addCart,
	}
	
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};