import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemColor = (props) => {
    const {dataColor} = props;
  return (
    <View style = {[styles.cicle, {backgroundColor: dataColor.color}]}>
    </View>
  )
}

export default ItemColor

const styles = StyleSheet.create({
    cicle:{
        width: 36,
        height: 36,
        borderRadius: 18,
        backgroundColor: '#CC8441',
        marginEnd: 12
    }
})