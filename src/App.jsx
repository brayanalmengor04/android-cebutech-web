// src/App.jsx
import React from 'react';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import useLoading from './hook/useLoading';
import Header from './components/Header/Header';
import './assets/css/animated.css' 
import './assets/css/fontawesome.css'
import './assets/css/owl.css'
import './assets/css/templatemo-chain-app-dev.css'
import MainBanner from './components/MainBanner/MainBanner';

const App = () => {
  const isLoading = useLoading();

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <> 
          <Header /> 
          <MainBanner 
        title="Gestiona tu Ganadería con Bovi Care" 
        description="Bovi Care es la aplicación ideal para el manejo eficiente de tu ganado. Organiza y monitorea el bienestar de tu rebaño, controla la alimentación, el historial médico, la producción y mucho más, todo desde tu dispositivo. Simplifica tu trabajo y optimiza los resultados con la app Bovi Care, diseñada especialmente para ganaderos y agricultores."
      />
        </>
      )}
    </>
  );
};

export default App;
