import React from 'react'
import {Text,View,Image,StyleSheet,TouchableOpacity} from 'react-native';
import styles from './Product_Card_Style';
const ProductCard=(props)=>{
   
    return(
        <View style={styles.container}>
            <Image style={styles.productImage} source={{uri: props.products.imgURL}}></Image>
            <View style={styles.innerContainer}>
                <Text style={styles.productTitle}>{props.products.title}</Text>
                <Text style={styles.productPrice}>{props.products.price}</Text>
                {props.products.inStock&&<TouchableOpacity style={styles.buyButton}><Text style={styles.buyButtonText}>BUY</Text></TouchableOpacity>}
                {!props.products.inStock && <Text style={styles.outOfStock}>This product is out of stock.</Text>}
            </View>
        </View>
        

    )
}

export default ProductCard;