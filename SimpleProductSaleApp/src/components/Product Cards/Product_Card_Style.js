import {StyleSheet,Dimensions} from 'react-native';
export default StyleSheet.create({
    container:{
        backgroundColor:'#f0f1f2',
        margin:10,
        flex:1,
        borderRadius:10
    
        
    },
   
    productImage:{
        borderRadius:10,
        height:Dimensions.get('window').height/4,
        margin: 10,
        flex:1
        
    },
    productTitle:{
      fontSize:17,
      margin:5,
   
      
    },
    productPrice:{
        fontSize:15,
        margin:5,
   
    },
    outOfStock:{
       fontSize:13,
       fontWeight:'bold',
       color:'red',
       margin:5,
    },
    buyButton:{
        backgroundColor:'#7a84e6',
        alignItems:'center',
        borderBottomLeftRadius:10,
        borderBottomRightRadius:10
        
    },
    buyButtonText:{
        color:'white',
        fontSize:18,
       
        
      

    }
    
 
  



});