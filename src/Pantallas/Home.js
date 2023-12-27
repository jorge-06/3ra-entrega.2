import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Header from '../Componentes/Header'

const Home = () => {
  return (
    <>
        <Header title={"Home"}/>
        <View style={styles.container}>
          <Text style={styles.text}>Texto de ejemplo</Text>
        </View>
    </>
  )
}

export default Home

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text:{
    borderWidth: 2,
    padding: 30,
    fontSize: 20,
    borderRadius: 15,
  }
})