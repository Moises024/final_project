import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

export const TareaScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                source={require('C:/nueva_app/RN-HolaMundo-Contador-0.5.0/resources/fondo2.jpeg')}
                style={styles.image}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 413,
        height: 300,
    },
});
