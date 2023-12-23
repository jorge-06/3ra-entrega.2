
import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import {useFonts} from "expo-font"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colores } from './src/Global/Colores';


import Listado from "./src/Pantallas/Listado";
import Productos from './src/Pantallas/Productos';
import Calendario from './src/Pantallas/Calendario';
import Header from "./src/Componentes/Header";

const Stack = createNativeStackNavigator();

const Inicio = ({navigation}) => {
  return (
    <>
      <Header title={"Home"}/>
      <View>
        <Pressable onPress={()=> {navigation.navigate("Listado")}}>
          <Text style={styles.container}>Listado</Text>
        </Pressable>
      </View>

      <View>
        <Pressable onPress={()=> {navigation.navigate("Productos")}}>
          <Text style={styles.container}>Productos en Stock</Text>
        </Pressable>
      </View>

      <View>
        <Pressable onPress={()=> {navigation.navigate("Calendario")}}>
          <Text style={styles.container}>Calendario</Text>
        </Pressable>
      </View>
    </>
  );
}

const App = () => {
  const [fontLoaded] = useFonts ({
    BebasNeue: require ("./assets/Fuentes/BebasNeue-Regular.ttf")
  })
  if (!fontLoaded) return null 
  return (
    <>
      <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator
        screenOptions = {{headerShown : false}}>
          
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Listado" component={Listado} />
          <Stack.Screen name="Productos" component={Productos} />
          <Stack.Screen name="Calendario" component={Calendario} />
        
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

export default App

const styles = StyleSheet.create({
  container:{
    backgroundColor: Colores.colorTerciario,
    width: "80%",
    marginHorizontal: "10%",
    margin: "5%",
    padding: "5%",
    alignItems: "center",
    elevation: 25,
}
});
