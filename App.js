import React from 'react'

import {createAppContainer} from "react-navigation";
import {createDrawerNavigation, createDrawerNavigator} from "react-navigation-drawer";
import {Dimensions} from "react-native";

import {Feather} from "@expo/vector-icons";

import {ProfileScreen, MenuScreen, BasketScreen} from "./screens";

const DrawerNavigator = createDrawerNavigator ({
  ProfileScreen,
  MenuScreen,
  BasketScreen
})

export default createAppContainer(DrawerNavigator);
