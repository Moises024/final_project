import React from 'react';
import { SafeAreaView, ImageBackground } from 'react-native';
import { TareaScreen } from './src/screens/TareaScreen';
import { HolaMundoScreen } from './src/screens/HolaMundoScreen';
import { ContadorScreen } from './src/screens/ContadorScreen';

export const App = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ImageBackground
        source={require('C:/nueva_app/RN-HolaMundo-Contador-0.5.0/resources/fondo3.jpeg')}
        style={{
          flex: 1,
          resizeMode: 'cover', // Ajusta la imagen al tamaño del contenedor
        }}>
        <HolaMundoScreen />
        <ContadorScreen />
      { /* <TareaScreen /> */}
      </ImageBackground>
    </SafeAreaView>
  )
}
