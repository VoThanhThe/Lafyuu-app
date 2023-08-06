import {
  FlatList,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  PermissionsAndroid,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import ItemColor from './ItemColor';

const imagePicker = () => {
  let options = {
    storageOptions: {
      path: 'image',
    },
  };
  launchImageLibrary(options, respone => {
    console.log(respone);
  });
};

const dataColor = [
  {
    id: '1',
    color: '#C9CC41',
  },
  {
    id: '2',
    color: '#66CC41',
  },
  {
    id: '3',
    color: '#41CCA7',
  },
  {
    id: '4',
    color: '#4181CC',
  },
  {
    id: '5',
    color: '#41A2CC',
  },
  {
    id: '6',
    color: '#CC8441',
  },
  {
    id: '7',
    color: '#9741CC',
  },
  {
    id: '8',
    color: '#CC4173',
  },
  {
    id: '9',
    color: '#D21312',
  },
  {
    id: '10',
    color: '#C7E9B0',
  },
];

const CategoryScreen = () => {
  const [cameraPhoto, setCameraPhoto] = useState();
  const [galleryPhoto, setGalleryPhoto] = useState();

  let options = {
    saveToPhotos: true,
    mediaType: 'photo',
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    setGalleryPhoto(result.assets[0].uri);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create new category</Text>
      <Text style={styles.lable}>Category name :</Text>
      <TextInput
        style={styles.input}
        placeholder="Category name"
        placeholderTextColor="#AFAFAF"
      />
      <Text style={styles.lable}>Category icon :</Text>
      <Pressable
        style={styles.button}
        onPress={() => {
          openGallery();
        }}>
        <Text style={styles.textButton}>Choose icon from library</Text>
      </Pressable>
      <Image style={styles.imageStyle} source={{uri: galleryPhoto}} />
      <Text style={styles.lable}>Category color :</Text>
      <FlatList
        data={dataColor}
        renderItem={({item}) => <ItemColor dataColor={item} />}
        keyExtractor={item => item.id}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      />
      <View style={styles.groupBottom}>
        <Pressable style={[styles.button_bottom, {backgroundColor: '#121212'}]}>
          <Text style={[styles.textBottom, {color: '#8687E7'}]}>Cancel</Text>
        </Pressable>
        <Pressable style={styles.button_bottom}>
          <Text style={styles.textBottom}>Create Category</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    letterSpacing: -0.5,
    color: '#FFFFFFDE',
    marginTop: 42,
  },
  lable: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 20,
    letterSpacing: -0.5,
    color: '#FFFFFFDE',
    marginTop: 20,
    marginBottom: 16,
  },
  input: {
    width: '100%',
    height: 48,
    padding: 12,
    borderRadius: 4,
    borderWidth: 0.8,
    borderColor: '#979797',
  },
  button: {
    width: 154,
    height: 37,
    backgroundColor: '#FFFFFF36',
    borderRadius: 6,
    paddingHorizontal: 16,
    paddingVertical: 8,
  },
  textButton: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 21,
    letterSpacing: -0.32,
    color: '#FFFFFFDE',
  },
  imageStyle: {
    height: 150,
    width: 150,
    marginTop: 20,
    borderRadius: 5,
  },
  button_bottom: {
    width: 153,
    height: 48,
    backgroundColor: '#8687E7',
    borderRadius: 4,
    paddingHorizontal: 24,
    paddingVertical: 12,
  },
  groupBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 30,
  },
  textBottom: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 24.08,
    color: '#FFFFFF',
    textAlign: 'center',
  },
});
