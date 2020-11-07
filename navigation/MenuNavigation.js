import * as React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { NavigationContainer, Drawer } from '@react-navigation/native';

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

const FullMenuNavigator = createDrawerNavigator()
    
    function MyFullMenuNavigator() {
        return (
          <FullMenuNavigator.Navigator
            drawerStyle={{
              backgroundColor: '#c6cbef',
              width: 240,
            }}
          >
            <FullMenuNavigator.Screen name="Rolls" component={_RollsNavigator} />
            <FullMenuNavigator.Screen name="Pizza" component={_pizzaNavigator} />
          </FullMenuNavigator.Navigator>
        );
      }
      
export function FullMenuNavigator() {
    return (
        <NavigationContainer>
            <MyFullMenuNavigator />
        </NavigationContainer>
        );
    }