import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    FlatList,
    Pressable,
    ScrollView,
    TouchableOpacity
} from 'react-native'
import React, { useState } from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import ItemCart from '../item_screen/ItemCart'
import { useSelector } from 'react-redux'

const Cart = () => {
    const [quantityProduct, setQuantityProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [ship, setShip] = useState(40.00);
    const [importChange, setImportChange] = useState(128.00);


    const cartData = useSelector(state => state.Reducers);
    console.log("Data List: ", cartData);
    console.log("Data length: ", cartData.length);
    var tong = 0;
    const sumPrice = (cartData) => {
        for (let index = 0; index < cartData.length; index++) {
            tong += cartData[index].priceNew;
        }
        return tong;
    }
    
    
    //set data
    // setQuantityProduct(cartData.length);
    return (
        <View style={styles.container}>
            {/* Start Header */}
            <View style={styles.groupHeader}>
                <Text style={styles.header}>Your Cart</Text>
            </View>
            {/* End Header */}
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={{ paddingHorizontal: 16 }}>
                    {
                        cartData.map((item) => <ItemCart key={item.id} data={item} />)
                    }

                    {/* <View style={styles.group_card}>
                        <Image style={styles.image} source={require('../assets/product_1.png')} />
                        <View style={styles.group_right}>
                            <View style={styles.group_right_up}>
                                <Text style={styles.textName}>Nike Air Zoom Pegasus 36 Miami</Text>
                                <Feather name="heart" color="#9098B1" size={20} />
                                <FontAwesome style={styles.icon} name="trash-o" color="#9098B1" size={20} />
                            </View>
                            <View style={styles.group_right_down}>
                                <Text style={styles.textPrice}>$299,43</Text>
                                <View style={styles.group_button}>
                                    <TouchableOpacity>
                                        <View style={styles.viewButtonQuantity}>
                                            <FontAwesome style={styles.icon} name="minus" color="#9098B1" size={15} />
                                        </View>
                                    </TouchableOpacity>
                                    <View style={[styles.viewButtonQuantity, { width: 40, backgroundColor: '#EBF0FF' }]}>
                                        <Text style={styles.textQuantity}>2</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={styles.viewButtonQuantity}>
                                            <FontAwesome style={styles.icon} name="plus" color="#9098B1" size={15} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>

                    <View style={styles.group_card}>
                        <Image style={styles.image} source={require('../assets/product_2.png')} />
                        <View style={styles.group_right}>
                            <View style={styles.group_right_up}>
                                <Text style={styles.textName}>Nike Air Zoom Pegasus 36 Miami</Text>
                                <Feather name="heart" color="#9098B1" size={20} />
                                <FontAwesome style={styles.icon} name="trash-o" color="#9098B1" size={20} />
                            </View>
                            <View style={styles.group_right_down}>
                                <Text style={styles.textPrice}>$299,43</Text>
                                <View style={styles.group_button}>
                                    <TouchableOpacity>
                                        <View style={styles.viewButtonQuantity}>
                                            <FontAwesome style={styles.icon} name="minus" color="#9098B1" size={15} />
                                        </View>
                                    </TouchableOpacity>
                                    <View style={[styles.viewButtonQuantity, { width: 40, backgroundColor: '#EBF0FF' }]}>
                                        <Text style={styles.textQuantity}>1</Text>
                                    </View>
                                    <TouchableOpacity>
                                        <View style={styles.viewButtonQuantity}>
                                            <FontAwesome style={styles.icon} name="plus" color="#9098B1" size={15} />
                                        </View>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View> */}

                    <View style={styles.inputHeader}>
                        <TextInput style={styles.input} placeholder='Enter Cupon Code' />
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.textButton}>Apply</Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ padding: 16, borderWidth: 1, borderColor: '#EBF0FF', borderRadius: 5, marginTop: 16 }}>
                        <View style={[styles.viewFlex, { marginBottom: 12 }]}>
                            <Text style={styles.textItemLeft}>Items ({cartData.length})</Text>
                            <Text style={styles.textItemRight}>${sumPrice(cartData)}</Text>
                        </View>
                        <View style={[styles.viewFlex, { marginBottom: 12 }]}>
                            <Text style={styles.textItemLeft}>Shipping</Text>
                            <Text style={styles.textItemRight}>$40.00</Text>
                        </View>
                        <View style={[styles.viewFlex, { marginBottom: 12 }]}>
                            <Text style={styles.textItemLeft}>Import charges</Text>
                            <Text style={styles.textItemRight}>$128.00</Text>
                        </View>
                        <View style={{ borderWidth: 1, borderStyle: 'dashed', borderColor: '#EBF0FF', marginBottom: 12 }}></View>
                        <View style={[styles.viewFlex, {}]}>
                            <Text style={[styles.textItemLeft, { fontWeight: '700', color: '#223263', }]}>Total Price</Text>
                            <Text style={[styles.textItemRight, { fontWeight: '700', color: '#40BFFF', }]}>$766.86</Text>
                        </View>
                    </View>

                    <TouchableOpacity style={styles.buttonCheckOut}>
                        <Text style={styles.textButtonCheckOut}>Check Out</Text>
                    </TouchableOpacity>
                </View>


            </ScrollView>
        </View>
    )
}

export default Cart

const styles = StyleSheet.create({
    groupHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: '#EBF0FF',
        borderBottomWidth: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
    header: {
        fontSize: 16,
        fontWeight: '700',
        color: '#223263',
        lineHeight: 24,
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
})