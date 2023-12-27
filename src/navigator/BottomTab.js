import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome } from '@expo/vector-icons'; 

import Home from '../Pantallas/Home';
import Listado from '../Pantallas/Listado';
import { Colores } from '../Global/Colores';




const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
        screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar}}>
        <Tab.Screen 
            name="Home" 
            component={Home}
            options={{
            tabBarIcon: ({focused})=>
            <View style={styles.icon}> 
            <FontAwesome style={styles.icon} name="home" size={35} color={focused ? "white" : "#EEE"}/>
            <Text style={styles.textIcon}>Home</Text>
            </View>
            }} 
        />
        <Tab.Screen 
            name="Listado" 
            component={Listado} 
            options={{
            tabBarIcon: ({focused})=>
            <View style={styles.icon}> 
            <FontAwesome name="list-ul" size={35} color={focused ? "white" : "#EEE"}/>
            <Text style={styles.textIcon}>Listado</Text>
            </View>
            }}
        />
    </Tab.Navigator>
  )
}

export default BottomTab

const styles = StyleSheet.create({
    tabBar:{
        backgroundColor: Colores.colorTerciario,
        elevation: 10,
        position: "absolute",
        bottom: "5%",
        right: "10%",
        left: "10%",
        height: "8%",
        borderRadius: 10,
    },
    icon:{
        alignItems: "center"
    },
    textIcon:{
        color: "white",
    }
})