import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ItemSize = (props) => {
    const {dataSize} = props;
    return (
        <View style = {styles.container}>
            <Text style = {styles.text}>{dataSize.number}</Text>
        </View>
    )
}

export default ItemSize

const styles = StyleSheet.create({
    container: {
        width: 48,
        height: 48,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        backgroundColor: '#ffffff',
        marginEnd: 16,
    },
    text: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 48,
        color: "#223263",
        textAlign: 'center',

    }
})