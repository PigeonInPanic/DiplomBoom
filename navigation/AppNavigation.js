import { createAppContainer } from 'react-navigation'
import { createStackNavigator} from 'react-navigation-stack'
import { createBottomTabNavigator} from 'react-navigation-tabs'

import MenuNavigator from './MenuNavigation'

import BasketScreen from '../screens/BasketScreen'
import MenuScreen from '../screens/MenuScreen'
import HistoryScreen from '../screens/History'

const _MenuNavigator = createStackNavigator({
    Menu: {
        screen: MenuScreen,
        navigationOptions: {
            title: "Меню"
        }
    }
})

const _BasketNavigator = createStackNavigator({
    Basket: {
        screen: BasketScreen,
        navigationOptions: {
            title: "Корзина"
        }
    }
})

const _HistoryNavigator = createStackNavigator({
    History: {
        screen: HistoryScreen,
        navigationOptions: {
            title: "История заказов"
        }
    }
})
const AppNavigatop = createBottomTabNavigator({
    Basket: {
        screen: _BasketNavigator,
        navigationOptions: {
            title: 'Корзина'
        }
    },
    Menu: {
        screen: MenuNavigator,
        navigationOptions: {
            title: 'Меню'
        }
    },
    History: {
        screen: _HistoryNavigator,
        navigationOptions: {
            title: 'История заказов'
        }
    }
}, {
    initialRouteName: 'Menu'
})

export default createAppContainer(AppNavigatop)