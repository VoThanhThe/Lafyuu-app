import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemFlashSale = (props) => {
    const {dataSale, navigation} = props;
  return (
    <TouchableOpacity style = {styles.container}
    onPress={() => navigation.navigate('ProductDetail')}> 
      <Image style = {styles.image} source={{uri : dataSale.imageURL}}/>
      <Text style = {styles.title}>{dataSale.title}</Text>
      <Text style = {styles.priceNew}>{dataSale.priceNew}</Text>
      <View style = {styles.groupView}>
        <Text style = {styles.priceOld}>{dataSale.priceOld}</Text>
        <Text style = {styles.sale}>{dataSale.sale}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ItemFlashSale

const styles = StyleSheet.create({
    groupView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8
    },
    container: {
        width: 141,
        height: 238,
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        marginEnd: 16
    },
    image: {
        width: 109,
        height: 109,
        borderRadius: 5,
    },
    title: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 18,
        color: '#223263',
        marginTop: 8
    },
    priceNew: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 21.6,
        color: '#40BFFF',
        marginTop: 8
    },
    priceOld: {
        fontSize: 10,
        fontWeight: '400',
        lineHeight: 15,
        color: '#9098B1',
        textDecorationLine: 'line-through'
    }
    ,
    sale: {
        fontSize: 10,
        fontWeight: '700',
        lineHeight: 15,
        color: '#FB7181',
        marginStart: 8
    }
})