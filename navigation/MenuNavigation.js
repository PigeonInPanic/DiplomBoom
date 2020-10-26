import { createStackNavigator } from 'react-navigation-stack'
import { createDrawerNavigator } from 'react-navigation-drawer'

import RollsScreen from "../screens/RollsScreen"
import FriedScreen from "../screens/FriedScreen"
import pasteWOKScreen from "../screens/pasteWOKScreen"
import pizzaScreen from "../screens/pizzaScreen"
import SetsScreen from "../screens/SetsScreen"


const _RollsNavigator = createStackNavigator({
    Rolls: {
        screen: RollsScreen,
        navigationOptions: {
            title: "Роллы"
        }
    }
})
const _pizzaNavigator = createStackNavigator({
    pizza: {
        screen: pizzaScreen,
        navigationOptions: {
            title: "Пицца"
        }
    }
})
const _FriedNavigator = createStackNavigator({
    Fread: {
        screen: FriedScreen,
        navigationOptions: {
            title: "Жаренные роллы"
        }
    }
})
const _pasteWOKNavigator = createStackNavigator({
    pasteWOK: {
        screen: pasteWOKScreen,
        navigationOptions: {
            title: "Лапша WOK"
        }
    }
})
const _SetsNavigator = createStackNavigator({
    Sets: {
        screen: SetsScreen,
        navigationOptions: {
            title: "Сеты"
        }
    }
})

const FullMenuNavigator = createDrawerNavigator({
    Rolls: {
        screen: _RollsNavigator,
        navigationOptions: {
            title: "Роллы"
        }
    },
    pizza: {
        screen: _pizzaNavigator,
        navigationOptions: {
            title: "Пицца"
        }
    },
    Fread: {
        screen: _FriedNavigator,
        navigationOptions: {
            title: "Жаренные роллы"
        }
    },
    pasteWOK: {
        screen: _pasteWOKNavigator,
        navigationOptions: {
            title: "Лапша WOK"
        }
    },
    Sets: {
        screen: _SetsNavigator,
        navigationOptions: {
            title: "Сеты"
        }
    }
})
export default FullMenuNavigator 