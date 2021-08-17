import React, { createContext, useState, useEffect } from "react";
import Data from "../Data";

export const DataContext = createContext();

export const DataProvider = (props) => {
	const [produtos, setProdutos] = useState([]);
	const [menu, setMenu] = useState(false)
	const [carrito, setCarrito] =useState([])
	const [total, setTotal] = useState(0)

  useEffect(() => {
	const produto = Data.items 
	if(produto){
		setProdutos(produto)
	}else{
		setProdutos([])
	}
	}, []);

	const value = {
		produtos : [produtos]
	}
	
	return (
		<DataContext.Provider value={value}>
			{props.children}
		</DataContext.Provider>
	)
};