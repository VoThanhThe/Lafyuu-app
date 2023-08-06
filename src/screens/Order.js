import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Order = (props) => {
    const { navigation } = props;
    return (
        <View style={styles.container}>
            {/* Start Header */}
            <View style={styles.groupHeader}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                        <Ionicons name="chevron-back" color="#9098B1" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Order</Text>
                </View>

            </View>
            {/* End Header */}
            <View style={{ padding: 16 }}>
                {/* Start Item 1 */}
                <TouchableOpacity onPress={() => {navigation.navigate('Order_Detail')}}>
                    <View style={styles.viewItem}>
                        <Text style={styles.textCode}>LQNSU346JK</Text>
                        <Text style={styles.textDate}>Order at Lafyuu : August 1, 2017</Text>
                        <View style={[styles.viewFlex, { marginTop: 12 }]}>
                            <Text style={styles.textLeft}>Order Status</Text>
                            <Text style={styles.textRight}>Shipping</Text>
                        </View>
                        <View style={[styles.viewFlex, { marginTop: 12 }]}>
                            <Text style={styles.textLeft}>Items</Text>
                            <Text style={styles.textRight}>2 Items purchased</Text>
                        </View>
                        <View style={[styles.viewFlex, { marginTop: 12 }]}>
                            <Text style={styles.textLeft}>Price</Text>
                            <Text style={[styles.textRight, { color: '#40BFFF', fontWeight: '700' }]}>$299,43</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* End Item 1 */}

                {/* Start Item 2 */}
                <TouchableOpacity onPress={() => {navigation.navigate('Order_Detail')}}>
                    <View style={styles.viewItem}>
                        <Text style={styles.textCode}>SDG1345KJD</Text>
                        <Text style={styles.textDate}>Order at Lafyuu : August 1, 2017</Text>
                        <View style={[styles.viewFlex, { marginTop: 12 }]}>
                            <Text style={styles.textLeft}>Order Status</Text>
                            <Text style={styles.textRight}>Shipping</Text>
                        </View>
                        <View style={[styles.viewFlex, { marginTop: 12 }]}>
                            <Text style={styles.textLeft}>Items</Text>
                            <Text style={styles.textRight}>1 Items purchased</Text>
                        </View>
                        <View style={[styles.viewFlex, { marginTop: 12 }]}>
                            <Text style={styles.textLeft}>Price</Text>
                            <Text style={[styles.textRight, { color: '#40BFFF', fontWeight: '700' }]}>$299,43</Text>
                        </View>
                    </View>
                </TouchableOpacity>
                {/* End Item 2 */}
            </View>
        </View>
    )
}

export default Order

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

    viewItem: {
        padding: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#EBF0FF",
        marginBottom: 16
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
    }


})