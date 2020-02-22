import React, { createContext, useState, useEffect } from 'react';
import Axios from 'axios';

export const RecetasContext = createContext ();


const RecetasProvier = (props) => {
  
  const [recetas, guardarRecetas] = useState([]);
  
  const [busqueda, buscarRecetas] = useState({
    ingredientes: '',
    categoria: ''
  });
  
  const [consultar, guardarConsultar]=useState(false);
  
  const {nombre, categoria} = busqueda;
  
  useEffect(() => {
    if (consultar) {
      const obtenerRecetas = async () => {

     
      const url =`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${nombre}&c=${categoria}`;
      
      const resultado = await Axios.get(url);
      
      guardarRecetas(resultado.data.drinks)
    }
    obtenerRecetas();
  }
    
  },[busqueda, categoria, consultar, nombre] );
  
  return(
    
    <RecetasContext.Provider
    value={{
      recetas,
      buscarRecetas,
      guardarConsultar
    }}
    >
    {props.children}
    </RecetasContext.Provider>
    
    );
    
  }
  
  export default RecetasProvier;