import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, Button, Pressable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import ItemSize from '../item_screen/ItemSize'
import ItemColor from '../item_screen/ItemColor'
import ItemFlashSale from '../item_screen/ItemFlashSale'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItemToCart,
  addToWishlist,
  removeFromCart,
  removeFromWishlist
} from '../redux2/actions/Actions'

const dataSize = [
  {
    id: '1',
    number: '35',
  },
  {
    id: '2',
    number: '36',
  },
  {
    id: '3',
    number: '37',
  },
  {
    id: '4',
    number: '38',
  },
  {
    id: '5',
    number: '39',
  },
  {
    id: '6',
    number: '40',
  },
  {
    id: '7',
    number: '41',
  },
  {
    id: '8',
    number: '42',
  },
  {
    id: '9',
    number: '43',
  },
  {
    id: '10',
    number: '44',
  },
  {
    id: '11',
    number: '45',
  },

]
const dataFlashSale = [

  {
    id: '1',
    title: 'FS - Nike Air Max 270 React...',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_1.png?alt=media&token=5016789f-2ee6-41a2-8c21-30539c43f018',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',

  },
  {
    id: '2',
    title: 'FS - Nike Air Max 270 React...',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_2.png?alt=media&token=6eadece2-77cb-492a-895f-4ce34eae226e',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',

  },
  {
    id: '3',
    title: 'FS - Nike Air Max 270 React...',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_3.png?alt=media&token=582ab2ea-7ba0-463b-9f8b-4fea09e800af',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',

  },
  {
    id: '4',
    title: 'FS - Nike Air Max 270 React...',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_4.png?alt=media&token=9ff64334-a8d3-4160-ac60-9212999e7e26',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',

  },
  {
    id: '5',
    title: 'FS - Nike Air Max 270 React...',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_5.png?alt=media&token=ee189fce-b36a-4402-8930-cd3b46196f49',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',

  },
  {
    id: '6',
    title: 'FS - Nike Air Max 270 React...',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_6.png?alt=media&token=16fcc93a-a2d2-4f1d-95b7-ce481e17914b',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',

  },
  {
    id: '7',
    title: 'FS - Nike Air Max 270 React...',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_7.png?alt=media&token=1b0ac462-fea5-49bc-816d-11160a572197',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',

  },
  {
    id: '8',
    title: 'FS - Nike Air Max 270 React...',
    imageURL: 'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_8.png?alt=media&token=d6f06ac3-b901-480b-8715-4ee799085f97',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',

  },

]
const dataColor = [
  {
    id: '1',
    color: "#FFC833",
  },
  {
    id: '2',
    color: "#40BFFF",
  },
  {
    id: '3',
    color: "#FB7181",
  },
  {
    id: '4',
    color: "#53D1B6",
  },
  {
    id: '5',
    color: "#5C61F4",
  },
  {
    id: '6',
    color: "#223263",
  },

]
const ProductDetail = (props) => {
  const { navigation, route } = props;
  const { params } = route;
  const { data } = params;

  const dispatch = useDispatch();

  const items = useSelector(state => state);
  console.log(items);
  return (

    <View style={styles.container}>

      {/* Start Header */}
      <View style={styles.groupHeader}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon2 name="chevron-back" color="#9098B1" size={20} />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Nike Air Max 270 Rea...</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Icon name="search" color="#9098B1" size={20} />
          <Icon style={{ marginStart: 32.25 }} name="ellipsis-v" color="#9098B1" size={20} />
        </View>
      </View>
      {/* End Header */}
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Image Detail */}

        <Image style={styles.image} resizeMode='cover' source={{ uri: data.imageURL }} />
        <View style={{ justifyContent: 'center', alignItems: 'center', padding: 16 }}>
          <View style={styles.groupButton}>
            <Text style={styles.buttonBannel}></Text>
            <Text style={styles.buttonBannel}></Text>
            <Text style={[styles.buttonBannel, { backgroundColor: '#40BFFF' }]}></Text>
            <Text style={styles.buttonBannel}></Text>
            <Text style={styles.buttonBannel}></Text>
          </View>
        </View>
        {/* Image Detail */}
        <View style={{ paddingHorizontal: 16 }}>
          {/* Start Title */}
          <View style={styles.groupTitle}>
            <Text style={styles.title}>{data.title}</Text>
            <TouchableOpacity onPress={() => dispatch(addToWishlist(data))}>
              <Icon1 name="heart" color="#9098B1" size={18} />
            </TouchableOpacity>
          </View>
          {/* End Title */}

          {/* 5 Star */}
          <View style={styles.groupStar}>
            <Icon style={styles.icon} name="star" color="#FFC833" size={16} />
            <Icon style={styles.icon} name="star" color="#FFC833" size={16} />
            <Icon style={styles.icon} name="star" color="#FFC833" size={16} />
            <Icon style={styles.icon} name="star" color="#FFC833" size={16} />
            <Icon style={styles.icon} name="star" color="#EBF0FF" size={16} />
          </View>
          {/* 5 Star */}

          {/* Price */}
          <Text style={styles.price}>${data.priceNew}</Text>
          {/* Price */}

          {/* Select Size */}
          <Text style={styles.titleItem}>Select Size</Text>
          <FlatList
            data={dataSize}
            renderItem={({ item }) => <ItemSize dataSize={item} />}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
          />
          {/* Select Size */}

          {/* Select Color */}
          <Text style={styles.titleItem}>Select Color</Text>
          <FlatList
            data={dataColor}
            renderItem={({ item }) => <ItemColor dataColor={item} />}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            horizontal={true}
          />
          {/* Select Color */}

          {/* Specification */}
          <Text style={styles.titleItem}>Specification</Text>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', }}>
            <Text style={styles.item}>Shown:</Text>
            <Text style={[styles.item, { color: '#9098B1', textAlign: 'right' }]}>Laser{'\n'} Blue/Anthracite/Watermelon/White</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 16, }}>
            <Text style={styles.item}>Style:</Text>
            <Text style={[styles.item, { color: '#9098B1', textAlign: 'right' }]}>CD0113-400</Text>
          </View>

          <Text style={[styles.item, { color: '#9098B1', textAlign: 'left', }]}>The Nike Air Max 270
            React ENG combines a full-length React
            foam midsole with a 270 Max Air unit for
            unrivaled comfort and a striking visual
            experience.</Text>

          {/* Specification */}

          {/* Review Product */}
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingEnd: 16 }}>
            <Text style={[styles.titleItem, { marginBottom: 8 }]}>Review Product</Text>
            <Text style={[styles.titleItem, { color: '#40BFFF', marginBottom: 8 }]}>See More</Text>
          </View>
          {/* 5 Star */}
          <View style={[styles.groupStar, { marginBottom: 16 }]}>
            <Icon style={styles.icon} name="star" color="#FFC833" size={16} />
            <Icon style={styles.icon} name="star" color="#FFC833" size={16} />
            <Icon style={styles.icon} name="star" color="#FFC833" size={16} />
            <Icon style={styles.icon} name="star" color="#FFC833" size={16} />
            <Icon style={styles.icon} name="star" color="#EBF0FF" size={16} />
            <Text style={styles.textReview} >4.5 (5 Review)</Text>
          </View>
          {/* 5 Star */}

          <View style={[styles.viewflex_1, {}]}>
            <Image style={styles.image_profile} resizeMode='cover' source={require('../assets/img_profile.png')} />
            <View style={{ paddingStart: 16 }}>
              <Text style={styles.textProfile}>James Lawson</Text>
              {/* 5 Star */}
              <View style={[styles.groupStar, { marginStart: 0 }]}>
                <Icon style={styles.icon} name="star" color="#FFC833" size={16} />
                <Icon style={styles.icon} name="star" color="#FFC833" size={16} />
                <Icon style={styles.icon} name="star" color="#FFC833" size={16} />
                <Icon style={styles.icon} name="star" color="#FFC833" size={16} />
                <Icon style={styles.icon} name="star" color="#EBF0FF" size={16} />
              </View>

              {/* 5 Star */}
            </View>
          </View>

          <Text style={[styles.item, { color: '#9098B1', textAlign: 'left', paddingTop: 16, }]}>air max are always very comfortable fit, clean and just perfect in every way. just the box was too small and scrunched the sneakers up a little bit, not sure if the box was always this small but the 90s are and will always be one of my favorites.</Text>

          <View style={[styles.viewflex_1, { marginTop: 16, marginBottom: 16 }]}>
            <Image style={styles.image_review} resizeMode='cover' source={require('../assets/img_review_1.png')} />
            <Image style={styles.image_review} resizeMode='cover' source={require('../assets/img_review_2.png')} />
            <Image style={styles.image_review} resizeMode='cover' source={require('../assets/img_review_3.png')} />
          </View>

          <Text style={[styles.item, { color: '#9098B1', textAlign: 'left', fontSize: 10 }]}>December 10, 2016</Text>
          {/* Review Product */}


          {/* You Might Also Like */}
          <Text style={styles.titleItem}>You Might Also Like</Text>
          <FlatList style={{ marginVertical: 12 }}
            data={dataFlashSale}
            renderItem={({ item }) => <ItemFlashSale data={item} navigation={navigation} />}
            keyExtractor={item => item.id}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
          {/* You Might Also Like */}

          <TouchableOpacity style={styles.button}
            onPress={() => dispatch(addItemToCart(data))}
          >
            <Text style={styles.textButton}>Add To Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View >


  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',

  },
  groupTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    color: "#223263",
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
    height: 238,
  },
  groupButton: {
    width: 72,
    height: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonBannel: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#EBF0FF',
  },
  groupHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    borderBottomColor: '#EBF0FF',
    borderWidth: 1
  },
  groupStar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
  },
  icon: {
    marginEnd: 4
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 30,
    color: "#40BFFF",
    marginTop: 16
  },
  titleItem: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    color: "#223263",
    marginTop: 24,
    marginBottom: 12
  },
  item: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 21.6,
    color: "#223263",
  },
  textReview: {
    fontSize: 10,
    fontWeight: '400',
    lineHeight: 15,
    color: "#9098B1",
  },
  textProfile: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    color: "#223263",
  },
  image_profile: {
    width: 48,
    height: 48,
    borderRadius: 24,
  },
  viewflex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewflex_1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image_review: {
    width: 72,
    height: 72,
    borderRadius: 8,
    marginEnd: 12
  },
  button: {
    width: '100%',
    height: 57,
    borderRadius: 5,
    backgroundColor: '#40BFFF',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 21,
    marginBottom: 50
  },
  textButton: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 57,
    color: "#ffffff",
  }
})