import { Pressable, StyleSheet, Text, View} from 'react-native'
import { Colores } from '../Global/Colores'


const CategoryItem = ({category}) => {
  return (
    <Pressable onPress={()=>(category)}>
      <View style = {styles.container}>
        <Text>{category}</Text>
      </View>
    </Pressable>
  )
}

export default CategoryItem

const styles = StyleSheet.create({
    container:{
        backgroundColor: Colores.colorTerciario,
        width: "80%",
        marginHorizontal: "10%",
        margin: "5%",
        padding: "5%",
        alignItems: "center",
        elevation: 20,
    }
})