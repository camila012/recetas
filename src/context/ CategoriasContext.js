import React,{createContext, useState, useEffect} from 'react'
import Axios from 'axios';

//crear el context
export const CategoriasContext = createContext ();
//provider es donde se encuentra las funciones y state

const CategoriasProvider = (props) => {
  //crear el state del context
  const [categorias, guardarCategoria] = useState([])
  
  //ejecutar el llamado a la api
  useEffect (() => {

    const obtenerCategorias = async () => {
      
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';

      const categorias = await Axios.get(url);

      guardarCategoria(categorias.data.drinks);
      
    }
    obtenerCategorias();
  },[]);
  
  return (
    <CategoriasContext.Provider
    value={{
      categorias
    }}
    >
    {props.children}
    </CategoriasContext.Provider>
    
    )
  }
  
  export default CategoriasProvider;