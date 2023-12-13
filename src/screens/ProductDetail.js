import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, Button, Pressable, TouchableOpacity, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'
import ItemSize from '../item_screen/ItemSize'
import ItemColor from '../item_screen/ItemColor'
import ItemFlashSale from '../item_screen/ItemFlashSale'
import { useDispatch, useSelector } from 'react-redux'
import {
  addItemToCart,
  addToWishlist,
} from '../redux2/actions/Actions'

import AxiosIntance from '../ultil/AxiosIntance';
import LoadingScreen from './LoadingScreen'
import { dataColor, dataSize } from '../data/Data'

const ProductDetail = (props) => {
  const { navigation, route } = props;
  const { data } = route.params;

  console.log("Data id: ", data);
  const [isLoading, setIsLoading] = useState(true);
  const [selectedIdSize, setSelectedIdSize] = useState('2');
  const [selectedIdColor, setSelectedIdColor] = useState('1');
  const [isAddWishlist, setIsAddWishlist] = useState(false);
  const [dataProduct, setDataProduct] = useState([]);

  const dispatch = useDispatch();

  const itemWishlist = useSelector((state) => state.ReducersWishlist);
  console.log(itemWishlist);

  const renderItemSize = ({ item }) => {
    const borderColor = item.id === selectedIdSize ? "#40BFFF" : '#EBF0FF';
    return (
      <ItemSize
        dataSize={item}
        onPress={() => setSelectedIdSize(item.id)}
        borderColor={borderColor} />
    );
  };

  const renderItemColor = ({ item }) => {
    const backgroundColor = item.id === selectedIdColor ? "#ffffff" : "black";
    const borderRadius = item.id === selectedIdColor ? 12 : 12;
    const width = item.id === selectedIdColor ? 24 : 0;
    const height = item.id === selectedIdColor ? 24 : 0;
    return (
      <ItemColor
        dataColor={item}
        onPress={() => setSelectedIdColor(item.id)}
        backgroundColor={backgroundColor}
        borderRadius={borderRadius}
        width={width}
        height={height} />
    );
  };

  useEffect(() => {
    const getNews = async () => {
      const response = await AxiosIntance().get("/api/product");
      console.log(response);
      if (response.returnData.error == false) {
        setDataProduct(response.products);
        setIsLoading(false);
      } else {
        console.log("Lấy dữ liệu thất bại");
      }
    }
    getNews();
    return () => {

    }
  }, []);

  return (

    < >
      {
        isLoading ? (
          <LoadingScreen />
        ) : (
          <View style={styles.container}>
            {/* Start Header */}
            <View style={styles.groupHeader}>
              <View style={{ flexDirection: 'row' }}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons name="chevron-back" color="#9098B1" size={20} />
                </TouchableOpacity>
                <Text style={styles.textHeader}>{
                  data?.name.length > 30 ? (data?.name).slice(0, 30) + "..." : data?.name
                }</Text>
              </View>
              <View style={{ flexDirection: 'row' }}>
                <Icon name="search" color="#9098B1" size={20} />
                <Icon style={{ marginStart: 32.25 }} name="ellipsis-v" color="#9098B1" size={20} />
              </View>
            </View>
            {/* End Header */}
            <ScrollView showsVerticalScrollIndicator={false}>
              {/* Image Detail */}

              <Image style={styles.image} resizeMode='contain' source={{ uri: data.image }} />
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
                  <Text style={styles.title}>{data.name}</Text>
                  <TouchableOpacity onPress={() => { setIsAddWishlist(true), dispatch(addToWishlist(data)) }}>
                    {/* <Feather name="heart" color="#9098B1" size={18} /> */}
                    {
                      !isAddWishlist ?
                        (
                          <Feather name="heart" color="#9098B1" size={18} />
                        ) :
                        (
                          <Icon name="heart" color="red" size={18} />
                        )
                    }
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
                <Text style={styles.price}>${data.price}</Text>
                {/* Price */}

                {/* Select Size */}
                <Text style={styles.titleItem}>Select Size</Text>
                <FlatList
                  data={dataSize}
                  renderItem={renderItemSize}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  horizontal={true}
                  extraData={selectedIdSize}
                />
                {/* Select Size */}

                {/* Select Color */}
                <Text style={styles.titleItem}>Select Color</Text>
                <FlatList
                  data={dataColor}
                  renderItem={renderItemColor}
                  keyExtractor={item => item.id}
                  showsHorizontalScrollIndicator={false}
                  showsVerticalScrollIndicator={false}
                  horizontal={true}
                  extraData={selectedIdColor}
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
                  data={dataProduct}
                  renderItem={({ item }) => <ItemFlashSale data={item} navigation={navigation} />}
                  keyExtractor={item => item._id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
                {/* You Might Also Like */}


              </View>
            </ScrollView>
            <TouchableOpacity style={styles.button}
              onPress={() => dispatch(addItemToCart(data))}
            >
              <Text style={styles.textButton}>Add To Cart</Text>
            </TouchableOpacity>
          </View>
        )
      }
    </ >


  )
}

export default ProductDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingBottom: 70
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
   position: "absolute",
   bottom: 16,
   left: 16,
   right: 16,
    height: 57,
    borderRadius: 5,
    backgroundColor: '#40BFFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 57,
    color: "#ffffff",
  }
})