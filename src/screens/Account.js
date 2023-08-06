import { StyleSheet, Text, View, Image, TextInput, FlatList, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/Feather'
import Icon2 from 'react-native-vector-icons/Ionicons'
import Icon3 from 'react-native-vector-icons/MaterialIcons'


const Account = (props) => {
    const {navigation} = props;
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