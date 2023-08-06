import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  FlatList,
  Button,
  TouchableOpacity,
} from 'react-native';
import React, {useContext, useState} from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/Feather';
import Icon2 from 'react-native-vector-icons/Ionicons';
import ItemCategory from '../item_screen/ItemCategory';
import ItemFlashSale from '../item_screen/ItemFlashSale';
import {ScrollView} from 'react-native-gesture-handler';
import ItemProduct from '../item_screen/ItemProduct';
import {AppContext} from '../ultil/AppContext';

const dataCategory = [
  {
    id: '1',
    title: 'Man Shirt',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_man_shirt.png?alt=media&token=ec71fd13-82d1-4f31-b863-f091f8f14ec8',
  },
  {
    id: '2',
    title: 'Man Work Equipment',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Man%20Work%20Equipment.png?alt=media&token=78574219-2cd5-4f4e-bf4f-25a079df3e0f',
  },
  {
    id: '3',
    title: 'Man Pants',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Man%20Pants.png?alt=media&token=9c973769-712f-4447-ad1e-9c6b7677c7b6',
  },
  {
    id: '4',
    title: 'Man Shoes',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Man%20Shoes.png?alt=media&token=f1bf8ed0-0637-48d9-93f2-3e754974c3cb',
  },
  {
    id: '5',
    title: 'Man Underwear',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Man%20Underwear.png?alt=media&token=9c2a1064-ab52-4d20-9d24-2c1a68547473',
  },

  {
    id: '6',
    title: 'Dress',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Dress.png?alt=media&token=e19c2ce8-26c9-4b11-966a-509c96e5671f',
  },

  {
    id: '7',
    title: 'Woman Bag',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_Woman%20Bag.png?alt=media&token=b34d5d98-6013-4fd8-b045-69017a941644',
  },

  {
    id: '8',
    title: 'Woman Pants',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_woman_pants.png?alt=media&token=a8a05a69-9756-4526-82b3-53419e90efb5',
  },

  {
    id: '9',
    title: 'High Heels',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_high_heel.png?alt=media&token=14f43a04-5f99-4375-9b77-ba8302774f1c',
  },

  {
    id: '10',
    title: 'Bikini',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_bikini.png?alt=media&token=fb81bb1a-bd01-4730-b1df-27239dcb232b',
  },
  {
    id: '11',
    title: 'Woman T-Shirt',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_woman_tshirt.png?alt=media&token=038bc741-209d-452f-8261-35db3f557163',
  },
  {
    id: '12',
    title: 'Skirt',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/ic_shirt.png?alt=media&token=9464c2f1-34c9-474b-b34d-25ccb35675aa',
  },
];
const dataFlashSale = [
  {
    id: '1',
    title: 'FS - Nike Air Max 270 React...',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_1.png?alt=media&token=5016789f-2ee6-41a2-8c21-30539c43f018',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '2',
    title: 'FS - Nike Air Max 270 React...',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_2.png?alt=media&token=6eadece2-77cb-492a-895f-4ce34eae226e',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '3',
    title: 'FS - Nike Air Max 270 React...',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_3.png?alt=media&token=582ab2ea-7ba0-463b-9f8b-4fea09e800af',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '4',
    title: 'FS - Nike Air Max 270 React...',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_4.png?alt=media&token=9ff64334-a8d3-4160-ac60-9212999e7e26',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '5',
    title: 'FS - Nike Air Max 270 React...',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_5.png?alt=media&token=ee189fce-b36a-4402-8930-cd3b46196f49',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '6',
    title: 'FS - Nike Air Max 270 React...',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_6.png?alt=media&token=16fcc93a-a2d2-4f1d-95b7-ce481e17914b',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '7',
    title: 'FS - Nike Air Max 270 React...',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_7.png?alt=media&token=1b0ac462-fea5-49bc-816d-11160a572197',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '8',
    title: 'FS - Nike Air Max 270 React...',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_8.png?alt=media&token=d6f06ac3-b901-480b-8715-4ee799085f97',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
];

const dataProduct = [
  {
    id: '1',
    title: 'Nike Air Max 270 React ENG',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_1.png?alt=media&token=5016789f-2ee6-41a2-8c21-30539c43f018',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '2',
    title: 'Nike Air Max 270 React ENG',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_2.png?alt=media&token=6eadece2-77cb-492a-895f-4ce34eae226e',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '3',
    title: 'Nike Air Max 270 React ENG',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_3.png?alt=media&token=582ab2ea-7ba0-463b-9f8b-4fea09e800af',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '4',
    title: 'Nike Air Max 270 React ENG',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_4.png?alt=media&token=9ff64334-a8d3-4160-ac60-9212999e7e26',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '5',
    title: 'Nike Air Max 270 React ENG',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_5.png?alt=media&token=ee189fce-b36a-4402-8930-cd3b46196f49',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '6',
    title: 'Nike Air Max 270 React ENG',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_6.png?alt=media&token=16fcc93a-a2d2-4f1d-95b7-ce481e17914b',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '7',
    title: 'Nike Air Max 270 React ENG',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_7.png?alt=media&token=1b0ac462-fea5-49bc-816d-11160a572197',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
  {
    id: '8',
    title: 'Nike Air Max 270 React ENG',
    imageURL:
      'https://firebasestorage.googleapis.com/v0/b/app-shoes-6fd12.appspot.com/o/product_8.png?alt=media&token=d6f06ac3-b901-480b-8715-4ee799085f97',
    priceNew: '$299,43',
    priceOld: '$534,33',
    sale: '24% Off',
  },
];

const Home = (props) => {
  const {navigation} = props;
  const {isLogin, setisLogin} = useContext(AppContext);
  const click = () => {
    setisLogin(false);
  };
  return (
    <View style={styles.container}>
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
        <View style={{padding: 16}}>
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
                  {backgroundColor: '#40BFFF'},
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
            <Text style={[styles.title, {color: '#40BFFF'}]}>
              More Category
            </Text>
          </View>

          <FlatList
            style={{marginVertical: 12}}
            data={dataCategory}
            renderItem={({item}) => <ItemCategory dataIcon={item} navigation = {navigation} />}
            keyExtractor={item => item.id}
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
            <Text style={[styles.title, {color: '#40BFFF'}]}>See More</Text>
          </View>

          <FlatList
            style={{marginVertical: 12}}
            data={dataFlashSale}
            renderItem={({item}) => <ItemFlashSale dataSale={item} navigation = {navigation} />}
            keyExtractor={item => item.id}
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
            <Text style={[styles.title, {color: '#40BFFF'}]}>See More</Text>
          </View>

          <FlatList
            style={{marginVertical: 12}}
            data={dataFlashSale}
            renderItem={({item}) => <ItemFlashSale dataSale={item} navigation = {navigation} />}
            keyExtractor={item => item.id}
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
          <View style = {{flexDirection: 'row', flexWrap:'wrap', justifyContent: 'space-between'}}>
            {
              dataProduct.map((item) => <ItemProduct key={item.id} dataProduct = {item} navigation = {navigation} />)
            }
          </View>
          
        </View>
      </ScrollView>
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
