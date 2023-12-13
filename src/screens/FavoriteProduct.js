import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon2 from 'react-native-vector-icons/Ionicons'
import ItemFavoriteProduct from '../item_screen/ItemFavoriteProduct'
import { useSelector } from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';


const FavoriteProduct = (props) => {
    const { navigation } = props;
    const data = useSelector(state => state.ReducersWishlist);
    return (
        <>
            {
                data.length == 0 ?
                    (<View style={{ flex: 1, backgroundColor: "#ffffff", justifyContent: "center", alignItems: 'center', paddingHorizontal: 16, }}>
                        <Ionicons name='close-circle' size={100} color={"#40BFFF"} />
                        <Text style={{ fontSize: 26, fontWeight: "700", color: "#223263", marginTop: 16 }}>Product Not Found</Text>
                        <Text style={{ fontSize: 14, fontWeight: "400", color: "#9098B1", marginTop: 8 }}>thank you for shopping using lafyuu</Text>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}
                            style={{ backgroundColor: "#40BFFF", width: '100%', height: 57, borderRadius: 5, marginTop: 16 }}
                        >
                            <Text style={{ fontSize: 18, fontWeight: "700", color: "#ffffff", lineHeight: 57, textAlign: "center", }}>Go Back</Text>
                        </TouchableOpacity>
                    </View>)
                    :
                    (
                        <View style={styles.container}>
                            {/* Start Header */}
                            <View style={styles.groupHeader}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TouchableOpacity onPress={() => { navigation.goBack() }}>
                                        <Icon2 name="chevron-back" color="#9098B1" size={20} />
                                    </TouchableOpacity>
                                    <Text style={styles.textHeader}>Favorite Product</Text>
                                </View>
                            </View>
                            {/* End Header */}
                            <View style={{ padding: 16 }}>
                                <FlatList
                                    numColumns={2}
                                    data={data}
                                    renderItem={({ item, index }) => <ItemFavoriteProduct dataProduct={item} index={index} />}
                                    keyExtractor={item => item._id}
                                    showsHorizontalScrollIndicator={false}
                                    showsVerticalScrollIndicator={false}
                                />
                            </View>
                        </View>
                    )
            }
        </>


    )
}

export default FavoriteProduct

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
    image: {
        width: '100%',
        height: 206,
        borderRadius: 5,
    },
})