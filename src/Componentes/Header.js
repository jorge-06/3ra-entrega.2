import { StyleSheet, Text, View } from 'react-native'
import { Colores } from '../Global/Colores'



const Header = ({title}) => {
  return (
    <View style={estilos.container}>
      <Text style={estilos.text}>{title}</Text>
    </View>
  )
}

export default Header

const estilos = StyleSheet.create({
    container:{
        backgroundColor:Colores.colorPrincipal,
        height: "10%", 
        width: "100%",
        justifyContent: "center",
        alignItems: "center",

    },
    text:{
      fontSize: 40,
    }
})