import React from 'react';
import { createBottomTabNavigator  } from '@react-navigation/bottom-tabs';
import Pizzas from '../screens/Pizzas';
import Bebidas from '../screens/Bebidas';
import Icon from 'react-native-vector-icons/Ionicons';
import Icon2 from 'react-native-vector-icons/Entypo'; 

const Tab = createBottomTabNavigator();

const TabRouter = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ color, size }) => {
                    let iconComponent;
                    if (route.name === 'Pizzas') {
                        iconComponent = <Icon name='pizza-outline' size={size} color={color} />;
                    } else if (route.name === 'Bebidas') {
                        iconComponent = <Icon2 name='drink' size={size} color={color} />;
                    }
                    return iconComponent;
                },
            })}
            tabBarOptions={{
                activeTintColor: '#B20016', 
                inactiveTintColor: '#999999', 
            }}
        >
            <Tab.Screen name='Pizzas' component={Pizzas} />
            <Tab.Screen name='Bebidas' component={Bebidas} />
        </Tab.Navigator>
    );
};

export default TabRouter;
