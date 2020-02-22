import React from 'react';
import Header from './componentes/Header';
import Formulario from './componentes/Formulario';
import ListadoRecetas from './componentes/ListadoResetas';

import CategoriasProvider  from './context/ CategoriasContext';
import RecetasProvier from './context/RecetasContext';
import ModalProvider from './context/ModalContext';


function App() {
  return (
    
    <CategoriasProvider>
    <RecetasProvier> 
    <ModalProvider>
    <Header/>
    
    <div className="container mt-5">
    <div className="row">
    <Formulario
    
    />
    
    </div>
    <ListadoRecetas
    
    />
    </div>
    </ModalProvider>
    </RecetasProvier>
    </CategoriasProvider>
    
    
    );
  }
  
  export default App;
  