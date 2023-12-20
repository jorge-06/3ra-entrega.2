
import { StyleSheet, Text, View, Button } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const Inicio = (navigation) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Inicio Screen</Text>
      <Button title="Home" onPress={()=> navigation.navigate ("Listado")}/>
    </View>
  );
}

const Listado = (navigation) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Listado Screen</Text>
    </View>
  );
}
const App = () => {

  return (
    <>
      <StatusBar/>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Listado" component={Listado} />
        </Stack.Navigator>
      </NavigationContainer>

    </>
  );
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'start',
  },
});
