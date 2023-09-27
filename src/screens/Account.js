import { StyleSheet, Text, View, Image, TextInput, FlatList, Alert, ScrollView, TouchableOpacity } from 'react-native'
import React, {useContext, useState} from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/MaterialIcons'

import { AppContext } from '../ultil/AppContext';


const Account = (props) => {
    const {navigation} = props;
    const { isLogin, setisLogin } = useContext(AppContext);

    const showConfirmDialog = () => {
        return Alert.alert(
          "Are your sure?",
          "Are you sure you want to Log out this application?",
          [
            // The "Yes" button
            {
              text: "Yes",
              onPress: () => (
                // setShowBox(false)
                setisLogin(false)
                
              )
            },
            // The "No" button
            // Does nothing but dismiss the dialog when tapped
            {
              text: "No",
            },
          ]
        );
    }
    return (
        <View style={styles.container}>
            {/* Start Header */}
            <View style={styles.groupHeader}>
                <Text style={styles.header}>Account</Text>
            </View>
            {/* End Header */}
            <ScrollView showsHorizontalScrollIndicator={false}>
                <TouchableOpacity onPress={() => {navigation.navigate('Profile')}}>
                    <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon name="user-o" color="#40BFFF" size={20} />
                        <Text style={styles.text}>Profile</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Order')}}>
                    <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon1 name="shopping-bag" color="#40BFFF" size={20} />
                        <Text style={styles.text}>Order</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Address')}}>
                    <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon2 name="ios-location-outline" color="#40BFFF" size={20} />
                        <Text style={styles.text}>Address</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {navigation.navigate('Add_Payment')}}>
                    <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon3 name="payment" color="#40BFFF" size={20} />
                        <Text style={styles.text}>Payment</Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => showConfirmDialog()}>
                    <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center' }}>
                        <Icon3 name="logout" color="red" size={20} />
                        <Text style={styles.text}>Log out</Text>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

export default Account

const styles = StyleSheet.create({
    groupHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: '#EBF0FF',
        borderBottomWidth: 1
    },
    container: {
        flex: 1,
        backgroundColor: '#ffffff',

    },
    header: {
        fontSize: 16,
        fontWeight: '700',
        color: '#223263',
        lineHeight: 24,
    },
    text: {
        fontSize: 12,
        fontWeight: '700',
        color: '#223263',
        lineHeight: 18,
        marginStart: 19
    }

})