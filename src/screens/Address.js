import { StyleSheet, Text, View, ScrollView, TextInput, Image, FlatList, Button, Pressable, TouchableOpacity } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import Ionicons from 'react-native-vector-icons/Ionicons'

const Address = (props) => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      {/* Start Header */}
      <View style={styles.groupHeader}>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity onPress={() => { navigation.goBack() }}>
            <Ionicons name="chevron-back" color="#9098B1" size={20} />
          </TouchableOpacity>
          <Text style={styles.textHeader}>Address</Text>
        </View>

      </View>
      {/* End Header */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 16 }}>
          {/* Start Item 1 */}
          <View style={styles.viewItem}>
            <Text style={styles.textTitle}>Priscekila</Text>
            <Text style={styles.textContent}>3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States</Text>
            <Text style={styles.textPhoneNumber}>#9098B1</Text>
            <View style={styles.groupButton}>
              <Pressable style={styles.button}>
                <Text style={styles.textButton}>Edit</Text>
              </Pressable>
              <TouchableOpacity>
                <FontAwesome name="trash-o" color="#223263" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          {/* End Item 1 */}

          {/* Start Item 2 */}
          <View style={styles.viewItem}>
            <Text style={styles.textTitle}>Ahmad Khaidir</Text>
            <Text style={styles.textContent}>3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States</Text>
            <Text style={styles.textPhoneNumber}>#9098B1</Text>
            <View style={styles.groupButton}>
              <Pressable style={styles.button}>
                <Text style={styles.textButton}>Edit</Text>
              </Pressable>
              <TouchableOpacity>
                <FontAwesome name="trash-o" color="#223263" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          {/* End Item 2 */}

          {/* Start Item 3 */}
          <View style={styles.viewItem}>
            <Text style={styles.textTitle}>Priscekila</Text>
            <Text style={styles.textContent}>3711 Spring Hill Rd undefined Tallahassee, Nevada 52874 United States</Text>
            <Text style={styles.textPhoneNumber}>#9098B1</Text>
            <View style={styles.groupButton}>
              <Pressable style={styles.button}>
                <Text style={styles.textButton}>Edit</Text>
              </Pressable>
              <TouchableOpacity>
                <FontAwesome name="trash-o" color="#223263" size={20} />
              </TouchableOpacity>
            </View>
          </View>
          {/* End Item 3 */}


        </View>
      </ScrollView>
      <TouchableOpacity style={styles.buttonAdd} onPress={() => {navigation.navigate('Add_Address')}}>
        <Text style={styles.textButton}>Add Address</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Address

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
  viewFlex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewFlex_1: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textItem: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    color: '#223263',
    marginBottom: 12
  },
  textInput: {
    fontSize: 12,
    fontWeight: '700',
    lineHeight: 21.6,
    color: '#9098B1',
    textAlign: 'left',
  },
  input: {
    width: '100%',
    height: 48,
    paddingHorizontal: 16,
    paddingVertical: 13,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#EBF0FF',
    marginBottom: 24,

  },
  icon: {
    position: 'absolute',
    top: 15,
    right: 15,
  },
  inputHeader: {
    position: 'relative',
    marginTop: 8
  },

  viewItem: {
    padding: 16,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#EBF0FF",
    marginBottom: 16
  },
  textTitle: {
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    color: '#223263',
    textAlign: 'left',
  },
  textContent: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 21.6,
    color: '#9098B1',
    textAlign: 'left',
    letterSpacing: 0.5,
    opacity: 0.5,
    marginTop: 16
  },
  textPhoneNumber: {
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 21.6,
    color: '#9098B1',
    textAlign: 'left',
    letterSpacing: 0.5,
    opacity: 0.5,
    marginTop: 16
  },

  groupButton: {
    flexDirection: 'row',
    marginTop: 16,
    alignItems: 'center'
  },
  button: {
    width: 77,
    height: 57,
    borderRadius: 5,
    backgroundColor: '#40BFFF',
    marginEnd: 29.25
  },
  textButton: {
    fontSize: 14,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 0.5,
    lineHeight: 57,
  },
  buttonAdd: {
    height: 57,
    borderRadius: 5,
    backgroundColor: '#40BFFF',
    margin: 16,
  },
})