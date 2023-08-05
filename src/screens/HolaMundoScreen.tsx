
import React from 'react'
import { Text, View } from 'react-native'

export const HolaMundoScreen = () => {
    return (
        <View style={{
            flex: 1,
            justifyContent: 'center'
          }}>
            <Text style={{
              fontSize: 40,
              textAlign: 'center',
              color: 'white',
              fontFamily: 'sans-serif-medium'
            }}>
            Moisés Ricardo Zabala 2020-0927
            </Text>
        </View>
    )
}
