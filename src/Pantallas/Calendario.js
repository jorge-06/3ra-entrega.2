import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Componentes/Header'

const Calendario = () => {
  return (
    <>
    <Header title={"Calendario"}/>
    <View style = {styles.container}>
      <Text>Proximamente</Text>
    </View>
    </>
  )
}

export default Calendario

const styles = StyleSheet.create({
    container:{
        flex:1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
    }
})