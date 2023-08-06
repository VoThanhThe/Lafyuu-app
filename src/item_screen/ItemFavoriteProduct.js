import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'

const ItemFavoriteProduct = (props) => {
    const { dataProduct } = props;
    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{uri : dataProduct.imageURL}} />
            <Text style={styles.title}>{dataProduct.title}</Text>
            <View style={styles.groupView}>
                <Icon style={styles.icon} name="star" color="#FFC833" size={12} />
                <Icon style={styles.icon} name="star" color="#FFC833" size={12} />
                <Icon style={styles.icon} name="star" color="#FFC833" size={12} />
                <Icon style={styles.icon} name="star" color="#FFC833" size={12} />
                <Icon style={styles.icon} name="star" color="#EBF0FF" size={12} />
            </View>
            <Text style={styles.priceNew}>{dataProduct.priceNew}</Text>
            <View style={styles.groupBottom}>
                <View style={{flexDirection: 'row',
                            alignItems: 'center',}}>
                <Text style={styles.priceOld}>{dataProduct.priceOld}</Text>
                <Text style={styles.sale}>{dataProduct.sale}</Text>
                </View>
                <Icon style={styles.icon} name="trash-o" color="#9098B1" size={20} />

            </View>
        </View>
    )
}

export default ItemFavoriteProduct

const styles = StyleSheet.create({
    groupView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4
    },
    groupBottom: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 4
    },
    groupStar: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4
    },
    container: {
        width: "47.8%",
        height: 282,
        backgroundColor: '#ffffff',
        padding: 16,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#EBF0FF',
        marginEnd: 16,
        marginBottom: 16
        
    },
    image: {
        width: "100%",
        height: 133,
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
        marginTop: 16
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
    },
    icon: {
        marginEnd: 2
    }
})