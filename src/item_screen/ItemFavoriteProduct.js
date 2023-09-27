import { StyleSheet, Text, View, Image, TouchableOpacity, Alert } from 'react-native'
import React, {useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import { useDispatch } from 'react-redux';
import {
    addToWishlist,
    removeFromWishlist
  } from '../redux2/actions/Actions'

const ItemFavoriteProduct = (props) => {
    const { dataProduct, index } = props;
    const dispatch = useDispatch();
    const [showBox, setShowBox] = useState(true);

    const showConfirmDialog = () => {
    return Alert.alert(
      "Are your sure?",
      "Are you sure you want to remove this wishlist?",
      [
        // The "Yes" button
        {
          text: "Yes",
          onPress: () => (
            // setShowBox(false)
            dispatch(removeFromWishlist(index))
            
          )
        },
        // The "No" button
        // Does nothing but dismiss the dialog when tapped
        {
          text: "No",
        },
      ]
    );
  };

    return (
        <View style={styles.container}>
            <Image style={styles.image} source={{ uri: dataProduct.image }} />
            <Text style={styles.title}>{dataProduct.name}</Text>
            <View style={styles.groupView}>
                <Icon style={styles.icon} name="star" color="#FFC833" size={12} />
                <Icon style={styles.icon} name="star" color="#FFC833" size={12} />
                <Icon style={styles.icon} name="star" color="#FFC833" size={12} />
                <Icon style={styles.icon} name="star" color="#FFC833" size={12} />
                <Icon style={styles.icon} name="star" color="#EBF0FF" size={12} />
            </View>
            <Text style={styles.priceNew}>${dataProduct.price}</Text>
            <View style={styles.groupBottom}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                }}>
                    <Text style={styles.priceOld}>$534,22</Text>
                    <Text style={styles.sale}>24% Off</Text>
                </View>
                <TouchableOpacity onPress={() => showConfirmDialog()}>
                    <Icon style={styles.icon} name="trash-o" color="#9098B1" size={20} />
                </TouchableOpacity>
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