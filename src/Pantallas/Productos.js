import { StyleSheet, Text, View } from 'react-native'
import Header from '../Componentes/Header'


const Productos = () => {
  return (
    <>
    <Header title={"Productos"}/>
    <View style={styles.container}>
      <Text>Proximamente</Text>
    </View>
    </>
  )
}

export default Productos

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    }

})