
import { StyleSheet, Text, View } from 'react-native';
import Home from './src/Pantallas/Home';



const App = () => {

  return (
    
    <View style={styles.container}>
    <Home/>
    </View>
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
