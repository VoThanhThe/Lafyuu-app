import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import React, { useContext, useState, useEffect } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import ItemCategory from '../item_screen/ItemCategory';
import ItemFlashSale from '../item_screen/ItemFlashSale';
import { ScrollView } from 'react-native-gesture-handler';
import ItemProduct from '../item_screen/ItemProduct';
import { AppContext } from '../ultil/AppContext';
import AxiosIntance from '../ultil/AxiosIntance';
import LoadingScreen from './LoadingScreen';

const Home = (props) => {
  const { navigation } = props;
  const [dataProduct, setDataProduct] = useState([]);
  const [dataCategory, setDataCategory] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const images = [
    require('../assets/img_bannel.png'),
    require('../assets/img_bannel_2.png'),
    require('../assets/banner_3.png'),
    require('../assets/banner_4.jpg'),
    require('../assets/banner_5.jpg'),
  ]
  useEffect(() => {
    const getProducts = async () => {
      const response = await AxiosIntance().get("/api/product");
      console.log(response);
      if (response.returnData.error == false) {
        setDataProduct(response.products);
        setIsLoading(false);
      } else {
        console.log("Lấy dữ liệu thất bại");
      }
    }

    const getCategories = async () => {
      const response = await AxiosIntance().get("/api/categories/get-all-categories");
      console.log(response);
      if (response.returnData.error == false) {
        setDataCategory(response.categories);
        setIsLoading(false);
      } else {
        console.log("Lấy dữ liệu thất bại");
      }
    }
    getProducts();
    getCategories();
    return () => {

    }
  }, []);

  return (
    <View style={styles.container}>
      {
        isLoading ? (
          <LoadingScreen />
        ) : (
          <View>
            {/* Start Header */}
            <View style={styles.groupHeader}>
              <View style={styles.inputHeader}>
                <TextInput style={styles.input} placeholder="Search Product" />
                <Icon style={styles.icon} name="search" color="#40BFFF" size={20} />
              </View>
              <Icon1
                onPress={() => {
                  {
                    navigation.navigate('FavoriteProduct');
                  }
                }}
                name="heart"
                color="#9098B1"
                size={20}
              />
              <Icon2
                onPress={() => {
                  {
                    navigation.navigate('NotificationStack');
                  }
                }}
                name="notifications-outline"
                color="#9098B1"
                size={20}
              />
            </View>
            {/* End Header */}

            <ScrollView showsVerticalScrollIndicator={false}>
              <View style={{ padding: 16 }}>
                {/* Bannel 1 */}
                <TouchableOpacity
                  onPress={() => {
                    {
                      navigation.navigate('Offer');
                    }
                  }}>
                  <Image
                    style={styles.image}
                    source={require('../assets/img_bannel.png')}
                  />
                </TouchableOpacity>
                <View
                  style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 16,
                  }}>
                  <View style={styles.groupButton}>
                    <Text style={styles.buttonBannel}></Text>
                    <Text style={styles.buttonBannel}></Text>
                    <Text
                      style={[
                        styles.buttonBannel,
                        { backgroundColor: '#40BFFF' },
                      ]}></Text>
                    <Text style={styles.buttonBannel}></Text>
                    <Text style={styles.buttonBannel}></Text>
                  </View>
                </View>
                {/* Bannel 1 */}

                {/* Start Flatlist Category */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.title}>Category</Text>
                  <TouchableOpacity onPress={() => navigation.navigate('Explore')}>
                    <Text style={[styles.title, { color: '#40BFFF' }]}>
                      More Category
                    </Text>
                  </TouchableOpacity>
                </View>

                <FlatList
                  style={{ marginVertical: 12 }}
                  data={dataCategory}
                  renderItem={({ item }) => <ItemCategory data={item} navigation={navigation} />}
                  keyExtractor={item => item._id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
                {/* End Flatlist Category */}

                {/* Start Flatlist FlashSale */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.title}>Flash Sale</Text>
                  <Text style={[styles.title, { color: '#40BFFF' }]}>See More</Text>
                </View>

                <FlatList
                  style={{ marginVertical: 12 }}
                  data={dataProduct}
                  renderItem={({ item }) => <ItemFlashSale data={item} navigation={navigation} />}
                  keyExtractor={item => item._id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
                {/* End Flatlist FlashSale */}

                {/* Start Flatlist MegaSale */}
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                  }}>
                  <Text style={styles.title}>Mega Sale</Text>
                  <Text style={[styles.title, { color: '#40BFFF' }]}>See More</Text>
                </View>

                <FlatList
                  style={{ marginVertical: 12 }}
                  data={dataProduct}
                  renderItem={({ item }) => <ItemFlashSale data={item} navigation={navigation} />}
                  keyExtractor={item => item._id}
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                />
                {/* End Flatlist MegaSale */}
                {/* Bannel 2 */}
                <Image
                  style={styles.image}
                  source={require('../assets/img_bannel_2.png')}
                />
                {/* Bannel 2 */}
                <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                  {
                    dataProduct.map((item) => <ItemProduct key={item._id} data={item} navigation={navigation} />)
                  }
                </View>

              </View>
            </ScrollView>
          </View>
        )
      }

    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  groupButton: {
    width: 72,
    height: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
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
    borderBottomWidth: 1,
  },
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  icon: {
    position: 'absolute',
    top: 13,
    left: 18,
  },
  input: {
    width: 290,
    height: 46,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    backgroundColor: '#ffffff',
    borderRadius: 5,
    paddingLeft: 50,
  },
  inputHeader: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 206,
    borderRadius: 5,
  },
  title: {
    fontSize: 14,
    fontWeight: '700',
    color: '#223263',
    lineHeight: 21.6,
  },
});

// const dataCategory = [
//   {
//     id: '1',
//     title: 'Man Shirt',
//     imageURL:
//       'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_man_shirt.png?alt=media&token=ec71fd13-82d1-4f31-b863-f091f8f14ec8',
//   },
//   {
//     id: '2',
//     title: 'Man Work Equipment',
//     imageURL:
//       'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Man%20Work%20Equipment.png?alt=media&token=78574219-2cd5-4f4e-bf4f-25a079df3e0f',
//   },
//   {
//     id: '3',
//     title: 'Man Pants',
//     imageURL:
//       'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Man%20Pants.png?alt=media&token=9c973769-712f-4447-ad1e-9c6b7677c7b6',
//   },
//   {
//     id: '4',
//     title: 'Man Shoes',
//     imageURL:
//       'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Man%20Shoes.png?alt=media&token=f1bf8ed0-0637-48d9-93f2-3e754974c3cb',
//   },
//   {
//     id: '5',
//     title: 'Man Underwear',
//     imageURL:
//       'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Man%20Underwear.png?alt=media&token=9c2a1064-ab52-4d20-9d24-2c1a68547473',
//   },

//   {
//     id: '6',
//     title: 'Dress',
//     imageURL:
//       'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Dress.png?alt=media&token=e19c2ce8-26c9-4b11-966a-509c96e5671f',
//   },

//   {
//     id: '7',
//     title: 'Woman Bag',
//     imageURL:
//       'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Woman%20Bag.png?alt=media&token=b34d5d98-6013-4fd8-b045-69017a941644',
//   },

//   {
//     id: '8',
//     title: 'Woman Pants',
//     imageURL:
//       'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_woman_pants.png?alt=media&token=a8a05a69-9756-4526-82b3-53419e90efb5',
//   },

//   {
//     id: '9',
//     title: 'High Heels',
//     imageURL:
//       'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_high_heel.png?alt=media&token=14f43a04-5f99-4375-9b77-ba8302774f1c',
//   },

//   {
//     id: '10',
//     title: 'Bikini',
//     imageURL:
//       'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_bikini.png?alt=media&token=fb81bb1a-bd01-4730-b1df-27239dcb232b',
//   },
//   {
//     id: '11',
//     title: 'Woman T-Shirt',
//     imageURL:
//       'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_woman_tshirt.png?alt=media&token=038bc741-209d-452f-8261-35db3f557163',
//   },
//   {
//     id: '12',
//     title: 'Skirt',
//     imageURL:
//       'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_shirt.png?alt=media&token=9464c2f1-34c9-474b-b34d-25ccb35675aa',
//   },
// ];
