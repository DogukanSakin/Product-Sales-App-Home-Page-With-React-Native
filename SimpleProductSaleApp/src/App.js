import React from 'react';
import{Text,View,StyleSheet,FlatList,TextInput} from 'react-native';
import ProductCard from './components/Product Cards';
import ProductData from './components/Product Data/Product_Data.json';
const App = () => {
 
  return (
  <View style={styles.container}>
     
     
      <FlatList 
      ListHeaderComponent={()=>
        <View>
        <Text style={styles.header}>MYSTORE</Text>
        <TextInput style={styles.searchInput} placeholder='Search...'></TextInput>
        </View>
      }
     
      numColumns={2}
      data={ProductData}
      renderItem={({item})=><ProductCard products={item}/>}
      >
      </FlatList>
      
  </View>

  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding: 10,
    backgroundColor:'white',
    margin:5
    
  },
  header:{
    fontSize:25,
    fontWeight:'bold',
    color:'#7a84e6',
    paddingBottom:10
    

  },
  searchInput:{
    borderWidth:1,
    borderRadius:20,
    borderColor:'#7a84e6',
    
    
    
    
  }
});

export default App;