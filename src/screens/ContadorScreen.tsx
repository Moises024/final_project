import React, { useState } from 'react';
import { View, Text, StyleSheet, Animated, Image } from 'react-native';
import { Fab } from '../components/Fab';

export const ContadorScreen = () => {
    const [contador, setContador] = useState(10);
    const [balonRotation, setIconRotation] = useState(new Animated.Value(0));

    const handleIncrement = () => {
        setContador(contador + 1);
        animatebalonRotation(180);
    };

    const handleDecrement = () => {
        setContador(contador - 1);
        animatebalonRotation(-180);
    };

    const animatebalonRotation = (degrees) => {
        Animated.timing(balonRotation, {
            toValue: degrees,
            duration: 300,
            useNativeDriver: false,
        }).start(() => {
            balonRotation.setValue(0);
        });
    }

    const interpolatedRotation = balonRotation.interpolate({
        inputRange: [-180, 180],
        outputRange: ['-180deg', '180deg'],
    });

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Contador: {contador}</Text>
            <View style={styles.balonContainer}>
                <Animated.Image
                    source={require('C:/nueva_app/RN-HolaMundo-Contador-0.5.0/resources/balon.png')}
                    style={[styles.icon, { transform: [{ rotate: interpolatedRotation }] }]}
                />
            </View>
            <Fab title="+" onPress={handleIncrement} />
            <Fab title="-" position="bl" onPress={handleDecrement} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 35,
        top: -80,
        textAlign: 'center',
        color: 'white',
        fontFamily: 'sans-serif-medium'
    },
    balonContainer: {
            marginTop: 80
    },
    icon: {
        width: 80,
        height: 80,
    },
});
