import React, { useEffect } from 'react'
import { Text, View } from 'react-native';
import { styles } from '../theme/appTheme';
import Icon from 'react-native-vector-icons/Ionicons';

export const Tab1Screen = () => {

    useEffect(() => {
        console.log('Tab1screen effect')
    }, [])
    
  return (
    <View style={ styles.globalMargin }>
        <Text style={ styles.title }>
        Iconos
        </Text>
        <Text>
          <Icon name="american-football" size={100} color="#900" />
        </Text>
    </View>
  )
}
