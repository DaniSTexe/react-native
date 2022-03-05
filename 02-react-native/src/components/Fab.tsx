import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, TouchableNativeFeedback } from 'react-native';

interface Props {
    title: string,
    // el signo de pregunta lo hace opcional
    position?: 'br' | 'bl',
    onPress: () => void,
}

export const Fab = ( { title, onPress, position = 'br' }: Props) => {

  return (
    <View   
        style= {[
            styles.fabLocation, 
            ( position === 'bl' )
                ? styles.left
                : styles.right
        ] }
            
    >
        <TouchableNativeFeedback
            onPress= { onPress } 
            background= { TouchableNativeFeedback.Ripple('black', false, 30) }
        >   
            <View style={ styles.fab }>
                <Text style= { styles.fabText }>{ title }</Text>
            </View>
        </TouchableNativeFeedback>
    </View>
  )
}

const styles = StyleSheet.create({
    fabLocation: {
        position: 'absolute',
        bottom: 25,
    
    },
    right: {
        right: 25,
    },
    left: {
        left: 25,
    },

    fab: {
        backgroundColor: '#5856D6',
        width: 60,
        height: 60,
        borderRadius: 100,
        justifyContent: 'center',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
    },
    fabText: {
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        alignSelf: 'center',
    },
});
