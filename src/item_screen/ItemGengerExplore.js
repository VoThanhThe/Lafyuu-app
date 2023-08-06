import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const ItemGengerExplore = (props) => {
  const {dataIcon} = props;
  return (
    <TouchableOpacity style = {styles.cotainer}>
      <View style = {styles.circle}>
        <Image style = {styles.image} resizeMode='contain' source={{uri : dataIcon.imageURL}} />
      </View>
      <Text style = {styles.name}>{dataIcon.title}</Text>
    </TouchableOpacity>
  )
}

export default ItemGengerExplore

const styles = StyleSheet.create({
    cotainer: {
        width: '24%',
        marginHorizontal: 1
    },
   image: {
    width: 20,
    height: 20,
   },
   circle:{
    width: 80,
    height: 80,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    justifyContent: 'center',
    alignItems: 'center'
   },
   name: {
    width: 70,
    height: 30,
    fontSize: 10,
    fontWeight: '400',
    color: "#9098B1",
    lineHeight: 15,
    textAlign: 'center',
    marginTop: 8
   }

})