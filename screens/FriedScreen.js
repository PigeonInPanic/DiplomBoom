import React from "react"
import { View, Text, StyleSheet, Button} from "react-native"

const FriedScreen = ({ navigation }) => {
    const toggleMenu = () => {
        navigation.toggleDrawer()
    }

    return (
        <View style={styles.container}>
            <Text>Жаренные</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'rgba(255, 77, 0, 0.8)'
    }
})

export default FriedScreen