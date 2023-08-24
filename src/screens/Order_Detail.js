import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Order_Detail = (props) => {
    const {navigation} = props;
    return (
        <View style={styles.container}>
            {/* Start Header */}
            <View style={styles.groupHeader}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back" color="#9098B1" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Order Details</Text>
                </View>

            </View>
            {/* End Header */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ padding: 16 }}>
                    {/* Start Checking */}
                    <View style={styles.viewFlex}>
                        <View style={styles.viewFlex_2}>
                            <Ionicons name="checkmark-circle" color="#40BFFF" size={24} />
                            <Text style={styles.textChecking}>Packing</Text>
                        </View>
                        <View style={styles.viewFlex_2}>
                            <Ionicons name="checkmark-circle" color="#40BFFF" size={24} />
                            <Text style={styles.textChecking}>Shipping</Text>
                        </View>
                        <View style={styles.viewFlex_2}>
                            <Ionicons name="checkmark-circle" color="#40BFFF" size={24} />
                            <Text style={styles.textChecking}>Arriving</Text>
                        </View>
                        <View style={styles.viewFlex_2}>
                            <Ionicons name="checkmark-circle" color="#EBF0FF" size={24} />
                            <Text style={styles.textChecking}>Success</Text>
                        </View>
                        {/* End Checking */}
                    </View>
                    {/* Start Product */}
                    <Text style={styles.textTitle}>Product</Text>
                    {/* Product 1 */}
                    <View style={styles.group_card}>
                        <Image style={styles.image} source={require('../assets/product_1.png')} />
                        <View style={styles.group_right}>
                            <Text style={styles.textName}>Nike Air Zoom Pegasus 36 Miami</Text>
                            <Text style={styles.textPrice}>$299,43</Text>
                        </View>
                        <Ionicons name="heart" color="#FB7181" size={20} />

                    </View>
                    {/* Product 1 */}

                    {/* Product 2 */}
                    <View style={styles.group_card}>
                        <Image style={styles.image} source={require('../assets/product_2.png')} />
                        <View style={styles.group_right}>
                            <Text style={styles.textName}>Nike Air Zoom Pegasus 36 Miami</Text>
                            <Text style={styles.textPrice}>$299,43</Text>
                        </View>
                        <Ionicons name="heart-outline" color="#9098B1" size={20} />
                    </View>
                    {/* Product 2 */}
                    {/* End Product */}

                    {/* Shipping Detail */}
                    <Text style={styles.textTitle}>Shipping Details</Text>
                    {/* Start Item 1 */}
                    <View style={styles.viewItem}>
                        <View style={[styles.viewFlex_3]}>
                            <Text style={styles.textLeft}>Date Shipping</Text>
                            <Text style={styles.textRight}>January 16, 2015</Text>
                        </View>
                        <View style={[styles.viewFlex_3, { marginTop: 12 }]}>
                            <Text style={styles.textLeft}>Shipping</Text>
                            <Text style={styles.textRight}>POS Reggular</Text>
                        </View>
                        <View style={[styles.viewFlex_3, { marginTop: 12 }]}>
                            <Text style={styles.textLeft}>No. Resi</Text>
                            <Text style={styles.textRight}>000192848573</Text>
                        </View>
                        <View style={[styles.viewFlex_3, { marginTop: 12 }]}>
                            <Text style={styles.textLeft}>Address</Text>
                            <Text style={styles.textRight}>2727 Lakeshore Rd{'\n'} undefined Nampa,{'\n'} Tennessee 78410</Text>
                        </View>
                    </View>
                    {/* End Item 1 */}

                    {/* End Shipping detail */}

                    <Text style={styles.textTitle}>Payment Details</Text>

                    {/* Start Item 1 */}
                    <View style={styles.viewItem}>
                        <View style={[styles.viewFlex_3]}>
                            <Text style={styles.textLeft}>Items (3)</Text>
                            <Text style={styles.textRight}>$598.86</Text>
                        </View>
                        <View style={[styles.viewFlex_3, { marginTop: 12 }]}>
                            <Text style={styles.textLeft}>Shipping</Text>
                            <Text style={styles.textRight}>$40.00</Text>
                        </View>
                        <View style={[styles.viewFlex_3, { paddingVertical: 12 , borderBottomColor: '#EBF0FF', borderBottomWidth: 1, borderStyle: 'dotted'}]}>
                            <Text style={styles.textLeft}>Import charges</Text>
                            <Text style={styles.textRight}>$128.00</Text>
                        </View>
                        <View style={[styles.viewFlex_3, { marginTop: 12 }]}>
                            <Text style={styles.totalPrice}>Total Price</Text>
                            <Text style = {[styles.textRight,{color: '#40BFFF', fontWeight: '700'}]}>$766.86</Text>
                        </View>
                    </View>
                    {/* End Item 1 */}

                    {/* Button */}
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Notify Me</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default Order_Detail

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
    },
    groupHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: '#EBF0FF',
        borderBottomWidth: 1
    },
    textHeader: {
        fontSize: 16,
        fontWeight: '700',
        lineHeight: 24,
        color: '#223263',
        marginStart: 21
    },
    viewFlex: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    viewFlex_1: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    viewFlex_2: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    viewFlex_3: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    textItem: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: '#223263',
        marginBottom: 12
    },
    textInput: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 21.6,
        color: '#9098B1',
        textAlign: 'left',
    },
    input: {
        width: '100%',
        height: 48,
        paddingHorizontal: 16,
        paddingVertical: 13,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        marginBottom: 24,

    },
    icon: {
        position: 'absolute',
        top: 15,
        right: 15,
    },
    inputHeader: {
        position: 'relative',
        marginTop: 8
    },

    textChecking: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 21.6,
        color: '#9098B1',
        textAlign: 'center',
        marginTop: 12,
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
        marginTop: 8,

    },
    image: {
        width: 72,
        height: 72,
        borderRadius: 5,
    },
    group_right: {
        width: '70%',
        height: 72,
        marginStart: 12,
        flexDirection: 'column',
        justifyContent: 'space-between',
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
        width: 32,
        height: 24,
        backgroundColor: '#ffffff',
        lineHeight: 24,
        textAlign: 'center',
        borderRadius: 20
    },
    textWatch: {
        width: 40,
        height: 24,
        lineHeight: 24,
        textAlign: 'center',
    },
    textName: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 18,
        color: '#223263'
    },
    textPrice: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 18,
        color: '#40BFFF'
    },
    textTitle: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: '#223263',
        textAlign: 'left',
        marginTop: 24,
        marginBottom: 4,
    },
    viewItem: {
        padding: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#EBF0FF",
        marginTop: 8,
    },
    textCode: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 21,
        color: '#223263',
        textAlign: 'left',
    },
    textDate: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 21.6,
        color: '#223263',
        textAlign: 'left',
        letterSpacing: 0.5,
        opacity: 0.5,
        paddingVertical: 12,
        borderBottomColor: '#EBF0FF',
        borderBottomWidth: 1,
        borderStyle: 'dotted'
    },
    textLeft: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 21.6,
        color: '#223263',
        textAlign: 'left',
        letterSpacing: 0.5,
        opacity: 0.5
    },
    textRight: {
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 21.6,
        color: '#223263',
        textAlign: 'right',
        letterSpacing: 0.5,
    },
    totalPrice: {
        fontSize: 12,
        fontWeight: '700',
        lineHeight: 18,
        color: '#223263',
        textAlign: 'left',
        letterSpacing: 0.5,
    },
    button: {
        width: '100%',
        height: 57,
        backgroundColor: '#40BFFF',
        borderRadius: 5,
        marginTop: 21
    },
    textButton: {
        fontSize: 14,
        fontWeight: '700',
        lineHeight: 57,
        color: '#ffffff',
        textAlign: 'center',
        letterSpacing: 0.5,
    }
})