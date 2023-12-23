import { useState } from "react"
import { StyleSheet, View, TextInput, Pressable, FlatList, Text, Modal, Button } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
import { Colores } from '../Global/Colores'
import Header from "../Componentes/Header";

import uuid from 'react-native-uuid';




const Listado = () => {
  const [ newTitleProduct, setNewTitleProduct] = useState ("")
  const [ newProductPrice, setNewProductPrice] = useState ("")
  const [products, setProducts] = useState ([])
  
  const [productSelected, setProductSelected] = useState ({})
  const [ modalVisible, setModalVisible] = useState (false)
  const handlerModal = (item) => {
    setModalVisible(true)
    setProductSelected(item)
  }
  const handlerDelete = () =>{
    setProducts (current => current.filter (product => product.id !== productSelected.id))
    setModalVisible(false)
  }

  const handlerAddProduct = () => {
    const newproduct = {
      id : uuid.v4(),
      title: newTitleProduct,
      price: newProductPrice,
    }
    setProducts (current => [...current,newproduct])
    setNewTitleProduct ("")
    setNewProductPrice ("")
  }


  return(
         <>
         <Header title={"Listado"}/>
         <View style={styles.container}>
              
              <View style = {styles.barraSup}>
                  <TextInput style = {styles.buscador}
                             placeholder="Producto"
                             onChangeText={(t)=> setNewTitleProduct (t)}
                  />
                  <TextInput style = {styles.buscador}
                             placeholder="Precio"
                            onChangeText={(t)=> setNewProductPrice (t)}
                  />
                 <Pressable onPress={handlerAddProduct}>
                    <AntDesign name="pluscircle" size={30} color="black" />
                 </Pressable>
              </View>
              <View style={styles.listContainer}>
                  <FlatList
                           data={products}
                           keyExtractor={item => item.id}
                           renderItem={({item}) => 
                        <View style ={styles.cardProduct}>
                           <Text>{item.title}</Text>
                           <Text>{item.price} $</Text>
                           <Pressable onPress={()=> handlerModal (item)}>
                             <AntDesign name="closecircle" size={24} color="black" />
                           </Pressable>
                        </View>}
                  />
              </View>
                 <Modal visible = {modalVisible}>
                   <View style={styles.modalCard}>
                     <Text>¿Seguro que quiere eliminar?</Text>
                     <Text>{productSelected.title}{productSelected.price}</Text>
                     <Button title="Borrar" onPress={handlerDelete}/>
                     <Button title="Cancelar" onPress={()=> setModalVisible (false)}/>
                   </View>
                 </Modal>
         </View>
         </>
  )
}

export default Listado

const styles = StyleSheet.create({
  container:{
    backgroundColor: Colores.colorPrincipal,
    with: "100%",
    justifyContent: "start",
    alignItems: "center",
  },
  barraSup: {
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-around",
    padding: "5%",
   },
   buscador: {
    backgroundColor: Colores.colorTerciario,
    borderWidth: 1,
    borderRadius: 5,
    width: "40%",
  },
  listContainer:{
    backgroundColor: Colores.colorTerciario,
    width: "92%",
    padding: "3%",
    borderRadius: 5,
    },
  cardProduct:{
      backgroundColor: Colores.colorSecundario,
      width: "100%",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      padding: 10,
      marginBottom: "5%",
      borderRadius: 5,
  
  },
  modalCard:{
        flex:1,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        
  }
})