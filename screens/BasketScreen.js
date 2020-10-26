import React from 'react'
import{ View, Text, StyleShee, StyleSheet} from 'react-native'

const BasketScreen = () => (
    <View style = {styles.container}>
        <Text> Корзина </Text>
    </View>
)

const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(255, 77, 0, 0.8)'
    }
})

export default BasketScreen