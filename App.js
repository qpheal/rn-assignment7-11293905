import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./screens/HomeScreen";
import CartScreen from "./screens/CartScreen";
import ProductDetailScreen from "./screens/ProductDetail";
import 'react-native-gesture-handler';
import { createDrawerNavigator } from '@react-navigation/drawer';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Drawer.Screen name="ProductDetail" component={ProductDetailScreen} options={{ headerShown: false }}/>
        <Drawer.Screen
          name="Cart"
          component={CartScreen}
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
      
    </NavigationContainer>
  );
};

export default App;
