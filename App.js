import { StyleSheet } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'


import BottomTab from './src/navigator/BottomTab'


const App = () => {
  return (
    <>
      <NavigationContainer>
        <BottomTab/>
      </NavigationContainer>
    </>
  )
}

export default App

const styles = StyleSheet.create({})