import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, Button } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import ItemProduct from '../item_screen/ItemProduct'
import { TouchableOpacity } from 'react-native-gesture-handler'

const dataProduct = [

    {
        id: '1',
        title: 'Nike Air Max 270 React ENG',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_1.png?alt=media&token=5016789f-2ee6-41a2-8c21-30539c43f018',
        priceNew: '$299,43',
        priceOld: '$534,33',
        sale: '24% Off',

    },
    {
        id: '2',
        title: 'Nike Air Max 270 React ENG',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_2.png?alt=media&token=6eadece2-77cb-492a-895f-4ce34eae226e',
        priceNew: '$299,43',
        priceOld: '$534,33',
        sale: '24% Off',

    },
    {
        id: '3',
        title: 'Nike Air Max 270 React ENG',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_3.png?alt=media&token=582ab2ea-7ba0-463b-9f8b-4fea09e800af',
        priceNew: '$299,43',
        priceOld: '$534,33',
        sale: '24% Off',

    },
    {
        id: '4',
        title: 'Nike Air Max 270 React ENG',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_4.png?alt=media&token=9ff64334-a8d3-4160-ac60-9212999e7e26',
        priceNew: '$299,43',
        priceOld: '$534,33',
        sale: '24% Off',

    },
    {
        id: '5',
        title: 'Nike Air Max 270 React ENG',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_5.png?alt=media&token=ee189fce-b36a-4402-8930-cd3b46196f49',
        priceNew: '$299,43',
        priceOld: '$534,33',
        sale: '24% Off',

    },
    {
        id: '6',
        title: 'Nike Air Max 270 React ENG',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_6.png?alt=media&token=16fcc93a-a2d2-4f1d-95b7-ce481e17914b',
        priceNew: '$299,43',
        priceOld: '$534,33',
        sale: '24% Off',

    },
    {
        id: '7',
        title: 'Nike Air Max 270 React ENG',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_7.png?alt=media&token=1b0ac462-fea5-49bc-816d-11160a572197',
        priceNew: '$299,43',
        priceOld: '$534,33',
        sale: '24% Off',

    },
    {
        id: '8',
        title: 'Nike Air Max 270 React ENG',
        imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_8.png?alt=media&token=d6f06ac3-b901-480b-8715-4ee799085f97',
        priceNew: '$299,43',
        priceOld: '$534,33',
        sale: '24% Off',

    },

]
const Offer = (props) => {
    const { navigation } = props;
    return (

        <View style={styles.container}>
            {/* Start Header */}
            <View style={styles.groupHeader}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Icon2 name="chevron-back" color="#9098B1" size={20} />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Super Flash Sale</Text>
                </View>
                <Icon name="search" color="#9098B1" size={20} />

            </View>
            {/* End Header */}
            <ScrollView showsVerticalScrollIndicator={false}>

                <View style={{ padding: 16, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    {/* Bannel */}
                    <Image style={styles.image} source={require('../assets/img_bannel.png')} />

                    {/* Bannel 1 */}

                    {/* <FlatList style={{ marginVertical: 12 }}
                        numColumns={2}
                        data={dataProduct}
                        renderItem={({ item }) => <ItemProduct dataProduct={item} />}
                        keyExtractor={item => item.id}
                        showsHorizontalScrollIndicator={false}
                        showsVerticalScrollIndicator={false}
                    /> */}
                    {
                        dataProduct.map((item) => <ItemProduct key={item.id} dataProduct={item} navigation={navigation} />)
                    }
                </View>
            </ScrollView>
        </View>

    )
}

export default Offer

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