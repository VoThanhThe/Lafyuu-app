import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemColor = (props) => {
    const {dataColor} = props
  return (
    <View style = {[styles.container, {backgroundColor: dataColor.color}]}>
    </View>
  )
}

export default ItemColor

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#ffffff',
        marginEnd: 16,
    },
})