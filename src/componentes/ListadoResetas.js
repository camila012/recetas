import React, { useContext } from 'react'
import Recetas from './Receta';
import { RecetasContext } from '../context/RecetasContext';

const ListadoRecetas = () => {

//extraer las recetas
const { recetas } = useContext(RecetasContext);

  return ( 

    <div className="row mt-5">
      {recetas.map(receta =>(
        <Recetas
        key={receta.idDrink} 
        receta={receta}
        />

      ))}


    </div>


   );
}
 
export default ListadoRecetas;