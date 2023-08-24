import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { useDispatch } from 'react-redux'

import {
    removeFromCart,
    addToWishlist,
} from '../redux2/actions/Actions'

const ItemCart = (props) => {
    const dispatch = useDispatch();
    const { data, index } = props;
    const [isAddWishlist, setIsAddWishlist] = useState(false);
    var number = 1;
    const [quantity, setQuantity] = useState(number);
    return (
        <View style={styles.container}>
            <View style={styles.group_card}>
                <Image style={styles.image} source={{ uri: data.imageURL }} />
                <View style={styles.group_right}>
                    <View style={styles.group_right_up}>
                        <Text style={styles.textName}>{data.title}</Text>
                        <TouchableOpacity onPress={() => { setIsAddWishlist(true), dispatch(addToWishlist(data)) }}>
                            {
                                !isAddWishlist ?
                                    (
                                        <Feather name="heart" color="#9098B1" size={18} />
                                    ) :
                                    (
                                        <FontAwesome name="heart" color="red" size={18} />
                                    )
                            }
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => dispatch(removeFromCart(index))}>
                            <FontAwesome style={styles.icon} name="trash-o" color="#9098B1" size={20} />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.group_right_down}>
                        <Text style={styles.textPrice}>${data.priceNew}</Text>
                        <View style={styles.group_button}>
                            <TouchableOpacity >
                                <View style={styles.viewButtonQuantity}>
                                    <FontAwesome style={styles.icon} name="minus" color="#9098B1" size={15} />
                                </View>
                            </TouchableOpacity>
                            <View style={[styles.viewButtonQuantity, { width: 40, backgroundColor: '#EBF0FF' }]}>
                                <Text style={styles.textQuantity}>{quantity}</Text>
                            </View>
                            <TouchableOpacity >
                                <View style={styles.viewButtonQuantity}>
                                    <FontAwesome style={styles.icon} name="plus" color="#9098B1" size={15} />
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ItemCart

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
    group_card: {
        width: '100%',
        height: 104,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        padding: 16,
        flexDirection: 'row',
        marginTop: 16,

    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 5,
    },
    group_right: {
        width: '75%',
        height: 72,
        marginStart: 12,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    group_right_up: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    group_right_down: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    group_button: {
        width: 104,
        height: 24,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        flexDirection: 'row',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#EBF0FF'
    },
    textButton: {
        lineHeight: 24,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '700',
        color: '#223263'
    },
    textQuantity: {
        lineHeight: 24,
        textAlign: 'center',
        fontSize: 12,
        fontWeight: '700',
        color: '#223263'
    },
    textName: {
        width: '70%',
        height: 36,
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 18,
        color: '#223263'
    },
    textPrice: {
        width: '50%',
        height: 36,
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 18,
        color: '#40BFFF'
    },
    input: {
        width: '100%',
        height: 56,
        backgroundColor: '#ffffff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        paddingStart: 16,
        paddingEnd: 90
    },
    button: {
        width: 87,
        height: 56,
        backgroundColor: '#40BFFF',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        right: 0,
        borderBottomEndRadius: 5,
        borderTopEndRadius: 5
    },
    textButton: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 21.6,
        color: "#ffffff",
    },
    inputHeader: {
        position: 'relative',
        marginTop: 32
    },
    viewFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewFlex_1: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    textItemLeft: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 21.6,
        color: "#9098B1",
    },
    textItemRight: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 21.6,
        color: "#223263",
    },
    buttonCheckOut: {
        width: "100%",
        height: 57,
        backgroundColor: '#40BFFF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        marginVertical: 16,
    },
    textButtonCheckOut: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 25.2,
        color: "#ffffff",
    },
    viewButtonQuantity: {
        width: 32,
        height: 24,
        backgroundColor: '#ffffff',
        borderWidth: 1,
        borderColor: '#EBF0FF',
        justifyContent: 'center',
        alignItems: 'center'
    }
});